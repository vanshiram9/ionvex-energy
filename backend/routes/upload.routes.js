const router = require("express").Router();
const upload = require("../middlewares/upload.middleware");
const auth = require("../middlewares/auth.middleware");

router.post("/upload", auth, upload.single("file"), (req, res) => {
  res.json({
    success: true,
    url: req.file.path
  });
});

module.exports = router;
