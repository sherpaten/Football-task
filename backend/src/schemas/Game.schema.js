const { model, Schema } = require("mongoose");

const schema = new Schema({
  id: Number,
  team: String,
  games_played: Number,
  win: Number,
  draw: Number,
  loss: Number,
  goals_for: Number,
  goals_against: Number,
  points: Number,
  year: Number,
});

module.exports = model("Game", schema);
