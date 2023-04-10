import PostgresDataSource from '../database/appDataSource';
import { CarRequestEntity } from '../entities/car/carRequestEntity';
import { ClientRequestEntity } from '../entities/client/clientRequestEntity';

export interface ICarRequestEntity {
  license_plate: string;
  model: string;
  year: number;
  manufacturer: string;
  color: string;
}

const carRepository =
  PostgresDataSource.manager.getRepository(CarRequestEntity);

export const getCar = async (id: string): Promise<any | null> => {
  const car = await carRepository.findOne({ where: { id } });
  if (!car) return null;

  return car;
};

export const getCars = async (): Promise<any> => {
  const cars = await carRepository.find();

  return cars;
};

export const createCar = async (
  id: string,
  payload: ICarRequestEntity,
): Promise<CarRequestEntity | null> => {
  const clientRepository =
    PostgresDataSource.manager.getRepository(ClientRequestEntity);

  const car = new CarRequestEntity();
  const client = await clientRepository.findOne({ where: { id } });

  if (!client) {
    return null;
  }

  car.license_plate = client.id;

  return carRepository.save({
    ...car,
    ...payload,
  });
};

export const updateCar = async (
  id: string,
  updates: Partial<ICarRequestEntity>,
): Promise<ICarRequestEntity | null> => {
  const car = await getCar(id);
  if (!car) return null;

  const updatedCar = Object.assign(updates);

  await carRepository.save(updatedCar);

  return car;
};

export const deleteCar = async (id: string): Promise<boolean> => {
  const car = await getCar(id);
  if (!car) return false;
  await carRepository.delete(car.id);
  return true;
};
