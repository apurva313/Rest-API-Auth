const Datastore = require('nedb-promises');
const users = Datastore.create('db/Users.db');

function authorize(roles = []) {
    // roles param can be a single role string (e.g. 'admin') or an array of roles (e.g. ['admin', 'moderator'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return async (req, res, next) => {
        try {
            const user = await users.findOne({ _id: req.user.id });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (roles.length && !roles.includes(user.role)) {
                // user's role is not authorized
                return res.status(403).json({ message: 'Access denied' });
            }

            // authentication and authorization successful
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
}

module.exports = authorize;