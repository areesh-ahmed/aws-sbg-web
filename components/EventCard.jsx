"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, User, Code, MonitorPlay, Mic, UsersRound } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";

export default function EventCard({ event }) {
  const { type, title, date, time, location, speaker, description, isUpcoming } = event;

  const getTypeIcon = () => {
    switch (type) {
      case "Hackathon": return <Code size={18} className="text-purple" />;
      case "Workshop": return <MonitorPlay size={18} className="text-blue" />;
      case "Talk": return <Mic size={18} className="text-purple" />;
      case "Meetup": return <UsersRound size={18} className="text-green" />;
      default: return <Calendar size={18} className="text-purple" />;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-subtle p-6 flex flex-col h-full relative overflow-hidden group transition-all duration-300"
    >
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple/0 via-purple/50 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-4">
        <Badge variant={type === "Hackathon" ? "purple" : type === "Workshop" ? "blue" : "purple"}>
          {type}
        </Badge>
        <div className="p-2 bg-canvas rounded-lg border border-subtle">
          {getTypeIcon()}
        </div>
      </div>

      <h3 className="text-xl font-bold text-primary mb-3 font-mono">{title}</h3>
      
      <p className="text-secondary text-sm mb-6 flex-grow">
        {description}
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-secondary text-sm gap-2">
          <Calendar size={16} className="text-purple" />
          <span>{date}</span>
        </div>
        {time && (
          <div className="flex items-center text-secondary text-sm gap-2">
            <Clock size={16} className="text-purple" />
            <span>{time}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center text-secondary text-sm gap-2">
            <MapPin size={16} className="text-purple" />
            <span>{location}</span>
          </div>
        )}
        {speaker && (
          <div className="flex items-center text-secondary text-sm gap-2">
            <User size={16} className="text-purple" />
            <span>{speaker}</span>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-subtle">
        <Button variant={isUpcoming ? "outline" : "ghost"} className="w-full" icon>
          {isUpcoming ? "Register Now" : "View Recap"}
        </Button>
      </div>
    </motion.div>
  );
}
