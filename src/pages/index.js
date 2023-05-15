import Home03 from "./Home03";
import MintingPage from "./Minting";
import SwapPage from "./Swap";
import ReferralPage from "./Referral";
import Treasury from "./Treasury";
import PresalePage from "./Presale";
import Staking from "./Staking";
import RoadmapPage from "./Roadmap";
import Pools from './Pools';
import AdminPage from './admin'

const routes = [
  { path: '/', component: <Home03 />},
  { path: '/home-03', component: <Home03 />},
  { path: '/staking', component: <Staking />},
  { path: '/minting', component: <MintingPage />},
  { path: '/swapping', component: <SwapPage />},
  { path: '/referral', component: <ReferralPage />},
  { path: '/treasury', component: <Treasury />},
  { path: '/presale', component: <PresalePage />},
  { path: '/roadmap', component: <RoadmapPage />},
  { path: '/pools', component: <Pools />},
  { path: '/admin', component: <AdminPage/>}
]

export default routes;