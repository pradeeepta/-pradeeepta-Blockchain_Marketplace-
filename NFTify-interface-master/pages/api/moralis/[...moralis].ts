import { MoralisNextApi } from "@moralisweb3/next";

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY!,
  defaultEvmApiChain: 11155111, // sepolia
});
