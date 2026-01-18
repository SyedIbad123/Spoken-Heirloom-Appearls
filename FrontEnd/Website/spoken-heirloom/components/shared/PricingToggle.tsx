interface PricingToggleProps {
  activeTab: "packages" | "subscriptions";
  onTabChange: (tab: "packages" | "subscriptions") => void;
}

export default function PricingToggle({
  activeTab,
  onTabChange,
}: PricingToggleProps) {
  return (
    <div className="text-center mb-16 md:mb-20">
      {/* Toggle tabs */}
      <div className="inline-flex items-center bg-primary-foreground rounded-full p-1.5">
        <button
          onClick={() => onTabChange("packages")}
          className={`px-8 py-3 rounded-full text-body-md font-medium transition-all duration-300 cursor-pointer ${
            activeTab === "packages"
              ? "bg-primary-border text-primary-foreground shadow-md"
              : "text-white"
          }`}
        >
          Packages
        </button>
        <button
          onClick={() => onTabChange("subscriptions")}
          className={`px-8 py-3 rounded-full text-body-md font-medium transition-all duration-300 cursor-pointer ${
            activeTab === "subscriptions"
              ? "bg-primary-border text-primary-foreground shadow-md"
              : "text-white"
          }`}
        >
          Subscription
        </button>
      </div>
    </div>
  );
}
