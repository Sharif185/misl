import { Card } from '@/components/ui';

interface Pillar {
  title: string;
  body: string;
}

interface MissionVisionProps {
  mission: Pillar;
  vision: Pillar;
}

export function MissionVision({ mission, vision }: MissionVisionProps) {
  const pillars: Pillar[] = [mission, vision];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {pillars.map((pillar) => (
        <Card key={pillar.title} className="p-6 sm:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00FFAB]">
            {pillar.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            {pillar.body}
          </p>
        </Card>
      ))}
    </div>
  );
}