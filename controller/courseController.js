import * as courseService from "../service/courseService.js";
import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` })

const validator = z.object({
    name: z.string().min(4, { message: "The course name should be a string of at least 4 characters." })
})

const addCourse = async(c) => {
    const body = await c.req.parseBody()
    const validationResult = validator.safeParse(body)
    if(!validationResult.success){
        return c.html(eta.render("courses.eta", {
            ...body,
            errors: validationResult.error.format(),
            courses: await courseService.listCourses()
        }))
    }
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