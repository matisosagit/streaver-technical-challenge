import { GET } from '../app/api/getbyid/route';

const makeRequest = (userId?: string) => ({
    nextUrl: new URL(`http://localhost/?userId=${userId ?? ''}`),
}) as any;

beforeEach(() => {
    process.env.NEXT_PUBLIC_API_URL = 'https://example.com';
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.resetAllMocks();
    delete process.env.NEXT_PUBLIC_API_URL;
});

describe('/api/getbyid', () => {
    it('it should respond with correct data when the request arrives correctly.', async () => {
        const fakeResponse = [{ id: 123 }];
        (global.fetch as jest.Mock).mockResolvedValue({
            json: async () => fakeResponse,
        });

        const response = await GET(makeRequest('123'));
        expect(response.status).toBe(200);

        const body = await response.json();
        expect(body).toEqual(fakeResponse);
        expect(global.fetch).toHaveBeenCalledWith('https://example.com/?userId=123');
    });

    it('it should handle errors if NEXT_PUBLIC_API_URL is not configured', async () => {
        delete process.env.NEXT_PUBLIC_API_URL;

        const response = await GET(makeRequest('123'));
        expect(response.status).toBe(500);

        const body = await response.json();
        expect(body).toEqual({ error: 'API URL not configured' });
    });
});