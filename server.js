// require("dotenv").config()
const express = require('express'),
jwt = require('jsonwebtoken'),
bodyParser = require('body-parser'),
cors = require('cors'),
fs = require('fs')
// const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const secretKey = '1234';

// Connexion à MongoDB
// mongoose.connect('mongodb://localhost/ma_base_de_donnees', { useNewUrlParser: true, useUnifiedTopology: true });

// Modèle utilisateur MongoDB
// const User = mongoose.model('User', {
//   username: String,
//   password: String
// });

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send('Token manquant');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token invalide');
    }
    req.user = decoded;
    next();
  });
}


app.get('/', (req, res)=>{
  fs.readFile('index.html')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password }, (err, user) => {
    if (err || !user) {
      return res.status(401).send('Identifiants incorrects');
    }

    const token = jwt.sign({ id: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.send({ token });
  });
});

const apiRouter = express.Router();
apiRouter.use(verifyToken);

apiRouter.get('/data', (req, res) => {
  res.json({ message: 'Données lues avec succès' });
});

apiRouter.post('/data', (req, res) => {
  res.json({ message: 'Données créées avec succès' });
});

apiRouter.put('/data/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Données mises à jour avec succès (ID : ${id})` });
});

apiRouter.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Données supprimées avec succès (ID : ${id})` });
});

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
