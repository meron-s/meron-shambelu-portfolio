import * as Icons from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
}

export default function IconRenderer({ name, className = "w-6 h-6" }: IconRendererProps) {
  // If we have custom icons or aliases
  if (name === "ReactIcon") {
    // Return custom or fallback to standard lucide components like Atom or Cpu
    const ReactComp = Icons.Atom;
    return <ReactComp className={`${className} text-cyan-400`} />;
  }

  // Fallback map
  const LucideIcon = (Icons as any)[name];
  if (LucideIcon) {
    return <LucideIcon className={className} />;
  }

  // Default fallback icon
  const Fallback = Icons.HelpCircle;
  return <Fallback className={className} />;
}
