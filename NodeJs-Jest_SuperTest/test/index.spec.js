//importamos la aplicacion
import app from "../src/app";
import request from "supertest";

//describe podemos agrupar multiples test

describe("GET /task", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/task").send();
    console.log(response);
    //expect()
  });
});