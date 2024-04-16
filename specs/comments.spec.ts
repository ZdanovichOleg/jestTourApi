import * as supertest from "supertest"

const request = supertest('https://jsonplaceholder.typicode.com')

describe("COMMENTS", () => {
    it.skip('GET request', async () => {
        const res = await request.get('/comments')
        expect(res.statusCode).toEqual(100)
        expect(res.body[0].id).toBe(1)
    })
    it.skip('POST request', async () => {
        const data = {
            postId: 111,
            name: 'My first comment\'s name',
            email: 'bobDylan@gmail.com',
            body: 'Empty',
            id: 101
        }
        const res = await request.post('/comments').send(data);
        expect(res.statusCode).toEqual(201);
        expect(res.body.email).toEqual('bobDylan@gmail.com');
    })
    it("PATCH request", async () => {
        const data = {
            name: "Hanna"
        }
        const getRes = await request.get("/comments/1");
        const firstName = getRes.body.name;
        const res = await request.patch("/comments/1").send(data);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).not.toBe(firstName)
    })
    it.skip("DELETE request", async () => {
        const res = await request.delete("/comments");
        console.log("-----", res.statusCode, "-----")
        expect(res.statusCode).toEqual(404)
    })
})