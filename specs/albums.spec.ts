import * as supertest from "supertest";
const request = supertest("https://jsonplaceholder.typicode.com");
describe("ALBUMS", () => {
    it("GET request", async () => {
        const res = await request.get("/albums")
        expect(res.statusCode).toEqual(200);
        expect(res.body[0].id).toBe(1)
    })
    it("POST request", async () => {
        const data = {
            userId: 11,
            title: "My albums"
        }
        const res = await request.post("/albums").send(data);
        expect (res.statusCode).toEqual(201);
        expect (res.body.title).toEqual("My albums")
    })
    it.only("PATCH request", (done) => {
        const data = {
            body: "New album"
        }
        request
        .patch("/albums/1")
        .send(data)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err)
        return done();
        })
    })
    it("DELETE request", async () => {
        await request
        .delete("/albums/1")
        .then(response => {
            expect(response.body).toEqual({}),
            expect(response.statusCode).toBe(200)
        })
    })
})