const Router = require("express").Router;
const apiRoutes = require("./api-routes");
const HTMLroutes = require("./htmlroutes");

const router = new Router();

router.use("/api", apiRoutes);
router.use("", HTMLroutes);

module.exports = router;