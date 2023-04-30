const app = require("./app");

require("dotenv").config();
PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Right by your side, on port " + PORT);
});
