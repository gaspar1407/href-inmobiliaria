const { Router } = require("express");
const { getPropiedades } = require("./controllers/propiedades.cont");


const router = Router();


router.get('/', async (req, res) => {
    try {
        const propiedades = await getPropiedades();
        return res.status(200).json(propiedades);
    } catch (error) {
       console.log(error);
    }
});

module.exports = router;