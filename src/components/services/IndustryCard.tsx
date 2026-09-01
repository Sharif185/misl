'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface IndustryCardProps {
    icon: React.ReactNode;
    industry: string;
    description: string;
    index: number;
}

export function IndustryCard({ icon, industry, description, index }: IndustryCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

    const glowX = useTransform(springX, [-0.5, 0.5], ['10%', '90%']);
    const glowY = useTransform(springY, [-0.5, 0.5], ['10%', '90%']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width - 0.5);
        mouseY.set((e.clientY - top) / height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformPerspective: 800 }}
                className={[
                    'relative overflow-hidden rounded-xl border border-cyan/20 bg-navy p-8',
                    'flex flex-col gap-5 cursor-default h-full',
                    'transition-[border-color,box-shadow] duration-300',
                    'hover:border-cyan hover:shadow-lg hover:shadow-cyan/10',
                ].join(' ')}
            >
                {/* Cursor-following glow orb */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute h-36 w-36 rounded-full bg-cyan/10 blur-2xl"
                    style={{
                        left: glowX,
                        top: glowY,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                    {icon}
                </div>

                {/* Industry name */}
                <h3 className="relative text-xl font-bold text-white">{industry}</h3>

                {/* Divider */}
                <div className="relative h-px w-12 bg-cyan/40" aria-hidden="true" />

                {/* Description */}
                <p className="relative text-sm leading-relaxed text-[#8892B0]">{description}</p>
            </motion.div>
        </motion.div>
    );
}
