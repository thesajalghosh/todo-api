import mongoose from "mongoose"

console.log(process.env.MONGO_URL)
// mongodb://localhost:27017
export const connectdb = ()=>{   mongoose.connect(process.env.MONGO_URL,{
    dbName: "backendapi"
}).then(() => console.log("Database Connected")).catch((e) => console.log(e));

}