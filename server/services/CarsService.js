import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class CarsService {

    async deleteCar(id) {
        let car = await dbContext.Cars.findByIdAndDelete(id)
        return car
    }
    async updateCar(id, carData) {
        let car = await dbContext.Cars.findByIdAndUpdate(id, carData, { new: true, runValidators: true })
        return car
    }
    async addCar(carData) {
        let car = await dbContext.Cars.create(carData)
        return car

    }
    async getCars() {
        let cars = await dbContext.Cars.find({})
        return cars
    }
}
export const carsService = new CarsService()