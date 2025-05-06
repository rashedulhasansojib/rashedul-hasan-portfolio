import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useTransition } from '../context/TransitionContext';

type SectionTransitionProps = {
    children: ReactNode;
    sectionId: string;
    className?: string;
};

const SectionTransition = ({ children, sectionId, className = '' }: SectionTransitionProps) => {
    const { currentSection, setCurrentSection, isTransitioning } = useTransition();

    // Check if this section is in view
    useEffect(() => {
        const handleScroll = () => {
            if (isTransitioning) return;

            const section = document.getElementById(sectionId);
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

            // If more than half of the section is visible
            if (rect.top < viewHeight / 2 && rect.bottom > viewHeight / 2) {
                if (currentSection !== sectionId) {
                    setCurrentSection(sectionId);
                    console.log("Section in view:", sectionId);
                }
            }
        };

        // Run once on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionId, currentSection, setCurrentSection, isTransitioning]);

    return (
        <motion.section
            id={sectionId}
            className={`${className} z-10`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.section>
    );
};

export default SectionTransition; 