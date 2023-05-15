import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import * as abis from '../../abis';
import config from '../../config';
import { useNetwork } from 'wagmi'
import {
  useAccount,
} from 'wagmi'

const SetUniswapIntermediary = (methodName,args, chainId)=>{
  
  const { config: conf } = usePrepareContractWrite({
    address: `0x9517f9fDAA0b5856964d2dfd7e0138Ed09aFa144`,
    abi:  abis.UniswapIntermediary.abi,
    functionName: methodName,
    args
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}

const GetUniswapIntermediary = (methodName,args, chainID)=>{

  const { data, isError, isLoading } = useContractRead({
    address:`0x9517f9fDAA0b5856964d2dfd7e0138Ed09aFa144`,
    abi: abis.UniswapIntermediary.abi,
    functionName: methodName,
    args 
  })
  return { data, isError, isLoading };
}


export {GetUniswapIntermediary , SetUniswapIntermediary };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall