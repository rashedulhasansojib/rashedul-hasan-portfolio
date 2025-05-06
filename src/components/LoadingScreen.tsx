import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
    onLoadingComplete: () => void;
};

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress < 100) {
                setProgress(prev => Math.min(prev + 5, 100));
            } else {
                setTimeout(() => {
                    onLoadingComplete();
                }, 500);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [progress, onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <motion.div
                    className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 30, 0],
                        opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-40 w-80 h-80 bg-pink-500 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -30, 0],
                        opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="relative flex flex-col items-center gap-8">
                {/* Logo animation */}
                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 opacity-40 blur-lg"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-black border-2 border-blue-500/50 z-10">
                        <h1 className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-5xl font-bold">
                            R
                        </h1>
                    </div>
                </motion.div>

                {/* Progress bar */}
                <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-pink-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>

                {/* Loading text */}
                <motion.div
                    className="flex flex-col items-center gap-2"
                >
                    <motion.p
                        className="text-gray-200 text-base font-medium tracking-wide"
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Loading Portfolio
                    </motion.p>
                    <motion.div
                        className="flex gap-1"
                        animate={{
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-blue-500"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: 0
                            }}
                        />
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-indigo-500"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: 0.1
                            }}
                        />
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-pink-500"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: 0.2
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen; 