import * as courseService from "../service/courseService.js";
import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` })

const addCourse = async(c) => {
    const body = await c.req.parseBody()
    await courseService.addCourse(body)

    return c.redirect("/courses")
}

const listCourses = async(c) => {
    const data = {
        courses: await courseService.listCourses()
    }
    return c.html(eta.render("courses.eta", data))
}

const listCourse = async(c) => {
    const id = c.req.param("courseId")
    const data = {
        course: await courseService.listCourse(id)
    }

    return c.html(eta.render("course.eta", data))
}

const deleteCourse = async(c) => {
    const id = c.req.param("courseId")

    await courseService.deleteCourse(id)

    return c.redirect("/courses")
}

export { addCourse, listCourses, listCourse, deleteCourse }