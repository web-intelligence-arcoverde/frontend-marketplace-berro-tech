'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface ChannelContextType {
  selectedChannelId: string
  setSelectedChannelId: (id: string) => void
}

const BusinessHighlightContext = createContext<ChannelContextType | undefined>(undefined)

export const BusinessHighlightProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChannelId, setSelectedChannelId] = useState<string>('')

  return (
    <BusinessHighlightContext.Provider
      value={{ selectedChannelId, setSelectedChannelId }}
    >
      {children}
    </BusinessHighlightContext.Provider>
  )
}

export const useBusinessHighlight = () => {
  const context = useContext(BusinessHighlightContext)
  if (context === undefined) {
    throw new Error('useBusinessHighlight must be used within a BusinessHighlightProvider')
  }
  return context
}
