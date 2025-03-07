import express from "express"
import config from "./config.js"
import counterRoutes from "./routes/counter.routes.js"

const app = express()
const PORT = config.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/", counterRoutes)

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))
app.on("Error", (err)=> console.log(err))