const contactService = require('../services/contactService');

const getContacts = (req, res) => {
    const contacts = contactService.getAllContacts();
    res.json(contacts);
};

const getContactByID = (req, res) => {
    const contactID = req.params.id;
    const contact = contactService.getContactByID(contactID);

    if(contact) {
        res.json(contact);
    } else {
        res.status(404).json({
            message: 'Contacto no encontrado en los datos almacenados'
        });
    }
};

// Más métodos que veremos mas adelante

module.exports = {
    getContacts,
    getContactByID,
}