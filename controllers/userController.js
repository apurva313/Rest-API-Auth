const Datastore = require('nedb-promises');

const users = Datastore.create('db/Users.db');
const userRefreshTokens = Datastore.create('db/UserRefreshTokens.db');
const userInvalidTokens = Datastore.create('db/UserInvalidTokens.db');

exports.getCurrentUser = async (req, res) => {
    try {
        const user = await users.findOne({ _id: req.user.id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.logout = async (req, res) => {
    try {
        await userRefreshTokens.remove({ userId: req.user.id });
        await userRefreshTokens.compactDatafile();

        await userInvalidTokens.insert({
            accessToken: req.accessToken.value,
            userId: req.user.id,
            expirationTime: req.accessToken.exp
        });

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getAdminRoute = (req, res) => {
    return res.status(200).json({ message: 'Only admins can access this route!' });
};

exports.getModeratorRoute = (req, res) => {
    return res.status(200).json({ message: 'Only admins and moderators can access this route!' });
};