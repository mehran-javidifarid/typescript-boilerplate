import aesjs from "aes-js";
// import sha1 from "sha1";
import {SHA1,enc} from 'crypto-js'

export const CryptoHelper = {
    decrypt(hash:string,key:string) : string {
        try {
            if (!hash || !key) return '';
            const byteKey = SHA1(key);
            const hashKey = byteKey.toString(enc.Hex);
            const key_Buffer = new Buffer(hashKey.substring(0, 24), "utf8");
            const iv = new Buffer("b53af22ceee25d5c", "utf8");
            const encryptedBytes = new Buffer(hash, "base64");
            const aesCbc = new aesjs.ModeOfOperation.cbc(key_Buffer, iv);
            const decryptedBytes:any = aesCbc.decrypt(encryptedBytes);
            const last = decryptedBytes[decryptedBytes.length - 1];
            const decrypted = new Buffer(decryptedBytes.slice(0, -last), "utf8");
            return decrypted.toString()
        }catch (e){
            return 'کارت نا معتبر'
        }
    },
    encryptPassword(phoneNumber:string, password:string) : string {
        // return sha1(phoneNumber + password);
        return 'not yet'
    }
};