import { createContext, useState, useContext, ReactNode } from 'react';

type TransitionContextType = {
    currentSection: string;
    setCurrentSection: (section: string) => void;
    isTransitioning: boolean;
    setIsTransitioning: (isTransitioning: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [currentSection, setCurrentSection] = useState<string>('hero');
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    return (
        <TransitionContext.Provider
            value={{
                currentSection,
                setCurrentSection,
                isTransitioning,
                setIsTransitioning,
            }}
        >
            {children}
        </TransitionContext.Provider>
    );
};

export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return context;
}; 