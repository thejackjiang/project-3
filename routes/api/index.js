const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./users");

// Book routes
router.use("/events", eventRoutes);

router.use("/users", userRoutes);

module.exports = router;
