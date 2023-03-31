import express from 'express';
const router = express.Router();

// TODO

router.get('/'); // list mechanics
router.post('/'); // create mechanics
router.get('/:id'); // get mechanics by id
router.patch('/:id'); // update mechanics

export default router;
