import mongoose from "mongoose";    

const genderSchema = new mongoose.Schema({  
    gender: { type: String, required: true, trim: true },
});

const Gender = mongoose.model("Gender", genderSchema);

export default Gender;