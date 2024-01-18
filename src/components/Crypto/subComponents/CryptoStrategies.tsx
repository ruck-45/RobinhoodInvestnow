// local Files
import StrategyCard from "../../../globalSubComponents/StrategyCard";

const CryptoStrategies = () => {
  return (
    <div>
      <div className="flex flex-col">
        <StrategyCard
          heading="Coins"
          caption="Explore a world of popular cryptocurrencies and stablecoins on our platform. Buy, hold, and sell favorites like BTC, ETH, DOGE, SHIB, AVAX, and more. Begin your coin journey with us!"
          isPurple={false}
          thumbnail="https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <StrategyCard
          heading="Recurring Buys"
          caption="Automate your crypto journey with Recurring Buys. Trade effortlessly on a fixed schedule, starting at just $1. Embrace simplicity, making crypto trading a seamless routine – eat, sleep, trade, repeat! Join us now!"
          isPurple={true}
          thumbnail="https://images.unsplash.com/photo-1527266237111-a4989d028b4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <StrategyCard
          heading="Transfers"
          caption="Effortlessly send and receive crypto with our platform. Whether transferring to InvestNow or other wallets, rest assured it's secure and fee-free. Experience simple, secure crypto transactions for seamless financial management."
          isPurple={false}
          thumbnail="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <StrategyCard
          heading="Advanced Tools"
          caption="Discover our advanced trading tools! Set custom price alerts, analyze with advanced charts, and more—all in one place. Build strategies, manage crypto efficiently, and stay ahead of market trends. Elevate your trading experience today!"
          isPurple={true}
          thumbnail="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default CryptoStrategies;
