function foo(a, b) {
  // Explicit type checking and conversion to prevent type coercion issues.
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

//Example of error handling
try{
  console.log(foo(1, '2'));
} catch (error) {
  console.error(error.message); // Output: Both inputs must be numbers.
}
