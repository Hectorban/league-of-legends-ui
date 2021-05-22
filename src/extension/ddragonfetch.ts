import fetch from 'node-fetch'
import * as nodecgApiContext from './utils/nodecg-api-context'

const nodecg = nodecgApiContext.get()
const champObjRep = nodecg.Replicant("ddChampInfo")

fetch('https://ddragon.leagueoflegends.com/api/versions.json')
.then(res => res.json())
.then((response) => {
    const currentPatch = response[0]
    nodecg.log.info(`Current league patch ${currentPatch}`)

    fetch(`http://ddragon.leagueoflegends.com/cdn/${currentPatch}/data/en_US/champion.json`)
    .then(res => res.json())
    .then((response) =>{
        nodecg.log.info("Fetching League's champions")
        const {data} = response
        const champIdsObject = {}
        Object.keys(data).map((champ) =>{
            champIdsObject[data[champ].key] = champ
        })
        champObjRep.value = champIdsObject
    })
    fetch(`http://ddragon.leagueoflegends.com/cdn/${currentPatch}/data/en_US/runesReforged.json`)
    
})