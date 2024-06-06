const contacts = [
    {
        id: '1',
        name: 'Carlos Pérez',
        email: 'cperez@correo.com',
        address: 'Av. de Mayo 232',
        age: 47,
    },
    {
        id: '2',
        name: 'Carolina de Mónaco',
        email: 'cmonaco@correo.com',
        address: 'Losada 3442',
        age: 24,
    },
    {
        id: '3',
        name: 'Miguel Mateos',
        email: 'mmateos@correo.com',
        address: 'Nosedondevive 2333',
        age:  37,
    },
];

const getAllContacts = () => contacts;

const getContactByID = (id) => contacts.find(contact => contact.id === id);

module.exports = {
    getAllContacts,
    getContactByID,
}