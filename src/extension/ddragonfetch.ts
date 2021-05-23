import fetch from 'node-fetch'
import * as nodecgApiContext from './utils/nodecg-api-context'

const nodecg = nodecgApiContext.get()
const champObjRep = nodecg.Replicant("ddChampInfo")
const summObjRep = nodecg.Replicant("ddSummInfo")
const runeObjRep = nodecg.Replicant("ddRuneInfo")

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

    // Custom summoners because riot...
    const summoners = {
    '1': 'Cleanse',
    '3': 'Exhaust',
    '4': 'Flash',
    '6': 'Haste',
    '7': 'Heal',
    '11': 'Smite',
    '12': 'Teleport',
    '13': 'Clarity',
    '14': 'Dot',
    '21': 'Barrier',
    '30': 'PorRecall',
    '31': 'PoroThrow',
    '32': 'Mark',
    '39': 'Mark'
    }
    summObjRep.value = summoners

    fetch(`http://ddragon.leagueoflegends.com/cdn/${currentPatch}/data/en_US/runesReforged.json`)
    .then(res => res.json())
    .then((response) => {
        const runeIdsObj = {}

		response.map((runeTree) => {
			runeIdsObj[runeTree.id] = String(`http://ddragon.leagueoflegends.com/cdn/img/${runeTree.icon}`) 
			const {slots} = runeTree

			slots.map((subRunes) => {
				const runeData = subRunes.runes
				runeData.map((rune) => {
					runeIdsObj[rune.id] = String(`http://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`)
				})
			})
		})
		runeObjRep.value = runeIdsObj
    })
})
    
