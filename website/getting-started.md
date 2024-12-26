# Getting Started

## Installation

Use your favourite package manager to install the module
from `@abw/badger-maths`.

::: code-group
```shell [npm]
npm install @abw/badger-maths
```
```shell [pnpm]
pnpm add @abw/badger-maths
```
```shell [yarn]
yarn add @abw/badger-maths
```
:::

## Basic Use

Import any of the functions using ESM syntax.

```js
import { add, subtract } from '@abw/badger-utils'
```

Or via `require()` if you're still using Common JS format.

```js
const { add, subtract } = require('@abw/badger-utils')
```

Then you can do basic maths without all the silliness of floating point
imprecision.

```js
add(1.2, 0.1);         // 1.2
subtract(3.14, 9.42)   // -6.28
```

## Do the Happy Badger Dance

You're all set!  Doing the Happy Badger Dance is optional, but highly
recommended.

<img src="/images/happy_badger_dance.gif" width="100%"/>