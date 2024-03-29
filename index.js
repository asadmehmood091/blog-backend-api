// index.js
import app from './app.js';
import db from './db/models/index.js'; // Assuming you have a Sequelize setup

const PORT = process.env.PORT || 5000;

// Start server only if DB connects successfully
db.sequelize.sync().then(() => {
  console.log("Database connected and synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
