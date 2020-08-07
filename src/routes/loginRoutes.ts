import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send('Hi, login router here');
});

export { router };
