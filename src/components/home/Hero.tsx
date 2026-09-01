'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui';

export function Hero() {
    useEffect(() => {
        AOS.init({ once: true, duration: 600, easing: 'ease-out' });
    }, []);

    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-20 text-center md:py-32"><h1
                    className="bg-[linear-gradient(to_right,#ffffff,#00FFAB,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-5 text-4xl font-semibold text-transparent md:text-6xl"
                    data-aos="fade-up"
                >
                    Human Intelligence,
                    <br />
                    Accelerated by MISL
                </h1>

                    <div className="mx-auto max-w-3xl">
                        <p
                            className="mb-8 text-xl text-white/60"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            We build MISL-powered systems that amplify human creativity, speed
                            up decision-making, and transform ideas into real-world impact.
                        </p>

                        <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4">
                            <div data-aos="fade-up" data-aos-delay={400}>
                                <Button variant="primary" className="w-full sm:w-auto">
                                    Get Started Now
                                </Button>
                            </div>
                            <div className="mt-4 sm:mt-0" data-aos="fade-up" data-aos-delay={600}>
                                <Button variant="outline" className="w-full sm:w-auto">
                                    Explore Work
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center gap-10" data-aos="fade-up" data-aos-delay={800}>
                        {[
                            { value: '10K+', label: 'Active Users' },
                            { value: '1M+', label: 'Tasks Completed' },
                            { value: '40+', label: 'Countries Served' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 text-white"
                            >
                                <span className="text-lg font-bold text-cyan">{stat.value}</span>
                                <span className="mt-1 text-[10px] text-white/50">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}