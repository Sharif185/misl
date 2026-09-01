'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Section, Container } from '@/components/ui';

export function ServicesHero() {
    const ref = useRef<HTMLDivElement>(null);

    // Track mouse position relative to the hero container
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring so movement feels fluid
    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    // Subtle tilt on the headline — max ±4 degrees
    const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

    // Glow opacity on the background orb follows cursor
    const glowX = useTransform(springX, [-0.5, 0.5], ['10%', '90%']);
    const glowY = useTransform(springY, [-0.5, 0.5], ['10%', '90%']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        // Normalise to -0.5 → 0.5
        mouseX.set((e.clientX - left) / width - 0.5);
        mouseY.set((e.clientY - top) / height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <Section className="relative overflow-hidden border-b border-cyan/10">
            {/* Cursor-following glow orb */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute h-72 w-72 rounded-full bg-cyan/10 blur-3xl"
                style={{
                    left: glowX,
                    top: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            <Container>
                <div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="max-w-3xl cursor-default"
                >
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan"
                    >
                        What We Do
                    </motion.p>

                    {/* Headline with tilt */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ rotateX, rotateY, transformPerspective: 800 }}
                        className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl"
                    >
                        Services Built for{' '}
                        <motion.span
                            className="text-cyan inline-block"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            Complex Problems
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle — brightens on hover */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ color: '#CCD6F6' }}
                        className="text-lg leading-relaxed text-[#8892B0] transition-colors duration-300"
                    >
                        We combine deep engineering expertise with emerging technology to deliver
                        solutions that move fast, scale further, and hold up in production.
                    </motion.p>
                </div>
            </Container>
        </Section>
    );
}
