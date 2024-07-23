import cn from "./classNames";

describe("classNames", () => {
	test("test", () => {
		expect(cn("someClass")).toBe("someClass");
	});
});
