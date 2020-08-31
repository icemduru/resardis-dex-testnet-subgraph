# resardis-dex-testnet-subgraph

Subgraph endpoints:

Queries (HTTP):     http://138.68.84.54:8000/subgraphs/name/resardis/testnet

Subscriptions (WS): http://138.68.84.54:8001/subgraphs/name/resardis/testnet

##example query
```
{
  makes {
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
  deposits{
    token
    user
    amount
    balance
  }
  
}
```
