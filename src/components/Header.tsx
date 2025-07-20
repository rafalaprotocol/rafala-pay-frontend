import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-graphite">
      <h1 className="text-xl font-display tracking-wide">RAFALA</h1>
      <nav className="space-x-6 text-sm">
        <ConnectButton />
      </nav>
    </header>
  );
}
