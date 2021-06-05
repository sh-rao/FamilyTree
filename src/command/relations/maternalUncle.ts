import {Sex, kingArthurFamilyMembers, FamilyMember} from "../../model/familyMember";
import { findSiblingsByGender } from "./sibling";
const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');
const compact = require('lodash/compact');

export const findMaternalUncles = (familyMember: FamilyMember) : string[] => {
    let maternalUncles: string[] = [];

    if (familyMember.mother) {
        const mother = find(kingArthurFamilyMembers, ['name', familyMember.mother]);
        maternalUncles = map(findSiblingsByGender(mother, Sex.Male), iteratee('name'))
    }

    return compact(maternalUncles);
}