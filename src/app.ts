import {processCommands} from "./commandProcessor";

const main = (commandFile: string) => {
    processCommands(commandFile);
}

main('test-cmds.txt');
