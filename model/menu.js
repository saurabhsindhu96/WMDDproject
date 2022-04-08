const mongoose= require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema(
    {
        Name: {
            type: String,
            default:""

        },
        Description: {
            type: String,
            default:""

        },
        Price: {
            type: Number,
            default:0

        }
        
    },
    {
        collection: "menu"
    }
);

module.exports= mongoose.model("Menu", schema)