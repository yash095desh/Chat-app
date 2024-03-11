import mongoose from "mongoose"

const connectdb = async()=>{
    try {
     const conn =  await mongoose.connect(process.env.MONGOURL)
     console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectdb