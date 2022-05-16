using JimsCalculator.Application;
using JimsCalculator.Domain.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace JimsCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ICalculateService calculatorService;
        public CalculatorController(ICalculateService calculatorService)
        {
            this.calculatorService = calculatorService;
        }

        [HttpPost]
        [Route("calculate")]
        public async Task<IActionResult> Calculate(CalculatorRequestDto payload) { 
            var result = calculatorService.Calculate(payload);
            return Ok(result);
        }

    }
}
