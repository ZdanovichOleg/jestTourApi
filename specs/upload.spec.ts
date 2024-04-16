import * as supertest from 'supertest';
const request = supertest('https://practice-react.sdetunicorns.com/api/test');
import { upload } from "../data/helpers"

describe('UPLOAD', () => {
    it('upload single document', async () => {
        await request
            .post('/upload/single')
            .attach('single', 'data/image/9.webp')
            .then(el => {
                expect(el.body.filename).toBe('9.webp')
            })
    })
    it('upload multiple documents', async () => {
        const files: string[] = ['data/image/9.webp', 'data/image/2.webp']
        const res = await upload(files)
        console.log(res.body)
        expect(res.statusCode).toBe(200)
    })
    it('upload multiple documents', async () => {
        const files: string[] = ['data/image/9.webp', 'data/image/2.webp']
        const req = request.post('/upload/multiple')

        for(const file of files){
            req.attach('multiple', file)
        }
        return new Promise((resolve, reject) => {
            req.end((err, res) => {
                if(err) {
                    console.error(err);
                    reject (err)
                } else {
                    console.log('Upload successful:', res.body)
                    expect(res.statusCode).toBe(200);
                    resolve(res)
                }
            })
        })
    })
})