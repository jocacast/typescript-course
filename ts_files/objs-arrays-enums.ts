enum RoleId {ADMIN=100, READ_ONLY_USER, SUPER_USER};
enum RoleName {ADMIN = 'ADMIN_NAME', READ_ONLY_USER='READ_ONLY_USER_NAME', SUPER_USER='SUPER_USER_NAME'}
//Simple objects
const person : {
    name: string;
    age: number;
    hobbies : string[];
    job: [number, string]; //Tuple
    roleId:RoleId;
    roleName:RoleName;
} = {
    name: "Jorge",
    age: 32,
    hobbies: ['Tennis', 'Reading', 'Boxing'],
    job:[2, "Senior software developer"],
    roleId:RoleId.READ_ONLY_USER,
    roleName: RoleName.READ_ONLY_USER

};

person.hobbies.forEach((hobbie, i) =>console.log(`${person.name} hobbie #${i+1}: ${hobbie}`));
console.log(`${person.name} job id: ${person.job[0]}`);
console.log(`${person.name} job name: ${person.job[1]}`);
console.log(`${person.name} role id in DB : ${person.roleId}`); //Returns only the index, in this case is 101
console.log(`${person.name} role name in DB : ${person.roleName}`); //Returns only the name, in this case is READ_ONLY_USER_NAME



//Nested objects
const product : {
    id: string;
    tags: string[];
    details : {
        title: string;
        description: string;
    }
} = {
    id: 'id01',
    tags: ['great-offer', 'on-sale'],
    details: {
        title: 'Sample title',
        description: 'Some description for this product'
    }
}

console.log(product.details.title);