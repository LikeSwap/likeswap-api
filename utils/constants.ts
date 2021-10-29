import { ChainId, Token } from "@pancakeswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0x4a162e9a102d2195c1c4bf3bd319ad25a895ccaf";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0xa3c81bbcbff337a9754816fb8559121332c4d9b4";
export const MASTERCHEF_CONTRACT = "0xd69d858e32438a44fb5cba7a4619970fb0746654";
export const LOTTERY_CONTRACT = "0x4ee3aed30e4bf5f3f63c4dada9f7840bfd96f058";
export const MULTICALL_CONTRACT = "0xe0f85775db1716a8860f82fdc1ba304be3d963f2";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);
