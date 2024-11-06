import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract( CampaignFactory.abi, "0xA6AE94Bd23AB45775983463414f505e6Afbd9325");

export default instance;