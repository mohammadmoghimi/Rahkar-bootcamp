const express = require('express');
const app = express();
const cors = require("cors")

const bodyParser = require('body-parser');
const path = require('path'); 


const pictureRoutes = require("./routes/picture.route")
app.use('/assetes', express.static(path.join(__dirname, 'assets')));

app.use(cors())
app.use(bodyParser.json());

app.use('/api', pictureRoutes);


const PORT =  4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
