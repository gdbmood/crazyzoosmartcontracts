import {SetToken} from '../dapp/useToken'

const useSetMarketingWallet = ({
    address = "0x0000000000000000000000000000000000000000"
})=>{
   
    const { data, isLoading : isLoadingSetMarketingWallet, isSuccess : isSuccessSetMarketingWallet, write } =  SetToken('setMarketingWallet',[address])
    const setMarketingWallet = async ()=>{
        await write?.()
    }
    return {
        isLoadingSetMarketingWallet,
        isSuccessSetMarketingWallet,
        setMarketingWallet
    }

}

const useSetStakingWallet = ({
    address = "0x0000000000000000000000000000000000000000"
})=>{
   
    const { data, isLoading : isLoadingSetStakingWallet, isSuccess : isSuccessSetStakingWallet, write } =  SetToken('setStakingContractAddress',[address])
    const setSetStakingWallet = async ()=>{
        await write?.()
    }
    return {
        isLoadingSetStakingWallet,
        isSuccessSetStakingWallet,
        setSetStakingWallet
    }
    
}

export  {useSetMarketingWallet, useSetStakingWallet}