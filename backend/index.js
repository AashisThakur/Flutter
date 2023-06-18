
const app = require('./app');
const db = require('./config/db')
const UserModel = require('./model/user.model')

const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`server running : ${port}`);
})