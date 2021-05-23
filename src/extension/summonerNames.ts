import LCUConnector from 'lcu-connector'
import fetch from 'node-fetch'
import base64 from 'base-64'
import * as nodecgApiContext from './utils/nodecg-api-context'

const nodecg = nodecgApiContext.get()
const connector = new LCUConnector()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

connector.on('connect', (data) => {
    nodecg.log.info("Initializing summoner name listener...")

    nodecg.listenFor('summonerName', (summonerId, ack) => {
        if (ack && !ack.handled) {
           fetch(`https://127.0.0.1:${data.port}/lol-summoner/v1/summoners/${summonerId}`, { 
                headers: new fetch.Headers({"Authorization": `Basic ${base64.encode(`${data.username}:${data.password}`)}`})
           }).then(res => res.json())
           .then(response => {
               const summonername = response.displayName || "bot" 
               ack(null, summonername)
           })
           .catch(err =>{
               nodecg.log.error(err)
           })
        }
    })
})
connector.start()