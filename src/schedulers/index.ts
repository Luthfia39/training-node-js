<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
import redisClient from "@/configs/redis.config"
import cron from "node-cron"

const schedule = (cronExpression: string, callback: () => void) => {
  cron.schedule(cronExpression, callback, {
    scheduled: true,
    timezone: "Asia/Jakarta",
  })
}

const deleteCache = async () => {
  redisClient.flushAll()
  console.log("[Redis] - Cache cleared")
}

export { schedule, deleteCache }
<<<<<<< Updated upstream
=======
=======
import redisClient from '@/configs/redis.config'
import cron from 'node-cron'

const schedule = (cronExpression: string, callback:() => void) => {
cron.schedule(cronExpression, callback, {
    scheduled: true,
    timezone: 'Asia/Jakarta'
})
}

const deleteCache = async () => {
    // membersihkan semua data di redis
    redisClient.flushAll()
    console.log("[REDIS] - Cache cleared")
}

export {
    schedule,
    deleteCache
}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
