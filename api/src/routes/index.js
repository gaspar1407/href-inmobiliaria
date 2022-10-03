 const { Router } = require("express");
const propiedades = require("./propiedades.rout");
const router = Router();

router.use('/propiedades', propiedades);


module.exports = router;
