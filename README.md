# league-of-legends-ui
NodeCG bundle that currently generates a champ select like the one in the 2021 MSI's tournament.

This is a [NodeCG](http://github.com/nodecg/nodecg) bundle, powered by Typescript, React, Parcel and a Flux-like pattern system for an easy state-to-[replicant](https://nodecg.com/NodeCG.html#Replicant) management.

It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `^1.1.1`

## Getting started
If you have NodeCG already installed, go to step 2
1. Install NodeCG's using the [CLI](https://github.com/nodecg/nodecg-cli)
```bash
npm install --global nodecg-cli
mkdir nodecg
cd nodecg
nodecg setup
```

2. Copy/clone the repo into your `bundles` folder that is located in the root folder of your NodeCG instance.
```bash
cd bundles
git clone https://github.com/Hectorban/league-of-legends-ui.git
cd League-of-legends-nodecg-ui
```
3. Install dependencies with `npm`
```bash
npm i
```

4. Build source with [Parcel's](https://github.com/parcel-bundler/parcel) bundler 
```bash
npm run build
```
