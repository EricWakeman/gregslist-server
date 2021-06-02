import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        year: { type: Number, min: 1000, },
        imgUrl: { type: String, default: "https://dutcheauction.com/images/default-car.png" }
    },
    { timestamps: true, toJSON: { virtuals: true } }

)

export default Car