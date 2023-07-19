import { Request, Response } from 'express';
import ChatService from '../services/chatService';

const ChatController = {
  exportConversations: async (req: Request, res: Response) => {
    try {
      const csvData = await ChatService.exportConversations();
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=conversations.csv');
      res.status(200).send(csvData);
    } catch (error) {
      console.error('Erro ao exportar as conversas:', error);
      res.status(500).json({ error: 'Erro ao exportar as conversas.' });
    }
  },

  storeConversation: async (req: Request, res: Response) => {
    try {
      const { user, message, date } = req.body;
      await ChatService.storeConversation(user, message, date);
      res.sendStatus(201);
    } catch (error) {
      console.error('Erro ao armazenar a conversa:', error);
      res.status(500).json({ error: 'Erro ao armazenar a conversa.' });
    }
  },
};

export default ChatController;
