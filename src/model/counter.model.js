const counter = []

const getCounter = async () => {
    return await counter.length > 0 ? counter[counter.length - 1] : null
}

const postCounter = async () => {
    if(counter.length > 0){
        let value = counter[counter.length -1]
        counter.push(value + 1)
        return await counter
    } else if (counter.length == 0) {
        counter.push(1)
        return await counter
    }
}

export default {
    getCounter,
    postCounter
}