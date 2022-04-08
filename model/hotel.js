const mongoose= require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema(
    {
        Name: {
            type: String,
            default:""

        },
        Email: {
            type: String,
            default:""

        },
        Phone: {
            type: String,
            default:""

        },
        Res_Date: {
            type: String,
            default:""

        },
        Total_people: {
            type: Number,
            default:0

        },
        Add_notes: {
            type: String,
            default:""

        },
        
    },
    {
        collection: "hotel"
    }
);

module.exports= mongoose.model("Hotel", schema)