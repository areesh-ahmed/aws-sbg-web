"use client";
import { motion } from "framer-motion";
import { Server, HardDrive, Zap, Database, DatabaseZap, BrainCircuit, Network, Shield, Cpu } from "lucide-react";
import Badge from "./Badge";

export default function ServiceCard({ service }) {
  const { name, category, explanation, useCase, icon } = service;

  const getIcon = () => {
    switch (icon) {
      case "Server": return <Server size={24} className="text-purple" />;
      case "HardDrive": return <HardDrive size={24} className="text-blue" />;
      case "Zap": return <Zap size={24} className="text-purple" />;
      case "Database": return <Database size={24} className="text-green" />;
      case "DatabaseZap": return <DatabaseZap size={24} className="text-pink" />;
      case "BrainCircuit": return <BrainCircuit size={24} className="text-purple" />;
      case "Network": return <Network size={24} className="text-purple" />;
      case "Shield": return <Shield size={24} className="text-blue" />;
      default: return <Cpu size={24} className="text-purple" />;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-subtle p-6 flex flex-col h-full group transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,153,0,0.05)]"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-canvas border border-subtle rounded-md group-hover:border-purple/30 transition-colors">
          {getIcon()}
        </div>
        <Badge variant="subtle">{category}</Badge>
      </div>

      <h3 className="text-xl font-bold text-primary mb-2 font-mono">{name}</h3>
      
      <p className="text-secondary text-sm mb-4">
        {explanation}
      </p>

      <div className="mt-auto pt-4 border-t border-subtle">
        <span className="block text-xs font-mono text-secondary mb-1 uppercase tracking-wider">Use Case</span>
        <p className="text-primary text-sm font-medium">{useCase}</p>
      </div>
    </motion.div>
  );
}
