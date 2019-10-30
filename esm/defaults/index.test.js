import test from "ava";
import defaults from "./";

test("Adds defaults to process.env", t => {
  const env = { ...process.env };
  defaults({
    NEW_ENV_VAR: "NEW_ENV_VALUE",
    COERCED_ENV_VAR: 1,
  });
  t.is(process.env.NEW_ENV_VAR, "NEW_ENV_VALUE");
  t.is(process.env.COERCED_ENV_VAR, "1");
  process.env = { ...env };
});
