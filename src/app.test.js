const request = require('supertest');
const app = require('./index');

describe('GET / Health Check Endpoint', () => {
    it('should respond with a 200 status code and healthy JSON body', async () => {
        const response = await request(app).get('/');
        
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
        expect(response.body).toHaveProperty('timestamp');
    });
});