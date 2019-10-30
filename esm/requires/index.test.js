import test from "ava";
import requires from "./";

test("Synchronous requires() for defined items", t => {
  const env = { ...process.env };
  process.env.CUSTOM_EXISTING_ENV = "exists";
  requires(["CUSTOM_EXISTING_ENV"]);
  process.env = { ...env };
  t.pass();
});

test("Synchronous requires() for undefined items throws", t => {
  const env = { ...process.env };
  try {
    requires(["NON_EXISTING_ENV_VAR"]);
    t.fail("Undefined items should throw");
  } catch (e) {
    e.data.env.includes("NON_EXISTING_ENV_VAR");
    t.pass();
  } finally {
    process.env = { ...env };
  }
});

test.cb("Callback based requires() for defined items", t => {
  const env = { ...process.env };
  process.env.CUSTOM_EXISTING_ENV = "exists";
  requires(["CUSTOM_EXISTING_ENV"], err => {
    if (err) {
      t.fail("Should not contain an error");
    } else {
      t.pass();
    }
    process.env = { ...env };
    t.end();
  });
});
