export enum Sex {
    Male = 'Male',
    Female = 'Female'
}

export interface FamilyMember {
    name: string,
    sex: Sex,
    mother: string,
    father: string,
    spouse: string
}

const readFamilyTree = () : FamilyMember[]  => {
    const kingArthurFamilyTree = require('../../config/family-tree.json');
    const familyMembers : FamilyMember[] = [];

    kingArthurFamilyTree.map( (familyMember: FamilyMember) => {
        familyMembers.push(familyMember);
    })

    return familyMembers;
}

export const addFamilyMember = (newFamilyMember: FamilyMember) => {
    kingArthurFamilyMembers.push(newFamilyMember);
}

export const kingArthurFamilyMembers: FamilyMember[] = readFamilyTree();