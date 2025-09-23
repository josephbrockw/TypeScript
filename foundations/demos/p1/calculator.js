// data:
// initial amount
// anual contribution
// expected return
// duration
function calculateInvestment(data) {
    let amounts = [data.initialAmount];
    for (let year = 1; year <= data.duration; year++) {
        const lastAmount = amounts[amounts.length - 1];
        const newAmount = lastAmount * (1 + data.expectedReturn) + data.annualContribution;
        amounts.push(newAmount);
    }
    return amounts;
}
function printResults(results) {
    if (!results || results.length === 0)
        return;
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
export {};
//# sourceMappingURL=calculator.js.map