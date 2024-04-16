import * as supertest from "supertest";
const request = supertest("https://jsonplaceholder.typicode.com");
describe("PHOTOS", () => {
    it.skip("GET request", async () => {
        const res = await request.get("/photos");
        expect(res.body[1].id).toEqual(2);
        expect(res.statusCode).toBe(200);
    })
    it.skip("POST request", async () => {
        const data = {
            title: "Nothing",
            url: "https://via.placeholder.com/600"
        }
        const res = await request.post("/photos").send(data);
        expect(res.statusCode).toEqual(201);
        expect(res.body.url).toEqual("https://via.placeholder.com/600")
    })
    it.only("PATCH request", async () => {
        const data = {
            title: "My photos"
        }
        await request
        .patch("/photos/1")
        .send(data)
        .then(response => {
            expect(response.statusCode).toEqual(200)
        })
    })
    it("DELETE request", async () => {
        const res = await request.delete("/photos/3");
        expect(res.body).toEqual({});
    })
}) 