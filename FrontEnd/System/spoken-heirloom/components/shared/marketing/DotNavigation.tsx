interface DotNavigationProps {
  total: number;
  current: number;
  onSelect: (idx: number) => void;
}

export const DotNavigation: React.FC<DotNavigationProps> = ({
  total,
  current,
  onSelect,
}) => (
  <div className="flex justify-center mt-4 gap-2">
    {Array.from({ length: total }).map((_, idx) => (
      <button
        key={idx}
        aria-label={`Go to slide ${idx + 1}`}
        className={`w-2.5 h-2.5 rounded-full border border-[#7B8572] transition-colors duration-200 ${
          idx === current ? "bg-[#7B8572]" : "bg-transparent"
        }`}
        onClick={() => onSelect(idx)}
      />
    ))}
  </div>
);
