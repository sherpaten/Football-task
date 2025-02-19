const mongoose = require("mongoose");
const config = require("config");
const Game = require("../schemas/Game.schema");
const csv = require("csvtojson");

async function connect(uri) {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin' // Explicitly set auth database
    };

    console.log('Attempting MongoDB connection...');
    await mongoose.connect(uri, options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
}

const bootstrap = async (app) => {
  await connect(process.env.MONGO || config.get("MONGO_URI"));

  const findData = await Game.findOne();

  const data = await csv().fromFile(__dirname + "/../samples/football.csv");

  if (!findData) {
    await Game.insertMany(data);
  }

  const PORT = process.env.PORT || config.get("PORT");
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
};

module.exports = bootstrap;
