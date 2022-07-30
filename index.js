const axios = require("axios");

axios.get("https://api.gameofthronesquotes.xyz/v1/house/lannister").then(lannisters => {
    console.log(lannisters.data);
}).catch(err => {
    console.log(err);
})
