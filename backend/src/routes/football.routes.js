const { Router } = require("express");
const {
  getData,
  postData,
  updateData,
  deletedata,
  getYearlyStats,
  getWins,
  getAvgGoals,
  AllTeams
} = require("../controllers/football.controller");

const router = Router();

router.post("/add", postData);
router.get("/", getData);
router.post("/update/:id", updateData);
router.post("/delete/:id", deletedata);
router.get("/get_stats/:year", getYearlyStats);
router.get("/get_wins", getWins);
router.get("/get_avg_goals", getAvgGoals);
router.get('/all_teams', AllTeams);

module.exports = router;
