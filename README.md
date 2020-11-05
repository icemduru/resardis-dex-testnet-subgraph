# resardis-dex-testnet-subgraph

Subgraph endpoints:

Queries (HTTP):     http://138.68.84.54:8000/subgraphs/name/resardis/testnet2

Subscriptions (WS): http://138.68.84.54:8001/subgraphs/name/resardis/testnet2

#

Subgraph endpoints:

Queries (HTTP):     http://207.154.244.114:8000/subgraphs/name/resardis/testnet2

Subscriptions (WS): http://207.154.244.114:8001/subgraphs/name/resardis/testnet2

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
  takes {
    offerID 
	pair
    maker
    payGem
    buyGem
    taker
    takeAmt
    giveAmt
    timestamp
    offerType
  }
  
}
```
