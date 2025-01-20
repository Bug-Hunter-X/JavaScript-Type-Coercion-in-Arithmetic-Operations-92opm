# JavaScript Type Coercion Bug

This repository demonstrates a common yet easily overlooked bug in JavaScript: type coercion during arithmetic operations.  The `foo` function intends to add two numbers, but due to type coercion, string concatenation occurs when a string and number are added.

## Bug Description

The `bug.js` file contains a function that incorrectly handles type coercion.  When a number and a string are passed as arguments, the expected numerical addition doesn't happen; instead, JavaScript implicitly converts the number to a string and concatenates them.

## Solution

The `bugSolution.js` file provides a corrected version. It explicitly checks the types of inputs and either converts them to numbers before performing the addition, or throws an error if the input types are not as expected.  This prevents unexpected concatenation.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` to see the unexpected output.
3. Run `node bugSolution.js` to see the corrected output.