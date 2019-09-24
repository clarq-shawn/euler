Quick attempt at solving the problem defined at: https://projecteuler.net/problem=2

To solve the problem I created a module **fibgen** that exposes an ES6 generator function that generates the fibonacci sequence, either indefinitely, or until a provided maximum value. This way, it is up to the usage of the generator to store the sequence or not. Since this solution only required a sum of the even sequence values, I thought a generator was a good solution to save on memory usage, but also useful for solving other problems where holding onto the sequence could also be necessary.

The actual logic for calculation the sum was then created and exposed in a module called **solver**.

Run solution:
```shell
node solution.js
```

Run tests:
```shell
npm install
npm run test
```
