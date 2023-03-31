import express from 'express';
const router = express.Router();

// TODO

router.get('/'); // list services
router.post('/'); // create
router.patch('/:id'); // updade services
router.get('/:id'); // get services by id

export default router;
