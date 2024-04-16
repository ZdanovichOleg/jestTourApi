import * as supertest from "supertest";
import { user } from "../../../data/user";
const request = supertest("localhost:8001/api/v1");
import { tour, createRandomTour } from "../../../data/tour"
import { deleteFunction, login, signUp } from "../../../data/helpers"

let cookie: [x: string]
describe('TOUR', () => {
    beforeAll(async () => {
        await signUp(user).then((res) => {
            expect(res.statusCode).toBe(201);
            expect(res.body.data.user.email).toBe(user.email);
            cookie = res.header['set-cookie'];
            console.log(cookie);
        })
    })
    afterAll(async () => {
        await deleteFunction(cookie).then(res => {
            expect(res.statusCode).toBe(204);
        })
    })
    it('Create tour', async () => {
        await request
        .post('/tours')
        .set('Cookie', cookie)
        .send(tour)
        .then((res) => {
            console.log(res.body, '================================')
            console.log(createRandomTour());
            expect(res.statusCode).toBe(201)
        })
    })
})

describe('Positive', () => {
 //   let cookie: [x: string] = null;
    let tourRes;

    beforeAll(async () => {
        console.log('user', user);
       let signUpRes = await signUp(user)
       .then((res) => {
        cookie = res.header['set-cookie'];
        console.log(res.header, '==========HEADER COOKIE============');
       })
       let tourRes = await request
       .post('/tour')
       .set('Cookie', cookie)
       .send(tour)
       console.log(tourRes.body);
    })
    it('Verify status code is 201', () => {
        console.log(tourRes.body);
        expect(tourRes.statusCode).toBe(201);
    })
})

