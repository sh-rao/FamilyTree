import {FamilyMember} from "./model/familyMember";
import {addChild} from "./command/addChild";
import {getRelationship} from "./command/getRelationship";

const lineReader = require('line-reader');

export const processCommands = (commandFile: string) => {
    lineReader.eachLine(commandFile, (command: string) => {
        const tokens: string[] = command.split(' ');
        const cmd: string = tokens[0];
        const familyMemberName: string = tokens[1];

        switch (cmd) {
            case 'GET_RELATIONSHIP': {
                const relationship: string = tokens[2];
                console.log(getRelationship(familyMemberName, relationship));
                break;
            }
            case 'ADD_CHILD': {
                const child: FamilyMember = {
                    "name": tokens[2],
                    "sex": tokens[3],
                    "mother": familyMemberName,
                    "father": null,
                    "spouse": null
                } as any;
                console.log(addChild(child));
            }
        }
    });
}
