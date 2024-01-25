/*Generates a random id*/
export const generateRandomId = () => Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`)

/*Wrap keys in double quotes and replaces single quotes with double quotes*/
export const sanitizeData = (data: any) => data.replace(/(\w+):/g, '"$1":').replace(/'/g, '"')