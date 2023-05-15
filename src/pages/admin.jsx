import React from 'react';
import {
  useAccount,
  useConnect
} from 'wagmi'
import AdminFunctions from '../components/admin/AdminFunctions'
import { Button } from 'react-bootstrap';


const AdminPage = () => {
    
  const { address, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    return (
        <div className='mintinPageContainer' style={{overflow: "hidden"}}>
          {
            isConnected ?
            <AdminFunctions/> :
            <Button className="swapBtn" onClick={() => connect({ connector: connectors[1] })} >Connect Wallet</Button>
          }
        </div>
    );

}

export default AdminPage;
