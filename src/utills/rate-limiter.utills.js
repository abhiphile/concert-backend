import { rateLimit } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import redisClient from "./redis-client.utills.js";

const redisLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Minutes
  limit: 80,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    msg: "You have exceeded our rate limts please try after some time.",
  },
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
});

export default redisLimiter;
