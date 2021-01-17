const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/crm_project");

class sqlConnection
{

   addClient = async (client) =>
    {
        let countryData = await sequelize.query(`SELECT id FROM countries where country = '${client.country}'`)
        let ownerData = await sequelize.query(`SELECT id FROM owner where name = '${client.owner}'`)
        let countryId = countryData[0][0].id
        let ownerId = ownerData[0][0].id
    let results = await sequelize
                            .query(`INSERT INTO clients VALUES (null,'${client.name}',
                            '${client.surname}',
                            ${countryId},
                            '${client.firstContact}',
                            null,
                            ${client.sold},
                            ${ownerId})
                                    `)

    console.log(results[0])
    return results[0]
    }

     getOwners = async () =>
    {
     
    let results = await sequelize
                            .query(`SELECT name FROM owner
                                    `)

    console.log(results[0])
    return results[0]
    }
    getClients = async () =>
    {
     
    let results = await sequelize
                            .query(`SELECT client.id, client.name,client.surname, c.country, client.firstContact , e.type , client.sold , o.name AS owner
                                    FROM clients as client,countries AS c,emailstypes AS e,owner AS o
                                    WHERE client.country = c.id
                                    AND client.email = e.id
                                    AND client.owner = o.id
                                    `)

    console.log(results[0])
    return results[0]
    }

    getUnSoldClients = async () =>
    {
    let results = await sequelize
                            .query(`SELECT client.id, client.name,client.surname, c.country, client.firstContact , client.email as type , client.sold , o.name AS owner
                                    FROM clients as client,countries AS c,owner AS o
                                    WHERE client.country = c.id
                                    AND client.owner = o.id
                                    AND client.email is NULL
                                    `)

    console.log(results[0])
    return results[0]
    }

    updateClientDetailsById = async (id,name,surname,country) =>
    {
            let countryData = await sequelize.query(`SELECT id FROM countries where country = '${country}'`)
            let countryId = countryData[0][0].id
    let results = await sequelize
                            .query(`UPDATE clients
                                    SET name = '${name}', surname = '${surname}' , country = ${countryId}
                                    WHERE id = ${id}`)

    console.log(results[0])
    return results[0]
    }

    }

    module.exports = sqlConnection