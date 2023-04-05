import { TabsProps } from "@/types";
import React, { useState } from "react";
import { Container } from "./style";

export const Tabs = ({ tabs, initialTab = 0 }:TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  return (
    <Container>
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
    </Container>
  );
};
