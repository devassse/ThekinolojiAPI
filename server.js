require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = require('./src/app');

// Test route to check if the API is running
app.get('/health', (req, res) => {
  res.json({ message: `API running on port ${PORT}` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
