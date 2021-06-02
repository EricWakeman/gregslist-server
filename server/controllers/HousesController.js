import { carsService } from "../services/CarsService"
import BaseController from "../utils/BaseController"
import { housesService } from "../services/HousesService"

export class HousesController extends BaseController {

    constructor() {
        super('api/houses')
        this.router
            .get("", this.getHouses)
            .post("", this.addHouse)
            .put("/:id", this.updateHouse)
            .delete("/:id", this.deleteHouse)

    }
    async deleteHouse(req, res, next) {
        try {
            let house = await housesService.deleteHouse(req.params.id)
            return house
        } catch (error) {
            next(error)
        }
    }
    async updateHouse(req, res, next) {
        try {
            let house = await housesService.updatehouse(req.params.id, req.body)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }
    async addHouse(req, res, next) {
        try {
            let house = housesService.addhouse(req.body)
            return res.send(house)

        } catch (error) {
            next(error)
        }
    }
    async getHouses(req, res, next) {
        try {
            let houses = await housesService.getHouses()
            return res.send(houses)

        } catch (error) {
            next(error)
        }
    }
}