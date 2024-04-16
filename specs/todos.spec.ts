import * as supertest from "supertest";
const request = supertest("https://jsonplaceholder.typicode.com");
describe("TODOS", () => {
    it("GET request", async () => {
        const res = await request.get("/todos");
        expect(res.body[0].completed).toEqual(false);
        console.log(res.body[0].completed, "++++++++======+++++++");
        expect(res.statusCode).toBe(200);
    })
    it("POST request", async () => {
        const data = {
            title: "What to do",
            completed: true
        }
        const res = await request.post("/todos").send(data);
        console.log(res, "--------------------------");
        expect(res.body.completed).toEqual(true);
        expect(res.statusCode).toEqual(201)
    })
    it("PATCH request", async () => {
        const data = {
            title: "My TODO"
        }
        await request
        .patch("/todos/3")
        .then(response => {
            expect(response.statusCode).toEqual(200)
        })
    })
    it("DELETE request", async () => {
        const res = await request.delete("/todos/3")
        expect(res.statusCode).toBe(200)
    })
})