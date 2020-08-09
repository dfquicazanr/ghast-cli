export const camelToDashCase = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
export const isCamelCaseValid = str => (/^[\w\d]+$/g.test(str) && !/^\d/g.test(str));
