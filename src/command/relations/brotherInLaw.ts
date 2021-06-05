import {Sex, kingArthurFamilyMembers, FamilyMember} from "../../model/familyMember";
import { findSiblingsByGender } from "./sibling";
const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');
const compact = require('lodash/compact');

export const findBrotherInLaws = (familyMember: FamilyMember) : string[] => {
    let brotherInLaws: string[] = [];

    if(familyMember.mother) {
        const sisters = findSiblingsByGender(familyMember, Sex.Female);
        brotherInLaws = map(sisters, iteratee('spouse'));
    }
    if(familyMember.spouse) {
        const spouse = find(kingArthurFamilyMembers, ['name', familyMember.spouse]);
        if (spouse && spouse.mother) {
            const spouseBrothers = findSiblingsByGender(spouse, Sex.Male);
            brotherInLaws += map(spouseBrothers, iteratee('name'));
        }
    }

    return compact(brotherInLaws);
}