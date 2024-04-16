import * as supertest from "supertest"

const request = supertest("localhost:8001/api/v1")

import { user } from "../../data/user"

describe('USER SIGN UP', () => {
    describe("POSITIVE TESTING", () => {
        it("create new user", async () => {
            const res = await request
                .post("/users/signup")
                .send(user)
                expect(201)
            console.log(res.body);
            expect(res.body.data.user.name).toBe(user.name);
            expect(typeof res.body.data.user.name).toBe("string");
            expect(res.body.data.user.email).toBe(user.email);
            expect(res.body.token).toBeDefined();
            expect(typeof res.body.token).toBe('string');
        })
    })
    describe("NEGATIVE TESTING", () => {
        it('should not create new user with the same email', async () => {
            await request.post("/users/signup").send(user);
            await request.post("/users/signup").send(user).then(resp => {
                console.log(resp.body, "==========================");
                console.log(user.email, "============email==============");
                expect(resp.body.message).toBe(`E11000 duplicate key error collection: test.users index: email_1 dup key: { email: "${user.email}" }`)
            })
        })
    })
})
describe("USER SIGN UP Version 2", () => {
    it("create new user", async () => {
        const res = await request
            .post("/users/signup")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(201)
            })
    })
})
describe("USER SIGN UP Version 3", () => {
    it("create new user", (done) => {
        request
            .post("/users/signup")
            .send(user)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)
                done()
            })
    })
})
  