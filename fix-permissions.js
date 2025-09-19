// fix-permissions.js
const fs = require('fs');
const path = require('path');

const addExecutePermission = (filePath) => {
  try {
    // Get the current file permissions (mode)
    const stats = fs.statSync(filePath);
    // Add the execute permission for the owner (user)
    // stats.mode is a number representing the permissions.
    // Using bitwise OR (|) with 0o111 adds the execute permission for user, group, and others.
    // A more precise way is to only add it for the user: stats.mode | 0o100
    fs.chmodSync(filePath, stats.mode | 0o111);
    console.log(`Fixed permissions for: ${filePath}`);
  } catch (err) {
    // It's okay if some files don't exist or we can't access them
  }
};

// Check if the node_modules/.bin directory exists
const binPath = path.join(__dirname, 'node_modules', '.bin');
if (fs.existsSync(binPath)) {
  // Read all files in the .bin directory
  const files = fs.readdirSync(binPath);
  files.forEach(file => {
    const fullPath = path.join(binPath, file);
    addExecutePermission(fullPath);
  });
}

console.log("Pre-commit: Fixed execute permissions in node_modules/.bin/");