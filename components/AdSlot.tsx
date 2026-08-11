type AdSlotProps = {
  slot: "home-banner" | "game-sidebar" | "article-inline" | "footer";
  className?: string;
};

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  return (
    <div
      aria-hidden="true"
      className={`ad-slot ${className}`}
      data-ad-slot={slot}
    />
  );
}
