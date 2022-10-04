const { Propiedades } = require("../../db/db.js");

async function getPropiedades() {
  try {
    const infoProp = await Propiedades.findAll();

    console.log(infoProp);
    return infoProp;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPropiedades,
};
