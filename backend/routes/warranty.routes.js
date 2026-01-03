const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");

router.post(
  "/upload",
  upload.single("document"),
  async (req, res) => {
    try {
      return res.json({
        success: true,
        fileUrl: req.file.path,
        publicId: req.file.filename,
      });
    } catch (err) {
      res.status(500).json({ success: false });
    }
  }
);

module.exports = router;
