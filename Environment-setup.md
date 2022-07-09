## environment setup

in repo root folder

npm i -g create-react-app@1.5.2

install vscode (I'm in it right now already)

install vscode extensions

- simple react snippets
- prettier

recommended: enable formatting on save in vscode enabled

## create the first app

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
