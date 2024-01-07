const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const diaryRoutes = require("./routes/diary.routes");

app.use(cors());
app.use(express.json());

app.use("/api/diary", diaryRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});   