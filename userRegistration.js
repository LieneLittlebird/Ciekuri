import fs from "fs";
import path from "path";

const filename = new URL(import.meta.url).pathname;
const dirname = path.dirname(filename);

const saveUser = (formData) => {
    const dataFilePath = path.join(dirname, "data", "users.json");
    const existingDataString = fs.readFileSync(dataFilePath, "utf8");
    let existingData = JSON.parse(existingDataString);
    existingData.push({
        firstName: formData["first-name"],
        lastName: formData["last-name"],
        password: formData.password,
        email: formData.email,
        country: formData.country,
        gender: formData.gender,
    });

    const newDataString = JSON.stringify(existingData);
    fs.writeFileSync(dataFilePath, newDataString);
};

export default saveUser;
