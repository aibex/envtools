# envtools

Simple Functions for a Sane Environment

**Add via Yarn**
`yarn add @aibex/envtools`

**or via npm**
`npm install @aibex/envtools`

```js
import { requires, defaults } from "@aibex/envtools";

// require certain ENV values to be present
requires(["REQUIRED", "ENV", "NAMES"]); // throws if missing, list in e.data.env
requires(["ALSO", "WITH", "CALLBACKS"], err => {
  // if err, then err.data.env contains missing
});

// insist on defaults in ENV if not defined
defaults({
  ENV_NAME: "DEFAULT_VALUE_HERE",
  COERCED_VALUES: 1, // will be "1" for compatibility with process.env
});
```

# requires()

_provide a list of required environment variables, and either (A) throw an exception or (B) pass the error to the callback on failure_

`requires(list, [cb])`

| param | type     | description                                                                                                                                                                                                     |
| :---- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| list  | array    | a list of all environment variables to check (case sensitive)                                                                                                                                                   |
| cb    | function | (optional) if provided, the callback will be triggered. Instead of throwing an error, the error will be the first argument passed to the callback in order to comply with node's `cb(err, data)` style callback |

# defaults()

_ensure a set of environment variables are defined, supplying a default value of any values are currently `undefined`_

`defaults(obj)`

```js
// obj
{
  ENV_KEY: "ENV_VALUE";
}
```

| param | type   | description                                                                                                                                                                                                               |
| :---- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| obj   | object | An object of key/value pairs, where each `key` is the env variable that should have a default, and `value` is the default value if `process.env[key]` is not set. Values are coerced to strings via string concatenation. |

# Tests

Test are written using `ava`. You can run the test suite using `yarn test`.
