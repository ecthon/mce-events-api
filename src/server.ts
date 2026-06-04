import { app } from './app.js'
import dotenv from 'dotenv'
dotenv.config()

app.listen({ port: Number(process.env.PORT) || 3000 }, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})
