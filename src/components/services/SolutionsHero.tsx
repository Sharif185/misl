'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Section, Container } from '@/components/ui';

export function SolutionsHero() {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

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
                        Industries We Serve
                    </motion.p>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ rotateX, rotateY, transformPerspective: 800 }}
                        className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl"
                    >
                        Solutions Shaped by{' '}
                        <motion.span
                            className="text-cyan inline-block"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            Industry Context
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ color: '#CCD6F6' }}
                        className="text-lg leading-relaxed text-[#8892B0] transition-colors duration-300"
                    >
                        We don't believe in one-size-fits-all. Every industry has its own
                        constraints, regulations, and opportunities — our solutions are built
                        with that context baked in from day one.
                    </motion.p>
                </div>
            </Container>
        </Section>
    );
}
