import { createClient } from "redis";

const redisClient = createClient({}); // configurations for Redis Server

try {
    await redisClient.connect();
} catch (error) {
    console.log('Redis connection error :', error.message)
}

export default redisClient;
