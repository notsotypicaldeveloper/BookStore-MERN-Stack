export const PORT = process.env.BACKEND_PORT;

console.log(`process.env.BACKEND_PORT=${process.env.BACKEND_PORT}`)
const mongoUsername= process.env.mongoUsername;
const mongoPassword = process.env.mongoUsername;
export const mongoDBUrl=`mongodb+srv://${mongoUsername}:${mongoPassword}@mernstack.lokdq.mongodb.net/?retryWrites=true&w=majority&appName=MERNSTACK`

console.log(`mongoDBUrl==::`,mongoDBUrl);

