const {model , Schema} = require("mongoose");
const noteSchema = Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required:true,
    },
    note_name:{
        type:String,
        required:true
    },
    note_dec: {
         type:String,
        required:true
    }

});

module.exports = model("noteApp", noteSchema);
