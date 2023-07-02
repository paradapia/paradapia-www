export default defineEventHandler((event) => {
  return {
    api: Deno.env.toObject()
  }
})