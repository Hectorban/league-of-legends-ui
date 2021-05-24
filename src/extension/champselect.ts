import WebSocket from "ws"
import LCUConnector from 'lcu-connector'
import * as nodecgApiContext from './utils/nodecg-api-context'

const nodecg = nodecgApiContext.get()
const connector = new LCUConnector()
const champSelectUpdateRep = nodecg.Replicant("champSelectUpdate")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

connector.on('connect', async (data) => {
    await sleep(10000) // We need to wait a little bit so the client can set up the server
    nodecg.log.info("Initializing champ select websocket...")
    const ws = new WebSocket(`wss://riot:${data.password}@127.0.0.1:${data.port}/`, "wamp")

    ws.on('open', () => {
        ws.send('[5, "OnJsonApiEvent_lol-champ-select_v1_session"]')

        ws.onmessage = (message) =>{
            const {data} = JSON.parse(<string>message.data)[2]
            champSelectUpdateRep.value = data
            if (!data) {nodecg.log.info("Esperando Champ Select")}
        }
    })
})

const sleep = (ms: number) => new Promise((resolve) =>{
        setTimeout(resolve, ms)
    })

connector.start()