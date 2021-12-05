//importamos la aplicacion
import app from "../src/app";
import request from "supertest";

//describe podemos agrupar multiples test

describe("GET /task", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/task").send();
    //assert
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array", async ()=>{
    const response = await request(app).get('/task').send();
    //verifica si es un array
    expect(response.body).toBeInstanceOf(Array);

  });

});

describe("POST /task", ()=>{
  //should respond 200
  test('should respond with a 200 status code', async ()=>{
    const response = await request(app).post("/task").send();
    expect(response.statusCode).toBe(200);
  });

  //should respond with a JSON
  test('should have a content-type: application/json in header', async ()=>{
    const response = await request(app).post("/task").send();
    expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));

  });
  //should respond with a json containing the new task with an id

  test('should respond with an task ID', async ()=>{
    const response = await request(app).post("/task").send({
      title: "test task",
      description: "test description"
    });
    expect(response.body.id).toBeDefined();
  });
});
