


export function reverseStringWithRecursive(string: string): string {
    if (!string) {
        return ''
    }

    return string[string.length - 1] + reverseStringWithRecursive(string.slice(0, string.length - 1))
}