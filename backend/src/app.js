const express = require("express");

const app = express();

require("./start/modules")(app);
require("./start/run")(app);

export default app;

// run the project on command "npm run dev" .
