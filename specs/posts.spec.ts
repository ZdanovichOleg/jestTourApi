import * as supertest from "supertest"

const request = supertest('https://jsonplaceholder.typicode.com')

describe('POSTS', () => {
    it.skip('get request', async () => {
        const res = await request.get('/posts')
        //console.log(res);
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].id).toBe(1)

    })
    it.skip('POST request', async () => {
        const data = {
            title:"My first post request",
            body:"This is my first post request",
            userId: 1001
        }           
        const res = await request.post("/posts").send(data);
       expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual("My first post request");
    });
    it('PATCH request with title', async () => {
        const data = {
            title:"My first post request",
        }
        const getRes = await request.get('/posts/1')
        const beforeTitle = getRes.body.title;
        const res = await request.patch('/posts/1').send(data)
        expect(res.statusCode).toEqual(200)
        expect (res.body.title).toBe(data.title)
        expect(res.body.title).not.toBe(beforeTitle)
    }) 
    it('DELETE request', async () => {
        const res = await request.delete('/posts/1')
        console.log(res.body, "-----------------body-------------")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({})
    })
        
    })
