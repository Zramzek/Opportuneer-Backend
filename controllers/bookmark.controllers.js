const bookmarkServices = require('../services/bookmark.services');
const subCoursesServices = require('../services/subcourses.services');

exports.getBookmark = async (req, res) => {
    const result = await bookmarkServices.getBookmark(req, res)
    return res.status(result.status).json(result)
};

exports.addBookmark = async (req, res) => {
    const result = await subCoursesServices.addBookmark(req, res)
    return res.status(result.status).json(result)
}

exports.deleteBookmark = async (req, res) => {
    const result = await bookmarkServices.deleteBookmark(req, res)
    return res.status(result.status).json(result)
  };
