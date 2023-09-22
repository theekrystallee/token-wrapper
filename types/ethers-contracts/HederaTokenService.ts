/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface HederaTokenServiceInterface extends utils.Interface {
  functions: {
    "redirectForToken(address,bytes)": FunctionFragment;
    "transferFrom(address,address,address,uint256)": FunctionFragment;
    "transferFromNFT(address,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "redirectForToken"
      | "transferFrom"
      | "transferFromNFT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "redirectForToken",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFromNFT",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "redirectForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFromNFT",
    data: BytesLike
  ): Result;

  events: {
    "CallResponseEvent(bool,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallResponseEvent"): EventFragment;
}

export interface CallResponseEventEventObject {
  arg0: boolean;
  arg1: string;
}
export type CallResponseEventEvent = TypedEvent<
  [boolean, string],
  CallResponseEventEventObject
>;

export type CallResponseEventEventFilter =
  TypedEventFilter<CallResponseEventEvent>;

export interface HederaTokenService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HederaTokenServiceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    redirectForToken(
      token: string,
      encodedFunctionSelector: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFromNFT(
      token: string,
      from: string,
      to: string,
      serialNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  redirectForToken(
    token: string,
    encodedFunctionSelector: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    token: string,
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFromNFT(
    token: string,
    from: string,
    to: string,
    serialNumber: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    redirectForToken(
      token: string,
      encodedFunctionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { responseCode: BigNumber; response: string }
    >;

    transferFrom(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFromNFT(
      token: string,
      from: string,
      to: string,
      serialNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "CallResponseEvent(bool,bytes)"(
      arg0?: null,
      arg1?: null
    ): CallResponseEventEventFilter;
    CallResponseEvent(arg0?: null, arg1?: null): CallResponseEventEventFilter;
  };

  estimateGas: {
    redirectForToken(
      token: string,
      encodedFunctionSelector: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFromNFT(
      token: string,
      from: string,
      to: string,
      serialNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    redirectForToken(
      token: string,
      encodedFunctionSelector: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFromNFT(
      token: string,
      from: string,
      to: string,
      serialNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
