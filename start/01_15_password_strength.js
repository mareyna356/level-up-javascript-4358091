// Write your code here
function validatePassword(password) {
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[^a-zA-Z0-9]/;
  const eightCharsLongRegex = /.{8,}/;

  const testSuccessful =
    lowerCaseRegex.test(password) &&
    upperCaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password) &&
    eightCharsLongRegex.test(password);

  return testSuccessful
    ? "Your password is valid."
    : "Your password is invalid.";
}

console.log(validatePassword("a2^45=6A"));
