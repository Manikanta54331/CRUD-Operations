require("dotenv").config();
const app = require("./src/app");
const { syncDatabase } = require("./src/models");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await syncDatabase();
  console.log(`Server running on http://localhost:${PORT}`);
});
