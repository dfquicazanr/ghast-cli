export const camelToSnakeCase = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
export const camelToDashCase = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
