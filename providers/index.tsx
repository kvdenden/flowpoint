import WalletProvider from "./wallet-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <WalletProvider>{children}</WalletProvider>;
}
