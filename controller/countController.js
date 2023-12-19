import * as countService from "../service/countService.js";
import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import * as courseService from "../service/courseService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` })

const getCount = async(c, num) => {
    let count = await countService.getCount(num)
    return c.text(`Feedback ${num}: ${count}`)
}

const increaseCount = async(c, num) => {
    await countService.increaseCount(num)
    return c.redirect("/")
}

const listRating = async(c) => {
    return c.html(eta.render("index.eta"))
}

export { getCount, increaseCount, listRating }