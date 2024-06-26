var mongoose = require('mongoose')


//data base using year
function modelcreater (yearname){

var schema = new mongoose.Schema({
name: { type: String, required :(true, "kimi no nawa?"),},
position:{ type: String, required :(true, "kimi no nawa?"),},
year:{ type: Number, required :(true, "kimi no nawa?"),},
branch:{ type: String, required :(true, "kimi no nawa?"),},
birth:{ type: String, required :(true, "kimi no nawa?"),},
img: { data: Buffer, contentType: String}
})
const person = mongoose.model(yearname, schema);
return person;
}


//faculity person img schema




    // var fax = new mongoose.Schema({
        
    // name: { type: String, required :(true, "kimi no nawa?"),},
    // position:{ type: String, required :(true, "kimi no nawa?"),},
    // year:{ type: Number, required :(true, "kimi no nawa?"),},
    // branch:{ type: String, required :(true, "kimi no nawa?"),},
    // birth:{ type: String, required :(true, "kimi no nawa?"),},
    // img: { data: Buffer, contentType: String}
    // })
    // const faculity = mongoose.model('faculity', fax);
 
    


// event schema
// var tax = new mongoose.Schema({
//     name: { type: String, required :(true, "kimi no nawa?"),},
    
//     year:{ type: Number, required :(true, "kimi no nawa?"),},
//     discription:{ type: String, required :(true, "kimi no nawa?"),},

//     img: { data: Buffer, contentType: String},
//     img: { data: Buffer, contentType: String}
//     })


// const event = mongoose.model('event', tax);

    

// module.exports= event;
// module.exports = faculity;
module.exports = modelcreater;
