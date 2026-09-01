'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AccordionItem {
    title: string;
    content: string;
}

interface ServicesAccordionProps {
    items: AccordionItem[];
}

// ── Single accordion row with cursor-following glow ─────────────────────────

function AccordionRow({
    item,
    index,
    isOpen,
    onToggle,
}: {
    item: AccordionItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

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
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden rounded-xl border border-cyan/20 bg-navy transition-colors duration-300 hover:border-cyan/40"
        >
            {/* Cursor-following glow orb */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute h-40 w-40 rounded-full bg-cyan/10 blur-2xl"
                style={{
                    left: glowX,
                    top: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Header button */}
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-body-${index}`}
                id={`accordion-header-${index}`}
                className="relative flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-inset"
            >
                <span className="font-semibold text-white">{item.title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-4 flex-shrink-0 text-cyan text-2xl leading-none"
                    aria-hidden="true"
                >
                    +
                </motion.span>
            </button>

            {/* Body */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`accordion-body-${index}`}
                        role="region"
                        aria-labelledby={`accordion-header-${index}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="relative px-6 pb-5 text-sm leading-relaxed text-[#8892B0]">
                            {item.content}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Accordion container ──────────────────────────────────────────────────────

export function ServicesAccordion({ items }: ServicesAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-3">
            {items.map((item, index) => (
                <AccordionRow
                    key={index}
                    item={item}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => toggle(index)}
                />
            ))}
        </div>
    );
}
