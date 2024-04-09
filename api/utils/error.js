export const errorHandler = (statusCode, message) =>{
    const error = new console.error();
    error.message=message;
    error.statusCode= statusCode
    return error
}