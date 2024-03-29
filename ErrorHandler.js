// ErrorHandler.js
class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }
  
  const handleError = (err, res) => {
    const { statusCode = 500, message = "An unexpected error occurred" } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message
    });
  };
  
  export { ErrorHandler, handleError };
  