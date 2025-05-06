import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Get theme from localStorage or default to dark
    const [theme, setTheme] = useState<ThemeType>(() => {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme as ThemeType) || 'dark';
    });

    // Update localStorage and apply theme classes when theme changes
    useEffect(() => {
        // Update localStorage
        localStorage.setItem('theme', theme);

        // Update document root classes
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark-mode');
            root.classList.remove('light-mode');
        } else {
            root.classList.add('light-mode');
            root.classList.remove('dark-mode');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 