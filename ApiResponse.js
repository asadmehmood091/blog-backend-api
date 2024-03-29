// ApiResponse.js
const sendSuccess = (res, data, statusCode = 200) => {
    res.status(statusCode).json({
      status: "success",
      data
    });
  };
  
  const sendError = (res, message, statusCode = 400) => {
    res.status(statusCode).json({
      status: "error",
      message
    });
  };
  
  export { sendSuccess, sendError };
  