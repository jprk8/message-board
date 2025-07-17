const { Router } = require('express');
const indexRouter = Router();

let messageId = 1;

const messages = [
    {
        id: messageId++,
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: messageId++,
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages })
});

indexRouter.get('/new', (req, res) => {
    res.render('form');
});

indexRouter.post('/new', (req, res) => {
    messages.push({ id: messageId++, text: req.body.message, user: req.body.user, added: new Date()})
    res.redirect('/')
});

indexRouter.get('/message/:id', (req, res) => {
    const message = messages.find(msg => msg.id === parseInt(req.params.id));
    if (!message) {
        res.status(404).send('Message not found');
        return;
    }
    res.render('detail', { message: message });
})

module.exports = indexRouter;