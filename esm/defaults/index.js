import EnvToolsError from "../error";

class DefaultsEnvError extends EnvToolsError {
  constructor(message) {
    super(`An error occured setting defaults: ${message}`);
  }
}

/**
 * defaults() - Assign default values to proces.env
 *
 * To comply with process.env, all items are coerced to a string
 *
 * Usage synchronous:
 * defaults({
 *  "ENV_KEY": "ENV_VAL"
 * })
 */
const defaults = all => {
  for (const env of Object.keys(all)) {
    if (typeof process.env[env] === "undefined") {
      process.env[env] = `${all[env]}`; // coerce
    }
  }
  return { ...process.env };
};

export default defaults;
