const MongoClient = require('mongodb').MongoClient;


const getUsers = (request, response) => {

    MongoClient.connect('mongodb://localhost:27017/Flutter', function (err, client) {
        if (err) throw err;

        let db = client.db('Flutter');

        db.collection('Users').find().toArray(function (err, result) {
            if (err) throw err;

            response.status(200).json(result);
        })
    })
}
const getProducts = (request, response) => {

    MongoClient.connect('mongodb://localhost:27017/Flutter', function (err, client) {
        if (err) throw err;

        let db = client.db('Flutter');

        db.collection('Products').find().toArray(function (err, result) {
            if (err) throw err;

            response.status(200).json(result);
            console.log('Productos consultados');
        })
    })
}

const Login = (request, response) =>{
    const { correo, contrasena } = request.body;
    try {
        MongoClient.connect('mongodb://localhost:27017/Flutter', function (err, client) {
            if (err) throw err;

            let db = client.db('Flutter');
            db.collection('Users').find({email:correo , password:contrasena }).toArray(
                function (err, result) {
                    if(err){
                        throw err
                    } else {
                        if(result[0] != null){
                            response.status(200).json(result);
                            console.log('Usuario Logueado');
                        }else {
                            response.status(204).json(result);
                            console.log('El usuario no existe');
                        }
                    }


                }
            )
        })
    }catch (e) {
        console.log(e);
    }


}

module.exports = {
    getUsers,
    Login,
    getProducts
}