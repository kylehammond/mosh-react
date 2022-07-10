## environment setup

in repo root folder

npm i -g create-react-app@1.5.2

install vscode (I'm in it right now already)

install vscode extensions

- simple react snippets
- prettier

recommended: enable formatting on save in vscode enabled

## create react-app

run these commands (see error below first)
create-react-app react-app  
cd react-app  
npm start

first problem here...
npm ERR! Missing script: "start"

tried this solution: https://forum.codewithmosh.com/t/missing-start-script/8089

npm uninstall -g create react-app  
remove the react-app folder completely  
npx create-react-app react-app (should show “Happy Hacking!” at end of install if it completed correctly and you should see in your react-app folder, subfolders node_modules, public and src.)  
cd react-app  
npm start (should show basic web page)

## IMPORTANT

whenever running npm start you need to make sure that the path is case correct otherwise it will throw an error

## npm warning

I was getting a warning about global prefix and used this to fix it - probably not important but cleaned up the console
https://stackoverflow.com/questions/72401421/
message-npm-warn-config-global-global-local-are-deprecated-use-loc

# create counter-app

in repo root folder
npx create-react-app counter-app
cd counter-app
npm start

npm i bootstrap@4.1.1
font of <code> component should change
