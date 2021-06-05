import { FamilyMember, kingArthurFamilyMembers } from "../model/familyMember";
import {findPaternalUncles} from "./relations/paternalUncle";
import {findMaternalUncles} from "./relations/maternalUncle";
import {findPaternalAunts} from "./relations/paternalAunt";
import {findMaternalAunts} from "./relations/maternalAunt";
import {findSisterInLaws} from "./relations/sisterInLaw";
import {findBrotherInLaws} from "./relations/brotherInLaw";
import {findChildren} from "./relations/child";
import {findSiblings, findSiblingsByGender} from "./relations/sibling";

const find = require('lodash/find');
const map = require('lodash/map');
const iteratee = require('lodash/iteratee');

const relationCommandsToFunctionMap: {[index: string]:any} = {
    "Paternal-Uncle": findPaternalUncles,
    "Maternal-Uncle": findMaternalUncles,
    "Paternal-Aunt": findPaternalAunts,
    "Maternal-Aunt": findMaternalAunts,
    "Sister-In-Law": findSisterInLaws,
    "Brother-In-Law": findBrotherInLaws,
    "Son": findChildren,
    "Daughter": findChildren,
    "Siblings": findSiblings
}

export const getRelationship = (familyMemberName: string, relationship: string): string => {
    let relatives: string = 'NONE';

    const familyMember: FamilyMember = find(kingArthurFamilyMembers, ['name', familyMemberName]);
    if (!familyMember) {
        return 'PERSON_NOT_FOUND';
    }
    if (relationship === 'Siblings') {
        const siblings: string[] = map(relationCommandsToFunctionMap[relationship](familyMember), iteratee('name'));
        if (siblings.length !== 0) {
            relatives = siblings.join(' ');
        }
        return relatives;
    }

    const relations: string[] = relationCommandsToFunctionMap[relationship](familyMember);
    return relations.length !== 0 ? relations.join(' ') : relatives;
}