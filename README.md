# near-experiments

## metadata call on v2.ref-finance.near
### command

```
 near contract call-function as-read-only v2.ref-finance.near metadata json-args {} network-config mainnet now
```

### result

```
--------------
No logs
--------------
Result:
{
  "admin_fee_bps": 2000,
  "auto_whitelisted_postfix": [
    ".tkn.near"
  ],
  "boost_farm_id": "boostfarm.ref-labs.near",
  "burrowland_id": "contract.main.burrow.near",
  "cumulative_info_record_interval_sec": 720,
  "guardians": [
    "nknight.near",
    "colibri.near",
    "reffer.near",
    "sunhao.near",
    "mob.near"
  ],
  "owner": "ref-finance.sputnik-dao.near",
  "pool_count": 5079,
  "state": "Running",
  "version": "1.9.1",
  "wnear_id": "wrap.near"
}
--------------
```
