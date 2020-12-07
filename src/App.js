import React from "react";
import { Linkable_address, Linkable_abi } from "./contracts/Linkable.js";
import { useContract } from "web3-hooks";
import Dapp from "./Dapp";

export const LinkableContext = React.createContext(null);

function App() {
  const linkable = useContract(Linkable_address, Linkable_abi);

  return (
    <LinkableContext.Provider value={linkable}>
      <Dapp />
    </LinkableContext.Provider>
  );
}

export default App;
