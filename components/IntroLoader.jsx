"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelGraphic from "./PixelGraphic";

const languages = [
  "AWS Student Builder Group",
  "एडब्ल्यूएस स्टूडेंट बिल्डर ग्रुप",
  "এডব্লিউএস স্টুডেন্ট বিল্ডার গ্রুপ",
  "एडब्ल्यूएस स्टुडंट बिल्डर ग्रुप",
  "ఏడబ్ల్యూఎస్ స్టూడెంట్ బిల్డర్ గ్రూప్",
  "ஏடபிள்யூஎஸ் ஸ்டூடண்ட் பில்டர் குரூப்",
  "એડબ્લ્યુએસ સ્ટુડન્ટ બિલ્ડર ગ્રુપ",
  "اے ڈبلیو ایس اسٹوڈنٹ بلڈر گروپ"
];

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("text"); // 'text' -> 'logo' -> 'done'

  useEffect(() => {
    // Handle the text cycling
    if (phase !== "text") return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === languages.length - 1) {
          clearInterval(interval);
          setPhase("logo");
          return prev;
        }
        return prev + 1;
      });
    }, 800); // 800ms per language

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    // Handle the progress counter
    if (phase === "done") return;
    
    // We want the progress to hit 100 right after the logo phase shows for a bit
    const totalDuration = (languages.length * 800) + 1200; // time in ms
    const updateInterval = 30; // update every 30ms
    const step = 100 / (totalDuration / updateInterval);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setPhase("done");
            setLoading(false);
          }, 400); // small delay before hiding
          return 100;
        }
        return prev + step;
      });
    }, updateInterval);

    return () => clearInterval(progressInterval);
  }, [phase]);

  // Lock body scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  if (!loading && phase === "done") return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[var(--color-canvas)] text-primary flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#050505" }} // Dark background like the screenshot
        >
          {/* subtle background pattern to match the screenshots */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          
          <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center min-h-[200px]">
            {phase === "text" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center absolute"
              >
                <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-white">
                  {languages[index]}
                </h2>
              </motion.div>
            )}

            {phase === "logo" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-6 absolute"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple/30 blur-2xl rounded-full scale-150" />
                  <PixelGraphic type="cloud" color="purple" className="w-24 h-24 relative z-10" />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-6">
                    AWS Student Builder
                  </h3>
                  {/* Progress bar container */}
                  <div className="w-64 h-[2px] bg-subtle mx-auto rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-purple"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Right Percentage Counter */}
          <div className="absolute bottom-8 right-12 z-10 font-mono text-5xl md:text-7xl font-bold text-white opacity-80">
            {Math.floor(progress).toString().padStart(3, '0')}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
