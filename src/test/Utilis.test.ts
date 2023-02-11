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
  });
});
