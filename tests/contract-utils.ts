import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  ArtistWithdraw,
  ArtistsEarned,
  OpenEditionPriceUpdated,
  OwnerFeeUpdated,
  OwnerWithdrew,
  OwnershipTransferred,
  Painted,
  Started,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/Contract/Contract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createArtistWithdrawEvent(
  day: BigInt,
  author: Address,
  amount: BigInt
): ArtistWithdraw {
  let artistWithdrawEvent = changetype<ArtistWithdraw>(newMockEvent())

  artistWithdrawEvent.parameters = new Array()

  artistWithdrawEvent.parameters.push(
    new ethereum.EventParam("day", ethereum.Value.fromUnsignedBigInt(day))
  )
  artistWithdrawEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  artistWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return artistWithdrawEvent
}

export function createArtistsEarnedEvent(
  day: BigInt,
  amount: BigInt
): ArtistsEarned {
  let artistsEarnedEvent = changetype<ArtistsEarned>(newMockEvent())

  artistsEarnedEvent.parameters = new Array()

  artistsEarnedEvent.parameters.push(
    new ethereum.EventParam("day", ethereum.Value.fromUnsignedBigInt(day))
  )
  artistsEarnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return artistsEarnedEvent
}

export function createOpenEditionPriceUpdatedEvent(
  price: BigInt
): OpenEditionPriceUpdated {
  let openEditionPriceUpdatedEvent = changetype<OpenEditionPriceUpdated>(
    newMockEvent()
  )

  openEditionPriceUpdatedEvent.parameters = new Array()

  openEditionPriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return openEditionPriceUpdatedEvent
}

export function createOwnerFeeUpdatedEvent(fee: BigInt): OwnerFeeUpdated {
  let ownerFeeUpdatedEvent = changetype<OwnerFeeUpdated>(newMockEvent())

  ownerFeeUpdatedEvent.parameters = new Array()

  ownerFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return ownerFeeUpdatedEvent
}

export function createOwnerWithdrewEvent(
  amount: BigInt,
  to: Address
): OwnerWithdrew {
  let ownerWithdrewEvent = changetype<OwnerWithdrew>(newMockEvent())

  ownerWithdrewEvent.parameters = new Array()

  ownerWithdrewEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  ownerWithdrewEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownerWithdrewEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPaintedEvent(
  day: BigInt,
  tokenId: BigInt,
  author: Address,
  pixels: Bytes
): Painted {
  let paintedEvent = changetype<Painted>(newMockEvent())

  paintedEvent.parameters = new Array()

  paintedEvent.parameters.push(
    new ethereum.EventParam("day", ethereum.Value.fromUnsignedBigInt(day))
  )
  paintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  paintedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  paintedEvent.parameters.push(
    new ethereum.EventParam("pixels", ethereum.Value.fromBytes(pixels))
  )

  return paintedEvent
}

export function createStartedEvent(timestamp: BigInt): Started {
  let startedEvent = changetype<Started>(newMockEvent())

  startedEvent.parameters = new Array()

  startedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return startedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
