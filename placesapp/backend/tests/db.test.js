const db = require("../db.js");

describe("Unit test - test the database methods", () => {
    test("Test db.getAllPlaces method", () => {
        db.getAllPlaces(
            (err)=>{
                return err;
            },
            (places)=>{
                expect(typeof(places)).toBe("object");
            }
        );
    });
    test("Test db.getPlace method", () => {
        const id = 1;
        db.getPlace(
            id,
            (err)=>{
                return err;
            },
            (place)=>{
                expect(place[0].Name).toBe("favorite beach");
                expect(place[0].UserID).toBe(1);
                expect(place[0].UserName).toBe("Radu");
            }
        );
    });
});
