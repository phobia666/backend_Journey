import crypto from  'crypto';

export const generateToken = () => {
    return crypto.randomBytes(16).toString('hex');
} // creating token

//hamare header ke andar hota hai ek authentication ham wha se apne token ko bhej skte hai server ko


export const validateToken = (token) => {
    return token.length === 32;
}