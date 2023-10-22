// Write your code here
function calculateBill(coffees) {
  const pricePerCoffee = 1.25;
  //The reduce() method executes a callback function on each element of the array, passing the return value to the next element's execution of the function.
  const totalCoffees = coffees.reduce(
    (accumulator, numCoffees) => accumulator + numCoffees
  );
  return `The total bill is $${totalCoffees * pricePerCoffee}`;
}

const coffees = [2, 3, 1, 5];

console.log(calculateBill(coffees));
