import React, {ReactElement, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";

const app: React.FC = (): ReactElement => {
  const [replicantsState, setRepState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("champSelectUpdate"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setRepState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);
  console.log(replicantsState)
  
  return (
    <div>
      <h1>Hello, this is one of your graphics</h1>    
    </div>
  );
};

export default app;