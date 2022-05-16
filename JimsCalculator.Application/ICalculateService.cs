using JimsCalculator.Domain.DTO;

namespace JimsCalculator.Application
{
    public interface ICalculateService
    {
        CalculatorResultDto Calculate(CalculatorRequestDto solutionPayload);
    }
}
