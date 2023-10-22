// Write your code here
function urlify(string) {
  string = string.toLowerCase().trim();

  const specialCharsRegex = /[^a-z0-9 ]/g;
  string = string.replace(specialCharsRegex, "");

  string = string.replaceAll(" ", "-");

  return string;
}

console.log(urlify("My blog name!"));
console.log(urlify("Emma's blog"));
