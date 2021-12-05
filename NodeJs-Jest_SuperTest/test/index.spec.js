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
  describe('given a title and description', ()=>{
    const newTask = {
      title: "Test Task",
      description: "Test Description"
    };

    test('should respond with a 200 status code', async ()=>{
      const response = await request(app).post("/task").send(newTask);
      expect(response.statusCode).toBe(200);
    });

    test('should have a content-type: application/json in header', async ()=>{
      const response = await request(app).post("/task").send(newTask);
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));

    });

    test('should respond with an task ID', async ()=>{
      const response = await request(app).post("/task").send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });

  //fail tests
  describe('when a title and description is missing', ()=>{
    test('Should respond with a 400 status code', async ()=>{
      //enviando multiples objetos
      const fields = [
        {},
        {title: 'Test Task'},
        {description: 'Test description'},
      ];

      //iterando las peticiones
      for(const body of fields){
        const response = await request(app).post('/task').send(body);
        expect(response.statusCode).toBe(400);
      }
    });


  });


});
