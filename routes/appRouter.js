import { request, Router, text } from 'express';

const appRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

appRouter.get('/', (req, res) => {
    res.render('index', { messages: messages});
});

appRouter.get('/new', (req, res) => {
    res.render('form');
})

appRouter.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date()});
    res.redirect('/');
});


export { appRouter };