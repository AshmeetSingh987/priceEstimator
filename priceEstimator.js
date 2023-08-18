const { ethers }=require('ethers');
const ADDRESS='0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const ABI=[
    'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)'
]

const provider=new ethers.JsonRpcProvider(url='https://mainnet.infura.io/v3/a6ad71f678634af29f416687a620638c')
const amountIn=ethers.parseEther(ether='1');

const path=['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48']


const router=new ethers.Contract(ADDRESS, ABI, provider);

const main=async () => {
    const amounts=await router.getAmountsOut(amountIn, path);
    const price=ethers.formatUnits(amounts[1].toString(), decimals=6);
    console.log("amount", amounts[1].toString());
    console.log("price", price);
}
main()
