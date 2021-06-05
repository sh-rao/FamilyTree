import {addFamilyMember, FamilyMember, kingArthurFamilyMembers, Sex} from "../model/familyMember";
const find = require('lodash/find');

export const addChild = (child: FamilyMember): string => {
    const mother = find(kingArthurFamilyMembers, ['name', child.mother]);
    if (!mother) {
        return 'PERSON_NOT_FOUND';
    }
    if (mother.sex !== Sex.Female) {
        return 'CHILD_ADDITION_FAILED';
    }

    addFamilyMember(child);
    return 'CHILD_ADDED';
}