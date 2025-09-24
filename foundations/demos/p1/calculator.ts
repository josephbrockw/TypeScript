// data:
// initial amount
// anual contribution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number; // as a decimal, e.g., 0.05 for 5%
  duration: number; // in years
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    if (initialAmount < 0 || annualContribution < 0 || expectedReturn < 0 || duration <= 0) {
        return 'All input values must be non-negative, and duration must be greater than zero.';
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let year = 1; year <= duration; year++) {
        const interestEarned = total * expectedReturn;
        total += interestEarned + annualContribution;
        totalContributions += annualContribution;
        totalInterestEarned += interestEarned;

        annualResults.push({
            year: `Year ${year}`,
            totalAmount: parseFloat(total.toFixed(2)),
            totalContributions: parseFloat(totalContributions.toFixed(2)),
            totalInterestEarned: parseFloat(totalInterestEarned.toFixed(2))
        });
    }

    return annualResults;
}

function printResults(results: CalculationResult) {
    if (!results) return;
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    
    for (const yearEndResult of results) {
        console.log(yearEndResult?.year);
        console.log(`  Total Amount:          $${yearEndResult.totalAmount.toFixed(2)}`);
        console.log(`  Total Contributions:   $${yearEndResult.totalContributions.toFixed(2)}`);
        console.log(`  Total Interest Earned: $${yearEndResult.totalInterestEarned.toFixed(2)}`);
        console.log('---------------------------');
    }
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.07,
    duration: 10
};

const results = calculateInvestment(investmentData);
printResults(results);