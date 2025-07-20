import React from 'react';
import { useParams } from 'react-router-dom';

export default function Pay(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-display mb-4">Pay Merchant {id}</h2>
      <p>Load merchant config from IPFS and send USDC via CCTP.</p>
    </div>
  );
}
