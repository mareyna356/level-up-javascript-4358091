// Write your code here
function combinations(string) {
  if (string.length === 1) return 1;
  else return string.length * combinations(string.slice(1));
}

console.log(combinations("scrabble"));
