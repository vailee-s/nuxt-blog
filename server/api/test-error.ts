import { parse } from "vue/compiler-sfc";

export default defineEventHandler((event) => {
const id = parseInt(event.context.params!.id) as number;
if(!Number.isInteger(id) || id < 0) {
  throw createError({
    statusCode: 400,
    message: 'Invalid id'
  })
}
return 'ok'
});