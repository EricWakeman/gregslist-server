import mongoose from "mongoose"
const Schema = mongoose.Schema

const House = new Schema(
    {
        price: { type: Number, required: true },
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        year: { type: Number, required: true },
        levels: { type: Number },
        imgUrl: { type: String, default: "https://vestnorden.com/wp-content/uploads/2018/03/house-placeholder-300x145.png" }



    }

)

export default House