import User from "../models/UserModel.js";
export const getUser = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message); // Tetap mencetak error ke console
        res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
    }   
};

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message); // Tetap mencetak error ke console
        res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
    }   
};