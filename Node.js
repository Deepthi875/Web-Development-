// Step 1: Import the Express library
const express = require('express');

// Step 2: Create an instance of an Express app
const app = express();

// Step 3: Define a port number for the server to listen on
const PORT = 3000;

// Step 4: Set up a route for the GET request
// This route will respond when we go to "/message" in the browser or through an API call
app.get('/message', (req, res) => {
  // Step 5: Send a JSON response with a message
  res.json({ message: "Hello, World!" });
});

// Step 6: Start the server and make it listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
