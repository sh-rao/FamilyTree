import {Sex, kingArthurFamilyMembers, FamilyMember} from "../../model/familyMember";
import { findSiblingsByGender } from "./sibling";
const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');
const compact = require('lodash/compact');

export const findPaternalUncles = (familyMember: FamilyMember) : string[] => {
    let paternalUncles: string[] = [];

    if (familyMember.father) {
        const father = find(kingArthurFamilyMembers, ['name', familyMember.father]);
        paternalUncles = map(findSiblingsByGender(father, Sex.Male), iteratee('name'))
    }

    return compact(paternalUncles);
}