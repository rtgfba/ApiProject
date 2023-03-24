//Going to use authentication helpers to help encrpy password or create a random token

import crypto from 'crypto';
import dotenv from 'dotenv';

const SECRET = process.env.SECRET;

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt:string, password: string) => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(SECRET).digest('hex');
}