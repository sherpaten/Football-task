const Game = require("../schemas/Game.schema");

const postData = async (req, res) => {
  try {
    const data = req.body;

    Game.create(data);

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const { team } = req.query;
    let data = null;
    if (team) {
      data = await Game.find({
        team
      });
    } else {
      data = await Game.find();
    }
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const findOne = await Game.findById(id);

    if (!findOne) return res.status(403).json({ message: "Game Not Found" });

    await Game.findByIdAndUpdate(id, data);

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const findOne = await Game.findById(id);

    if (!findOne) return res.status(403).json({ message: "Game Not Found" });

    await Game.findByIdAndDelete(id);

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getYearlyStats = async (req, res) => {
  try {
    const { year } = req.params;

    const stats = await Game.aggregate([
      {
        $match: {
          year: +year,
        },
      },
      {
        $group: {
          _id: "$year",
          totalGamesPlayed: {
            $sum: "$games_played",
          },
          totalDraws: {
            $sum: "$draw",
          },
          totalWins: {
            $sum: "$win",
          },
        },
      },
    ]);

    res.status(200).json({
      message: "success",
      data: stats.length
        ? stats[0]
        : { total_games_played: 0, win: 0, draw: 0 },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getWins = async (req, res) => {
  try {
    const { input } = req.query;

    const data = await Game.aggregate([
      {
        $match: {
          win: {
            $gt: +input,
          },
        },
      },
      {
        $limit: 10,
      },
    ]);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAvgGoals = async (req, res) => {
  try {
    const { year } = req.query;

    const data = await Game.aggregate([
      {
        $match: {
          year: +year,
        },
      },
      {
        $group: {
          _id: "$team",
          avg_goals_for: {
            $avg: "$goals_for",
          },
          loss: {
            $first: "$loss",
          },
          goals_for: {
            $first: "$goals_for",
          },
          goals_against: {
            $first: "$goals_against",
          },
          year: {
            $first: "$year",
          },
          __v: {
            $first: "$__v",
          },
          games_played: {
            $first: "$games_played",
          },
          draw: {
            $first: "$draw",
          },
          win: {
            $first: "$win",
          },
          points: {
            $first: "$points",
          },
        },
      },
    ]);

    res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const AllTeams = async (req, res) => {
  try {
    const data = await Game.distinct("team");

    res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getData,
  postData,
  updateData,
  deletedata,
  getYearlyStats,
  getWins,
  getAvgGoals,
  AllTeams,
};
