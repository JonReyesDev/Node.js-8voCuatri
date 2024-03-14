import mysql from 'mysql2';

let connection;

function createConnection() {
    connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "john1093",
        database: "sistemas"
    });

    connection.connect(function(err) {
        if (err) {
            console.log(`Surgió un error: ${err}`);
        } else {
            console.log("Se abrió la conexión con éxito.");
        }
    });
    return connection;
}

export function getConnection() {
    if (!connection) {
        return createConnection();
    }
    return connection;
}

