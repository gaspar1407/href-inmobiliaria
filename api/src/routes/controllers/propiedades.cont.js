const { Propiedades } = require("../../db/db.js");

async function getPropiedades() {
  try {
    const infoProp = await Propiedades.findAll();

    return infoProp;
  } catch (error) {
    console.log(error);
  }
}

async function postPropiedades(
  nombre,
  imagen,
  descripcion,
  localidad,
  precio,
  metros,
  ambientes,
  tipo,
  baños
) {
  try {
    const newProp = await Propiedades.create({
      nombre,
      imagen,
      descripcion,
      localidad,
      precio,
      metros,
      ambientes,
      tipo,
      baños,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPropiedades,
  postPropiedades,
};
