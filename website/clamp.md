# clamp(n, min, max) {#clamp}

Clamps the number `n` to the range `min` to `max`.  If the number `n` is
less than `min` then `min` will be returned.  If it's larger than `max`
then `max` will be returned.  Otherwise `n` will be returned.

```js
import { clamp } from '@abw/badger-maths'

clamp(5, 1, 10)           // 5
clamp(11, 1, 10)          // 10
clamp(-3, 1, 10)          // 1
```
