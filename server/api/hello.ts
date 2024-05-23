export default defineEventHandler(async (event) => {
    // event is a Fastify request object
    return { message: 'hello world' }
    })