import { request, Router, text } from 'express';

const appRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  }
];

appRouter.get('/', (req, res) => {
    res.render('index', { messages: messages});
});

appRouter.get('/new', (req, res) => {
    res.render('form');
})

appRouter.get('/:messageId', (req, res) => {
    const { messageId } = req.params;
    const messageIWant = messages.find((message) => String(message.id) === messageId);

    if (!messageIWant) {
        return res.status(404).send('Message not found');
    }

    res.render('messages/message', { message: messageIWant });
});

appRouter.post('/new', (req, res) => {
    const newMessage = {text: req.body.messageText, user: req.body.authorName, added: new Date(), id: crypto.randomUUID()};
    messages.push(newMessage);
    res.render('messages/message', { message: newMessage });
});


export { appRouter };