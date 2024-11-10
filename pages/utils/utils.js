const fs = require("fs");

const writeJSONFile = (data, filePath = "./userData.json") => {
  let existingData = [];

  if (fs.existsSync(filePath)) {
    existingData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  existingData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
};

const readFromJSONFile = (filePath = "./userData.json") => {
  if (!fs.existsSync(filePath)) {
    console.log("File not Found", filePath);
    return null;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data.length ? data[data.length - 1] : null;
};

module.exports = { writeJSONFile, readFromJSONFile };
