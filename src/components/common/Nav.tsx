import { Button } from '@/components/ui';

export function Nav() {
    return (
        <nav className="mx-auto mt-6 flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2 font-bold text-white">
                <span className="rounded-md bg-cyan px-2 py-1 text-navy">M</span>
                MISL
            </div>

            <div className="hidden gap-8 text-sm text-white/70 md:flex">
                <a href="#services" className="hover:text-cyan">Services</a>
                <a href="#solutions" className="hover:text-cyan">Solutions</a>
                <a href="#portfolio" className="hover:text-cyan">Portfolio</a>
            </div>

            <Button variant="primary" className="rounded-full">
                Get Started
            </Button>
        </nav>
    );
}