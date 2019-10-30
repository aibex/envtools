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

# Tests

Test are written using `ava`. You can run the test suite using `yarn test`.
