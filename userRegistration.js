import querystring from 'querystring';
import fs from 'fs';
import path from 'path';

const filename = new URL(import.meta.url).pathname;
const dirname = path.dirname(filename);

const saveUser = (formData) => {
    // 1. load existing data from fill
    const dataFilePath = path.join(dirname, 'data', 'users.json');
    const existingDataString = fs.readFileSync(dataFilePath, 'utf8');
    let existingData = JSON.parse(existingDataString);
    // 2. append the new to the existing ones
    existingData.push({
        firstName: formData['first-name'],
        lastName: formData['last-name'],
        password: formData.password,
        email: formData.email,
        country: formData.country,
        gender: formData.gender,
    });

    // 3. save the new array with the new user
    const newDataString = JSON.stringify(existingData);
    fs.writeFileSync(dataFilePath, newDataString);
}

const handleUserRegistration = (req, res, ) => {
    req.on('data', (chunk) => {
        const rawData = chunk.toString();
        const formData = querystring.parse(rawData);

        saveUser(formData);
        res.writeHead(302, {
            'Location': '/registration-successful'
        });
        res.end('');
    });
}

export default handleUserRegistration;