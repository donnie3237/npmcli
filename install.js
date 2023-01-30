import chalk from "chalk";
import { execSync } from 'child_process';
import inquirer from 'inquirer'
import Logo from "./load/LOgo/Logo.js";
import SolidJS from "./load/SolidJS.js";

function install(Para , name){
    const gitReact = `git clone --depth 1 https://github.com/donnie3237/DosE-WebToDesktopApp ${name}`
    const gitElectron = `git clone --depth 1 https://github.com/donnie3237/DosE-WebToDesktopApp ${name}`
    const gitTauri = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`
    const gitSolid = `git clone --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
    const gitExpress = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
    
    const runCommand = command => {
        try {
            execSync(`${command}`,{stdio:'inherit'});
        } catch (e) {
            console.error(`Failed to execute ${command}`,e)
            return false ;
        }
        return true ;
    }
    function CloneGit(gitLink){
        const checkOut = runCommand(gitLink);
        if(!checkOut) process.exit(-1)
        Logo();
        inquirer.prompt([
          {
            type:"list",
            choices:["VScode","Finish"],
            name:"end",
            message:"End:"
          }
        ]).then(awn=>{
          if(awn.end === "VScode"){
            runCommand(`cd ${name} && code .`)
          }
        })
    }
    if(Para === chalk.rgb(0,255,255)('SolidTS')){
        console.log('  '+ chalk.bgBlue('      SolidTS      '))
        SolidJS(name)
      }else if(Para === chalk.rgb(0,255,127)('ElectronJS')){
        console.log('  '+ chalk.bgRed('      ElectronTS      '))
        CloneGit(gitElectron)
      }else if(Para === chalk.rgb(0,0,255)('ReactTS')){
        console.log('  '+ chalk.bgBlueBright('      ReactTS      '))
        CloneGit(gitReact)
      }else if(Para === chalk.yellow('TauriJS')){
        console.log('  '+ chalk.bgYellow('      TauriTS      '))
        CloneGit(gitTauri)
      }else if(Para === chalk.rgb(0,255,0)('ExpressJS')){
        console.log('  '+ chalk.bgBlue('      ExpressJS      '))
        CloneGit(gitExpress)
      }else{
        console.log("error")
      }
}
export default install;