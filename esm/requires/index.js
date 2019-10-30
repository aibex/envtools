import EnvToolsError from "../error";

class RequiresEnvError extends EnvToolsError {
  constructor(missing) {
    super("One or more environment variables were not found in process.env");
    this.data = { env: missing };
  }
}

/**
 * requires() - Ensure certain elements in process.env
 *
 * Usage with callback:
 * requires(envNames, function(err) { ... });
 *
 * Usage synchronous:
 * try {
 *  requires(envNames);
 * }
 * catch(err) {
 *  ...
 * }
 */
const requires = (envNames, cb = null) => {
  const unset = envNames.filter(
    env => !(typeof process.env[env] !== "undefined")
  );
  if (unset.length) {
    const error = new RequiresEnvError(unset);
    if (cb) {
      cb(error);
    } else {
      throw error;
    }
  } else {
    if (cb) {
      cb();
    }
  }
};

export default requires;
