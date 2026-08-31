import { Nav } from '@/components/common/Nav';
import { Hero } from '@/components/home/Hero';
import { Footer } from '@/components/common/Footer';
import { PageIllustration } from '@/components/home/PageIllustration';

export default function HomePage() {
    return (
        <main className="relative grain min-h-screen overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#122642,#0A192F_60%)]">            <Nav />
            <Hero />
            <Footer />
        </main>
    );
}