import * as countService from "../service/countService.js";
import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import * as courseService from "../service/courseService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` })

const getCount = async(c, num) => {
    let count = await countService.getCount(num)
    return c.text(`Feedback ${num}: ${count}`)
}

const getCountById = async(c, num) => {
    const id = c.req.param("courseId")
    let count = await countService.getCountById(num, id)
    return c.text(`Feedback ${num}: ${count}`)
}

const increaseCount = async(c, num) => {
    await countService.increaseCount(num)
    return c.redirect("/")
}

const increaseCountById = async(c, num) => {
    const id = c.req.param("courseId")
    await countService.increaseCountById(num, id)
    return c.redirect(`/courses/${id}`)
}

const listRating = async(c) => {
    return c.html(eta.render("index.eta"))
}

export { getCount, getCountById, increaseCount, increaseCountById, listRating }