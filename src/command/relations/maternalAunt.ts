import {Sex, kingArthurFamilyMembers, FamilyMember} from "../../model/familyMember";
import { findSiblingsByGender } from "./sibling";
const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');
const compact = require('lodash/compact');

export const findMaternalAunts = (familyMember: FamilyMember) : string[] => {
    let maternalAunts: string[] = [];

    if (familyMember.mother) {
        const mother = find(kingArthurFamilyMembers, ['name', familyMember.mother]);
        maternalAunts = map(findSiblingsByGender(mother, Sex.Female), iteratee('name'))
    }

    return compact(maternalAunts);
}