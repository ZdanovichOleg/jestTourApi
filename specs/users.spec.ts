import * as supertest from "supertest";
const request = supertest("https://jsonplaceholder.typicode.com");
describe("USERS", () => {
    it.skip("GET request", async () => {
        const res = await request.get("/users")
        expect(res.statusCode).toEqual(200);
        expect(res.body[2].id).toEqual(3);
        console.log("-----",res.body[2].id,"-----")
    })
    it.skip("POST request", async () => {
        const data = {
            name: "Oleg",
            email: "olegzdan@gmail.com"
        }
        const res = await request.post("/users").send(data);
        console.log("-----", res.body.name,"-----");
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual("Bob")
    })
    it.only("PATCH request", (done) => {
        const data = {
            username: "Jhon"
        }
        request
        .patch("/users/3")
        .send(data)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err)
        done()
        })
    })
    it("DELETE request", async () => {
       await request
        .delete("/users/7")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
})