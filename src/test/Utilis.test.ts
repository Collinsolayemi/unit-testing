import { utilis } from "../app/Utilis";

describe("utilis test suite", () => {
  test("first test", () => {
    const result = utilis.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("Test simple URL", () => {
    const ParsedUrl = utilis.parseUrl("http://localhost:8080/login");
    expect(ParsedUrl.href).toBe("http://localhost:8080/login");
    expect(ParsedUrl.port).toBe("8080");
    expect(ParsedUrl.protocol).toBe("http:");
    expect(ParsedUrl.query).toEqual({});
  });

  test("Parse url with query", () => {
    const ParsedUrl = utilis.parseUrl(
      "http://localhost:8080/login?user=user&password=pass"
    );
    const expectedQuery = {
      user: "user",
      password: "pass",
    };
    expect(ParsedUrl.query).toEqual(expectedQuery);
  });

  test("Invalid URL", () => {
    function expectError() {
      return utilis.parseUrl("");
    }
    expect(expectError).toThrowError("Empty url");
  });

  test("Test invalid url with arrow function", () => {
    expect(() => {
      utilis.parseUrl("");
    }).toThrow("Empty url");
  });

  test.only("Test invalid url with try catch", () => {
    try {
      utilis.parseUrl("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Empty url");
    }
  });
});
