/**
 * Removes the existing dist* folders
 */
var fs = require('fs');

// directories to remove
const cleanupDirs = ['./dist', './.dist-angular', './.dist-electron'];

cleanupDirs.forEach(dirName => {
  if (fs.existsSync(dirName)) {
    console.log(`Removing dir: ${dirName}`)
    fs.rmdirSync(dirName, { recursive: true });
  }
})
