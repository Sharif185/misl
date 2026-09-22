import { Card, Grid } from '@/components/ui';

export interface Value {
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
}

export function ValuesSection({ values }: ValuesSectionProps) {
  if (values.length === 0) return null;

  return (
    <Grid cols={3} gap="6">
      {values.map((value) => (
        <Card key={value.title} className="h-full p-6">
          <h3 className="text-base font-semibold text-white">{value.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {value.description}
          </p>
        </Card>
      ))}
    </Grid>
  );
}