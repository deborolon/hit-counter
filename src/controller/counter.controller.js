import counterServices from "../services/counter.services.js"

const getCounter = async (req, res) => {
    try {
        const result = await counterServices.getCounter()
        if(result === undefined || result === null){
            res.status(200).send("No hay visitas en el contador.")
        } else if (result !== 0){
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const postCounter = async (req, res) => {
    try {
        const result = await counterServices.postCounter()
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    getCounter,
    postCounter
}