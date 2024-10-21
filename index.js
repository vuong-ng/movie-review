import app from './server.js' 
import mongodb from 'mongodb'
import ReviewsDAO from './dao/reviewsDAO.js'
// const mongo_username = process.env['MONGO_USERNAME']
// const mongo_password = process.env['MONGO_PASSWORD']
const usr = process.env['MONGO_USERNAME'];
const pw = process.env['MONGO_PASSWORD'];

const username = encodeURIComponent(process.env['MONGO_USERNAME']);
const password = encodeURIComponent(process.env['MONGO_PASSWORD']);
console.log(username, password);
console.log(usr, pw);
const MongoClient = mongodb.MongoClient
const uri = `mongodb+srv://${username}:${password}@cluster0.dwyv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })