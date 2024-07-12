import express from 'express';
import axios from 'axios'; 

const PORT = 3000;
const server = express();

server.use(express.static('public'));

server.get('/', async(req, res) => {
    const coords =await axios.get('https://api.wheretheiss.at/v1/satellites/25544');

    res.render('index.ejs', {
        latitude : coords.data.latitude,
        longitude : coords.data.longitude
    });
});

// INITIALIZE SERVER
server.listen(PORT, () => {
    console.log('Server running at port: ' + PORT);
})