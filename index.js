const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();

// Configure body parser
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('REST API Authentication and Authorization');
});

app.listen(3000, () => console.log('Server started on port 3000'));