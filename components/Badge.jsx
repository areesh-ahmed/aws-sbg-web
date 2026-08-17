import clsx from "clsx";

export default function Badge({ children, variant = "subtle", className }) {
  const variants = {
    subtle: "bg-elevated text-secondary border border-subtle",
    purple: "bg-purple/10 text-purple border border-purple/20",
    blue: "bg-blue/10 text-[#4DA3FF] border border-blue/20",
    green: "bg-green/10 text-[#22C55E] border border-green/20",
    purple: "bg-purple/10 text-[#8B5CF6] border border-purple/20",
  };

  return (
    <span className={clsx(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
