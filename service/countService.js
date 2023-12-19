const getCount = async(key) => {
    const kv = await Deno.openKv()
    const count = await kv.get(["count", key])
    return count.value ?? 0
}

const getCountById = async(key, id) => {
    const kv = await Deno.openKv()
    const count = await kv.get(["feedback", id, key])
    return count.value ?? 0
}

const increaseCount = async(key) => {
    let count = await getCount(key)
    count++
    await setCount(count, key)
}

const increaseCountById = async(key, id) => {
    let count = await getCountById(key, id)
    count++
    await setCountById(count, key, id)
}

const setCount = async(count, key) => {
    const kv = await Deno.openKv()
    await kv.set(["count", key], count)
}

const setCountById = async(count, key, id) => {
    const kv = await Deno.openKv()
    await kv.set(["feedback", id, key], count)
}

export { getCount, getCountById, increaseCount, increaseCountById }