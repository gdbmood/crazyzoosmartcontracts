import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import config from '../../config';
import * as abis from '../../abis';


const SetNFT = (methodName,args, chainId)=>{
  const { config : conf } = usePrepareContractWrite({
    address: `0x274300E7e51695C4464841AE7883EFc5f094c296`,
    abi:  abis.CrazyZooNFT.abi,
    functionName: methodName,
    args
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}
const GetNFT = (methodName,chainId,args)=>{
  const { data, isError, isLoading } = useContractRead({
    address: `0x274300E7e51695C4464841AE7883EFc5f094c296`,
    abi: abis.CrazyZooNFT.abi,
    functionName: methodName,
    args
  })
  return { data, isError, isLoading };
}

export {GetNFT , SetNFT };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall