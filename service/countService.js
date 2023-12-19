const getCount = async(key) => {
    const kv = await Deno.openKv()
    const count = await kv.get(["count", key])
    return count.value ?? 0
}

const increaseCount = async(key) => {
    let count = await getCount(key)
    count++
    await setCount(count, key)
}

const setCount = async(count, key) => {
    const kv = await Deno.openKv()
    await kv.set(["count", key], count)
}

export { getCount, increaseCount }