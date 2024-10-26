export const encodeStringToBase64 = (str: string): string => {
    return Buffer.from(str).toString('base64');
}

export const decodeBase64ToString = (str: string): string => {
    return Buffer.from(str, 'base64').toString('utf-8');
}