import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from '../models/connection';

const ChatService = {
  exportConversations: async () => {
    const query = 'SELECT user, message, date FROM conversations ORDER BY date';
    const [rows] = await connection.execute<RowDataPacket[]>(query); 
    
    const csvData = rows
      // eslint-disable-next-line max-len
      .map((conversation: RowDataPacket) => `"${conversation.user}", "${conversation.message}", "${conversation.date}"`)
      .join('\n');
  
    return csvData;
  },
  
  storeConversation: async (user: string, message: string, date: string) => {
    const query = 'INSERT INTO conversations (user, message, date) VALUES (?, ?, ?)';
    const [result] = await connection.execute<ResultSetHeader>(query, [user, message, date]);
    console.log('chegou aqui');
    return result;
  },
};

export default ChatService;
