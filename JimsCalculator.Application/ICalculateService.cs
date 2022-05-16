using JimsCalculator.Domain.DTO;
using System.Collections.Generic;

namespace JimsCalculator.Application
{
    public interface ICalculateService
    {
        CalculatorResultDto Calculate(CalculatorRequestDto solutionPayload);
    }
}
