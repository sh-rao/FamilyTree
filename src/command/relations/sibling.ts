import { FamilyMember, Sex, kingArthurFamilyMembers } from "../../model/familyMember";
const without = require('lodash/without');
const filter = require('lodash/filter');
const iteratee = require('lodash/iteratee')

export const findSiblingsByGender = (familyMember: FamilyMember, sexOfSiblings: Sex) : FamilyMember[] => {
    if (familyMember.mother) {
        const siblings: FamilyMember[] = findSiblings(familyMember);
        return filter(siblings, (sibling: FamilyMember) => {
            return sibling.sex === sexOfSiblings;
        });
    }
    return [];
}

export const findSiblings = (familyMember: FamilyMember) : FamilyMember[] => {
    if (familyMember.mother) {
        const siblings: FamilyMember[] = without(
            filter(kingArthurFamilyMembers, iteratee(['mother', familyMember.mother])),
            familyMember);
        return siblings;
    }
    return [];
}