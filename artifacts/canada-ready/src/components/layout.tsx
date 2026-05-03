import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/assessment", label: t("nav.assessment") },
    { href: "/testimonials", label: t("nav.testimonials") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="font-extrabold text-xl text-primary tracking-tight">Canada Ready Academy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-3 py-1 rounded-full border border-input text-sm font-semibold hover:bg-accent transition-colors ml-2"
            data-testid="button-language-toggle"
          >
            {language === "en" ? "عربي" : "English"}
          </button>
        </div>

        {/* Mobile: language + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-3 py-1 rounded-full border border-input text-sm font-semibold hover:bg-accent transition-colors"
            data-testid="button-language-toggle-mobile"
          >
            {language === "en" ? "عربي" : "English"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-lg text-base font-medium transition-colors hover:bg-accent ${location === link.href ? "text-primary bg-primary/5" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/15870000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-bold justify-center"
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={18} />
              {t("common.whatsappMsg")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  const { t, language } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/assessment", label: t("nav.assessment") },
    { href: "/testimonials", label: t("nav.testimonials") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-foreground text-background/80 pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-extrabold text-xl text-background mb-3">Canada Ready Academy</p>
            <p className="text-sm leading-relaxed mb-4">{t("footer.desc")}</p>
            <div className="flex gap-3">
              <a href="https://facebook.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#25D366] hover:bg-[#20b858] rounded-full flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bold text-background mb-4">{t("footer.quickLinks")}</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-background mb-4">{language === "en" ? "Contact Us" : "اتصل بنا"}</p>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background transition-colors">
                <Phone size={16} className="flex-shrink-0" />
                +1 (587) 000-0000
              </a>
              <a href="mailto:hello@canadareadyacademy.com" className="flex items-center gap-3 hover:text-background transition-colors">
                <Mail size={16} className="flex-shrink-0" />
                hello@canadareadyacademy.com
              </a>
              <a href="https://facebook.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background transition-colors">
                <Facebook size={16} className="flex-shrink-0" />
                @CanadaReadyAcademy
              </a>
              <a href="https://instagram.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background transition-colors">
                <Instagram size={16} className="flex-shrink-0" />
                @canadareadyacademy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <Phone size={26} />
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
