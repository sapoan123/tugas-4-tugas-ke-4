const number = 100, text = 'a';

try {
  console.log(number / text); // NaN
  console.log(a); // Error: a is not defined
} catch (err) {
  console.log("An error caught");
  console.log("Error message: " + err);
} finally {
  console.log("Finally will execute every time");
}
