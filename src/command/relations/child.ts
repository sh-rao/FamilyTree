import { FamilyMember, Sex, kingArthurFamilyMembers } from "../../model/familyMember";
const filter = require('lodash/filter');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');

export const findChildren = (familyMember: FamilyMember, sexOfChildren: Sex) : string[] => {
    let childrenNames: string[];
        const children: FamilyMember[] = filter(kingArthurFamilyMembers, (member: FamilyMember) => {
            return (member.mother === familyMember.name || member.father === familyMember.name) && member.sex === sexOfChildren;
        });
        childrenNames = map(children, iteratee('name'));
    return childrenNames;
}