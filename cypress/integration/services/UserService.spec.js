/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/// <reference types="cypress" />

import { getUsers } from "../../../src/services/UserService";

describe("user service test", () => {
  it("can call the user service and return a list of formatted user names", async () => {
    // arrange
    const mockedUsers = {
      results: [
        {
          name: {
            first: "Sara",
            last: "Grace",
          },
        },
        {
          name: {
            first: "John",
            last: "Smith",
          },
        },
        {
          name: {
            first: "Mary",
            last: "Jones",
          },
        },
      ],
    };
    const expectedOutput = ["Sara Grace", "John Smith", "Mary Jones"];
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "https://randomuser.me/api/*", // that have a URL that matches 'https://randomuser.me/api/*'
      },
      mockedUsers // and force the response to be mocked data
    );

    // act
    const users = await getUsers();

    // assert
    expect(users).to.deep.eq(expectedOutput);
  });
});
