'use client'
import { ICONS } from "@/assets";
import Image from "next/image";
import {
  AccordionContainer,
  ArrowImage,
  AccordionHeader,
  AccordionContent,
  AccordionIconTitle,
} from "./style";
import React, { useState } from "react";
interface AccordionProps {
  title: string;
  icon: string
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionContainer >
      <AccordionHeader onClick={toggleAccordion} >
        <AccordionIconTitle>
          <Image src={icon} alt={`Icone de ${icon}`} />
          <h3>{title}</h3>
        </AccordionIconTitle>
        <ArrowImage isOpen={isExpanded}>
          <Image
            src={ICONS.ArrowRight}
            alt="seta do accordion"
          />
        </ArrowImage>
      </AccordionHeader>
      <AccordionContent isExpanded={isExpanded}>
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};
