import mongoose from "mongoose"

const uri = process.env.MONGODB_URI!
if(!uri) throw new Error('please check "MONGODB_URI" in .env file...!!!')

let cache = global.mongoose
if(!cache) cache = global.mongoose = {conn: null , promise: null}

export const DataBaseConnection = async() => {
    
    if(cache.conn) return cache.conn

    if(!cache.promise) cache.promise = mongoose.connect(uri).then(() => mongoose.connection)

    try {

        cache.conn = await cache.promise

    } catch (error) {

        cache.promise = null;
        throw error

    }

    return cache.conn

}