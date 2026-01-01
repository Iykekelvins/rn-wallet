import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
	try {
		// in a real world app, you'd like to put the userId or ipAddress as your key
		// i.e replate my-rate-limit with the user id, we kept it simple here
		const { success } = await ratelimit.limit('my-rate-limit');

		if (!success) {
			return res
				.status(429)
				.json({ message: 'Too many requests, try again later.' });
		}

		next();
	} catch (error) {
		console.log('Rate limit error', error);
		next(error);
	}
};

export default rateLimiter;
