import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'chatbot_user',
  password: process.env.MYSQL_PASSWORD || 'mypassword',
  database: process.env.MYSQL_DATABASE || 'chatbot_db',
});

export default connection;