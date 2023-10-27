import {
  ApprovalForAll as ApprovalForAllEvent,
  ArtistWithdraw as ArtistWithdrawEvent,
  ArtistsEarned as ArtistsEarnedEvent,
  OpenEditionPriceUpdated as OpenEditionPriceUpdatedEvent,
  OwnerFeeUpdated as OwnerFeeUpdatedEvent,
  OwnerWithdrew as OwnerWithdrewEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Painted as PaintedEvent,
  Started as StartedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArtistWithdraw(event: ArtistWithdrawEvent): void {
  let entity = new ArtistWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.day = event.params.day
  entity.author = event.params.author
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArtistsEarned(event: ArtistsEarnedEvent): void {
  let entity = new ArtistsEarned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.day = event.params.day
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOpenEditionPriceUpdated(
  event: OpenEditionPriceUpdatedEvent
): void {
  let entity = new OpenEditionPriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerFeeUpdated(event: OwnerFeeUpdatedEvent): void {
  let entity = new OwnerFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerWithdrew(event: OwnerWithdrewEvent): void {
  let entity = new OwnerWithdrew(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePainted(event: PaintedEvent): void {
  let entity = new Painted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.day = event.params.day
  entity.tokenId = event.params.tokenId
  entity.author = event.params.author
  entity.pixels = event.params.pixels

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStarted(event: StartedEvent): void {
  let entity = new Started(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.Contract_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.Contract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
