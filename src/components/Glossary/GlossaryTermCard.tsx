// src/components/Glossary/GlossaryTermCard.tsx
import React from 'react';
import * as Icons from 'lucide-react';

export interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
  icon?: string;
  learnMore?: string;
}

const iconMap: Record<string, any> = {
  Leaf: Icons.Leaf,
  Clipboard: Icons.Clipboard,
  Repeat: Icons.Repeat,
  PackageOpen: Icons.PackageOpen,
  Seed: Icons.Seed,
  Award: Icons.Award,
  Shield: Icons.Shield,
  RefreshCw: Icons.RefreshCw,
  Chemical: Icons.Flask,
  RefreshCcw: Icons.RefreshCcw,
  Repeat2: Icons.RotateCcw,
  Droplet: Icons.Droplet,
  Inbox: Icons.Inbox,
  Eye: Icons.Eye,
  DropletOff: Icons.DropletOff,
  Recycling: Icons.ArrowRotateRight,
  FileText: Icons.FileText,
  Scale: Icons.Scale,
  Scissors: Icons.Scissors,
  Users: Icons.Users,
  HardDrive: Icons.HardDrive,
  Seedling: Icons.Seedling,
  CornerUpLeft: Icons.CornerUpLeft,
  Water: Icons.Water
};

export const GlossaryTermCard: React.FC<{ item: GlossaryItem }> = ({ item }) => {
  const IconComp = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Icons.BookOpen;
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 rounded-md bg-gradient-to-br from-green-100 to-green-200 p-3">
          <IconComp className="h-6 w-6 text-green-700" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.term}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.definition}</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-200">{item.category}</span>
            {item.learnMore && (
              <a
                href={item.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                Learn more →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GlossaryTermCard;
