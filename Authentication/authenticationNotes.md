# AUTHENTICATION and SECURITY

### Encryption :  
The process of converting information or data into a code(Cipher), especially to prevent unauthorized access.  
  - `Ceaser Cipher Method : `The Caesar Cipher is a monoalphabetic rotation cipher used by Gaius Julius Caesar.
  Suppose, we are using Casear Cipher Method, and shifting key is 4. Then we set a Password `ABCDEF` then the CipherText will be `EFGHIJ`.

  **Link :**` https://cryptii.com/pipes/caesar-cipher`

  - `AES256 Method : ` We give the input text and set a `Encryption Key` to make it secure, then the input password will be secured. And it will be decrypted by using the right encryption key only. But, if anybody comes to know the right key then it will be easy to hack the password.


**Link :** `https://encode-decode.com/aes256-encrypt-online/`


## Hashing :

`[Paassword] ------(Hash Function)-------> [Hash]`

It is a Mathematical process in which decryption is totally impossible.

- **Registration Password** ---- (Hash Function) ----> **Hash** ---> **DataBase**
- **Login Password** ---- (Hash Function) ----> `Hash` Compare with `Hash` <--------- **DataBase**

## Salting : 

`[Password] + [Salting_Characters] ------(Hash Function)------> [Hashed Password]`

  In database we have to store :
  1. Salting_Character
  2. Sating_Round
  3. Hashed Paasword

- ###### During Login, we just salt the password(upto the round stored in DB) given by User and hashed it then compare the password with hashed password stored in DB 

- `Bcrypt Package : ` https://www.npmjs.com/package/bcrypt

