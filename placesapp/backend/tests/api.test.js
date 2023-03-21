const request = require("supertest")
const app = require("../index")

describe("Test the path api/users", () => {
    test("Response to the GET", async() => {
        const response = await request(app)
        .get("/api/users")

        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});

describe("Test the path api/places", () => {
    test("Response to the GET", async() => {
        const expected = {"ID":1, "Name": "favorite beach", "UserID":1, "Latitude":62.6126, "Longitude":29.696, "UserName":"Radu"}

        const response = await request(app)
        .get("/api/places")

        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body[0]).toEqual(expected);
    });
});