function removeDuplicates(arr = null) {
    if (arr === null) {
        throw new Error("no parameters");
    }
    return [...new Set(arr)];
}

const obj = {
    "name": "Kavitha",
    "status": "Learning"
}

function isPalindrome(str = null) {
    if (str === null || typeof str !== 'string') {
        throw new Error("no parameters or wrong parameter");
    }
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase())
            return false;
    }
    return true;
}

export default function convertToMap(arr = null) {
    if (arr === null) {
        throw new Error("no parameters");
    }
    return new Map(arr);
}

export { removeDuplicates, obj, isPalindrome, convertToMap };