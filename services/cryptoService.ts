import CryptoJS from 'crypto-js';
// CryptoJS.enc.Hex.parse
// Encryption function
export const encrypt = (text: string, key: string, iv: string): string => {
  const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Hex.parse(key), {
    iv: CryptoJS.enc.Hex.parse(iv)
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

// Decryption function
export const decrypt = (encryptedText: string, key: string, iv: string): string => {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, CryptoJS.enc.Hex.parse(key), {
    iv: CryptoJS.enc.Hex.parse(iv)
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

