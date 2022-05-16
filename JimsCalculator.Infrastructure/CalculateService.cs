using JimsCalculator.Application;
using JimsCalculator.Domain.DTO;
using System;
using System.Collections.Generic;

namespace JimsCalculator.Infrastructure
{
    public class CalculateService : ICalculateService
    {
        public CalculateService()
        {

        }

        public CalculatorResultDto Calculate(CalculatorRequestDto solutionPayload) {
            switch (solutionPayload.Operator) {
                case Domain.OperatorTypes.Addition:
                    return Add(solutionPayload);
                case Domain.OperatorTypes.Division:
                    return Divide(solutionPayload);
                case Domain.OperatorTypes.Subtraction:
                    return Subtract(solutionPayload);
                case Domain.OperatorTypes.Multiplication:
                    return Multiply(solutionPayload);
                default:
                    throw new NotImplementedException();
            }
        }

        private CalculatorResultDto Add(CalculatorRequestDto solutionPayload)
        {
            var result = new CalculatorResultDto();
            result.Solution = $"{solutionPayload.InputOne} + {solutionPayload.InputTwo}";
            result.Result = solutionPayload.InputOne + solutionPayload.InputTwo;

            return result;
        }

        private CalculatorResultDto Divide(CalculatorRequestDto solutionPayload)
        {
            var result = new CalculatorResultDto();
            result.Solution = $"{solutionPayload.InputOne} / {solutionPayload.InputTwo}";
            result.Result = solutionPayload.InputOne / solutionPayload.InputTwo;

            return result;
        }

        private CalculatorResultDto Multiply(CalculatorRequestDto solutionPayload)
        {
            var result = new CalculatorResultDto();
            result.Solution = $"{solutionPayload.InputOne} * {solutionPayload.InputTwo}";
            result.Result = solutionPayload.InputOne * solutionPayload.InputTwo;

            return result;
        }

        private CalculatorResultDto Subtract(CalculatorRequestDto solutionPayload)
        {
            var result = new CalculatorResultDto();
            result.Solution = $"{solutionPayload.InputOne} - {solutionPayload.InputTwo}";
            result.Result = solutionPayload.InputOne - solutionPayload.InputTwo;

            return result;
        }
    }
}
