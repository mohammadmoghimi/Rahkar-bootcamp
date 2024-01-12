
const express = require('express');
const app = express();
const uploadRoutes = require('./routes/upload.route');
const bodyParser = require('body-parser');
const listRoutes = require('./routes/fetchList.route');
const path = require('path'); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());

app.use('/api', uploadRoutes);
app.use('/api', listRoutes);


const PORT =  4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
