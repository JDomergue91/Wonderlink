const WonderLinkModel = require("../models/wonderlink.model");

module.exports.getWonderLink = async (req, res) => {
    const links = await WonderLinkModel.find();

    return res.status(200).json(links);
}



module.exports.setWonderLink = async (req, res) => {
    try {
        const newWonderLinkModel = {
            name: req.body.name,
            img: req.body.img,
            outils: req.body.outils.map(tool => ({
                name: tool.name,
                img: tool.img,
                environnementsDisponibles: tool.environnementsDisponibles.map(env => ({
                    envType: env.envType,
                    link: env.link
                }))
            }))
        };

        const link = await WonderLinkModel.create(newWonderLinkModel);

        return res.status(200).json(link);
    } catch (error) {
        return res.status(400).json({ message: "Une erreur est survenue lors de la création de l'enregistrement." });
    }
};

module.exports.getOneWonderLink = async (req, res) => {

    const link = await WonderLinkModel.findById(req.params.id)

    if (!link) {
        res.status(400).json({ message: "Ce lien n'existe pas"});
    }

    return res.status(200).json(link);
}


module.exports.editWonderLink = async (req, res) => {

    const link = await WonderLinkModel.findById(req.params.id)

    if (!link) {
        res.status(400).json({ message: "Ce lien n'existe pas"});
    }

    const updateLink = await WonderLinkModel.findByIdAndUpdate(link, 
        req.body, {
            new: true,
        });

    res.status(200).json(updateLink);
};

module.exports.deleteWonderLink = async (req, res) => {

    const link = await WonderLinkModel.findById(req.params.id)

    if (!link) {
        res.status(400).json({ message: "Ce lien n'existe pas"});
    }

    await link.remove();
    res.status(200).json({ message : "lien supprimé " + link});
};
