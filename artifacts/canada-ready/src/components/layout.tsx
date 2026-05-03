import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: language === "en" ? "Home" : "الرئيسية" },
    { href: "/about", label: language === "en" ? "About" : "عنّا" },
    { href: "/programs", label: language === "en" ? "Programs" : "البرامج" },
    { href: "/services", label: language === "en" ? "All Services" : "كل الخدمات" },
    { href: "/how-it-works", label: language === "en" ? "How It Works" : "كيف يعمل" },
    { href: "/testimonials", label: language === "en" ? "Testimonials" : "آراء الطلاب" },
    { href: "/contact", label: language === "en" ? "Contact" : "تواصل" },
  ];

  const mobileLinks = [
    { href: "/", emoji: "🏠", en: "Home", ar: "الرئيسية" },
    { href: "/about", emoji: "ℹ️", en: "About", ar: "عنّا" },
    { href: "/programs", emoji: "📚", en: "Programs", ar: "البرامج" },
    { href: "/services", emoji: "🧾", en: "All Services", ar: "كل الخدمات" },
    { href: "/how-it-works", emoji: "🔄", en: "How It Works", ar: "كيف يعمل" },
    { href: "/assessment", emoji: "📋", en: "Free Assessment", ar: "تقييم مجاني", highlight: true },
    { href: "/testimonials", emoji: "⭐", en: "Testimonials", ar: "آراء الطلاب" },
    { href: "/contact", emoji: "📞", en: "Contact", ar: "تواصل" },
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(245,254,253,0.98)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(102,230,222,0.22)", height: "68px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "0 5%" }}>
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "42px", height: "42px", background: "var(--tiffany)", borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>🍁</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 800, color: "var(--tiffany-dk)", lineHeight: 1 }}>CanadaReady</div>
            <div style={{ fontSize: "9px", color: "var(--gold)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{language === "en" ? "Academy" : "أكاديمية"}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "2px" }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{
              textDecoration: "none", fontSize: "13px", fontWeight: 600, padding: "7px 11px", borderRadius: "8px", transition: "0.2s",
              color: location === link.href ? "var(--tiffany-dk)" : "#4A6B69",
              background: location === link.href ? "rgba(10,186,181,0.1)" : "transparent"
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: language switch + CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "var(--tiffany-dk)", borderRadius: "22px", padding: "3px", display: "flex", flexShrink: 0 }}>
            <button onClick={() => setLanguage("en")} style={{ border: "none", background: language === "en" ? "var(--gold)" : "transparent", color: language === "en" ? "var(--tiffany-dk)" : "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 700, padding: "5px 13px", borderRadius: "18px", cursor: "pointer", transition: "0.22s", fontFamily: "inherit" }} data-testid="btn-en">EN</button>
            <button onClick={() => setLanguage("ar")} style={{ border: "none", background: language === "ar" ? "var(--gold)" : "transparent", color: language === "ar" ? "var(--tiffany-dk)" : "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 700, padding: "5px 13px", borderRadius: "18px", cursor: "pointer", transition: "0.22s", fontFamily: "inherit" }} data-testid="btn-ar">عربي</button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex lg:hidden" style={{ background: "none", border: `2px solid var(--tiffany)`, borderRadius: "8px", width: "38px", height: "38px", cursor: "pointer", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", padding: 0 }} data-testid="hamburger">
            <span style={{ display: "block", width: "18px", height: "2px", background: "var(--tiffany)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "18px", height: "2px", background: "var(--tiffany)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "18px", height: "2px", background: "var(--tiffany)", borderRadius: "2px" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: "fixed", top: "68px", left: 0, right: 0, background: "#fff", zIndex: 999, borderBottom: "1px solid rgba(10,186,181,0.15)", padding: "16px 5%", display: "flex", flexDirection: "column", gap: "3px" }}>
          {mobileLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              textDecoration: "none", fontSize: "15px", fontWeight: link.highlight ? 800 : 600, padding: "10px 14px", borderRadius: "10px",
              color: link.highlight ? "var(--tiffany-dk)" : "#4A6B69",
              background: link.highlight ? "rgba(10,186,181,0.1)" : "transparent"
            }}>
              {link.emoji} {language === "en" ? link.en : link.ar}
            </Link>
          ))}
          <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", textDecoration: "none", padding: "11px 15px", borderRadius: "11px", fontWeight: 700, fontSize: "14px", marginTop: "6px" }}>
            💬 {language === "en" ? "Chat on WhatsApp" : "تحدث على واتساب"}
          </a>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const navLinks = [
    { href: "/", en: "Home", ar: "الرئيسية" },
    { href: "/about", en: "About", ar: "عنّا" },
    { href: "/programs", en: "Programs", ar: "البرامج" },
    { href: "/services", en: "All Services", ar: "كل الخدمات" },
    { href: "/how-it-works", en: "How It Works", ar: "كيف يعمل" },
    { href: "/assessment", en: "Free Appointment", ar: "موعد مجاني" },
    { href: "/testimonials", en: "Testimonials", ar: "آراء الطلاب" },
    { href: "/contact", en: "Contact", ar: "تواصل" },
  ];

  return (
    <footer style={{ background: "#004D4B", color: "rgba(255,255,255,0.55)", paddingTop: "54px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1.4fr", gap: "38px", paddingBottom: "42px", padding: "0 5% 42px" }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>🍁 CanadaReady Academy</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "255px", marginBottom: "16px" }}>
            {isAr ? "دعم اللغة الإنجليزية والمهنة والحياة للقادمين الجدد في كندا." : "English, Career & Life Support for Newcomers in Canada."}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "7px", background: "#25D366", color: "#fff", textDecoration: "none", padding: "9px 13px", borderRadius: "9px", fontWeight: 700, fontSize: "13px" }}>💬 WhatsApp</a>
            <a href="https://facebook.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "7px", background: "#1877F2", color: "#fff", textDecoration: "none", padding: "9px 13px", borderRadius: "9px", fontWeight: 700, fontSize: "13px" }}>📘 Facebook</a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "11.5px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "13px", fontFamily: "'Outfit', sans-serif" }}>{isAr ? "روابط سريعة" : "Quick Links"}</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "rgba(255,255,255,0.46)", textDecoration: "none", fontSize: "13px", transition: "0.2s" }}>
                  {isAr ? link.ar : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "11.5px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "13px", fontFamily: "'Outfit', sans-serif" }}>{isAr ? "اتصل بنا" : "Contact Us"}</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
            <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>💬 +1 (587) 000-0000</a>
            <a href="mailto:hello@canadareadyacademy.com" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>✉️ hello@canadareadyacademy.com</a>
            <a href="https://instagram.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>📸 @canadareadyacademy</a>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>🌐 {isAr ? "عبر الإنترنت — جميع أنحاء كندا" : "Online — All of Canada"}</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "17px 5%", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.27)" }}>
        <span>© {new Date().getFullYear()} Canada Ready Academy. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}</span>
        <span>{isAr ? "مدعوم بالحب للمهاجرين 🍁" : "Made with ❤️ for newcomers 🍁"}</span>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer"
      style={{ position: "fixed", bottom: "26px", right: "26px", zIndex: 950, width: "56px", height: "56px", background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", textDecoration: "none" }}
      className="animate-pulse-wa"
      aria-label="WhatsApp"
      data-testid="whatsapp-float"
    >💬</a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "68px" }}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
