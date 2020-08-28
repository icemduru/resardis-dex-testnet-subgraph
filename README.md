# resardis-dex-testnet-subgraph

Subgraph endpoints:

Queries (HTTP):     http://138.68.84.54:8000/subgraphs/name/resardis/test2

Subscriptions (WS): http://138.68.84.54:8001/subgraphs/name/resardis/test2


##example query
```
{
  makes(first: 5) {
    offerID 
    pair
    maker
    payGem
    payAmt
    buyGem
    buyAmt
    timestamp
    offerType
    
  }
}
```
# uint update

Subgraph endpoints:
Queries (HTTP):     http://138.68.84.54:8000/subgraphs/name/resardis/resardis3
Subscriptions (WS): http://138.68.84.54:8001/subgraphs/name/resardis/resardis3
