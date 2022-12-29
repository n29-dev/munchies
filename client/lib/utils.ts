function deepClone<T>(obj: T) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const clone: Record<string, any> = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const keyString: string = key;
            clone[keyString] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
        }
    }

    return clone;
}

function generateVariationKey(id: number, name: string) {
    let key = `${id}_${name.trim().split(" ").join("_")}`;
    return key;
}

export { deepClone, generateVariationKey };
