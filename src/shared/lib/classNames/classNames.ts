
type Mods = Record<string, boolean | string>

export default function cn(...args : (string | Mods | string[])[]): string {
    const result = []
    for (const arg of args) { 
        if (typeof arg === 'string' || typeof arg === 'number') {
            result.push(arg)
        } else if (Array.isArray(arg)) {
            result.push(...arg.filter(Boolean))
        } else if (typeof arg === 'object') {
            result.push(...Object.entries(arg)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className))
        }
    }
    return result.join(' ')
}



