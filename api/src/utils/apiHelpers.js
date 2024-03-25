function authorErrorHandler(error, res) {
    if (error.message.includes("validation failed")) {
      return res.status(400).json({
        message: error.message,
      });
    }
    if (error.message.includes("Cast to ObjectId")) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    res.status(500).json({
      message: error.message,
    });
  }
  
  function bookErrorHandler(error, res) {
    if (error.message.includes("validation failed")) {
      return res.status(400).json({
        message: error.message,
      });
    }
    if (error.message.includes("Cast to ObjectId")) {
      if (error.message.toLowerCase().includes("author")) {
        return res.status(404).json({
          message: "Author not found",
        });
      }
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(500).json({
      message: error.message,
    });
  }
  
  module.exports = {
    authorErrorHandler,
    bookErrorHandler,
  };