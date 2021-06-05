import {Sex, kingArthurFamilyMembers, FamilyMember} from "../../model/familyMember";
import { findSiblingsByGender } from "./sibling";
const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');
const compact = require('lodash/compact');

export const findPaternalAunts = (familyMember: FamilyMember) : string[] => {
    let paternalAunts: string[] = [];

    if (familyMember.father) {
        const father = find(kingArthurFamilyMembers, ['name', familyMember.father]);
        paternalAunts = map(findSiblingsByGender(father, Sex.Female), iteratee('name'))
    }

    return compact(paternalAunts);
}