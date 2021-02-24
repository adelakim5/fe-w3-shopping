var express = require("express");
var router = express.Router();
const cors = require("cors");
const fs = require("fs");

// global 변수에 지정
global.planningEventData = JSON.parse(fs.readFileSync("./data/planningEvent.json"));
global.homeContentsData = JSON.parse(fs.readFileSync("./data/homeContents.json"));

router.use(express.json());
router.use(cors());

router.get("/planningEvent.json", function (req, res, next) {
  const { planningEventData } = global;
  res.json(planningEventData);
});

router.get("/homeContents.json", function (req, res, next) {
  const { homeContentsData } = global;
  res.json(homeContentsData);
});

/* GET home page. */
// router.get("/", function (req, res, next) {
// res.render("index", { title: "Adela" });
// const { data } = global;
// res.send(data);
// res.render("index", test("Express", "../data/user.json"));
// });

module.exports = router;
