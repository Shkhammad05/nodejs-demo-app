const express = require('express');
const app = express();

// A simple production-ready health check route
app.get('/', (req, res) => {
    res.status(200).json({
        status: "healthy",
        message: "CI/CD Pipeline is fully operational!",
        timestamp: new Date().toISOString()
    });
});

// We only start listening if the file is run directly, allowing test runners to import it safely
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server executing safely on port ${PORT}`);
    });
}

module.exports = app;