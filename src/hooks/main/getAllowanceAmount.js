import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { usdcTokenAbi, usdcTokenAddress } from './abi';


//get collateral balance of the user address in the exchange contract
export function GetAllowanceAmount(ownerAddress, spenderAddress) {

  const allowanceAmount = useContractRead({
    address: usdcTokenAddress,
    abi: usdcTokenAbi,
    functionName: 'allowance',
    args: [ownerAddress, spenderAddress],
    enabled: Boolean(ownerAddress)
  });
  return allowanceAmount;
}