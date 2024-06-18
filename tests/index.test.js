const request = require('supertest');
const app = require('../server');

describe('Test Routes', () => {
    it('GET / should return Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });

    it('GET /hello should return Hello Jest', async () => {
        const response = await request(app).get('/hello');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello Jest2!');
    });
});
