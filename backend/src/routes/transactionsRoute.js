import express from 'express';

import {
	createTransaction,
	deleteTransaction,
	getTransactionsByUserId,
	getTransactionsSummary,
} from '../controllers/transactionsControllers.js';

const router = express.Router();

router.get('/:userId', getTransactionsByUserId);

router.post('/', createTransaction);

router.delete('/:id', deleteTransaction);

router.get('/summary/:userId', getTransactionsSummary);

export default router;
