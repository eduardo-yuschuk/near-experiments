const fs = require('fs');

function cargarJSON(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

async function encontrarMaximos() {
    try {
        const pools = await cargarJSON('get-pools-response-mainnet.json');
        let index = 0;
        pools.forEach((pool) => {
            pool.index = index++;
        });
        // const sortedPools = pools.sort((a, b) => {
        //     const delta = BigInt(b.shares_total_supply) - BigInt(a.shares_total_supply);
        //     return Number(delta);
        // });
        // const top10Pools = sortedPools.slice(0, 10);

        // console.log('shares_total_supply top 10:');
        // top10Pools.forEach(pool => {
        //     console.log(pool.index, ':', pool.shares_total_supply, ' - ', pool.token_account_ids);
        // });
        const pair = ["wrap.near", "17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1"];
        const filteredPools = pools.filter((pool) => pair.includes(pool.token_account_ids[0]) && pair.includes(pool.token_account_ids[1]));
        console.log(filteredPools);
        ///////////////////////////////////////////////
        // 5512
        
    } catch (err) {
        console.error('Error:', err);
    }
}

encontrarMaximos();