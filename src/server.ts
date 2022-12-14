import express, { Express } from "express";
import Config from "./lib/config"
import routes from "./routes";
import User from './model/User';
import factory from './model/UserFactory'

declare global{
    namespace Express {
        interface Request {
            user: User
        }
    }
}

declare global{
    namespace Express {
        interface Response {
            user?: User
        }
    }
}

const app:Express = express()
const config:Config = Config.instance()
app.use(express.json())
app.use('/', factory)
routes(app)

app.listen(config.json().port, () => {
    console.log(`API ativa na porta ${config.json().port}`)
})