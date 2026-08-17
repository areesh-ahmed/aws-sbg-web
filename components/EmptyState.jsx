import { SearchX } from "lucide-react";
import Button from "./Button";

export default function EmptyState({ 
  title, 
  description, 
  actionLabel, 
  onAction,
  actionHref = "#"
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-subtle bg-elevated/50 rounded-lg">
      <div className="w-16 h-16 bg-surface border border-subtle rounded-full flex items-center justify-center mb-6 text-subtle">
        <SearchX size={28} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2 font-mono">{title}</h3>
      <p className="text-secondary max-w-md mx-auto mb-8 text-sm">
        {description}
      </p>
      {actionLabel && (
        <Button 
          variant="primary" 
          onClick={onAction} 
          href={!onAction ? actionHref : undefined}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
