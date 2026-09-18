"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { EC2Icon, S3Icon, LambdaIcon, RDSIcon, DynamoDBIcon, BedrockIcon } from "./AwsIcons";
import Badge from "./Badge";

export default function ServiceCard({ service }) {
  const { name, category, explanation, useCase, icon } = service;
  const [isFlipped, setIsFlipped] = useState(false);

  const getIcon = () => {
    switch (icon) {
      case "Server": return <EC2Icon size={32} className="text-orange" />;
      case "HardDrive": return <S3Icon size={32} className="text-orange" />;
      case "Zap": return <LambdaIcon size={32} className="text-orange" />;
      case "Database": return <RDSIcon size={32} className="text-blue" />;
      case "DatabaseZap": return <DynamoDBIcon size={32} className="text-blue" />;
      case "BrainCircuit": return <BedrockIcon size={32} className="text-purple" />;
      default: return <EC2Icon size={32} className="text-orange" />;
    }
  };

  return (
    <div 
      className="h-[300px] w-full group cursor-pointer" 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-surface border border-subtle p-6 flex flex-col justify-center items-center text-center shadow-sm hover:border-purple/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all rounded-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-4 right-4">
            <Badge variant="subtle">{category}</Badge>
          </div>
          <div className="p-4 bg-canvas border border-subtle rounded-full mb-4 group-hover:border-purple/30 transition-colors">
            {getIcon()}
          </div>
          <h3 className="text-xl font-bold text-primary font-mono mb-2">{name}</h3>
          <p className="text-secondary text-sm mt-4 px-4 py-1.5 rounded-full bg-canvas border border-subtle group-hover:text-purple transition-colors">
            Tap to flip
          </p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-canvas border border-purple/30 p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.1)] rounded-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-primary font-bold font-mono">{name}</h4>
              <Badge variant="subtle">{category}</Badge>
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-4">{explanation}</p>
          </div>
          <div className="mt-auto pt-4 border-t border-subtle">
            <span className="block text-[10px] font-mono text-purple mb-1.5 uppercase tracking-wider font-bold">Use Case</span>
            <p className="text-primary text-sm font-medium leading-tight">{useCase}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
