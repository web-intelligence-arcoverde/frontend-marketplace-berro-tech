import { TabsProps } from "@/types";
import React, { useState } from "react";

export const Tabs = ({ tabs, initialTab = 0 }:TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab.title}
            className={`tab ${selectedTab === index ? "active" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};
