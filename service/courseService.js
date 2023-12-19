const addCourse = async(course) => {
    course.id = crypto.randomUUID()

    const kv = await Deno.openKv()
    await kv.set(["courses", course.id], course)
}

const listCourses = async() => {
    const kv = await Deno.openKv()
    const courseData = await kv.list({ prefix: ["courses"] })

    const courses = []
    for await (let entry of courseData){
        courses.push(entry.value)
    }

    return courses
}

const listCourse = async(id) => {
    const kv = await Deno.openKv()
    const course = await kv.get(["courses", id])
    return course?.value ?? {}
}

const deleteCourse = async(id) => {
    const kv = await Deno.openKv()
    await kv.delete(["courses", id])
}

export { addCourse, listCourses, listCourse, deleteCourse }