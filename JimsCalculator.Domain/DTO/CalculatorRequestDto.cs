namespace JimsCalculator.Domain.DTO
{
    public class CalculatorRequestDto
    {
        public string Solution { get; set; }
        public OperatorTypes Operator { get; set; }
        public decimal InputOne { get; set; }
        public decimal InputTwo { get; set; }
    }
}
