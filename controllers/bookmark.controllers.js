const bookmarkServices = require('../services/bookmark.services');

exports.getBookmark = async (req, res) => {
    const result = await bookmarkServices.getBookmark(req, res)
    return res.status(result.status).json(result)
};

exports.addBookmark = async (req, res) => {
    const result = await bookmarkServices.addBookmark(req, res)
    return res.status(result.status).json(result)
}

exports.deleteBookmark = async (req, res) => {
    const result = await bookmarkServices.deleteBookmark(req, res)
    return res.status(result.status).json(result)
  };
