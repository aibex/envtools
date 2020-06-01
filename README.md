# DEPRECATION NOTICE

> This package is now deprecated. You should consider using the excellent [`dotenv-safe`](https://www.npmjs.com/package/dotenv-safe) module, with runtime defaults.
>
> const foo = process.env.MY_VALUE || "default";
>
> This lets you have the best of both worlds. Things must be defined (even if defined as a blank string), and you can clearly identify the default value.
