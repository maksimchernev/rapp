type Mods = Record<string, boolean | string>;

export default function cn (...args: Array<string | Mods | string[]>): string {
	const result = [];
	for (const arg of args) {
		if (arg === null || arg === undefined) {
			continue;
		} else if (Array.isArray(arg)) {
			result.push(...arg.filter(Boolean));
		} else if (typeof arg === "object") {
			result.push(...Object.entries(arg)
				.filter(([className, value]) => Boolean(value))
				.map(([className]) => className));
		} else {
			result.push(arg);
		}
	}
	return result.join(" ");
}
