class ApiError extends Error {
  constructor(
    statuscode,
    massege = "Something went wrong",
    Errors = [],
    stack = ""
  ) {
    super(massege);
    this.statuscode = statuscode;
    this.Errors = Errors;
    this.stack = stack;
    this.massege = massege;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export{ApiError}