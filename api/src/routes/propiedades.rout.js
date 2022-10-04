const { Router } = require("express");
const {
  getPropiedades,
  postPropiedades,
} = require("./controllers/propiedades.cont");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const propiedades = await getPropiedades();
    return res.status(200).json(propiedades);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      nombre,
      imagen,
      descripcion,
      localidad,
      precio,
      metros,
      ambientes,
      tipo,
      baños,
    } = req.body;

    if (
      !nombre ||
      !imagen ||
      !descripcion ||
      !localidad ||
      !precio ||
      !metros ||
      !ambientes ||
      !tipo ||
      !baños
    )
      return res.status(404).send("Faltan campos obligatorios");

    await postPropiedades(
      nombre,
      imagen,
      descripcion,
      localidad,
      precio,
      metros,
      ambientes,
      tipo,
      baños
    );
    res.status(200).json({ message: "Propiedad creada correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
