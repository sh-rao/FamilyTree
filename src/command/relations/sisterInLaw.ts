import {Sex, kingArthurFamilyMembers, FamilyMember} from "../../model/familyMember";
import { findSiblingsByGender } from "./sibling";
const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');
const compact = require('lodash/compact');

export const findSisterInLaws = (familyMember: FamilyMember) : string[] => {
    let sisterInLaws: string[] = [];

    if(familyMember.mother) {
        const brothers = findSiblingsByGender(familyMember, Sex.Male);
        sisterInLaws = map(brothers, iteratee('spouse'));
    }
    if(familyMember.spouse) {
        const spouse = find(kingArthurFamilyMembers, ['name', familyMember.spouse]);
        if (spouse && spouse.mother) {
            const spouseSisters = findSiblingsByGender(spouse, Sex.Female);
            sisterInLaws += map(spouseSisters, iteratee('name'));
        }
    }

    return compact(sisterInLaws);
}