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

function calculateInvestment(data: InvestmentData): Array<number> {
    let amounts: Array<number> = [data.initialAmount];

    for (let year = 1; year <= data.duration; year++) {
        const lastAmount: number = amounts[amounts.length - 1]!;
        const newAmount: number = lastAmount * (1 + data.expectedReturn) + data.annualContribution;
        amounts.push(newAmount);
    }

    return amounts;
}

function printResults(results: Array<number>) {
    if (!results || results.length === 0) return;

    results.forEach((amount, year) => {
        console.log(`Year ${year}: $${amount.toFixed(2)}`);
    });
    const finalAmount = results[results.length - 1];
    const initialAmount = results[0];
    if (finalAmount !== undefined && initialAmount !== undefined) {
        console.log(`Total growth: $${(finalAmount - initialAmount).toFixed(2)}`);
    }
}

const results = calculateInvestment({
    initialAmount: 1000,
    annualContribution: 100,
    expectedReturn: 0.05,
    duration: 10
});

printResults(results);