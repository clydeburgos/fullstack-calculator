import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/core/services/calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  input: string = '';
  result: string = '--';

  inputOne: string = '';
  inputTwo: string = '';
 
  lastOperator: string = '';
  lastOperatorSign: string = '';
  lastSolution: string = '';
  operators: any[];

  constructor(private calculateService: CalculatorService) {
    this.operators = [
      { sign : '+', value: 0 },
      { sign : '-', value: 1 },
      { sign : '*', value: 2 },
      { sign : '/', value: 3 }
    ]
  }

  pressInput(inputNumber: string){
    if (inputNumber == '.') {
      if (this.input != '') {
        const lastNum = this.getLastValue()
        if (lastNum.lastIndexOf('.') >= 0) return;
      }
    }

    if (inputNumber == '0') {
      if (this.input == '') {
        return;
      }
      let operatorSigns = this.getOperatorSigns();
      const PrevKey = this.input[this.input.length - 1];
      if (operatorSigns.indexOf(PrevKey) >- 1) {
        return;
      }
    }

    this.input = this.input + inputNumber;
    this.prepareSolution();
  }
  
  pressOperator(operator: string){
    const lastKey = this.input[this.input.length - 1];
    let operatorSigns = this.getOperatorSigns();
    if (operatorSigns.indexOf(lastKey) >- 1) {
      return;
    }

    this.input = this.input + operator;
    this.prepareSolution();
  }

  getLastValue(){
    let pos: number;
    pos = this.input.toString().lastIndexOf('+');

    if (this.input.toString().lastIndexOf('-') > pos) {
      pos = this.input.lastIndexOf('-');
    } 

    if (this.input.toString().lastIndexOf('*') > pos) {
      pos = this.input.lastIndexOf('*');
    } 

    if (this.input.toString().lastIndexOf('/') > pos) {
      pos = this.input.lastIndexOf('/');
    }
    return this.input.substr(pos + 1);
  }

  processResult(){
    var isReady = this.isSolutionComplete();
    if(isReady) {
      let payload = this.preparePayload();
      this.calculateService.calculate(payload).subscribe((res : any) => {
        this.result = res.result.toFixed(4);
      });
    }
    this.clearAll();
  }
  
  prepareSolution(){
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    
    let operatorSigns = this.getOperatorSigns();

    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];
    if (operatorSigns.indexOf(lastKey) >- 1 || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
      if(lastKey !== '.') {
        this.lastOperatorSign = lastKey;
        this.lastOperator = this.operators.filter((item) => {
          return item.sign === this.lastOperatorSign;
        })[0].value;
      }
    }
    
    this.lastSolution = formula;
  }

  private getOperatorSigns(){
    return this.operators.map((item) => {
      return item.sign;
    });
  }

  private isSolutionComplete(){
    return (this.lastOperatorSign !== '') && this.lastSolution.split(this.lastOperatorSign).length >= 2;
  }

  private preparePayload(){
    let inputOne = this.lastSolution.split(this.lastOperatorSign)[0];
    let inputTwo = this.lastSolution.split(this.lastOperatorSign)[1];
    this.inputOne = inputOne;
    this.inputTwo = inputTwo;

    let payload = {
      solution : this.lastSolution,
      operator : this.lastOperator,
      inputOne : this.inputOne,
      inputTwo : this.inputTwo
    };
    return payload;
  }

  removeLastInput(){
    if (this.input != '') {
      this.input = this.input.substr(0, this.input.length - 1)
    }
  }

  clearAll(){
    this.input = '';
  }

}
