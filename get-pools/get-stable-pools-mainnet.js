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
        const stablePools = pools.filter((pool) => {
            return pool.pool_kind == "STABLE_SWAP";
        })
        const sortedPools = stablePools.sort((a, b) => {
            const delta = BigInt(b.shares_total_supply) - BigInt(a.shares_total_supply);
            return Number(delta);
        });
        const top10Pools = sortedPools.slice(0, 10);

        console.log('shares_total_supply top 10:');
        top10Pools.forEach(pool => {
            console.log(pool.shares_total_supply, ' - ', pool.token_account_ids);
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

encontrarMaximos();
