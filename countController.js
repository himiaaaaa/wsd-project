import * as countService from "./countService.js"

const getCount_1 = async(c) => {
    let count = await countService.getCount(1)
    return c.text(`Feedback 1: ${count}`)
}

const increaseCount_1 = async(c) => {
    await countService.increaseCount(1)
    return c.text("+1")
}

const getCount_2 = async(c) => {
    let count = await countService.getCount(2)
    return c.text(`Feedback 2: ${count}`)
}

const increaseCount_2 = async(c) => {
    await countService.increaseCount(2)
    return c.text("+1")
}

const getCount_3 = async(c) => {
    let count = await countService.getCount(3)
    return c.text(`Feedback 3: ${count}`)
}

const increaseCount_3 = async(c) => {
    await countService.increaseCount(3)
    return c.text("+1")
} 

export { getCount_1, increaseCount_1, getCount_2, increaseCount_2, getCount_3, increaseCount_3 }