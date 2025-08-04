import ApiError from "../error/ApiError.js";

export default function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ success: false, message: err.message });
    }
    return res.status(500).json({success: false, message:"Непредвиденная ошибка"})
}