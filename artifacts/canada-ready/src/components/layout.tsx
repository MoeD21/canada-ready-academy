import React from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();

  const links = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/programs", label: t('nav.programs') },
    { href: "/how-it-works", label: t('nav.howItWorks') },
    { href: "/assessment", label: t('nav.assessment') },
    { href: "/testimonials", label: t('nav.testimonials') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary tracking-tight">Canada Ready</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="px-3 py-1 rounded-full border border-input text-sm font-medium hover:bg-accent transition-colors"
          >
            {language === 'en' ? 'عربي' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="font-semibold text-foreground mb-4">Canada Ready Academy</p>
        <p className="text-sm">© {new Date().getFullYear()} Canada Ready Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/15870000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
