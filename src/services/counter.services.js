import counterModel from "../model/counter.model.js"

const getCounter = async () => {
    return await counterModel.getCounter()
}

const postCounter = async () => {
    return await counterModel.postCounter()
}

export default {
    getCounter,
    postCounter
}