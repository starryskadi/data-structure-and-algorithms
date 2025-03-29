export function reverse_string(string: string) {
    const backwards = []

    for (var i = string.length; i >= 0; i--) {
        backwards.push(string[i])
    }

    return backwards.join("")
}