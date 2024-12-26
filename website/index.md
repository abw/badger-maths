---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Badger Maths"
  text: "It's One Preciser"
  tagline: "Precise Floating Point Maths"
  # tagline: My great project tagline
  image:
    src: images/badger3.svg
    alt: Badger
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: Examples
      link: /add

#features:
#  - title: Feature A
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Feature B
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Feature C
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

## Who Ordered This?

This library implements some basic mathematical functions that use a
fixed floating point algorithm to work around the imprecision in the
IEEE 754 standard which Javascript uses for floating point numbers.

For example, the expression `1.1 + 0.1` will usually return a value
something like `1.20000000000002`, usually prompting the unwary developer
to ask "Excuse me, is this a joke?"

If you use the `add()` function instead then the result will be `1.2`.
It's one preciser.

For the theory behind this, see
https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html

These functions were originally adapted from the code in [Sinful.js](https://github.com/guipn/sinful.js).
They are now implemented as wrappers around [Big.js](https://github.com/MikeMcl/big.js/).

## Opinionated and Selfish Software

::: warning WARNING - People Who Share Their Source Code Do Not Owe You Anything!
This is OSS: **Open Source Software** that you can freely download, use and adapt
if you want to. But here OSS also stands for **Opinionated and Selfish Software**.

It doesn't set out to please all the people, all the time. On the contrary,
it is designed to please one person (me) most of the time. I wrote it to help
me get my job done.  If it helps you get your job done then great.  But please
don't complain if it doesn't do what you want.  It's not my job to help you
do your job.

https://freeasinweekend.org/open-source-open-mind
:::

<center>
<img src="/images/oss.svg" width="150" height="150" style="margin-top: 4rem">
</center>
