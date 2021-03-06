import request from "supertest";
import server from "../serverTests";
import connection from "../database";
import { productsUpload } from "../config/upload";

beforeAll(async () => {
  await connection.create();
});

afterAll(async () => {
  console.log("END OF TEST");
  await connection.close();
  server.close();
});

describe("GET all Products ", () => {
  it("return JSON of Product", async () => {
    const result = await request(server).get("/product");
    expect(result.type).toEqual("application/json");
    expect(result.status).toEqual(200);
  });
});

describe("Create Products From products.json ", () => {
  it("create all products from json", async () => {
    const result = await request(server)
      .post("/product/createMany")
      .attach("products", `${__dirname}/products.json`);

    expect(result.type).toEqual("application/json");
    expect(result.status).toEqual(200);
  });
});

// describe("GET /price", () => {
//   it("return JSON of Price", async () => {
//     const result = await request(server).get("/price");
//     expect(result.type).toEqual("application/json");
//     expect(result.status).toEqual(200);
//   });
// });

// describe("POST /estimate", () => {
//   it("CHECK IF COST IS CALCULATED ", () => {
//     return request(server)
//       .post("/estimate")
//       .send({
//         from: "011",
//         to: "016",
//         minutes: 35,
//         planId: "afe0a906-c904-4017-a009-7e0efd224559",
//       })
//       .set("Accept", "application/json")
//       .expect("Content-Type", "application/json; charset=utf-8")
//       .expect(200, {
//         from: "011",
//         to: "016",
//         withPlan: 10.450000000000001,
//         withoutPlan: 66.5,
//         saving: 84.28571428571429,
//         plan: {
//           id: "afe0a906-c904-4017-a009-7e0efd224559",
//           name: "Fale Mais 30",
//           freeUntil: 30,
//         },
//       });
//   });
// });
