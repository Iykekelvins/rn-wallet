import express from 'express';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRouter from './routes/transactionsRoute.js';

import { initDB } from './config/db.js';

dotenv.config();

const app = express();

app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 50001;

app.use('/api/transactions', transactionsRouter);

initDB().then(() => {
	app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
});
