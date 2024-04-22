#!/usr/bin/env node
const axios = require('axios');

async function main() {
    const currency = process.argv[2]
        ? process.argv[2].toUpperCase()
        : 'USD'
    try { 
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const {data} = await axios.get(url);
        console.log(data);
    
        if (!data.bpi[currency]) {
            throw new Error('device inccorect');
        }
        const time = data.time.updated
        const rate = data.bpi[currency].rate
        console.log(`> 1 coin = ${rate} , ${time} , ${currency}`);
    } catch (error) {
        console.error(error);
    }
}

main();