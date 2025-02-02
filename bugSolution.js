function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Handle null and undefined values explicitly
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: null