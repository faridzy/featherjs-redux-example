const backend = require('./backend/backend.service.js');
const contact = require('./contact/contact.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(backend);
  app.configure(contact);
};
