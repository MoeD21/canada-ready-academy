import React, { useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(245,254,253,0.98)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(102,230,222,0.22)", height: "68px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "0 5%" }}>
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "42px", height: "42px", background: "var(--tiffany)", borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>🍁</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 800, color: "var(--tiffany-dk)", lineHeight: 1 }}>CanadaReady</div>
            <div style={{ fontSize: "9px", color: "var(--gold)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Academy / أكاديمية</div>
          </div>
        </Link>

        {/* Right: CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/assessment" style={{ background: "linear-gradient(135deg, var(--gold) 0%, #E8B84B 100%)", color: "var(--tiffany-dk)", textDecoration: "none", fontSize: "13px", fontWeight: 800, padding: "10px 16px", borderRadius: "999px", boxShadow: "0 10px 22px rgba(201,144,58,0.28)", whiteSpace: "nowrap" }}>
            Book Appointment / احجز موعداً
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex lg:hidden" style={{ background: "none", border: `2px solid var(--tiffany)`, borderRadius: "8px", width: "38px", height: "38px", cursor: "pointer", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", padding: 0 }} data-testid="hamburger">
            <span style={{ display: "block", width: "18px", height: "2px", background: "var(--tiffany)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "18px", height: "2px", background: "var(--tiffany)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "18px", height: "2px", background: "var(--tiffany)", borderRadius: "2px" }} />
          </button>
        </div>
      </div>

      {mobileOpen && null}
    </nav>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#004D4B", color: "rgba(255,255,255,0.55)", paddingTop: "54px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1.4fr", gap: "38px", paddingBottom: "42px", padding: "0 5% 42px" }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>🍁 CanadaReady Academy</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "255px", marginBottom: "16px" }}>
            English, Career & Life Support / دعم الإنجليزية والمهنة والحياة
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <a href="https://wa.me/14034340027" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "7px", background: "#25D366", color: "#fff", textDecoration: "none", padding: "9px 13px", borderRadius: "9px", fontWeight: 700, fontSize: "13px" }}>💬 WhatsApp</a>
            <a href="https://facebook.com/groups/1338122224799157" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "7px", background: "#1877F2", color: "#fff", textDecoration: "none", padding: "9px 13px", borderRadius: "9px", fontWeight: 700, fontSize: "13px" }}>📘 Facebook</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "11.5px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "13px", fontFamily: "'Outfit', sans-serif" }}>Contact Us / اتصل بنا</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
            <a href="https://wa.me/14034340027" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>💬 +1 (403) 434-0027</a>
            <a href="mailto:canadareadyacademy@gmail.com" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>✉️ canadareadyacademy@gmail.com</a>
            <a href="https://instagram.com/canadareadyacademy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>📸 @canadareadyacademy</a>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>🌐 Online — All of Canada / عبر الإنترنت — جميع أنحاء كندا</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "17px 5%", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.27)" }}>
        <span>© {new Date().getFullYear()} Canada Ready Academy. All rights reserved / جميع الحقوق محفوظة.</span>
        <span>Made with ❤️ for newcomers / مدعوم بالحب للمهاجرين 🍁</span>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/14034340027" target="_blank" rel="noopener noreferrer"
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
