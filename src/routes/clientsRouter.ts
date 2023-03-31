import express from 'express';
import ClientController from '../controllers/clientController';

const router = express.Router();

router.get('/', async (_req, res) => {
  const controller = new ClientController();
  const response = await controller.getClients();
  return res.send(response);
});

router.post('/', async (req, res) => {
  const controller = new ClientController();
  const response = await controller.createClients(req.body);
  return res.send(response);
});

router.get('/:id', async (req, res) => {
  const controller = new ClientController();
  const response = await controller.getClient(req.params.id);
  if (!response) res.status(404).send({ message: 'No user found' });
  return res.send(response);
});

// TODO

router.patch('/'); // updade clients

router.get(':id/cars'); // get all cars
router.post(':id/cars'); // add client car
router.patch(':id/cars/:carId'); // update client car
router.delete(':id/cars/:carId'); // remove client car by id
router.get(':id/cars/:carId'); // remove client car by id

export default router;