const sqlConnection = require('../models/sqlConnection')
const express = require('express')
const router = express.Router()

const sqlCon = new sqlConnection()

router.post('/addclient',async function(req,res)
{
    let client = req.body
    console.log(client)
    let response = await sqlCon.addClient(client)
    res.send(response)
})

router.get('/clients',async function(req,res)
{
    let clients = await sqlCon.getClients()
    res.send(clients)
})
router.get('/unsoldclients',async function(req,res)
{
    let clients = await sqlCon.getUnSoldClients()
    res.send(clients)
})

router.get('/owners',async function(req,res)
{
    let owners = await sqlCon.getOwners()
    res.send(owners)
})
router.put('/updateclientdetailsbyid',async function(req,res)
{
    let {id,name,surname,country} = {...req.body}
    let client = await sqlCon.updateClientDetailsById(id,name,surname,country)
    res.send(client)
})
module.exports = router 