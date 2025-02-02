/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

/**
 * @dev Emitted when assetRate is updated
 *
 */
export type AssetRateUpdatedEvent = {
  __typename?: 'AssetRateUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  newRate: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AssetRateUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AssetRateUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRate?: InputMaybe<Scalars['BigInt']['input']>;
  newRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AssetRateUpdatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AssetRateUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  NewRate = 'newRate',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * @dev Represents the global Bonding contract configuration.
 * Only one instance of this entity (id: "BondingContract") is stored.
 *
 */
export type BondingContract = {
  __typename?: 'BondingContract';
  assetRate: Scalars['BigInt']['output'];
  createdAt: Scalars['BigInt']['output'];
  currentFees?: Maybe<Fees>;
  factory: Scalars['Bytes']['output'];
  ferc20ImplementationAddress?: Maybe<Scalars['Bytes']['output']>;
  gradThreshold: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  initialSupply: Scalars['BigInt']['output'];
  maxTokenTransferAmount: Scalars['BigInt']['output'];
  nextTokenId: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  router: Scalars['Bytes']['output'];
  treasury?: Maybe<Scalars['Bytes']['output']>;
  uniswapV2Router?: Maybe<Scalars['Bytes']['output']>;
  updatedAt: Scalars['BigInt']['output'];
};

export type BondingContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BondingContract_Filter>>>;
  assetRate?: InputMaybe<Scalars['BigInt']['input']>;
  assetRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFees?: InputMaybe<Scalars['String']['input']>;
  currentFees_?: InputMaybe<Fees_Filter>;
  currentFees_contains?: InputMaybe<Scalars['String']['input']>;
  currentFees_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentFees_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentFees_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentFees_gt?: InputMaybe<Scalars['String']['input']>;
  currentFees_gte?: InputMaybe<Scalars['String']['input']>;
  currentFees_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentFees_lt?: InputMaybe<Scalars['String']['input']>;
  currentFees_lte?: InputMaybe<Scalars['String']['input']>;
  currentFees_not?: InputMaybe<Scalars['String']['input']>;
  currentFees_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentFees_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentFees_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentFees_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentFees_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentFees_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentFees_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentFees_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentFees_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  factory?: InputMaybe<Scalars['Bytes']['input']>;
  factory_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  factory_lt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_lte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ferc20ImplementationAddress?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ferc20ImplementationAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplementationAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gradThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  gradThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gradThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gradThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gradThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gradThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gradThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  gradThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  initialSupply?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxTokenTransferAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maxTokenTransferAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTokenTransferAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTokenTransferAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxTokenTransferAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTokenTransferAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTokenTransferAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxTokenTransferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  nextTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BondingContract_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  router?: InputMaybe<Scalars['Bytes']['input']>;
  router_contains?: InputMaybe<Scalars['Bytes']['input']>;
  router_gt?: InputMaybe<Scalars['Bytes']['input']>;
  router_gte?: InputMaybe<Scalars['Bytes']['input']>;
  router_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  router_lt?: InputMaybe<Scalars['Bytes']['input']>;
  router_lte?: InputMaybe<Scalars['Bytes']['input']>;
  router_not?: InputMaybe<Scalars['Bytes']['input']>;
  router_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  router_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  treasury?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  treasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  treasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  uniswapV2Router?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_contains?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_gt?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_gte?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  uniswapV2Router_lt?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_lte?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_not?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Router_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BondingContract_OrderBy {
  AssetRate = 'assetRate',
  CreatedAt = 'createdAt',
  CurrentFees = 'currentFees',
  CurrentFeesCreatedAt = 'currentFees__createdAt',
  CurrentFeesFeePercentage = 'currentFees__feePercentage',
  CurrentFeesId = 'currentFees__id',
  CurrentFeesReferrerPercentage = 'currentFees__referrerPercentage',
  Factory = 'factory',
  Ferc20ImplementationAddress = 'ferc20ImplementationAddress',
  GradThreshold = 'gradThreshold',
  Id = 'id',
  InitialSupply = 'initialSupply',
  MaxTokenTransferAmount = 'maxTokenTransferAmount',
  NextTokenId = 'nextTokenId',
  Owner = 'owner',
  Router = 'router',
  Treasury = 'treasury',
  UniswapV2Router = 'uniswapV2Router',
  UpdatedAt = 'updatedAt'
}

/**
 * @dev Emitted each time the bonding contract address is changed (BondingSet).
 *
 */
export type BondingSetEvent = {
  __typename?: 'BondingSetEvent';
  blockNumber: Scalars['BigInt']['output'];
  bondingAddress: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BondingSetEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BondingSetEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bondingAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bondingAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BondingSetEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BondingSetEvent_OrderBy {
  BlockNumber = 'blockNumber',
  BondingAddress = 'bondingAddress',
  Id = 'id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Candle entity for a given pair (Bonding DEX pair or Uniswap pair if needed).
 *
 */
export type Candle = {
  __typename?: 'Candle';
  close: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  pair: Scalars['Bytes']['output'];
  periodStart: Scalars['BigInt']['output'];
  volume: Scalars['BigDecimal']['output'];
};

export type Candle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Candle_Filter>>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Candle_Filter>>>;
  pair?: InputMaybe<Scalars['Bytes']['input']>;
  pair_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pair_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pair_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pair_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pair_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pair_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pair_not?: InputMaybe<Scalars['Bytes']['input']>;
  pair_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pair_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  periodStart?: InputMaybe<Scalars['BigInt']['input']>;
  periodStart_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStart_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStart_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStart_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStart_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStart_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodStart_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Candle_OrderBy {
  Close = 'close',
  High = 'high',
  Id = 'id',
  Low = 'low',
  Open = 'open',
  Pair = 'pair',
  PeriodStart = 'periodStart',
  Volume = 'volume'
}

/**
 * @dev Emitted when a curator is whitelisted or de-whitelisted (CuratorWhitelisted).
 *
 */
export type CuratorWhitelistedEvent = {
  __typename?: 'CuratorWhitelistedEvent';
  blockNumber: Scalars['BigInt']['output'];
  curator: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isWhitelisted: Scalars['Boolean']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CuratorWhitelistedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CuratorWhitelistedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curator?: InputMaybe<Scalars['Bytes']['input']>;
  curator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  curator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  curator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  curator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  curator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  curator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  curator_not?: InputMaybe<Scalars['Bytes']['input']>;
  curator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  curator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isWhitelisted?: InputMaybe<Scalars['Boolean']['input']>;
  isWhitelisted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isWhitelisted_not?: InputMaybe<Scalars['Boolean']['input']>;
  isWhitelisted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CuratorWhitelistedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CuratorWhitelistedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Curator = 'curator',
  Id = 'id',
  IsWhitelisted = 'isWhitelisted',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type CuratorsFeesDistModeratorRecipient = {
  __typename?: 'CuratorsFeesDistModeratorRecipient';
  curatorsFeesDistSetByModeratorEvent: CuratorsFeesDistSetByModeratorEvent;
  id: Scalars['ID']['output'];
  ratioDenominator: Scalars['BigInt']['output'];
  ratioNumerator: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
};

export type CuratorsFeesDistModeratorRecipient_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CuratorsFeesDistModeratorRecipient_Filter>>>;
  curatorsFeesDistSetByModeratorEvent?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_?: InputMaybe<CuratorsFeesDistSetByModeratorEvent_Filter>;
  curatorsFeesDistSetByModeratorEvent_contains?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_gt?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_gte?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curatorsFeesDistSetByModeratorEvent_lt?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_lte?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curatorsFeesDistSetByModeratorEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByModeratorEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CuratorsFeesDistModeratorRecipient_Filter>>>;
  ratioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CuratorsFeesDistModeratorRecipient_OrderBy {
  CuratorsFeesDistSetByModeratorEvent = 'curatorsFeesDistSetByModeratorEvent',
  CuratorsFeesDistSetByModeratorEventAgentToken = 'curatorsFeesDistSetByModeratorEvent__agentToken',
  CuratorsFeesDistSetByModeratorEventBlockNumber = 'curatorsFeesDistSetByModeratorEvent__blockNumber',
  CuratorsFeesDistSetByModeratorEventId = 'curatorsFeesDistSetByModeratorEvent__id',
  CuratorsFeesDistSetByModeratorEventTimestamp = 'curatorsFeesDistSetByModeratorEvent__timestamp',
  CuratorsFeesDistSetByModeratorEventTransactionHash = 'curatorsFeesDistSetByModeratorEvent__transactionHash',
  Id = 'id',
  RatioDenominator = 'ratioDenominator',
  RatioNumerator = 'ratioNumerator',
  Recipient = 'recipient'
}

/**
 * @dev Emitted when curators fees dist are set by Moderator (CuratorsFeesDistSetByModerator).
 *
 */
export type CuratorsFeesDistSetByModeratorEvent = {
  __typename?: 'CuratorsFeesDistSetByModeratorEvent';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  recipients: Array<CuratorsFeesDistModeratorRecipient>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


/**
 * @dev Emitted when curators fees dist are set by Moderator (CuratorsFeesDistSetByModerator).
 *
 */
export type CuratorsFeesDistSetByModeratorEventRecipientsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistModeratorRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CuratorsFeesDistModeratorRecipient_Filter>;
};

export type CuratorsFeesDistSetByModeratorEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CuratorsFeesDistSetByModeratorEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CuratorsFeesDistSetByModeratorEvent_Filter>>>;
  recipients_?: InputMaybe<CuratorsFeesDistModeratorRecipient_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CuratorsFeesDistSetByModeratorEvent_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Recipients = 'recipients',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when curators fees dist are set by the tokenOwner (CuratorsFeesDistSetByUser).
 *
 */
export type CuratorsFeesDistSetByUserEvent = {
  __typename?: 'CuratorsFeesDistSetByUserEvent';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  recipients: Array<CuratorsFeesDistUserRecipient>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


/**
 * @dev Emitted when curators fees dist are set by the tokenOwner (CuratorsFeesDistSetByUser).
 *
 */
export type CuratorsFeesDistSetByUserEventRecipientsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistUserRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CuratorsFeesDistUserRecipient_Filter>;
};

export type CuratorsFeesDistSetByUserEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CuratorsFeesDistSetByUserEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CuratorsFeesDistSetByUserEvent_Filter>>>;
  recipients_?: InputMaybe<CuratorsFeesDistUserRecipient_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CuratorsFeesDistSetByUserEvent_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Recipients = 'recipients',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type CuratorsFeesDistUserRecipient = {
  __typename?: 'CuratorsFeesDistUserRecipient';
  curatorsFeesDistSetByUserEvent: CuratorsFeesDistSetByUserEvent;
  id: Scalars['ID']['output'];
  ratioDenominator: Scalars['BigInt']['output'];
  ratioNumerator: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
};

export type CuratorsFeesDistUserRecipient_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CuratorsFeesDistUserRecipient_Filter>>>;
  curatorsFeesDistSetByUserEvent?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_?: InputMaybe<CuratorsFeesDistSetByUserEvent_Filter>;
  curatorsFeesDistSetByUserEvent_contains?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_gt?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_gte?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curatorsFeesDistSetByUserEvent_lt?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_lte?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curatorsFeesDistSetByUserEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  curatorsFeesDistSetByUserEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CuratorsFeesDistUserRecipient_Filter>>>;
  ratioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CuratorsFeesDistUserRecipient_OrderBy {
  CuratorsFeesDistSetByUserEvent = 'curatorsFeesDistSetByUserEvent',
  CuratorsFeesDistSetByUserEventAgentToken = 'curatorsFeesDistSetByUserEvent__agentToken',
  CuratorsFeesDistSetByUserEventBlockNumber = 'curatorsFeesDistSetByUserEvent__blockNumber',
  CuratorsFeesDistSetByUserEventId = 'curatorsFeesDistSetByUserEvent__id',
  CuratorsFeesDistSetByUserEventTimestamp = 'curatorsFeesDistSetByUserEvent__timestamp',
  CuratorsFeesDistSetByUserEventTransactionHash = 'curatorsFeesDistSetByUserEvent__transactionHash',
  Id = 'id',
  RatioDenominator = 'ratioDenominator',
  RatioNumerator = 'ratioNumerator',
  Recipient = 'recipient'
}

export type FeeCollectedEvent = {
  __typename?: 'FeeCollectedEvent';
  agentTokenFeeAmount: Scalars['BigInt']['output'];
  assetTokenFeeAmount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  positionTokenId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  transactionHash: Scalars['Bytes']['output'];
};

export type FeeCollectedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentTokenFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agentTokenFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FeeCollectedEvent_Filter>>>;
  assetTokenFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetTokenFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeeCollectedEvent_Filter>>>;
  positionTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FeeCollectedEvent_OrderBy {
  AgentTokenFeeAmount = 'agentTokenFeeAmount',
  AssetTokenFeeAmount = 'assetTokenFeeAmount',
  Id = 'id',
  PositionTokenId = 'positionTokenId',
  Recipient = 'recipient',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted whenever fee distribution updates happen (FeeDistUpdate).
 * We store the type of distribution: 'OwnersFees' or 'CuratorsFees', plus the list of recipients.
 *
 */
export type FeeDistUpdateEvent = {
  __typename?: 'FeeDistUpdateEvent';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  feeDistType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  recipients: Array<FeeDistUpdateRecipient>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


/**
 * @dev Emitted whenever fee distribution updates happen (FeeDistUpdate).
 * We store the type of distribution: 'OwnersFees' or 'CuratorsFees', plus the list of recipients.
 *
 */
export type FeeDistUpdateEventRecipientsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeDistUpdateRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeeDistUpdateRecipient_Filter>;
};

export type FeeDistUpdateEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FeeDistUpdateEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeDistType?: InputMaybe<Scalars['String']['input']>;
  feeDistType_contains?: InputMaybe<Scalars['String']['input']>;
  feeDistType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistType_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeDistType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistType_gt?: InputMaybe<Scalars['String']['input']>;
  feeDistType_gte?: InputMaybe<Scalars['String']['input']>;
  feeDistType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeDistType_lt?: InputMaybe<Scalars['String']['input']>;
  feeDistType_lte?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not_contains?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeDistType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeDistType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistType_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeDistType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeeDistUpdateEvent_Filter>>>;
  recipients_?: InputMaybe<FeeDistUpdateRecipient_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FeeDistUpdateEvent_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  FeeDistType = 'feeDistType',
  Id = 'id',
  Recipients = 'recipients',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Stores each distribution recipient for a FeeDistUpdateEvent.
 *
 */
export type FeeDistUpdateRecipient = {
  __typename?: 'FeeDistUpdateRecipient';
  feeDistUpdateEvent: FeeDistUpdateEvent;
  id: Scalars['ID']['output'];
  ratioDenominator: Scalars['BigInt']['output'];
  ratioNumerator: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
};

export type FeeDistUpdateRecipient_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeDistUpdateRecipient_Filter>>>;
  feeDistUpdateEvent?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_?: InputMaybe<FeeDistUpdateEvent_Filter>;
  feeDistUpdateEvent_contains?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_gt?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_gte?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeDistUpdateEvent_lt?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_lte?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeDistUpdateEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeDistUpdateEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeeDistUpdateRecipient_Filter>>>;
  ratioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FeeDistUpdateRecipient_OrderBy {
  FeeDistUpdateEvent = 'feeDistUpdateEvent',
  FeeDistUpdateEventAgentToken = 'feeDistUpdateEvent__agentToken',
  FeeDistUpdateEventBlockNumber = 'feeDistUpdateEvent__blockNumber',
  FeeDistUpdateEventFeeDistType = 'feeDistUpdateEvent__feeDistType',
  FeeDistUpdateEventId = 'feeDistUpdateEvent__id',
  FeeDistUpdateEventTimestamp = 'feeDistUpdateEvent__timestamp',
  FeeDistUpdateEventTransactionHash = 'feeDistUpdateEvent__transactionHash',
  Id = 'id',
  RatioDenominator = 'ratioDenominator',
  RatioNumerator = 'ratioNumerator',
  Recipient = 'recipient'
}

/**
 * @dev Represents the fees structure from the contract.
 * Fee = feePercentage (basis points), referrerPercentage (basis points).
 *
 */
export type Fees = {
  __typename?: 'Fees';
  createdAt: Scalars['BigInt']['output'];
  feePercentage: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  referrerPercentage: Scalars['BigInt']['output'];
};

/**
 * @dev Emitted when fees are distributed
 *
 */
export type FeesDistributedEvent = {
  __typename?: 'FeesDistributedEvent';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  referrer?: Maybe<User>;
  referrerFeeAmount: Scalars['BigInt']['output'];
  stakeholdersFeeAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  totalFeeAmount: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: User;
};

export type FeesDistributedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FeesDistributedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeesDistributedEvent_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrerFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referrerFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakeholdersFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakeholdersFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeholdersFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeholdersFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeholdersFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeholdersFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeholdersFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakeholdersFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum FeesDistributedEvent_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Referrer = 'referrer',
  ReferrerFeeAmount = 'referrerFeeAmount',
  ReferrerId = 'referrer__id',
  StakeholdersFeeAmount = 'stakeholdersFeeAmount',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TotalFeeAmount = 'totalFeeAmount',
  TransactionHash = 'transactionHash',
  User = 'user',
  UserId = 'user__id'
}

/**
 * @dev Emitted each time the fees ratio is set (FeesRatioSet).
 *
 */
export type FeesRatioSetEvent = {
  __typename?: 'FeesRatioSetEvent';
  blockNumber: Scalars['BigInt']['output'];
  denominator: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  numerator: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FeesRatioSetEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeesRatioSetEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  denominator?: InputMaybe<Scalars['BigInt']['input']>;
  denominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  denominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  denominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  denominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  denominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  denominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  denominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numerator?: InputMaybe<Scalars['BigInt']['input']>;
  numerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  numerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeesRatioSetEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FeesRatioSetEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Denominator = 'denominator',
  Id = 'id',
  Numerator = 'numerator',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when Fees are updated
 *
 */
export type FeesUpdatedEvent = {
  __typename?: 'FeesUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  feePercentage: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  referrerPercentage: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FeesUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeesUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feePercentage?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feePercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeesUpdatedEvent_Filter>>>;
  referrerPercentage?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referrerPercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FeesUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  FeePercentage = 'feePercentage',
  Id = 'id',
  LogIndex = 'logIndex',
  ReferrerPercentage = 'referrerPercentage',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Fees_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Fees_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feePercentage?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feePercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  feePercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Fees_Filter>>>;
  referrerPercentage?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referrerPercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  referrerPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Fees_OrderBy {
  CreatedAt = 'createdAt',
  FeePercentage = 'feePercentage',
  Id = 'id',
  ReferrerPercentage = 'referrerPercentage'
}

/**
 * @dev Emitted when FERC20 implementation updated
 *
 */
export type Ferc20UpdatedEvent = {
  __typename?: 'Ferc20UpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  ferc20ImplemenatationAddress: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Ferc20UpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Ferc20UpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ferc20ImplemenatationAddress?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ferc20ImplemenatationAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ferc20ImplemenatationAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Ferc20UpdatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Ferc20UpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Ferc20ImplemenatationAddress = 'ferc20ImplemenatationAddress',
  Id = 'id',
  LogIndex = 'logIndex',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when gradThreshold is updated
 *
 */
export type GradThresholdUpdatedEvent = {
  __typename?: 'GradThresholdUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  newThreshold: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GradThresholdUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GradThresholdUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  newThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  newThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GradThresholdUpdatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum GradThresholdUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  NewThreshold = 'newThreshold',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when token is graduated to Uniswap
 *
 */
export type GraduatedEvent = {
  __typename?: 'GraduatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  transactionHash: Scalars['Bytes']['output'];
  uniswapV2Pair: Scalars['Bytes']['output'];
};

export type GraduatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GraduatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GraduatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  uniswapV2Pair?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_contains?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_gt?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_gte?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  uniswapV2Pair_lt?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_lte?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_not?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  uniswapV2Pair_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum GraduatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash',
  UniswapV2Pair = 'uniswapV2Pair'
}

/**
 * @dev Emitted when initialSupply is updated
 *
 */
export type InitialSupplyUpdatedEvent = {
  __typename?: 'InitialSupplyUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  newInitialSupply: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type InitialSupplyUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InitialSupplyUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newInitialSupply?: InputMaybe<Scalars['BigInt']['input']>;
  newInitialSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newInitialSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newInitialSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newInitialSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newInitialSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newInitialSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  newInitialSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<InitialSupplyUpdatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum InitialSupplyUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  NewInitialSupply = 'newInitialSupply',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when a new token is launched
 *
 */
export type LaunchedEvent = {
  __typename?: 'LaunchedEvent';
  blockNumber: Scalars['BigInt']['output'];
  creator: User;
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  pairAddress: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  tokenAddress: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LaunchedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LaunchedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LaunchedEvent_Filter>>>;
  pairAddress?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pairAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LaunchedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Creator = 'creator',
  CreatorId = 'creator__id',
  Id = 'id',
  LogIndex = 'logIndex',
  PairAddress = 'pairAddress',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'tokenAddress',
  TokenId = 'tokenId',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when maxTokenTransferAmount is updated
 *
 */
export type MaxTokenTransferAmountUpdatedEvent = {
  __typename?: 'MaxTokenTransferAmountUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  newMaxTokenTransferAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MaxTokenTransferAmountUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MaxTokenTransferAmountUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaxTokenTransferAmount?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxTokenTransferAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxTokenTransferAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxTokenTransferAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaxTokenTransferAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxTokenTransferAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxTokenTransferAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxTokenTransferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MaxTokenTransferAmountUpdatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MaxTokenTransferAmountUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  NewMaxTokenTransferAmount = 'newMaxTokenTransferAmount',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnersFeesDistOwnerRecipient = {
  __typename?: 'OwnersFeesDistOwnerRecipient';
  id: Scalars['ID']['output'];
  ownersFeesDistSetByOwnerEvent: OwnersFeesDistSetByOwnerEvent;
  ratioDenominator: Scalars['BigInt']['output'];
  ratioNumerator: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
};

export type OwnersFeesDistOwnerRecipient_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnersFeesDistOwnerRecipient_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnersFeesDistOwnerRecipient_Filter>>>;
  ownersFeesDistSetByOwnerEvent?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_?: InputMaybe<OwnersFeesDistSetByOwnerEvent_Filter>;
  ownersFeesDistSetByOwnerEvent_contains?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_gt?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_gte?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownersFeesDistSetByOwnerEvent_lt?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_lte?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownersFeesDistSetByOwnerEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByOwnerEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ratioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnersFeesDistOwnerRecipient_OrderBy {
  Id = 'id',
  OwnersFeesDistSetByOwnerEvent = 'ownersFeesDistSetByOwnerEvent',
  OwnersFeesDistSetByOwnerEventAgentToken = 'ownersFeesDistSetByOwnerEvent__agentToken',
  OwnersFeesDistSetByOwnerEventBlockNumber = 'ownersFeesDistSetByOwnerEvent__blockNumber',
  OwnersFeesDistSetByOwnerEventId = 'ownersFeesDistSetByOwnerEvent__id',
  OwnersFeesDistSetByOwnerEventTimestamp = 'ownersFeesDistSetByOwnerEvent__timestamp',
  OwnersFeesDistSetByOwnerEventTransactionHash = 'ownersFeesDistSetByOwnerEvent__transactionHash',
  RatioDenominator = 'ratioDenominator',
  RatioNumerator = 'ratioNumerator',
  Recipient = 'recipient'
}

/**
 * @dev Child entity for owners fees distribution set by moderator.
 *
 */
export type OwnersFeesDistRecipient = {
  __typename?: 'OwnersFeesDistRecipient';
  id: Scalars['ID']['output'];
  ownersFeesDistSetByModeratorEvent: OwnersFeesDistSetByModeratorEvent;
  ratioDenominator: Scalars['BigInt']['output'];
  ratioNumerator: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
};

export type OwnersFeesDistRecipient_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnersFeesDistRecipient_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnersFeesDistRecipient_Filter>>>;
  ownersFeesDistSetByModeratorEvent?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_?: InputMaybe<OwnersFeesDistSetByModeratorEvent_Filter>;
  ownersFeesDistSetByModeratorEvent_contains?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_gt?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_gte?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownersFeesDistSetByModeratorEvent_lt?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_lte?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownersFeesDistSetByModeratorEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownersFeesDistSetByModeratorEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ratioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ratioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  ratioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnersFeesDistRecipient_OrderBy {
  Id = 'id',
  OwnersFeesDistSetByModeratorEvent = 'ownersFeesDistSetByModeratorEvent',
  OwnersFeesDistSetByModeratorEventAgentToken = 'ownersFeesDistSetByModeratorEvent__agentToken',
  OwnersFeesDistSetByModeratorEventBlockNumber = 'ownersFeesDistSetByModeratorEvent__blockNumber',
  OwnersFeesDistSetByModeratorEventId = 'ownersFeesDistSetByModeratorEvent__id',
  OwnersFeesDistSetByModeratorEventTimestamp = 'ownersFeesDistSetByModeratorEvent__timestamp',
  OwnersFeesDistSetByModeratorEventTransactionHash = 'ownersFeesDistSetByModeratorEvent__transactionHash',
  RatioDenominator = 'ratioDenominator',
  RatioNumerator = 'ratioNumerator',
  Recipient = 'recipient'
}

/**
 * @dev Emitted when owners fees dist are set by Moderator (OwnersFeesDistSetByModerator).
 * We store the agentToken and the recipients array.
 *
 */
export type OwnersFeesDistSetByModeratorEvent = {
  __typename?: 'OwnersFeesDistSetByModeratorEvent';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  recipients: Array<OwnersFeesDistRecipient>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


/**
 * @dev Emitted when owners fees dist are set by Moderator (OwnersFeesDistSetByModerator).
 * We store the agentToken and the recipients array.
 *
 */
export type OwnersFeesDistSetByModeratorEventRecipientsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnersFeesDistRecipient_Filter>;
};

export type OwnersFeesDistSetByModeratorEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OwnersFeesDistSetByModeratorEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnersFeesDistSetByModeratorEvent_Filter>>>;
  recipients_?: InputMaybe<OwnersFeesDistRecipient_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnersFeesDistSetByModeratorEvent_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Recipients = 'recipients',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when owners fees dist are set by the tokenOwner (OwnersFeesDistSetByOwner).
 *
 */
export type OwnersFeesDistSetByOwnerEvent = {
  __typename?: 'OwnersFeesDistSetByOwnerEvent';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  recipients: Array<OwnersFeesDistOwnerRecipient>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


/**
 * @dev Emitted when owners fees dist are set by the tokenOwner (OwnersFeesDistSetByOwner).
 *
 */
export type OwnersFeesDistSetByOwnerEventRecipientsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistOwnerRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnersFeesDistOwnerRecipient_Filter>;
};

export type OwnersFeesDistSetByOwnerEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OwnersFeesDistSetByOwnerEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnersFeesDistSetByOwnerEvent_Filter>>>;
  recipients_?: InputMaybe<OwnersFeesDistOwnerRecipient_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnersFeesDistSetByOwnerEvent_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Recipients = 'recipients',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Tracks the platform fees that accumulate for a given token.
 *
 */
export type PlatformFee = {
  __typename?: 'PlatformFee';
  id: Scalars['ID']['output'];
  lastClaimedAt: Scalars['BigInt']['output'];
  token: Token;
  totalAmount: Scalars['BigInt']['output'];
};

export type PlatformFee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PlatformFee_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastClaimedAt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastClaimedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PlatformFee_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum PlatformFee_OrderBy {
  Id = 'id',
  LastClaimedAt = 'lastClaimedAt',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TotalAmount = 'totalAmount'
}

/**
 * @dev Emitted when platform fees are claimed
 *
 */
export type PlatformFeesClaimedEvent = {
  __typename?: 'PlatformFeesClaimedEvent';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  transactionHash: Scalars['Bytes']['output'];
};

export type PlatformFeesClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PlatformFeesClaimedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PlatformFeesClaimedEvent_Filter>>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PlatformFeesClaimedEvent_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Recipient = 'recipient',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash'
}

export type PoolCreatedAndInitializedEvent = {
  __typename?: 'PoolCreatedAndInitializedEvent';
  agentToken: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  poolAddress: Scalars['Bytes']['output'];
  positionTokenId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PoolCreatedAndInitializedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PoolCreatedAndInitializedEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolCreatedAndInitializedEvent_Filter>>>;
  poolAddress?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  poolAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  positionTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PoolCreatedAndInitializedEvent_OrderBy {
  AgentToken = 'agentToken',
  Id = 'id',
  PoolAddress = 'poolAddress',
  PositionTokenId = 'positionTokenId',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  assetRateUpdatedEvent?: Maybe<AssetRateUpdatedEvent>;
  assetRateUpdatedEvents: Array<AssetRateUpdatedEvent>;
  bondingContract?: Maybe<BondingContract>;
  bondingContracts: Array<BondingContract>;
  bondingSetEvent?: Maybe<BondingSetEvent>;
  bondingSetEvents: Array<BondingSetEvent>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  curatorWhitelistedEvent?: Maybe<CuratorWhitelistedEvent>;
  curatorWhitelistedEvents: Array<CuratorWhitelistedEvent>;
  curatorsFeesDistModeratorRecipient?: Maybe<CuratorsFeesDistModeratorRecipient>;
  curatorsFeesDistModeratorRecipients: Array<CuratorsFeesDistModeratorRecipient>;
  curatorsFeesDistSetByModeratorEvent?: Maybe<CuratorsFeesDistSetByModeratorEvent>;
  curatorsFeesDistSetByModeratorEvents: Array<CuratorsFeesDistSetByModeratorEvent>;
  curatorsFeesDistSetByUserEvent?: Maybe<CuratorsFeesDistSetByUserEvent>;
  curatorsFeesDistSetByUserEvents: Array<CuratorsFeesDistSetByUserEvent>;
  curatorsFeesDistUserRecipient?: Maybe<CuratorsFeesDistUserRecipient>;
  curatorsFeesDistUserRecipients: Array<CuratorsFeesDistUserRecipient>;
  feeCollectedEvent?: Maybe<FeeCollectedEvent>;
  feeCollectedEvents: Array<FeeCollectedEvent>;
  feeDistUpdateEvent?: Maybe<FeeDistUpdateEvent>;
  feeDistUpdateEvents: Array<FeeDistUpdateEvent>;
  feeDistUpdateRecipient?: Maybe<FeeDistUpdateRecipient>;
  feeDistUpdateRecipients: Array<FeeDistUpdateRecipient>;
  fees?: Maybe<Fees>;
  feesDistributedEvent?: Maybe<FeesDistributedEvent>;
  feesDistributedEvents: Array<FeesDistributedEvent>;
  feesRatioSetEvent?: Maybe<FeesRatioSetEvent>;
  feesRatioSetEvents: Array<FeesRatioSetEvent>;
  feesUpdatedEvent?: Maybe<FeesUpdatedEvent>;
  feesUpdatedEvents: Array<FeesUpdatedEvent>;
  fees_collection: Array<Fees>;
  ferc20UpdatedEvent?: Maybe<Ferc20UpdatedEvent>;
  ferc20UpdatedEvents: Array<Ferc20UpdatedEvent>;
  gradThresholdUpdatedEvent?: Maybe<GradThresholdUpdatedEvent>;
  gradThresholdUpdatedEvents: Array<GradThresholdUpdatedEvent>;
  graduatedEvent?: Maybe<GraduatedEvent>;
  graduatedEvents: Array<GraduatedEvent>;
  initialSupplyUpdatedEvent?: Maybe<InitialSupplyUpdatedEvent>;
  initialSupplyUpdatedEvents: Array<InitialSupplyUpdatedEvent>;
  launchedEvent?: Maybe<LaunchedEvent>;
  launchedEvents: Array<LaunchedEvent>;
  maxTokenTransferAmountUpdatedEvent?: Maybe<MaxTokenTransferAmountUpdatedEvent>;
  maxTokenTransferAmountUpdatedEvents: Array<MaxTokenTransferAmountUpdatedEvent>;
  ownersFeesDistOwnerRecipient?: Maybe<OwnersFeesDistOwnerRecipient>;
  ownersFeesDistOwnerRecipients: Array<OwnersFeesDistOwnerRecipient>;
  ownersFeesDistRecipient?: Maybe<OwnersFeesDistRecipient>;
  ownersFeesDistRecipients: Array<OwnersFeesDistRecipient>;
  ownersFeesDistSetByModeratorEvent?: Maybe<OwnersFeesDistSetByModeratorEvent>;
  ownersFeesDistSetByModeratorEvents: Array<OwnersFeesDistSetByModeratorEvent>;
  ownersFeesDistSetByOwnerEvent?: Maybe<OwnersFeesDistSetByOwnerEvent>;
  ownersFeesDistSetByOwnerEvents: Array<OwnersFeesDistSetByOwnerEvent>;
  platformFee?: Maybe<PlatformFee>;
  platformFees: Array<PlatformFee>;
  platformFeesClaimedEvent?: Maybe<PlatformFeesClaimedEvent>;
  platformFeesClaimedEvents: Array<PlatformFeesClaimedEvent>;
  poolCreatedAndInitializedEvent?: Maybe<PoolCreatedAndInitializedEvent>;
  poolCreatedAndInitializedEvents: Array<PoolCreatedAndInitializedEvent>;
  referrerFee?: Maybe<ReferrerFee>;
  referrerFees: Array<ReferrerFee>;
  referrerFeesClaimedEvent?: Maybe<ReferrerFeesClaimedEvent>;
  referrerFeesClaimedEvents: Array<ReferrerFeesClaimedEvent>;
  referrerRelation?: Maybe<ReferrerRelation>;
  referrerRelations: Array<ReferrerRelation>;
  referrerUpdatedEvent?: Maybe<ReferrerUpdatedEvent>;
  referrerUpdatedEvents: Array<ReferrerUpdatedEvent>;
  stakeholderFee?: Maybe<StakeholderFee>;
  stakeholderFees: Array<StakeholderFee>;
  token?: Maybe<Token>;
  tokenBoughtEvent?: Maybe<TokenBoughtEvent>;
  tokenBoughtEvents: Array<TokenBoughtEvent>;
  tokenMarketData?: Maybe<TokenMarketData>;
  tokenMarketDatas: Array<TokenMarketData>;
  tokenSoldEvent?: Maybe<TokenSoldEvent>;
  tokenSoldEvents: Array<TokenSoldEvent>;
  tokens: Array<Token>;
  treasuryContract?: Maybe<TreasuryContract>;
  treasuryContracts: Array<TreasuryContract>;
  treasuryFeesDistributed?: Maybe<TreasuryFeesDistributed>;
  treasuryFeesDistributeds: Array<TreasuryFeesDistributed>;
  treasuryUpdatedEvent?: Maybe<TreasuryUpdatedEvent>;
  treasuryUpdatedEvents: Array<TreasuryUpdatedEvent>;
  undistributedCuratorFeesClaimed?: Maybe<UndistributedCuratorFeesClaimed>;
  undistributedCuratorFeesClaimeds: Array<UndistributedCuratorFeesClaimed>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAssetRateUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAssetRateUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AssetRateUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AssetRateUpdatedEvent_Filter>;
};


export type QueryBondingContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondingContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondingContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondingContract_Filter>;
};


export type QueryBondingSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondingSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondingSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondingSetEvent_Filter>;
};


export type QueryCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Candle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Candle_Filter>;
};


export type QueryCuratorWhitelistedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorWhitelistedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorWhitelistedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorWhitelistedEvent_Filter>;
};


export type QueryCuratorsFeesDistModeratorRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorsFeesDistModeratorRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistModeratorRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistModeratorRecipient_Filter>;
};


export type QueryCuratorsFeesDistSetByModeratorEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorsFeesDistSetByModeratorEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistSetByModeratorEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistSetByModeratorEvent_Filter>;
};


export type QueryCuratorsFeesDistSetByUserEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorsFeesDistSetByUserEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistSetByUserEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistSetByUserEvent_Filter>;
};


export type QueryCuratorsFeesDistUserRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorsFeesDistUserRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistUserRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistUserRecipient_Filter>;
};


export type QueryFeeCollectedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeCollectedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeCollectedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeCollectedEvent_Filter>;
};


export type QueryFeeDistUpdateEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeDistUpdateEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeDistUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeDistUpdateEvent_Filter>;
};


export type QueryFeeDistUpdateRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeDistUpdateRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeDistUpdateRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeDistUpdateRecipient_Filter>;
};


export type QueryFeesArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesDistributedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesDistributedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesDistributedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesDistributedEvent_Filter>;
};


export type QueryFeesRatioSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesRatioSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesRatioSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesRatioSetEvent_Filter>;
};


export type QueryFeesUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesUpdatedEvent_Filter>;
};


export type QueryFees_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fees_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fees_Filter>;
};


export type QueryFerc20UpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFerc20UpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Ferc20UpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ferc20UpdatedEvent_Filter>;
};


export type QueryGradThresholdUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGradThresholdUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradThresholdUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradThresholdUpdatedEvent_Filter>;
};


export type QueryGraduatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGraduatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GraduatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraduatedEvent_Filter>;
};


export type QueryInitialSupplyUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitialSupplyUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InitialSupplyUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InitialSupplyUpdatedEvent_Filter>;
};


export type QueryLaunchedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLaunchedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LaunchedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LaunchedEvent_Filter>;
};


export type QueryMaxTokenTransferAmountUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMaxTokenTransferAmountUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaxTokenTransferAmountUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MaxTokenTransferAmountUpdatedEvent_Filter>;
};


export type QueryOwnersFeesDistOwnerRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnersFeesDistOwnerRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistOwnerRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistOwnerRecipient_Filter>;
};


export type QueryOwnersFeesDistRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnersFeesDistRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistRecipient_Filter>;
};


export type QueryOwnersFeesDistSetByModeratorEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnersFeesDistSetByModeratorEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistSetByModeratorEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistSetByModeratorEvent_Filter>;
};


export type QueryOwnersFeesDistSetByOwnerEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnersFeesDistSetByOwnerEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistSetByOwnerEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistSetByOwnerEvent_Filter>;
};


export type QueryPlatformFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPlatformFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PlatformFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PlatformFee_Filter>;
};


export type QueryPlatformFeesClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPlatformFeesClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PlatformFeesClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PlatformFeesClaimedEvent_Filter>;
};


export type QueryPoolCreatedAndInitializedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolCreatedAndInitializedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolCreatedAndInitializedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolCreatedAndInitializedEvent_Filter>;
};


export type QueryReferrerFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferrerFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerFee_Filter>;
};


export type QueryReferrerFeesClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferrerFeesClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerFeesClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerFeesClaimedEvent_Filter>;
};


export type QueryReferrerRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferrerRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerRelation_Filter>;
};


export type QueryReferrerUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferrerUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerUpdatedEvent_Filter>;
};


export type QueryStakeholderFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakeholderFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeholderFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakeholderFee_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenBoughtEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenBoughtEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBoughtEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenBoughtEvent_Filter>;
};


export type QueryTokenMarketDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenMarketDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenMarketData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenMarketData_Filter>;
};


export type QueryTokenSoldEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenSoldEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSoldEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSoldEvent_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTreasuryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTreasuryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryContract_Filter>;
};


export type QueryTreasuryFeesDistributedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTreasuryFeesDistributedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryFeesDistributed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryFeesDistributed_Filter>;
};


export type QueryTreasuryUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTreasuryUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryUpdatedEvent_Filter>;
};


export type QueryUndistributedCuratorFeesClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUndistributedCuratorFeesClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UndistributedCuratorFeesClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UndistributedCuratorFeesClaimed_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

/**
 * @dev Tracks the total referrer fees that accumulate for a user + token pair.
 * When claimed, subgraph can update or reset the total.
 *
 */
export type ReferrerFee = {
  __typename?: 'ReferrerFee';
  id: Scalars['ID']['output'];
  lastClaimedAt: Scalars['BigInt']['output'];
  referrer: User;
  token: Token;
  totalAmount: Scalars['BigInt']['output'];
};

export type ReferrerFee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReferrerFee_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastClaimedAt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastClaimedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReferrerFee_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ReferrerFee_OrderBy {
  Id = 'id',
  LastClaimedAt = 'lastClaimedAt',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TotalAmount = 'totalAmount'
}

/**
 * @dev Emitted when referrer claims fees
 *
 */
export type ReferrerFeesClaimedEvent = {
  __typename?: 'ReferrerFeesClaimedEvent';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  referrer: User;
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  transactionHash: Scalars['Bytes']['output'];
};

export type ReferrerFeesClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ReferrerFeesClaimedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReferrerFeesClaimedEvent_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ReferrerFeesClaimedEvent_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Represents a referral relationship (user -> referrer).
 * Because the user can only set it once, this is static for that user.
 *
 */
export type ReferrerRelation = {
  __typename?: 'ReferrerRelation';
  id: Scalars['ID']['output'];
  referrer: User;
  user: User;
};

export type ReferrerRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReferrerRelation_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReferrerRelation_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ReferrerRelation_OrderBy {
  Id = 'id',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id',
  User = 'user',
  UserId = 'user__id'
}

/**
 * @dev Emitted when user's referrer is updated
 *
 */
export type ReferrerUpdatedEvent = {
  __typename?: 'ReferrerUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  referrer: User;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: User;
};

export type ReferrerUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReferrerUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReferrerUpdatedEvent_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ReferrerUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  User = 'user',
  UserId = 'user__id'
}

/**
 * @dev Tracks the stakeholder fees that accumulate for each (agentToken -> token).
 * In your contract, agentToken can be router.assetToken or the token itself.
 *
 */
export type StakeholderFee = {
  __typename?: 'StakeholderFee';
  agentToken: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  token: Token;
  totalAmount: Scalars['BigInt']['output'];
};

export type StakeholderFee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<StakeholderFee_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StakeholderFee_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum StakeholderFee_OrderBy {
  AgentToken = 'agentToken',
  Id = 'id',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TotalAmount = 'totalAmount'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  assetRateUpdatedEvent?: Maybe<AssetRateUpdatedEvent>;
  assetRateUpdatedEvents: Array<AssetRateUpdatedEvent>;
  bondingContract?: Maybe<BondingContract>;
  bondingContracts: Array<BondingContract>;
  bondingSetEvent?: Maybe<BondingSetEvent>;
  bondingSetEvents: Array<BondingSetEvent>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  curatorWhitelistedEvent?: Maybe<CuratorWhitelistedEvent>;
  curatorWhitelistedEvents: Array<CuratorWhitelistedEvent>;
  curatorsFeesDistModeratorRecipient?: Maybe<CuratorsFeesDistModeratorRecipient>;
  curatorsFeesDistModeratorRecipients: Array<CuratorsFeesDistModeratorRecipient>;
  curatorsFeesDistSetByModeratorEvent?: Maybe<CuratorsFeesDistSetByModeratorEvent>;
  curatorsFeesDistSetByModeratorEvents: Array<CuratorsFeesDistSetByModeratorEvent>;
  curatorsFeesDistSetByUserEvent?: Maybe<CuratorsFeesDistSetByUserEvent>;
  curatorsFeesDistSetByUserEvents: Array<CuratorsFeesDistSetByUserEvent>;
  curatorsFeesDistUserRecipient?: Maybe<CuratorsFeesDistUserRecipient>;
  curatorsFeesDistUserRecipients: Array<CuratorsFeesDistUserRecipient>;
  feeCollectedEvent?: Maybe<FeeCollectedEvent>;
  feeCollectedEvents: Array<FeeCollectedEvent>;
  feeDistUpdateEvent?: Maybe<FeeDistUpdateEvent>;
  feeDistUpdateEvents: Array<FeeDistUpdateEvent>;
  feeDistUpdateRecipient?: Maybe<FeeDistUpdateRecipient>;
  feeDistUpdateRecipients: Array<FeeDistUpdateRecipient>;
  fees?: Maybe<Fees>;
  feesDistributedEvent?: Maybe<FeesDistributedEvent>;
  feesDistributedEvents: Array<FeesDistributedEvent>;
  feesRatioSetEvent?: Maybe<FeesRatioSetEvent>;
  feesRatioSetEvents: Array<FeesRatioSetEvent>;
  feesUpdatedEvent?: Maybe<FeesUpdatedEvent>;
  feesUpdatedEvents: Array<FeesUpdatedEvent>;
  fees_collection: Array<Fees>;
  ferc20UpdatedEvent?: Maybe<Ferc20UpdatedEvent>;
  ferc20UpdatedEvents: Array<Ferc20UpdatedEvent>;
  gradThresholdUpdatedEvent?: Maybe<GradThresholdUpdatedEvent>;
  gradThresholdUpdatedEvents: Array<GradThresholdUpdatedEvent>;
  graduatedEvent?: Maybe<GraduatedEvent>;
  graduatedEvents: Array<GraduatedEvent>;
  initialSupplyUpdatedEvent?: Maybe<InitialSupplyUpdatedEvent>;
  initialSupplyUpdatedEvents: Array<InitialSupplyUpdatedEvent>;
  launchedEvent?: Maybe<LaunchedEvent>;
  launchedEvents: Array<LaunchedEvent>;
  maxTokenTransferAmountUpdatedEvent?: Maybe<MaxTokenTransferAmountUpdatedEvent>;
  maxTokenTransferAmountUpdatedEvents: Array<MaxTokenTransferAmountUpdatedEvent>;
  ownersFeesDistOwnerRecipient?: Maybe<OwnersFeesDistOwnerRecipient>;
  ownersFeesDistOwnerRecipients: Array<OwnersFeesDistOwnerRecipient>;
  ownersFeesDistRecipient?: Maybe<OwnersFeesDistRecipient>;
  ownersFeesDistRecipients: Array<OwnersFeesDistRecipient>;
  ownersFeesDistSetByModeratorEvent?: Maybe<OwnersFeesDistSetByModeratorEvent>;
  ownersFeesDistSetByModeratorEvents: Array<OwnersFeesDistSetByModeratorEvent>;
  ownersFeesDistSetByOwnerEvent?: Maybe<OwnersFeesDistSetByOwnerEvent>;
  ownersFeesDistSetByOwnerEvents: Array<OwnersFeesDistSetByOwnerEvent>;
  platformFee?: Maybe<PlatformFee>;
  platformFees: Array<PlatformFee>;
  platformFeesClaimedEvent?: Maybe<PlatformFeesClaimedEvent>;
  platformFeesClaimedEvents: Array<PlatformFeesClaimedEvent>;
  poolCreatedAndInitializedEvent?: Maybe<PoolCreatedAndInitializedEvent>;
  poolCreatedAndInitializedEvents: Array<PoolCreatedAndInitializedEvent>;
  referrerFee?: Maybe<ReferrerFee>;
  referrerFees: Array<ReferrerFee>;
  referrerFeesClaimedEvent?: Maybe<ReferrerFeesClaimedEvent>;
  referrerFeesClaimedEvents: Array<ReferrerFeesClaimedEvent>;
  referrerRelation?: Maybe<ReferrerRelation>;
  referrerRelations: Array<ReferrerRelation>;
  referrerUpdatedEvent?: Maybe<ReferrerUpdatedEvent>;
  referrerUpdatedEvents: Array<ReferrerUpdatedEvent>;
  stakeholderFee?: Maybe<StakeholderFee>;
  stakeholderFees: Array<StakeholderFee>;
  token?: Maybe<Token>;
  tokenBoughtEvent?: Maybe<TokenBoughtEvent>;
  tokenBoughtEvents: Array<TokenBoughtEvent>;
  tokenMarketData?: Maybe<TokenMarketData>;
  tokenMarketDatas: Array<TokenMarketData>;
  tokenSoldEvent?: Maybe<TokenSoldEvent>;
  tokenSoldEvents: Array<TokenSoldEvent>;
  tokens: Array<Token>;
  treasuryContract?: Maybe<TreasuryContract>;
  treasuryContracts: Array<TreasuryContract>;
  treasuryFeesDistributed?: Maybe<TreasuryFeesDistributed>;
  treasuryFeesDistributeds: Array<TreasuryFeesDistributed>;
  treasuryUpdatedEvent?: Maybe<TreasuryUpdatedEvent>;
  treasuryUpdatedEvents: Array<TreasuryUpdatedEvent>;
  undistributedCuratorFeesClaimed?: Maybe<UndistributedCuratorFeesClaimed>;
  undistributedCuratorFeesClaimeds: Array<UndistributedCuratorFeesClaimed>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAssetRateUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAssetRateUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AssetRateUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AssetRateUpdatedEvent_Filter>;
};


export type SubscriptionBondingContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondingContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondingContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondingContract_Filter>;
};


export type SubscriptionBondingSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondingSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondingSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondingSetEvent_Filter>;
};


export type SubscriptionCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Candle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Candle_Filter>;
};


export type SubscriptionCuratorWhitelistedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorWhitelistedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorWhitelistedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorWhitelistedEvent_Filter>;
};


export type SubscriptionCuratorsFeesDistModeratorRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorsFeesDistModeratorRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistModeratorRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistModeratorRecipient_Filter>;
};


export type SubscriptionCuratorsFeesDistSetByModeratorEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorsFeesDistSetByModeratorEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistSetByModeratorEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistSetByModeratorEvent_Filter>;
};


export type SubscriptionCuratorsFeesDistSetByUserEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorsFeesDistSetByUserEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistSetByUserEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistSetByUserEvent_Filter>;
};


export type SubscriptionCuratorsFeesDistUserRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorsFeesDistUserRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CuratorsFeesDistUserRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorsFeesDistUserRecipient_Filter>;
};


export type SubscriptionFeeCollectedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeeCollectedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeCollectedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeCollectedEvent_Filter>;
};


export type SubscriptionFeeDistUpdateEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeeDistUpdateEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeDistUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeDistUpdateEvent_Filter>;
};


export type SubscriptionFeeDistUpdateRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeeDistUpdateRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeDistUpdateRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeDistUpdateRecipient_Filter>;
};


export type SubscriptionFeesArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeesDistributedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeesDistributedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesDistributedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesDistributedEvent_Filter>;
};


export type SubscriptionFeesRatioSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeesRatioSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesRatioSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesRatioSetEvent_Filter>;
};


export type SubscriptionFeesUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeesUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesUpdatedEvent_Filter>;
};


export type SubscriptionFees_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fees_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fees_Filter>;
};


export type SubscriptionFerc20UpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFerc20UpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Ferc20UpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ferc20UpdatedEvent_Filter>;
};


export type SubscriptionGradThresholdUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGradThresholdUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradThresholdUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradThresholdUpdatedEvent_Filter>;
};


export type SubscriptionGraduatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGraduatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GraduatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraduatedEvent_Filter>;
};


export type SubscriptionInitialSupplyUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInitialSupplyUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InitialSupplyUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InitialSupplyUpdatedEvent_Filter>;
};


export type SubscriptionLaunchedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLaunchedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LaunchedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LaunchedEvent_Filter>;
};


export type SubscriptionMaxTokenTransferAmountUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMaxTokenTransferAmountUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaxTokenTransferAmountUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MaxTokenTransferAmountUpdatedEvent_Filter>;
};


export type SubscriptionOwnersFeesDistOwnerRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnersFeesDistOwnerRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistOwnerRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistOwnerRecipient_Filter>;
};


export type SubscriptionOwnersFeesDistRecipientArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnersFeesDistRecipientsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistRecipient_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistRecipient_Filter>;
};


export type SubscriptionOwnersFeesDistSetByModeratorEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnersFeesDistSetByModeratorEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistSetByModeratorEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistSetByModeratorEvent_Filter>;
};


export type SubscriptionOwnersFeesDistSetByOwnerEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnersFeesDistSetByOwnerEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnersFeesDistSetByOwnerEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnersFeesDistSetByOwnerEvent_Filter>;
};


export type SubscriptionPlatformFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPlatformFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PlatformFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PlatformFee_Filter>;
};


export type SubscriptionPlatformFeesClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPlatformFeesClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PlatformFeesClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PlatformFeesClaimedEvent_Filter>;
};


export type SubscriptionPoolCreatedAndInitializedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolCreatedAndInitializedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolCreatedAndInitializedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolCreatedAndInitializedEvent_Filter>;
};


export type SubscriptionReferrerFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferrerFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerFee_Filter>;
};


export type SubscriptionReferrerFeesClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferrerFeesClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerFeesClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerFeesClaimedEvent_Filter>;
};


export type SubscriptionReferrerRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferrerRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerRelation_Filter>;
};


export type SubscriptionReferrerUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferrerUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReferrerUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferrerUpdatedEvent_Filter>;
};


export type SubscriptionStakeholderFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakeholderFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakeholderFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakeholderFee_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenBoughtEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenBoughtEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBoughtEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenBoughtEvent_Filter>;
};


export type SubscriptionTokenMarketDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenMarketDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenMarketData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenMarketData_Filter>;
};


export type SubscriptionTokenSoldEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenSoldEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSoldEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSoldEvent_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTreasuryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTreasuryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryContract_Filter>;
};


export type SubscriptionTreasuryFeesDistributedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTreasuryFeesDistributedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryFeesDistributed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryFeesDistributed_Filter>;
};


export type SubscriptionTreasuryUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTreasuryUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryUpdatedEvent_Filter>;
};


export type SubscriptionUndistributedCuratorFeesClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUndistributedCuratorFeesClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UndistributedCuratorFeesClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UndistributedCuratorFeesClaimed_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

/**
 * @dev Represents one of the tokens launched by this Bonding contract.
 * Use the 'token' address as the 'id'
 *
 */
export type Token = {
  __typename?: 'Token';
  agentTokenFees: Scalars['BigInt']['output'];
  assetTokenFees: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  decimals: Scalars['BigInt']['output'];
  feeCollectedEvents: Array<FeeCollectedEvent>;
  id: Scalars['ID']['output'];
  marketData?: Maybe<TokenMarketData>;
  name: Scalars['String']['output'];
  pair: Scalars['Bytes']['output'];
  positionId?: Maybe<Scalars['BigInt']['output']>;
  symbol: Scalars['String']['output'];
  tokenId: Scalars['BigInt']['output'];
  tradingStatus: Scalars['String']['output'];
};


/**
 * @dev Represents one of the tokens launched by this Bonding contract.
 * Use the 'token' address as the 'id'
 *
 */
export type TokenFeeCollectedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeCollectedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeeCollectedEvent_Filter>;
};

/**
 * @dev Emitted when user buys some tokens
 *
 */
export type TokenBoughtEvent = {
  __typename?: 'TokenBoughtEvent';
  amountIn: Scalars['BigInt']['output'];
  amountOut: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  buyer: User;
  fees: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  referrer?: Maybe<User>;
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  transactionHash: Scalars['Bytes']['output'];
};

export type TokenBoughtEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountIn?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountIn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenBoughtEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyer?: InputMaybe<Scalars['String']['input']>;
  buyer_?: InputMaybe<User_Filter>;
  buyer_contains?: InputMaybe<Scalars['String']['input']>;
  buyer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_ends_with?: InputMaybe<Scalars['String']['input']>;
  buyer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_gt?: InputMaybe<Scalars['String']['input']>;
  buyer_gte?: InputMaybe<Scalars['String']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  buyer_lt?: InputMaybe<Scalars['String']['input']>;
  buyer_lte?: InputMaybe<Scalars['String']['input']>;
  buyer_not?: InputMaybe<Scalars['String']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['String']['input']>;
  buyer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  buyer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  buyer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  buyer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_starts_with?: InputMaybe<Scalars['String']['input']>;
  buyer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenBoughtEvent_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenBoughtEvent_OrderBy {
  AmountIn = 'amountIn',
  AmountOut = 'amountOut',
  BlockNumber = 'blockNumber',
  Buyer = 'buyer',
  BuyerId = 'buyer__id',
  Fees = 'fees',
  Id = 'id',
  LogIndex = 'logIndex',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Represents market data for a Token. This is updated every buy/sell call.
 *
 */
export type TokenMarketData = {
  __typename?: 'TokenMarketData';
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['BigInt']['output'];
  liquidity: Scalars['BigInt']['output'];
  marketCap: Scalars['BigInt']['output'];
  prevPrice: Scalars['BigInt']['output'];
  price: Scalars['BigInt']['output'];
  supply: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  volume24H: Scalars['BigInt']['output'];
};

export type TokenMarketData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenMarketData_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketCap?: InputMaybe<Scalars['BigInt']['input']>;
  marketCap_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketCap_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketCap_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketCap_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketCap_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketCap_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketCap_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenMarketData_Filter>>>;
  prevPrice?: InputMaybe<Scalars['BigInt']['input']>;
  prevPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  prevPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  prevPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  prevPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  prevPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  prevPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  prevPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supply?: InputMaybe<Scalars['BigInt']['input']>;
  supply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supply_not?: InputMaybe<Scalars['BigInt']['input']>;
  supply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume24H_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume24H_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TokenMarketData_OrderBy {
  Id = 'id',
  LastUpdated = 'lastUpdated',
  Liquidity = 'liquidity',
  MarketCap = 'marketCap',
  PrevPrice = 'prevPrice',
  Price = 'price',
  Supply = 'supply',
  Volume = 'volume',
  Volume24H = 'volume24H'
}

/**
 * @dev Emitted when user sells some tokens
 *
 */
export type TokenSoldEvent = {
  __typename?: 'TokenSoldEvent';
  amountIn: Scalars['BigInt']['output'];
  amountOut: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  fees: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  referrer?: Maybe<User>;
  seller: User;
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  transactionHash: Scalars['Bytes']['output'];
};

export type TokenSoldEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountIn?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountIn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenSoldEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenSoldEvent_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<User_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['String']['input']>;
  seller_?: InputMaybe<User_Filter>;
  seller_contains?: InputMaybe<Scalars['String']['input']>;
  seller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_ends_with?: InputMaybe<Scalars['String']['input']>;
  seller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_gt?: InputMaybe<Scalars['String']['input']>;
  seller_gte?: InputMaybe<Scalars['String']['input']>;
  seller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seller_lt?: InputMaybe<Scalars['String']['input']>;
  seller_lte?: InputMaybe<Scalars['String']['input']>;
  seller_not?: InputMaybe<Scalars['String']['input']>;
  seller_not_contains?: InputMaybe<Scalars['String']['input']>;
  seller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  seller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  seller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_starts_with?: InputMaybe<Scalars['String']['input']>;
  seller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenSoldEvent_OrderBy {
  AmountIn = 'amountIn',
  AmountOut = 'amountOut',
  BlockNumber = 'blockNumber',
  Fees = 'fees',
  Id = 'id',
  LogIndex = 'logIndex',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id',
  Seller = 'seller',
  SellerId = 'seller__id',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAgentTokenFees = 'token__agentTokenFees',
  TokenAssetTokenFees = 'token__assetTokenFees',
  TokenCreator = 'token__creator',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPair = 'token__pair',
  TokenPositionId = 'token__positionId',
  TokenSymbol = 'token__symbol',
  TokenTokenId = 'token__tokenId',
  TokenTradingStatus = 'token__tradingStatus',
  TransactionHash = 'transactionHash'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentTokenFees?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agentTokenFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  agentTokenFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  assetTokenFees?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetTokenFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetTokenFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeCollectedEvents_?: InputMaybe<FeeCollectedEvent_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  marketData?: InputMaybe<Scalars['String']['input']>;
  marketData_?: InputMaybe<TokenMarketData_Filter>;
  marketData_contains?: InputMaybe<Scalars['String']['input']>;
  marketData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketData_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketData_gt?: InputMaybe<Scalars['String']['input']>;
  marketData_gte?: InputMaybe<Scalars['String']['input']>;
  marketData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketData_lt?: InputMaybe<Scalars['String']['input']>;
  marketData_lte?: InputMaybe<Scalars['String']['input']>;
  marketData_not?: InputMaybe<Scalars['String']['input']>;
  marketData_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketData_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketData_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  pair?: InputMaybe<Scalars['Bytes']['input']>;
  pair_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pair_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pair_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pair_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pair_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pair_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pair_not?: InputMaybe<Scalars['Bytes']['input']>;
  pair_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pair_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  positionId?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingStatus?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_contains?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_ends_with?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_gt?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_gte?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tradingStatus_lt?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_lte?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not_contains?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tradingStatus_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_starts_with?: InputMaybe<Scalars['String']['input']>;
  tradingStatus_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Token_OrderBy {
  AgentTokenFees = 'agentTokenFees',
  AssetTokenFees = 'assetTokenFees',
  Creator = 'creator',
  Decimals = 'decimals',
  FeeCollectedEvents = 'feeCollectedEvents',
  Id = 'id',
  MarketData = 'marketData',
  MarketDataId = 'marketData__id',
  MarketDataLastUpdated = 'marketData__lastUpdated',
  MarketDataLiquidity = 'marketData__liquidity',
  MarketDataMarketCap = 'marketData__marketCap',
  MarketDataPrevPrice = 'marketData__prevPrice',
  MarketDataPrice = 'marketData__price',
  MarketDataSupply = 'marketData__supply',
  MarketDataVolume = 'marketData__volume',
  MarketDataVolume24H = 'marketData__volume24H',
  Name = 'name',
  Pair = 'pair',
  PositionId = 'positionId',
  Symbol = 'symbol',
  TokenId = 'tokenId',
  TradingStatus = 'tradingStatus'
}

/**
 * @dev Tracks global state and config of the Treasury contract.
 * We'll store a single entity using a fixed ID, e.g. 'Treasury' or the contract address.
 *
 */
export type TreasuryContract = {
  __typename?: 'TreasuryContract';
  address: Scalars['Bytes']['output'];
  bonding?: Maybe<Scalars['Bytes']['output']>;
  createdAt: Scalars['BigInt']['output'];
  feeRatioDenominator: Scalars['BigInt']['output'];
  feeRatioNumerator: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type TreasuryContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TreasuryContract_Filter>>>;
  bonding?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bonding_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_not?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bonding_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeRatioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeRatioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeRatioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeRatioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeRatioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TreasuryContract_Filter>>>;
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TreasuryContract_OrderBy {
  Address = 'address',
  Bonding = 'bonding',
  CreatedAt = 'createdAt',
  FeeRatioDenominator = 'feeRatioDenominator',
  FeeRatioNumerator = 'feeRatioNumerator',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

/**
 * @dev Emitted when fees are fully distributed for a given agentToken (FeesDistributed).
 * We store the totals for asset and agent tokens, plus owners/curators splitted amounts.
 *
 */
export type TreasuryFeesDistributed = {
  __typename?: 'TreasuryFeesDistributed';
  agentToken: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  curatorsAgentPart: Scalars['BigInt']['output'];
  curatorsAssetPart: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ownersAgentPart: Scalars['BigInt']['output'];
  ownersAssetPart: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalAgent: Scalars['BigInt']['output'];
  totalAsset: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TreasuryFeesDistributed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TreasuryFeesDistributed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorsAgentPart?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAgentPart_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAgentPart_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAgentPart_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorsAgentPart_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAgentPart_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAgentPart_not?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAgentPart_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorsAssetPart?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAssetPart_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAssetPart_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAssetPart_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorsAssetPart_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAssetPart_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAssetPart_not?: InputMaybe<Scalars['BigInt']['input']>;
  curatorsAssetPart_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TreasuryFeesDistributed_Filter>>>;
  ownersAgentPart?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAgentPart_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAgentPart_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAgentPart_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ownersAgentPart_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAgentPart_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAgentPart_not?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAgentPart_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ownersAssetPart?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAssetPart_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAssetPart_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAssetPart_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ownersAssetPart_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAssetPart_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAssetPart_not?: InputMaybe<Scalars['BigInt']['input']>;
  ownersAssetPart_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAgent?: InputMaybe<Scalars['BigInt']['input']>;
  totalAgent_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAgent_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAgent_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAgent_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAgent_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAgent_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAgent_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAsset?: InputMaybe<Scalars['BigInt']['input']>;
  totalAsset_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAsset_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAsset_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAsset_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAsset_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAsset_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAsset_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TreasuryFeesDistributed_OrderBy {
  AgentToken = 'agentToken',
  BlockNumber = 'blockNumber',
  CuratorsAgentPart = 'curatorsAgentPart',
  CuratorsAssetPart = 'curatorsAssetPart',
  Id = 'id',
  OwnersAgentPart = 'ownersAgentPart',
  OwnersAssetPart = 'ownersAssetPart',
  Timestamp = 'timestamp',
  TotalAgent = 'totalAgent',
  TotalAsset = 'totalAsset',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when treasury is updated
 *
 */
export type TreasuryUpdatedEvent = {
  __typename?: 'TreasuryUpdatedEvent';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  newTreasury: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TreasuryUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TreasuryUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTreasury?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TreasuryUpdatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TreasuryUpdatedEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  NewTreasury = 'newTreasury',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Emitted when undistributed curator fees (due to no distribution rules) are claimed.
 *
 */
export type UndistributedCuratorFeesClaimed = {
  __typename?: 'UndistributedCuratorFeesClaimed';
  agentToken: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  caller: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type UndistributedCuratorFeesClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agentToken?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agentToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agentToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UndistributedCuratorFeesClaimed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UndistributedCuratorFeesClaimed_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum UndistributedCuratorFeesClaimed_OrderBy {
  AgentToken = 'agentToken',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Caller = 'caller',
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * @dev Represents a user in the system. 'id' is the user's address in checksummed hex.
 *
 */
export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  referrer?: Maybe<ReferrerRelation>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_?: InputMaybe<ReferrerRelation_Filter>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum User_OrderBy {
  Id = 'id',
  Referrer = 'referrer',
  ReferrerId = 'referrer__id'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetSimilarTokensQueryVariables = Exact<{
  symbols: Array<Scalars['String']['input']> | Scalars['String']['input'];
  names: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetSimilarTokensQuery = { __typename?: 'Query', launchedEvents: Array<{ __typename?: 'LaunchedEvent', tokenAddress: any, token: { __typename?: 'Token', id: string, creator: any, name: string, symbol: string } }> };


export const GetSimilarTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSimilarTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"symbols"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"names"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launchedEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token_"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"symbol_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"symbols"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"token_"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"names"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenAddress"}}]}}]}}]} as unknown as DocumentNode<GetSimilarTokensQuery, GetSimilarTokensQueryVariables>;