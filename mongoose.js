// getting-started.js
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ieeeDB');

const imagedb = new mongoose.Schema({
    


  });

  const newpeople = new mongoose.Schema({
    name: {
      type: String,
    required : [true, 'such a lovely name'], 
  },
   year: Number,
   position: String,
   branch: String,
   picture: imagedb
    
  });

  
  
  const people = mongoose.model("2025", newpeople);
  const image = mongoose.model("image", imagedb);
  // var People = new people({
  //   name: "NISHANT",
  //   year: 2025,
  //  position: 'SIGHT YMCA SB CHAIR',
  //  branch: 'ENC'
  // });

  //  People = new people({
  //   name: "asif sheikh",
  //   year: 2025,
  //  position: 'WIE YMCA SB CHAIR',
  //  branch: 'EEIOT'
  // });
  
  // await People.save();
  
  const findpeople = await people.find();
  
   console.log(findpeople);
   people.find().catch(err => console.log(err));

 
}
