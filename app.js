const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  resave: false,
  secret: 'secret',
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(express.static(path.join(__dirname, 'Final')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'acasa.html'));
});

app.get('/acasa.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'acasa.html'));
});



app.post('/rezervare_confirmata', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.status(200).sendFile(path.join(__dirname, 'rezervare_confirmata.html'));
});

app.get('/rezervare_confirmata', (req, res) => {
  res.sendFile(path.join(__dirname, 'rezervare_confirmata.html'));
})

const users = {
  Maria: 'maria12',
  Alexandra : '1234',
  Mihai : 'blabla'
};


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (users[username] && users[username] === password) {
    req.session.username = username;
    res.status(200).json({ message: `Felicitari! Bine ai revenit, ${username}!` });
  
  } else {
    res.status(401).json({ message: 'Autentificare esuata!Va rugam sa reincercati!' });
  }
});


app.post('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return res.status(500).json({ message: 'Eroare la logout!' });
      }
      res.clearCookie('connect.sid');
      res.status(200).json({ message: 'Deconectare reusita!' });
  });
});



app.get('/exemplu', (req, res) => {
  res.sendFile(path.join(__dirname, 'exemplu.json'));
});


app.use((req, res, next) => {
  res.status(404).render('not-found.ejs', {
    name: "unknown",
    reasons: ["Concert Crala's Dreams-2 mai", "Concert The Motans-16 mai", "Concert 3 Sud Est-17 mai","Concert Voltaj-24 mai"]
  });
});



  app.listen(5000, function(){
    console.log("A pornit!!");
});