const express = require('express');
const router = express.Router();

// In-memory message storage
const messages = [
  {
    text: 'Hi there!',
    user: 'Anish',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Rebika',
    added: new Date(),
  },
];

// Home page displaying messages
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

// Form to add a new message
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

// Handle new message submission
router.post('/new', (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect('/');
});

module.exports = router;

