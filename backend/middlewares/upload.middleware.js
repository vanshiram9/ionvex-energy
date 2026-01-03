const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req) => {
    const role = req.user.role; // login se aata hai

    let folder = "others";
    if (role === "admin") folder = "admin";
    if (role === "owner") folder = "owner";
    if (role === "dealer") folder = "dealer";
    if (role === "staff") folder = "staff";
    if (role === "customer") folder = "customer";

    return {
      folder: `ionvex/${folder}`,
      allowed_formats: ["jpg", "png", "jpeg", "pdf"],
      resource_type: "auto"
    };
  }
});

module.exports = multer({ storage });
