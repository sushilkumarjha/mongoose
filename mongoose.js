const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sushilkumarjha412:Kmv1wBmyfNgMKrV8@cluster0.obc7hxt.mongodb.net/office?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
  age: Number,
  Date: {
    type: Date,
    default: Date.now,
  },
  active: Boolean,
});

// // model
const staffs = mongoose.model("staffs", studentSchema);

// staff.create(
//   {
//   name: "Gaurav jha",
//    city: "supaul",
//    age:25,
//    active:true
//   },
//   {
//     name: "raju jha",
//      city: "supaul",
//      active:true ,
//      age:50,
//     },
//     {
//       name: "keshav  jha",
//        city: "supaul",
//        age:49,
//        active:true
//       },
//       {
//         name: "raghav  jha",
//          city: "supaul",
//          age:45,
//          active:true
//         },
//         {
//           name: "chhotu  jha",
//            city: "supaul",
//            age:28,
//            active:true
//           }
//   )
//  .then((staff) => console.log(staff))
//  .catch((err) => console.log(err));
staffs.find({age:{$lt:40}})
  .then((staffs) => console.log(staffs))
  .catch((err) => console.log(err));
