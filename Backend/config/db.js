import mongoose from "mongoose";
export const connectDB= async()=>{
     await mongoose.connect('mongodb+srv://venkatrohith8121:Rohith812197@cluster0.g9kde31.mongodb.net/YUMMY-FOODS').then(()=>console.log("DB connected"));
}