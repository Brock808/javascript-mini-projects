const contacts = [];

function addNewContact(name, phone, email){
    const user = {name, phone, email};
    contacts.push(user)
    return user
}

let user1 = addNewContact('Lionel', 355472,'lio.messi@gmail.com')

function search(name){
    return contacts.filter((contact)=>{
        return contact.name.toLowerCase().includes(name.toLowerCase())
    })
};

console.log(search('Lionel'))

function returnName (name){
    return contacts.map((contact)=>{
        return contact.name
    })
}
console.log(returnName('Lionel'))

const contactInMap = new Map()

contacts.forEach(contact => {
    contactInMap.set(contact.name, contact);
});

console.log(contactInMap.get('Lionel'));






