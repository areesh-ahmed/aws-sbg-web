"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Clock, User, Code, MonitorPlay, Mic,
  UsersRound, X, Award, CheckCircle2, Trophy, Sparkles,
  GraduationCap, Building2, Layers, Maximize2, Image as ImageIcon
} from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";

export default function EventCard({ event, compact = false }) {
  const {
    type, title, subtitle, date, time, location, speaker, chiefGuest,
    facultyCoordinator, guestSpeakers, organizingTeam, attendees,
    registrations, description, recap, isUpcoming, highlights, flow, winners, images
  } = event;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Close on Escape key press and lock background scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          setIsOpen(false);
        }
      }
    };
    if (isOpen || selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedImage]);

  const getTypeIcon = () => {
    switch (type) {
      case "Hackathon": return <Code size={18} className="text-purple" />;
      case "Bootcamp": return <Sparkles size={18} className="text-amber-400" />;
      case "Workshop": return <MonitorPlay size={18} className="text-blue" />;
      case "Talk": return <Mic size={18} className="text-purple" />;
      case "Meetup": return <UsersRound size={18} className="text-green" />;
      default: return <Calendar size={18} className="text-purple" />;
    }
  };

  const getBadgeVariant = () => {
    switch (type) {
      case "Hackathon": return "purple";
      case "Bootcamp": return "purple";
      case "Workshop": return "blue";
      case "Talk": return "purple";
      case "Meetup": return "green";
      default: return "subtle";
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-surface border border-subtle hover:border-purple/40 flex flex-col h-full relative overflow-hidden group transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Top subtle highlight */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple/0 via-purple/50 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

        {/* IMAGE BANNER PREVIEW ON CARD (Shown when not compact) */}
        {!compact && images && images.length > 0 && (
          <div className="relative w-full h-44 bg-canvas overflow-hidden border-b border-subtle">
            <img
              src={typeof images[0] === "string" ? images[0] : images[0].src}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[11px] font-mono text-white/90 border border-white/10 flex items-center gap-1.5">
              <ImageIcon size={12} className="text-purple" /> {images.length} Photos
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <Badge variant={getBadgeVariant()}>
              {type}
            </Badge>
            <div className="p-2 bg-canvas rounded-lg border border-subtle group-hover:border-purple/30 transition-colors">
              {getTypeIcon()}
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary mb-1 font-mono group-hover:text-purple transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-purple/90 font-mono mb-3">{subtitle}</p>
          )}

          <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">
            {description}
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center text-secondary text-sm gap-2">
              <Calendar size={16} className="text-purple shrink-0" />
              <span>{date}</span>
            </div>
            {time && (
              <div className="flex items-center text-secondary text-sm gap-2">
                <Clock size={16} className="text-purple shrink-0" />
                <span className="truncate">{time}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center text-secondary text-sm gap-2">
                <MapPin size={16} className="text-purple shrink-0" />
                <span>{location}</span>
              </div>
            )}
            {speaker && (
              <div className="flex items-center text-secondary text-sm gap-2">
                <User size={16} className="text-purple shrink-0" />
                <span className="truncate">{speaker}</span>
              </div>
            )}
            {attendees && (
              <div className="flex items-center text-secondary text-sm gap-2">
                <UsersRound size={16} className="text-purple shrink-0" />
                <span>{attendees}+ Attendees</span>
              </div>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-subtle">
            <Button
              variant={isUpcoming ? "outline" : "ghost"}
              className="w-full"
              icon
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              {isUpcoming ? "Register Now" : "View Details & Recap"}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* ENLARGED DETAILED MODAL RECAP VIEW */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-lg"
            />

            {/* Modal Dialog - EXPANDED SIZE (max-w-5xl) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-surface border border-subtle rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto"
            >
              {/* Header section with gradient accent */}
              <div className="sticky top-0 bg-surface/95 backdrop-blur-md p-6 border-b border-subtle flex items-start justify-between z-20">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant={getBadgeVariant()}>{type}</Badge>
                    {isUpcoming ? (
                      <Badge variant="green">Upcoming</Badge>
                    ) : (
                      <Badge variant="subtle">Completed</Badge>
                    )}
                    {attendees && (
                      <span className="text-xs text-secondary bg-canvas px-2.5 py-1 rounded-full border border-subtle font-mono">
                        {attendees}+ Participants
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-mono font-bold text-primary">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-sm text-purple font-mono mt-1">{subtitle}</p>
                  )}
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-canvas text-secondary hover:text-primary hover:border-purple/40 border border-subtle transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-8 text-left">
                {/* Meta details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-canvas/60 rounded-xl border border-subtle">
                  <div className="flex items-center gap-3 text-sm text-secondary">
                    <Calendar size={18} className="text-purple shrink-0" />
                    <div>
                      <div className="text-xs text-secondary/70">Date</div>
                      <div className="text-primary font-medium">{date}</div>
                    </div>
                  </div>
                  {time && (
                    <div className="flex items-center gap-3 text-sm text-secondary">
                      <Clock size={18} className="text-purple shrink-0" />
                      <div>
                        <div className="text-xs text-secondary/70">Time</div>
                        <div className="text-primary font-medium">{time}</div>
                      </div>
                    </div>
                  )}
                  {location && (
                    <div className="flex items-center gap-3 text-sm text-secondary">
                      <MapPin size={18} className="text-purple shrink-0" />
                      <div>
                        <div className="text-xs text-secondary/70">Venue</div>
                        <div className="text-primary font-medium">{location}</div>
                      </div>
                    </div>
                  )}
                  {facultyCoordinator && (
                    <div className="flex items-center gap-3 text-sm text-secondary">
                      <GraduationCap size={18} className="text-purple shrink-0" />
                      <div>
                        <div className="text-xs text-secondary/70">Faculty Coordinator</div>
                        <div className="text-primary font-medium">{facultyCoordinator}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold font-mono text-primary mb-2 flex items-center gap-2">
                    <Layers size={18} className="text-purple" /> Overview
                  </h3>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base">
                    {description}
                  </p>
                </div>

                {/* Photo Gallery Grid */}
                {images && images.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold font-mono text-primary mb-4 flex items-center gap-2">
                      <ImageIcon size={20} className="text-purple" /> Event Photo Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {images.map((img, idx) => {
                        const imgSrc = typeof img === "string" ? img : img.src;
                        const imgCaption = typeof img === "object" ? img.caption : `Event photo ${idx + 1}`;
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage({ src: imgSrc, caption: imgCaption })}
                            className="group relative bg-canvas border border-subtle rounded-xl overflow-hidden shadow-md hover:border-purple/50 transition-all cursor-pointer"
                          >
                            <div className="relative w-full h-52 sm:h-56 overflow-hidden">
                              <img
                                src={imgSrc}
                                alt={imgCaption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/20">
                                  <Maximize2 size={20} />
                                </span>
                              </div>
                            </div>
                            {imgCaption && (
                              <div className="p-3 bg-surface border-t border-subtle text-xs text-secondary font-mono truncate">
                                {imgCaption}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Chief Guest / Keynote */}
                {chiefGuest && (
                  <div className="p-4 bg-purple/5 border border-purple/20 rounded-xl">
                    <div className="text-xs text-purple font-mono uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                      <Award size={16} /> Chief Guest
                    </div>
                    <div className="text-primary font-bold text-base">{chiefGuest}</div>
                  </div>
                )}

                {/* Highlights / Outcomes */}
                {highlights && highlights.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold font-mono text-primary mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-amber-400" /> Key Highlights & Achievements
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-canvas/40 border border-subtle rounded-lg text-sm text-secondary">
                          <CheckCircle2 size={18} className="text-purple shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Competition Winners (if applicable) */}
                {winners && winners.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold font-mono text-primary mb-3 flex items-center gap-2">
                      <Trophy size={18} className="text-amber-400" /> Assignment & Submission Winners
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {winners.map((winner, idx) => (
                        <div key={idx} className="p-4 bg-gradient-to-b from-purple/10 to-transparent border border-purple/30 rounded-xl text-center">
                          <div className="text-xs font-mono text-purple uppercase font-bold mb-1">{winner.rank}</div>
                          <div className="text-primary font-bold text-sm">{winner.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Event Flow / Sessions */}
                {flow && flow.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold font-mono text-primary mb-4 flex items-center gap-2">
                      <Clock size={18} className="text-purple" /> Event Agenda & Sessions
                    </h3>
                    <div className="space-y-3 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-subtle">
                      {flow.map((session, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute left-1.5 top-2.5 w-3 h-3 rounded-full bg-purple -translate-x-1/2 ring-4 ring-surface" />
                          <div className="p-4 bg-canvas/40 border border-subtle rounded-xl">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                              <h4 className="font-bold text-primary font-mono text-sm">{session.title}</h4>
                              {session.time && (
                                <span className="text-xs text-purple font-mono bg-purple/10 px-2 py-0.5 rounded">
                                  {session.time}
                                </span>
                              )}
                              {session.speaker && (
                                <span className="text-xs text-secondary bg-surface px-2 py-0.5 rounded border border-subtle">
                                  Speaker: {session.speaker}
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-secondary leading-relaxed mt-2">
                              {session.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guest Speakers & Organization Details */}
                {(guestSpeakers || organizingTeam) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-subtle pt-6">
                    {guestSpeakers && (
                      <div>
                        <div className="text-xs text-secondary font-mono uppercase mb-2 font-bold">Dignitaries & Speakers</div>
                        <ul className="space-y-1 text-xs text-secondary">
                          {guestSpeakers.map((gs, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <User size={12} className="text-purple" /> {gs}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {organizingTeam && (
                      <div>
                        <div className="text-xs text-secondary font-mono uppercase mb-2 font-bold">Organizing Team</div>
                        <div className="flex flex-wrap gap-1.5">
                          {organizingTeam.map((member, i) => (
                            <span key={i} className="text-xs text-secondary bg-canvas px-2.5 py-1 rounded border border-subtle">
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Detailed Recap note */}
                {recap && (
                  <div className="p-4 bg-surface border border-subtle rounded-xl">
                    <h4 className="text-xs font-mono uppercase font-bold text-secondary mb-1">Recap & Impact</h4>
                    <p className="text-sm text-primary leading-relaxed">{recap}</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-surface/95 backdrop-blur-md p-4 border-t border-subtle flex justify-end z-20">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Close Details
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULL-SCREEN LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-black/50 rounded-full border border-white/20 transition-colors"
                aria-label="Close full view"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              {selectedImage.caption && (
                <p className="mt-4 text-center font-mono text-sm text-secondary bg-black/60 px-4 py-2 rounded-lg border border-white/10">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

