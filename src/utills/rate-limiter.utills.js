import{ rateLimit } from 'express-rate-limit'
import redis from 'redis'
import {RatelLimitRedis} from 'rate-limit-redis'

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    limit: 80,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: {msg: "You have exceeded our rate limts please try after some time."}
})

export {limiter}