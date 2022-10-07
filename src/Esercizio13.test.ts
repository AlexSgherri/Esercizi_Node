import supertest from "supertest";

import app from "./Esercizio13app";

const request = supertest(app);

test("GET /greet", async() => {
    const response = await request
        .get("/greet")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual({greet: "Hello from my server!"})
})
