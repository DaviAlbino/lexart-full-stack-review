import express from 'express';
import ChatController from './controllers/chatController';
//
const app = express();

app.use(express.json());

app.get('/export', ChatController.exportConversations);
app.post('/conversations', ChatController.storeConversation);

export default app;
