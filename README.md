# Badger Maths

This library implements some basic mathematical functions that work around
the imprecision in the IEEE 754 standard which Javascript uses for floating
point numbers.

They were originally written using a fixed floating point algorithm based
on the code in [Sinful.js](https://github.com/guipn/sinful.js).

They are now implemented as Typescript wrappers around
[big.js](https://mikemcl.github.io/big.js/).

## Installation

Install `badger-maths` using your favourite package manager.

### npm

    npm add @abw/badger-maths

### pnpm

    pnpm add @abw/badger-maths

### yarn

    yarn add @abw/badger-maths

## Quick Start

Import the `add`, `subtract`, `multiply` and/or `divide` functions from
`@abw/badger-maths`.

```js
import { add, subtract, multiply, divide } from '@abw/badger-maths'
```

Then use them to add, subtract, multiple or divide two or more numbers.

```js
add(1.1, 6.6, 0.1);         // 1.1 + 6.6 + 0.1 => 7.8
subtract(7.8, 0.1, 2.4);    // 7.8 - 0.1 - 2.4 => 5.3
multiply(3.0, 2.2, 2.0);    // 3.0 * 2.2 * 2.0 => 13.2
divide(13.2, 2.0, 1.1);     // 13.2 / 2.0 / 1.1 => 6
```

## Documentation

Visit the [website](https://badgerpower.com/badger-maths/) for detailed
documentation.

## Author

Andy Wardley <abw@wardley.org>