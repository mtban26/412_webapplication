/*
    Created by Micah Ban and Ricardo Jardinez Morales
 */

// queries
var queries = "SELECT COUNT(born.stateid) " +
              "FROM public.born, public.us_state " +
              "WHERE public.born.stateid = public.us_state.stateid " +
              "AND public.us_state.statename = 'Hawaii'" ;

// credentials from postgres server
const {Client} = require('pg')
const newClient = new Client({
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'M!cahban26'
})

// connect to server
newClient.connect()
    .then(() => newClient.query(queries))
    .then( results => {
            var temp = results.rows[0].count;
        }
    )
    .finally(() => newClient.end())

