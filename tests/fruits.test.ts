import supertest from "supertest";
import app from "./../src/app";
import { FruitInput } from "services/fruits-service";

describe("Fruit test", () => {
    it("Inserir fruta", async () => {
        const body:FruitInput = {name:"Banana", price:2}
        const resultado = await supertest(app).post("/fruits").send(body)

        expect(resultado.status).toEqual(201)
    })
})
