'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

    // Subtle tilt — max ±6 degrees
    const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

    // Glow orb follows cursor inside the card
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

    const handleLearnMore = () => {
        const el = document.getElementById('details');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
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
                    'relative overflow-hidden rounded-xl border border-cyan/20 bg-navy p-6',
                    'flex flex-col gap-4 cursor-default',
                    'transition-[border-color,box-shadow] duration-300',
                    'hover:border-cyan hover:shadow-lg hover:shadow-cyan/10',
                ].join(' ')}
            >
                {/* Cursor-following glow orb inside the card */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute h-32 w-32 rounded-full bg-cyan/10 blur-2xl"
                    style={{
                        left: glowX,
                        top: glowY,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-semibold text-white">{title}</h3>

                {/* Description */}
                <p className="relative flex-1 text-sm leading-relaxed text-[#8892B0]">{description}</p>

                {/* CTA — scrolls to accordion */}
                <div className="relative">
                    <Button variant="outline" className="text-xs px-4 py-2" onClick={handleLearnMore}>
                        Learn More
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}
