'use client';

import { motion } from 'framer-motion';

interface TimelineStep {
    step: number;
    label: string;
    description: string;
}

const steps: TimelineStep[] = [
    {
        step: 1,
        label: 'Discovery',
        description: 'We deep-dive into your business goals, user needs, and technical landscape to define the right problem.',
    },
    {
        step: 2,
        label: 'Architecture',
        description: 'Our engineers design a scalable, future-proof system architecture tailored to your requirements.',
    },
    {
        step: 3,
        label: 'Agile Development',
        description: 'We build in iterative sprints with continuous feedback, ensuring transparency and adaptability throughout.',
    },
    {
        step: 4,
        label: 'ML Ops',
        description: 'We integrate, monitor, and maintain machine learning pipelines so your AI keeps performing in production.',
    },
    {
        step: 5,
        label: 'Launch & Support',
        description: 'From deployment to ongoing support, we ensure a smooth go-live and long-term stability.',
    },
];

export function PipelineTimeline() {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-cyan/20 md:left-1/2" aria-hidden="true" />

            <div className="flex flex-col gap-10">
                {steps.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={[
                                'relative flex items-start gap-6',
                                'md:w-1/2 md:gap-8',
                                isEven ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12',
                            ].join(' ')}
                        >
                            {/* Step circle */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-navy text-cyan font-bold text-sm">
                                {item.step}
                            </div>

                            {/* Content */}
                            <div className="flex-1 rounded-xl border border-cyan/20 bg-navy p-5 hover:border-cyan/50 transition-colors duration-300">
                                <h4 className="mb-2 font-semibold text-white">{item.label}</h4>
                                <p className="text-sm leading-relaxed text-[#8892B0]">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
