# NodeJS Project License Generation

1. Navigate to the main directory of the NodeJS Project.
2. Install mklicense using the following command:
```
npm install -g mklicense
```
3. Generate a license in the terminal by navigating to the NodeJS Project and running the following command:
```
mklicense
```
4. Review and confirm the license information, which will provide the output as follows:
```
? Select your license: MIT
? The project's license begins in: 2024
? The project's author full name: Neeharica Madanu
Done. license created!
Your license is under: */Licensing/DockerNetworking-TaskManager
Lawyers are now happy.
```
5. Commit the generated license to the GitHub Repository.


# Crypto MD5 Checksum Generation

1. Integrate the crypto-js library into the main folder of the NodeJS project by running the following command:
```
npm install crypto-js
```
2. Include the following line in the app.js file:

```
const crypto = require('crypto-js');
```
3. Generate a checksum for the MONGO URI by using the MD5 algorithm from the crypto-js library and then console log it to the terminal:
```
const md5Checksum = crypto.MD5(process.env.MONGO_URI).toString();
console.log('MONGO_URI (MD5 Checksum):', md5Checksum);
```
4. Start the NodeJS application to display the checksum in the terminal:
```
npm start
```
5. The output should display the MD5 checksum for the MONGO URI in the terminal, as demonstrated:
```
[nodemon] starting `node app.js`
MONGO_URI (MD5 Checksum): 9c0839a54cf914483e23acf4cf7a28b5
Server is listening on port 3000 ...
```
