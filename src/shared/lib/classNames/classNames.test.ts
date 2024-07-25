import cn from "./classNames";

describe("classNames", () => {
	test("1 param", () => {
		expect(cn("someClass")).toBe("someClass");
	});
	test("2 params", () => {
		const expected = "someClass ccc c1";
		expect(cn("someClass", {}, ["ccc", "c1"])).toBe(expected);
	});
	test("3 params", () => {
		const expected = "someClass hover ccc c1";
		expect(cn("someClass", { hover: true }, ["ccc", "c1"])).toBe(expected);
	});
	test("with null n undefined", () => {
		const expected = "someClass ccc c1";
		expect(cn(null, undefined, "someClass", {}, ["ccc", "c1"])).toBe(expected);
	});
});
