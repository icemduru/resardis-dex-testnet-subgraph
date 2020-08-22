import { BigInt } from "@graphprotocol/graph-ts";
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts";
import {
  Contract,
  LogDeposit,
  LogItemUpdate,
  LogKill,
  LogMake,
  LogMinSell,
  LogOfferType,
  LogSetAuthority,
  LogSetOwner,
  LogSortedOffer,
  LogTake,
  LogTrade,
  LogWithdraw
} from "../generated/Contract/Contract";
import { Deposit } from "../generated/schema";
import { ItemUpdate } from "../generated/schema";
import { Kill } from "../generated/schema";
import { Make } from "../generated/schema";
import { MinSell } from "../generated/schema";
import { OfferType } from "../generated/schema";
import { SetAuthority } from "../generated/schema";
import { SetOwner } from "../generated/schema";
import { SortedOffer } from "../generated/schema";
import { Take } from "../generated/schema";
import { Trade } from "../generated/schema";
import { Withdraw } from "../generated/schema";



export function handleLogDeposit(event: LogDeposit): void {
  let deposit = new Deposit(event.transaction.hash.toHex());
  deposit.token = event.params.token;
  deposit.user = event.params.user;
  deposit.amount = event.params.amount;
  deposit.balance = event.params.balance;
  deposit.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.authority(...)
  // - contract.balanceInUse(...)
  // - contract.balanceOf(...)
  // - contract.best(...)
  // - contract.buyAllAmount(...)
  // - contract.cancel(...)
  // - contract.depositWithdrawHistory(...)
  // - contract.dust(...)
  // - contract.dustId(...)
  // - contract.getBestOffer(...)
  // - contract.getBetterOffer(...)
  // - contract.getBuyAmount(...)
  // - contract.getIdIndexProcessed(...)
  // - contract.getMinSell(...)
  // - contract.getOffer(...)
  // - contract.getOfferCount(...)
  // - contract.getOwner(...)
  // - contract.getPayAmount(...)
  // - contract.getWorseOffer(...)
  // - contract.isActive(...)
  // - contract.lastOfferId(...)
  // - contract.lastOffersHistoryIndex(...)
  // - contract.offer(...)
  // - contract.offerTypes(...)
  // - contract.offers(...)
  // - contract.offersHistory(...)
  // - contract.offersHistoryIndices(...)
  // - contract.owner(...)
  // - contract.rank(...)
  // - contract.sellAllAmount(...)
  // - contract.setMinSell(...)
  // - contract.span(...)
  // - contract.tokens(...)
  // - contract.tokensInUse(...)
}

export function handleLogItemUpdate(event: LogItemUpdate): void {
  let itemupdate = new ItemUpdate(event.transaction.hash.toHex());
  itemupdate.offerItemID = event.params.id;
  itemupdate.save();
}

export function handleLogKill(event: LogKill): void {
  let kill = new Kill(event.transaction.hash.toHex());
  kill.offerID = event.params.id;
  kill.pair = event.params.pair;
  kill.maker = event.params.maker;
  kill.payGem = event.params.payGem;
  kill.buyGem = event.params.buyGem;
  kill.payAmt = event.params.payAmt;
  kill.buyAmt = event.params.buyAmt;
  kill.timestamp = event.params.timestamp;
  kill.save();
}

export function handleLogMake(event: LogMake): void {
  let make = new Make(event.transaction.hash.toHex());
  make.offerID = event.params.id;
  make.pair = event.params.pair;
  make.maker = event.params.maker;
  make.payGem = event.params.payGem;
  make.buyGem = event.params.buyGem;
  make.payAmt = event.params.payAmt;
  make.buyAmt = event.params.buyAmt;
  make.timestamp = event.params.timestamp;
  make.offerType = event.params.offerType;
  make.save();
}

export function handleLogMinSell(event: LogMinSell): void {
  let minsell = new MinSell(event.transaction.hash.toHex());
  minsell.payGem = event.params.payGem;
  minsell.minAmount = event.params.minAmount;
  minsell.caller = event.params.caller;
  minsell.save();
}

export function handleLogOfferType(event: LogOfferType): void {
  let offertype = new OfferType(event.transaction.hash.toHex());
  offertype.offerType = event.params.offerType;
  offertype.state = event.params.state;
  offertype.save();
}

export function handleLogSetAuthority(event: LogSetAuthority): void {
  let setauthority = new SetAuthority(event.transaction.hash.toHex());
  setauthority.authority = event.params.authority;
  setauthority.save();
}

export function handleLogSetOwner(event: LogSetOwner): void {
  let setowner = new SetOwner(event.transaction.hash.toHex());
  setowner.owner = event.params.owner;
  setowner.save();
}

export function handleLogSortedOffer(event: LogSortedOffer): void {
  let sortedoffer = new SortedOffer(event.transaction.hash.toHex());
  sortedoffer.offerID = event.params.id;
  sortedoffer.save();
}

export function handleLogTake(event: LogTake): void {
  let take = new Take(event.transaction.hash.toHex());
  take.offerID = event.params.id;
  take.pair = event.params.pair;
  take.maker = event.params.maker;
  take.payGem = event.params.payGem;
  take.buyGem = event.params.buyGem;
  take.taker = event.params.taker;
  take.takeAmt = event.params.takeAmt;
  take.giveAmt = event.params.giveAmt;
  take.timestamp = event.params.timestamp;
  take.offerType = event.params.offerType;
  take.save();
}

export function handleLogTrade(event: LogTrade): void {
  let trade = new Trade(event.transaction.hash.toHex());
  trade.payAmt = event.params.payAmt;
  trade.payGem = event.params.payGem;
  trade.buyAmt = event.params.buyAmt;
  trade.buyGem = event.params.buyGem;
  trade.timestamp = event.params.timestamp;
  trade.save();
}

export function handleLogWithdraw(event: LogWithdraw): void {
  let withdraw = new Withdraw(event.transaction.hash.toHex());
  withdraw.token = event.params.token;
  withdraw.user = event.params.user;
  withdraw.amount = event.params.amount;
  withdraw.balance = event.params.balance;
  withdraw.save();
}
