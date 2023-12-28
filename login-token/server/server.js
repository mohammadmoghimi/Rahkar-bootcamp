const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');



const app = express();
const port = 3000;

app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users',
  });

  app.post('/register', (req, res) => {
    const { username, password } = req.body;
  
    bcrypt.hash(password, 10, (error, hashedPassword) => {

    db.query('insert into users (username, password) values (?, ?)', [username, password], (error, result) => {
      if (error) {
console.error('coudlnt register user', error);
      }

       else {

const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
}
});  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
