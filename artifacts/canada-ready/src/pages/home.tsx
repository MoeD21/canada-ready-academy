import React, { useState, useEffect } from "react";
import "../home-page.css";

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  const [navOpen, setNavOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [assessSent, setAssessSent] = useState(false);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactSent(true);
  }

  function handleAssessSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAssessSent(true);
  }

  return (
    <div className="home-page hp">
      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/15870000000" className="wa-float" target="_blank" rel="noopener noreferrer">💬</a>

      {/* ════════════════ STRIP ════════════════ */}
      <div className="strip">
        <div className="bi-txt">
          <span>🍁 Limited spots — First week is completely FREE</span>
          <span>•</span>
          <span className="strip-ar">🍁 أماكن محدودة — الأسبوع الأول مجاني تماماً</span>
        </div>
      </div>

      {/* ════════════════ NAV ════════════════ */}
      <nav className="hp-nav">
        <div className="nav-inner">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            <div className="logo-icon">🍁</div>
            <div className="logo-name">CanadaReady <span>Academy</span></div>
          </a>
          <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>☰</button>
          <div className={`nav-links${navOpen ? " open" : ""}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About / عن الأكاديمية</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Services / الخدمات</a>
            <a href="#programs" onClick={(e) => { e.preventDefault(); scrollTo("programs"); }}>Programs / البرامج</a>
            <a href="#how" onClick={(e) => { e.preventDefault(); scrollTo("how"); }}>How It Works / كيف يعمل</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo("testimonials"); }}>Testimonials / آراء</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact / تواصل</a>
            <a href="#assessment" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Book Free Assessment</a>
          </div>
        </div>
      </nav>

      {/* ════════════════ HERO ════════════════ */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">🍁 Canada's #1 Newcomer Support System</div>
            <h1>English, Career &amp;<br /><span className="accent">Life Support</span> for<br />Newcomers in Canada</h1>
            <div className="hero-ar-h1">دعم الإنجليزية والمهنة والحياة<br />للوافدين الجدد في <span style={{color:"#0ABAB5"}}>كندا</span></div>
            <p className="hero-desc">Live online classes, job preparation, and full settlement support — designed for Arabic-speaking immigrants.</p>
            <p className="hero-desc-ar">دروس مباشرة، تحضير للعمل، ودعم توطين متكامل — مصمم خصيصاً للمهاجرين الناطقين بالعربية.</p>
            <div className="hero-btns">
              <a href="#assessment" className="btn-tiff" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Book Free Assessment | احجز تقييماً مجانياً</a>
              <a href="#programs" className="btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo("programs"); }}>View Programs | شاهد البرامج</a>
            </div>
            <div className="hero-stats reveal">
              <div className="hero-stat"><div className="n">500+</div><div className="l">Students Helped<br /><span className="l-ar">طالب استفاد</span></div></div>
              <div className="hero-stat"><div className="n">4</div><div className="l">Programs<br /><span className="l-ar">برامج متاحة</span></div></div>
              <div className="hero-stat"><div className="n">3×</div><div className="l">Live Classes/Week<br /><span className="l-ar">صفوف أسبوعياً</span></div></div>
              <div className="hero-stat"><div className="n">150+</div><div className="l">Services<br /><span className="l-ar">خدمة متاحة</span></div></div>
            </div>
          </div>
          <div className="hero-card reveal">
            <div className="hero-card-top">
              <div className="label">WHAT YOU GET | ما ستحصل عليه</div>
              <ul className="hero-card-items">
                <li>🗣️ <div className="item-bi"><span>English Classes — All Levels</span><span className="item-ar">دروس إنجليزية — جميع المستويات</span></div></li>
                <li>💼 <div className="item-bi"><span>Resume &amp; Job Preparation</span><span className="item-ar">سيرة ذاتية وتحضير للوظائف</span></div></li>
                <li>🏠 <div className="item-bi"><span>Settlement &amp; Life Guidance</span><span className="item-ar">إرشادات التوطين والحياة</span></div></li>
                <li>🤝 <div className="item-bi"><span>Arabic Community &amp; WhatsApp</span><span className="item-ar">مجتمع عربي ودعم واتساب</span></div></li>
                <li>📞 <div className="item-bi"><span>1-on-1 Coaching Calls</span><span className="item-ar">مكالمات تدريب فردية</span></div></li>
                <li>📝 <div className="item-bi"><span>Weekly Quizzes &amp; Progress</span><span className="item-ar">اختبارات أسبوعية ومتابعة</span></div></li>
              </ul>
            </div>
            <div className="price-row"><span className="price-big">$79</span><div><div className="price-sub">/month CAD — Starting price</div><div className="price-ar">/ شهر — السعر الابتدائي</div></div></div>
            <div className="free-badge">🎁 First Week FREE — No credit card needed<br /><span className="free-badge-ar">الأسبوع الأول مجاني — بدون بطاقة ائتمان</span></div>
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT / 4 PILLARS ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>ABOUT | عن الأكاديمية<div className="sd-line"></div></div>
      <section className="sec pillars-bg" id="about">
        <div className="wrap">
          <div className="sec-tag">✅ WE HELP YOU WITH | نساعدك في</div>
          <div className="bi reveal">
            <div className="bi-en">
              <h2 className="sec-title">Everything a Newcomer<br />Needs to Succeed</h2>
              <p className="sec-lead">We don't just teach English. We help you build confidence, income, and a real life in Canada. 500+ newcomers helped. Built by immigrants, for immigrants.</p>
              <p className="sec-lead" style={{fontSize:"14px",color:"#089994",fontWeight:600}}>🌍 Online — Serving all of Canada: Alberta · Ontario · BC · and more</p>
            </div>
            <div className="bi-ar">
              <h2 className="sec-title-ar">كل ما يحتاجه الوافد الجديد<br />للنجاح في كندا</h2>
              <p className="sec-lead-ar">لا نعلّم الإنجليزية فحسب. نساعدك في بناء الثقة والدخل والحياة الحقيقية في كندا. أكثر من 500 وافد استفادوا. بُني من مهاجرين، للمهاجرين.</p>
              <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"#089994",fontWeight:700,direction:"rtl"}}>🌍 عبر الإنترنت — نخدم كل كندا: ألبرتا · أونتاريو · كولومبيا البريطانية</p>
            </div>
          </div>
          <div className="pillars-grid reveal">
            <div className="pillar">
              <div className="pillar-icon">🗣️</div>
              <h3>Improve English</h3>
              <p>Conversation, pronunciation, writing, and test prep for all levels.</p>
              <div style={{height:"8px"}}></div>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontWeight:700,fontSize:"15px",color:"#0E1E33",direction:"rtl",textAlign:"right",marginBottom:"4px"}}>تطوير الإنجليزية</div>
              <div style={{fontFamily:"'Tajawal',sans-serif",direction:"rtl",textAlign:"right",fontSize:"13px",color:"#64748B"}}>محادثة، نطق، كتابة، وتحضير الاختبارات لجميع المستويات.</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">💼</div>
              <h3>Jobs &amp; Career</h3>
              <p>Resume, LinkedIn, interviews, job applications, and career planning.</p>
              <div style={{height:"8px"}}></div>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontWeight:700,fontSize:"15px",color:"#0E1E33",direction:"rtl",textAlign:"right",marginBottom:"4px"}}>الوظائف والمهنة</div>
              <div style={{fontFamily:"'Tajawal',sans-serif",direction:"rtl",textAlign:"right",fontSize:"13px",color:"#64748B"}}>سيرة ذاتية، لينكدإن، مقابلات، تقديم على الوظائف، وتخطيط مهني.</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🏠</div>
              <h3>Life in Canada</h3>
              <p>Banking, rent, healthcare, taxes, government documents, and daily life.</p>
              <div style={{height:"8px"}}></div>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontWeight:700,fontSize:"15px",color:"#0E1E33",direction:"rtl",textAlign:"right",marginBottom:"4px"}}>الحياة في كندا</div>
              <div style={{fontFamily:"'Tajawal',sans-serif",direction:"rtl",textAlign:"right",fontSize:"13px",color:"#64748B"}}>بنوك، إيجار، رعاية صحية، ضرائب، وثائق حكومية، وحياة يومية.</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🤝</div>
              <h3>Community &amp; Support</h3>
              <p>WhatsApp group, accountability, 1-on-1 coaching, and safe newcomer community.</p>
              <div style={{height:"8px"}}></div>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontWeight:700,fontSize:"15px",color:"#0E1E33",direction:"rtl",textAlign:"right",marginBottom:"4px"}}>المجتمع والدعم</div>
              <div style={{fontFamily:"'Tajawal',sans-serif",direction:"rtl",textAlign:"right",fontSize:"13px",color:"#64748B"}}>مجموعة واتساب، متابعة، جلسات تدريب فردية، ومجتمع وافدين آمن.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FREE TRIAL ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>FREE TRIAL | حصة مجانية<div className="sd-line"></div></div>
      <section className="trial-sec">
        <div className="trial-inner wrap">
          <div className="trial-left reveal">
            <h2>Your First Week is<br /><span style={{textDecoration:"underline",textDecorationColor:"rgba(255,255,255,.3)"}}>Completely Free</span></h2>
            <div className="h2-ar">أسبوعك الأول مجاني<br />تماماً بدون أي شرط</div>
            <p>Try the program with zero commitment. Attend all 3 classes, get the materials, join the WhatsApp group — and decide after.</p>
            <div className="p-ar">جرّب البرنامج بدون أي التزام. احضر الصفوف الثلاثة، استلم المواد، انضم لمجموعة الواتساب — ثم قرّر بعدها.</div>
            <div className="trial-chips">
              <div className="chip">✓ No credit card</div>
              <div className="chip chip-ar">✓ بدون بطاقة ائتمان</div>
              <div className="chip">✓ No commitment</div>
              <div className="chip chip-ar">✓ بدون التزام</div>
              <div className="chip">✓ Full week access</div>
              <div className="chip chip-ar">✓ أسبوع كامل مجاناً</div>
            </div>
            <a href="#assessment" className="btn-white" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Book My Free Week | احجز أسبوعي المجاني</a>
          </div>
          <div className="trial-card reveal">
            <h3>What's included in the free week:</h3>
            <div className="h3-ar">ما يشمله الأسبوع المجاني:</div>
            <div className="trial-feature"><div className="tf-icon">📖</div><div><div className="tf-en">Monday — English Foundations class</div><div className="tf-ar">الاثنين — صف أسس الإنجليزية</div></div></div>
            <div className="trial-feature"><div className="tf-icon">🗣️</div><div><div className="tf-en">Wednesday — Conversation &amp; Pronunciation</div><div className="tf-ar">الأربعاء — صف المحادثة والنطق</div></div></div>
            <div className="trial-feature"><div className="tf-icon">💼</div><div><div className="tf-en">Friday — Career &amp; Canada Life Workshop</div><div className="tf-ar">الجمعة — ورشة المهنة والحياة</div></div></div>
            <div className="trial-feature"><div className="tf-icon">💬</div><div><div className="tf-en">WhatsApp group access</div><div className="tf-ar">الوصول لمجموعة الواتساب</div></div></div>
            <div className="trial-feature"><div className="tf-icon">📚</div><div><div className="tf-en">Homework &amp; study materials</div><div className="tf-ar">واجبات ومواد الدراسة</div></div></div>
            <div className="trial-feature"><div className="tf-icon">📝</div><div><div className="tf-en">Weekly quiz + progress tracking</div><div className="tf-ar">اختبار أسبوعي ومتابعة التقدم</div></div></div>
          </div>
        </div>
      </section>

      {/* ════════════════ ALL SERVICES ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>150+ SERVICES | ١٥٠+ خدمة<div className="sd-line"></div></div>
      <section className="sec services-bg" id="services">
        <div className="wrap">
          <div className="sec-tag" style={{borderColor:"rgba(10,186,181,.25)",color:"#0ABAB5"}}>COMPLETE SUPPORT SYSTEM | نظام دعم متكامل</div>
          <div className="bi reveal" style={{marginBottom:"48px"}}>
            <div className="bi-en" style={{borderRightColor:"rgba(255,255,255,.08)"}}>
              <h2 className="sec-title" style={{color:"white"}}>All the Support You Need<br />to Succeed in Canada</h2>
              <p className="sec-lead" style={{color:"rgba(255,255,255,.55)"}}>150+ services across 8 categories — all available in Arabic and English. Everything in one place.</p>
            </div>
            <div className="bi-ar">
              <h2 className="sec-title-ar" style={{color:"white"}}>كل الدعم الذي تحتاجه<br />للنجاح في كندا</h2>
              <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"16px",color:"rgba(255,255,255,.45)",direction:"rtl",lineHeight:1.8}}>١٥٠+ خدمة في ٨ فئات — جميعها متوفرة بالعربية والإنجليزية. كل شيء في مكان واحد.</p>
            </div>
          </div>

          {/* CAT 1 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>📚</div><div><div className="cat-en">English Support</div><div className="cat-ar">دعم الإنجليزية</div></div></div>
            <div className="tags-wrap">
              {["Beginner English","Intermediate English","Conversation practice","Pronunciation training","Speaking confidence","Listening practice","Reading practice","Writing correction","Grammar lessons","Vocabulary lessons","Customer service English","Healthcare English","Workplace English","Office English","Phone conversation English","Email writing","Weekly quizzes","Daily vocabulary","English speaking clubs","Public speaking practice","Accent improvement","Real-life conversation simulation","Roleplay interviews","Beginner survival English","English for parents/schools","Canadian slang lessons","Construction English","Warehouse English","Group speaking practice","IELTS / CELPIP prep"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 2 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>💼</div><div><div className="cat-en">Job &amp; Career Support</div><div className="cat-ar">الدعم المهني والوظيفي</div></div></div>
            <div className="tags-wrap">
              {["Canadian resume","Cover letter writing","LinkedIn setup","Job search strategy","Application review","Mock interviews","Interview feedback","Career planning","Promotion readiness","Workplace culture","Professional communication","Job application support","Career coaching","Industry-specific coaching","Networking strategies"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 3 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>🏠</div><div><div className="cat-en">Newcomer Life Support</div><div className="cat-ar">دعم حياة الوافدين</div></div></div>
            <div className="tags-wrap">
              {["Banking and credit scores","Renting and housing","Taxes and CRA basics","Healthcare navigation","Government documents","Driver's licence guidance","Transit and local systems","School and family help","Settlement guidance","Daily life in Canada","Important landmarks","Support programs guide"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 4 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>📄</div><div><div className="cat-en">Safe Immigration Support</div><div className="cat-ar">دعم الهجرة الآمن</div></div></div>
            <div className="tags-wrap">
              {["Document organization","IRCC portal help","PR preparation English","Citizenship English prep","Form reading support","Letter understanding","Appointment preparation","File checklist help","Status tracking guidance","Safe non-legal guidance"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 5 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>💻</div><div><div className="cat-en">Digital &amp; Tech Support</div><div className="cat-ar">الدعم الرقمي والتقني</div></div></div>
            <div className="tags-wrap">
              {["Computer basics","Email setup","Zoom training","Microsoft Office help","Phone and app skills","Online forms","Digital literacy","Freelancing basics","Side hustle tools","Online safety"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 6 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>🤝</div><div><div className="cat-en">Community &amp; Accountability</div><div className="cat-ar">المجتمع والمساءلة</div></div></div>
            <div className="tags-wrap">
              {["WhatsApp group support","Weekly live classes","1-on-1 coaching calls","Goal tracking","Accountability check-ins","Motivation support","Class recordings","Homework support","Arabic-speaking team","Safe newcomer community"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 7 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>💰</div><div><div className="cat-en">Money &amp; Business Help</div><div className="cat-ar">المساعدة المالية والتجارية</div></div></div>
            <div className="tags-wrap">
              {["Budgeting","Saving money","Credit building","Side hustle planning","Small business basics","Freelancing support","Marketplace selling","Invoicing basics","Contracts basics","Income strategy"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>
          {/* CAT 8 */}
          <div className="cat-block reveal">
            <div className="cat-header"><div style={{fontSize:"32px"}}>🎓</div><div><div className="cat-en">Advanced &amp; Future Services</div><div className="cat-ar">خدمات متقدمة ومستقبلية</div></div></div>
            <div className="tags-wrap">
              {["Mentorship","Industry coaching","Interview bootcamps","Leadership English","Advanced confidence practice","Business growth support","Community events","Networking sessions","Family support programs","Custom 90-day success roadmap"].map(t => <div key={t} className="stag">{t}</div>)}
            </div>
          </div>

          <div style={{textAlign:"center",marginTop:"56px"}}>
            <a href="#assessment" className="btn-tiff" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Book Free Assessment | احجز تقييماً مجانياً</a>
          </div>
        </div>
      </section>

      {/* ════════════════ PROGRAMS ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>PROGRAMS &amp; PRICING | البرامج والأسعار<div className="sd-line"></div></div>
      <section className="sec pricing-bg" id="programs">
        <div className="wrap">
          <div className="sec-tag">OUR PROGRAMS | برامجنا</div>
          <div className="bi reveal" style={{marginBottom:0}}>
            <div className="bi-en">
              <h2 className="sec-title">Choose Your Plan</h2>
              <p className="sec-lead">Simple, clear pricing. Cancel anytime. Always start with a free assessment and a free first week.</p>
            </div>
            <div className="bi-ar">
              <h2 className="sec-title-ar">اختر خطتك</h2>
              <p className="sec-lead-ar">أسعار واضحة وبسيطة. إلغاء في أي وقت. ابدأ دائماً بتقييم مجاني وأسبوع أول مجاني.</p>
            </div>
          </div>
          <div className="plans-grid reveal">
            {/* STARTER */}
            <div className="plan">
              <div className="plan-head">
                <div className="plan-type">STARTER</div>
                <div className="plan-type-ar">المبتدئ</div>
                <div className="plan-name">Starter</div>
                <div className="plan-price"><sup>$</sup>79</div>
                <div className="plan-mo">/month CAD</div>
                <div className="plan-mo-ar">/ شهر كندي</div>
                <div className="plan-desc">Best for beginners building English confidence.</div>
                <div className="plan-desc-ar">الأفضل للمبتدئين الذين يبنون ثقتهم.</div>
                <a href="#assessment" className="plan-cta outline" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Free Assessment | تقييم مجاني</a>
              </div>
              <div className="plan-body">
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>3 live weekly classes</span><span className="feat-ar">٣ صفوف مباشرة أسبوعياً</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Speaking &amp; conversation practice</span><span className="feat-ar">تمارين محادثة وكلام</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Weekly quizzes &amp; homework</span><span className="feat-ar">اختبارات أسبوعية وواجبات</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>WhatsApp group support</span><span className="feat-ar">دعم مجموعة الواتساب</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Vocabulary &amp; grammar lessons</span><span className="feat-ar">دروس مفردات وقواعد</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Class recordings access</span><span className="feat-ar">تسجيلات الصفوف</span></div></div>
              </div>
            </div>
            {/* PREMIUM */}
            <div className="plan pop">
              <div className="pop-banner">⭐ MOST POPULAR — <span className="pop-banner-ar">الأكثر شيوعاً</span></div>
              <div className="plan-head" style={{paddingTop:"20px"}}>
                <div className="plan-type">PREMIUM</div>
                <div className="plan-type-ar">المميز</div>
                <div className="plan-name">Premium</div>
                <div className="plan-price"><sup>$</sup>129</div>
                <div className="plan-mo">/month CAD</div>
                <div className="plan-mo-ar">/ شهر كندي</div>
                <div className="plan-desc">Best for students preparing for their first Canadian job.</div>
                <div className="plan-desc-ar">الأفضل للراغبين في أول وظيفة كندية.</div>
                <a href="#assessment" className="plan-cta solid" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Free Assessment | تقييم مجاني</a>
              </div>
              <div className="plan-body">
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Everything in Starter</span><span className="feat-ar">كل شيء في المبتدئ</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>1 monthly 1-on-1 coaching call</span><span className="feat-ar">مكالمة تدريب فردية شهرياً</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Canadian resume building</span><span className="feat-ar">بناء السيرة الذاتية الكندية</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Cover letter writing</span><span className="feat-ar">كتابة خطاب التقديم</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>LinkedIn profile setup</span><span className="feat-ar">إعداد ملف لينكدإن</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Mock interview practice</span><span className="feat-ar">تمرين مقابلات وهمية</span></div></div>
              </div>
            </div>
            {/* CAREER BOOST */}
            <div className="plan">
              <div className="plan-head">
                <div className="plan-type">CAREER BOOST</div>
                <div className="plan-type-ar">دفعة المهنة</div>
                <div className="plan-name">Career Boost</div>
                <div className="plan-price"><sup>$</sup>179</div>
                <div className="plan-mo">/month CAD</div>
                <div className="plan-mo-ar">/ شهر كندي</div>
                <div className="plan-desc">Best for students needing career + Canadian life support.</div>
                <div className="plan-desc-ar">الأفضل لمن يحتاج دعم المهنة والحياة معاً.</div>
                <a href="#assessment" className="plan-cta outline" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Free Assessment | تقييم مجاني</a>
              </div>
              <div className="plan-body">
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Everything in Premium</span><span className="feat-ar">كل شيء في المميز</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>2 monthly coaching calls</span><span className="feat-ar">مكالمتان تدريبيتان شهرياً</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Banking &amp; credit guidance</span><span className="feat-ar">إرشادات البنوك والائتمان</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>CRA taxes basics</span><span className="feat-ar">أساسيات ضرائب CRA</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Renting &amp; housing guidance</span><span className="feat-ar">إرشادات الإيجار والسكن</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Healthcare navigation support</span><span className="feat-ar">دعم التعامل مع الرعاية الصحية</span></div></div>
              </div>
            </div>
            {/* CANADA READY */}
            <div className="plan">
              <div className="plan-head">
                <div className="plan-type">CANADA READY</div>
                <div className="plan-type-ar">كندا ريدي</div>
                <div className="plan-name">Canada Ready</div>
                <div className="plan-price"><sup>$</sup>249</div>
                <div className="plan-mo">/month CAD</div>
                <div className="plan-mo-ar">/ شهر كندي</div>
                <div className="plan-desc">Complete newcomer support — the full experience.</div>
                <div className="plan-desc-ar">الدعم الكامل للوافد الجديد — التجربة الكاملة.</div>
                <a href="#assessment" className="plan-cta outline" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>📋 Apply VIP | قدّم VIP</a>
              </div>
              <div className="plan-body">
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Everything in Career Boost</span><span className="feat-ar">كل شيء في دفعة المهنة</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>3 monthly coaching calls</span><span className="feat-ar">٣ مكالمات تدريب شهرياً</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Business startup guidance</span><span className="feat-ar">إرشادات إطلاق الأعمال</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Freelancing &amp; side income basics</span><span className="feat-ar">أساسيات العمل الحر والدخل الإضافي</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Immigration document help</span><span className="feat-ar">مساعدة في وثائق الهجرة</span></div></div>
                <div className="plan-feat"><span className="chk">✓</span><div className="feat-bi"><span>Custom 90-day success roadmap</span><span className="feat-ar">خارطة طريق نجاح مخصصة 90 يوماً</span></div></div>
              </div>
            </div>
          </div>

          {/* WEEKLY SCHEDULE */}
          <div style={{marginTop:"64px"}}>
            <div className="bi reveal" style={{marginBottom:"32px"}}>
              <div className="bi-en">
                <h3 style={{fontSize:"24px",fontWeight:700,color:"#0E1E33"}}>How the Week Works</h3>
                <p style={{color:"#64748B",fontSize:"15px"}}>3 live classes every week, WhatsApp support 7 days, and coaching calls based on your plan.</p>
              </div>
              <div className="bi-ar">
                <h3 style={{fontFamily:"'Tajawal',sans-serif",fontSize:"22px",fontWeight:700,color:"#0E1E33",direction:"rtl"}}>كيف يعمل الأسبوع</h3>
                <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"#64748B",direction:"rtl"}}>٣ صفوف مباشرة كل أسبوع، دعم واتساب ٧ أيام، ومكالمات تدريب حسب خطتك.</p>
              </div>
            </div>
            <div className="schedule-grid reveal">
              <div className="sched-card">
                <div className="sched-day">MONDAY</div>
                <div className="sched-day-ar">الاثنين</div>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>📖</div>
                <div className="sched-title">English Foundations</div>
                <div className="sched-title-ar">أسس الإنجليزية</div>
                <div className="sched-desc">Grammar, vocabulary, reading &amp; writing skills</div>
                <div className="sched-desc-ar">قواعد، مفردات، قراءة وكتابة</div>
              </div>
              <div className="sched-card" style={{borderColor:"#0ABAB5"}}>
                <div className="sched-day">WEDNESDAY</div>
                <div className="sched-day-ar">الأربعاء</div>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>🗣️</div>
                <div className="sched-title">Conversation &amp; Pronunciation</div>
                <div className="sched-title-ar">المحادثة والنطق</div>
                <div className="sched-desc">Speaking confidence &amp; pronunciation drills</div>
                <div className="sched-desc-ar">ثقة التحدث وتدريبات النطق</div>
              </div>
              <div className="sched-card">
                <div className="sched-day">FRIDAY</div>
                <div className="sched-day-ar">الجمعة</div>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>💼</div>
                <div className="sched-title">Career &amp; Canada Life Workshop</div>
                <div className="sched-title-ar">ورشة المهنة والحياة</div>
                <div className="sched-desc">Jobs, interviews, Canadian life topics</div>
                <div className="sched-desc-ar">وظائف، مقابلات، مواضيع الحياة الكندية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ HOW IT WORKS ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>HOW IT WORKS | كيف يعمل<div className="sd-line"></div></div>
      <section className="sec how-bg" id="how">
        <div className="wrap">
          <div className="sec-tag" style={{borderColor:"rgba(10,186,181,.25)",color:"#0ABAB5"}}>THE FULL PROCESS | العملية الكاملة</div>
          <div className="bi reveal" style={{marginBottom:"48px"}}>
            <div className="bi-en" style={{borderRightColor:"rgba(255,255,255,.08)"}}>
              <h2 className="sec-title" style={{color:"white"}}>Your Path: Newcomer<br />→ Confident Canadian</h2>
              <p className="sec-lead" style={{color:"rgba(255,255,255,.55)"}}>5 simple steps, starting with a free 15-minute call in Arabic. No English required to begin.</p>
            </div>
            <div className="bi-ar">
              <h2 className="sec-title-ar" style={{color:"white"}}>طريقك: وافد جديد<br />→ كندي واثق</h2>
              <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"16px",color:"rgba(255,255,255,.45)",direction:"rtl",lineHeight:1.8}}>٥ خطوات بسيطة، تبدأ بمكالمة مجانية 15 دقيقة بالعربي. لا إنجليزية مطلوبة للبداية.</p>
            </div>
          </div>
          <div className="steps-grid reveal">
            <div className="step-card">
              <div className="step-num-circle">1</div>
              <div className="step-en">
                <h4>📋 Book Your Free Assessment</h4>
                <ul><li>Fill out the short online form</li><li>Takes only 3 minutes to complete</li><li>Completely free — no credit card</li><li>Call is fully in Arabic</li></ul>
              </div>
              <div className="step-ar step-ar-col">
                <h4>📋 احجز تقييمك المجاني</h4>
                <ul><li>امل الاستمارة القصيرة أون لاين</li><li>تستغرق 3 دقائق فقط</li><li>مجاناً تماماً — بدون بطاقة</li><li>المكالمة بالعربي بالكامل</li></ul>
              </div>
            </div>
            <div className="step-card">
              <div className="step-num-circle">2</div>
              <div className="step-en">
                <h4>🤝 Meet Our Team — Free 15-min Call</h4>
                <ul><li>English level assessment</li><li>Discuss career goals &amp; struggles</li><li>We explain 150+ services</li><li>Zero pressure — just guidance</li></ul>
              </div>
              <div className="step-ar step-ar-col">
                <h4>🤝 لقاء الفريق — مكالمة 15 دقيقة</h4>
                <ul><li>تقييم مستوى الإنجليزية</li><li>نناقش أهدافك وتحدياتك</li><li>نشرح الخدمات ١٥٠+</li><li>لا ضغط — إرشاد فقط</li></ul>
              </div>
            </div>
            <div className="step-card">
              <div className="step-num-circle">3</div>
              <div className="step-en">
                <h4>📚 Choose Your Program</h4>
                <ul><li>Starter $79 — English basics</li><li>Premium $129 — Career prep added</li><li>Career Boost $179 — Life support</li><li>Canada Ready $249 — Full support</li></ul>
              </div>
              <div className="step-ar step-ar-col">
                <h4>📚 اختر برنامجك</h4>
                <ul><li>المبتدئ $79 — إنجليزية أساسية</li><li>المميز $129 — تحضير للوظيفة</li><li>دفعة المهنة $179 — دعم الحياة</li><li>كندا ريدي $249 — دعم كامل</li></ul>
              </div>
            </div>
            <div className="step-card">
              <div className="step-num-circle">4</div>
              <div className="step-en">
                <h4>💬 Join Classes &amp; Community</h4>
                <ul><li>WhatsApp group invitation</li><li>Zoom links for all 3 classes</li><li>Welcome booklet in Arabic+English</li><li>First week is completely FREE</li></ul>
              </div>
              <div className="step-ar step-ar-col">
                <h4>💬 انضم للصفوف والمجتمع</h4>
                <ul><li>دعوة مجموعة الواتساب</li><li>روابط Zoom للصفوف الثلاثة</li><li>كتيب ترحيب عربي وإنجليزي</li><li>الأسبوع الأول مجاني تماماً</li></ul>
              </div>
            </div>
            <div className="step-card">
              <div className="step-num-circle">5</div>
              <div className="step-en">
                <h4>🚀 Build Your Future in Canada</h4>
                <ul><li>Mon/Wed/Fri — 3 live classes</li><li>Monthly 1-on-1 coaching calls</li><li>WhatsApp support every day</li><li>Step-by-step progress tracking</li></ul>
              </div>
              <div className="step-ar step-ar-col">
                <h4>🚀 ابنِ مستقبلك في كندا</h4>
                <ul><li>اثنين/أربعاء/جمعة — ٣ صفوف</li><li>مكالمات تدريب فردية شهرياً</li><li>دعم واتساب كل يوم</li><li>متابعة التقدم خطوة بخطوة</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>SUCCESS STORIES | قصص النجاح<div className="sd-line"></div></div>
      <section className="sec" id="testimonials" style={{background:"#F7FAFA"}}>
        <div className="wrap">
          <div className="sec-tag">⭐ REAL RESULTS | نتائج حقيقية</div>
          <div className="bi reveal" style={{marginBottom:0}}>
            <div className="bi-en"><h2 className="sec-title">What Our Students Say</h2><p className="sec-lead">Real people, real results — once in the same situation as you.</p></div>
            <div className="bi-ar"><h2 className="sec-title-ar">ماذا يقول طلابنا</h2><p className="sec-lead-ar">أشخاص حقيقيون، نتائج حقيقية — كانوا في نفس وضعك تماماً.</p></div>
          </div>
          <div className="testi-grid reveal">
            <div className="testi">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">"After mock interviews with the coach, I got my first IT job within 3 months. The program didn't just improve my English — it taught me how to present myself like a Canadian professional."</div>
              <div className="testi-quote-ar">"بعد المقابلات التجريبية مع المدرب، حصلت على أول وظيفة تقنية خلال 3 أشهر. البرنامج لم يحسّن إنجليزيتي فحسب — علّمني كيف أقدم نفسي كمحترف كندي."</div>
              <div className="testi-author"><div className="testi-avatar">👨</div><div><div className="testi-name">Ahmed M. — Calgary, AB</div><div className="testi-from">From Egypt 🇪🇬</div><div className="testi-plan">Career Boost</div></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">"My coach helped me understand CRA, open a proper bank account, and find a great apartment. I now file my own taxes and my credit score is 720. I feel like a real Canadian."</div>
              <div className="testi-quote-ar">"ساعدني مدربي على فهم CRA، فتح حساب بنكي، وإيجاد شقة رائعة. الآن أملأ ضرائبي بنفسي وعلامتي الائتمانية 720. أشعر أنني كندي حقيقي."</div>
              <div className="testi-author"><div className="testi-avatar">👩</div><div><div className="testi-name">Fatima S. — Edmonton, AB</div><div className="testi-from">From Syria 🇸🇾</div><div className="testi-plan">Canada Ready</div></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">"I started with very basic English. After 6 months I started my own delivery business and now earn extra income. The WhatsApp support is available 24/7."</div>
              <div className="testi-quote-ar">"بدأت بإنجليزية أساسية جداً. بعد 6 أشهر بدأت عملي الخاص في التوصيل وأكسب دخلاً إضافياً. دعم الواتساب متوفر 24/7."</div>
              <div className="testi-author"><div className="testi-avatar">👨</div><div><div className="testi-name">Omar K. — Toronto, ON</div><div className="testi-from">From Iraq 🇮🇶</div><div className="testi-plan">Starter → Career Boost</div></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">"The WhatsApp community is like having 200 helpful friends who understand newcomer life. The pronunciation classes changed how my colleagues respond to me at work."</div>
              <div className="testi-quote-ar">"مجتمع الواتساب كأن لديك 200 صديق مفيد يفهمون حياة الوافد الجديد. دروس النطق غيّرت تجاوب زملائي معي في العمل."</div>
              <div className="testi-author"><div className="testi-avatar">👩</div><div><div className="testi-name">Layla H. — Vancouver, BC</div><div className="testi-from">From Lebanon 🇱🇧</div><div className="testi-plan">Premium</div></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">"My coach helped me register my catering business, create my first invoice, and earn $800–$1200 extra per month within 4 months. I wish I found this program the day I arrived."</div>
              <div className="testi-quote-ar">"ساعدني مدربي في تسجيل أعمالي، وأنشأت فاتورتي الأولى، وأكسب 800-1200 دولار إضافياً شهرياً. أتمنى لو وجدت هذا البرنامج يوم وصولي."</div>
              <div className="testi-author"><div className="testi-avatar">👨</div><div><div className="testi-name">Youssef A. — Mississauga, ON</div><div className="testi-from">From Morocco 🇲🇦</div><div className="testi-plan">Canada Ready</div></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">"My manager mentioned my English improvement in my performance review and recommended me for a promotion. The pronunciation classes made the biggest difference."</div>
              <div className="testi-quote-ar">"ذكر مديري تحسّني في الإنجليزية في تقييم أدائي وأوصى بترقيتي. دروس النطق أحدثت الفرق الأكبر."</div>
              <div className="testi-author"><div className="testi-avatar">👩</div><div><div className="testi-name">Rania T. — Ottawa, ON</div><div className="testi-from">From Jordan 🇯🇴</div><div className="testi-plan">Premium</div></div></div>
            </div>
          </div>
          {/* Stats bar */}
          <div className="hero-stats reveal" style={{maxWidth:"680px",margin:"48px auto 0",borderRadius:"16px",overflow:"hidden",background:"#0E1E33"}}>
            <div className="hero-stat"><div className="n">500+</div><div className="l">Students Helped<br /><span className="l-ar">طالب استفاد</span></div></div>
            <div className="hero-stat"><div className="n">4</div><div className="l">Programs<br /><span className="l-ar">برامج</span></div></div>
            <div className="hero-stat"><div className="n">3×</div><div className="l">Classes/Week<br /><span className="l-ar">صفوف أسبوعياً</span></div></div>
            <div className="hero-stat"><div className="n">100%</div><div className="l">Arabic Support<br /><span className="l-ar">دعم بالعربية</span></div></div>
          </div>
        </div>
      </section>

      {/* ════════════════ CONTACT ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>CONTACT | تواصل<div className="sd-line"></div></div>
      <section className="sec" id="contact" style={{background:"white"}}>
        <div className="wrap">
          <div className="sec-tag">GET IN TOUCH | تواصل معنا</div>
          <div className="bi reveal" style={{marginBottom:0}}>
            <div className="bi-en"><h2 className="sec-title">We Are Here to Help</h2><p className="sec-lead">Reach out through any channel. We respond within 24 hours — often within a few hours on WhatsApp.</p></div>
            <div className="bi-ar"><h2 className="sec-title-ar">نحن هنا للمساعدة</h2><p className="sec-lead-ar">تواصل عبر أي قناة. نرد خلال 24 ساعة — وغالباً خلال ساعات على الواتساب.</p></div>
          </div>
          <div className="contact-grid reveal">
            <div>
              <div className="wa-box">
                <h4>💡 Need Help Choosing a Program?</h4>
                <div className="h4-ar">تحتاج مساعدة في اختيار البرنامج؟</div>
                <p>Message us on WhatsApp — we answer any question within a few hours.</p>
                <div className="p-ar">راسلنا على واتساب — نجيب على أي سؤال خلال ساعات.</div>
                <a href="https://wa.me/15870000000" className="btn-wa" target="_blank" rel="noopener noreferrer">💬 Message Us on WhatsApp | راسلنا على الواتساب</a>
              </div>
              <a href="https://wa.me/15870000000" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="cm-icon">💬</div>
                <div><div className="cm-en">WhatsApp</div><div className="cm-ar">واتساب</div><div className="cm-detail">+1 (587) 000-0000 — Chat within hours</div></div>
              </a>
              <a href="mailto:hello@canadareadyacademy.com" className="contact-method">
                <div className="cm-icon">✉️</div>
                <div><div className="cm-en">Email</div><div className="cm-ar">البريد الإلكتروني</div><div className="cm-detail">hello@canadareadyacademy.com</div></div>
              </a>
              <a href="https://facebook.com/canadareadyacademy" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="cm-icon">📘</div>
                <div><div className="cm-en">Facebook</div><div className="cm-ar">فيسبوك</div><div className="cm-detail">@CanadaReadyAcademy</div></div>
              </a>
              <a href="https://instagram.com/canadareadyacademy" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="cm-icon">📸</div>
                <div><div className="cm-en">Instagram</div><div className="cm-ar">إنستغرام</div><div className="cm-detail">@canadareadyacademy — Daily tips for newcomers</div></div>
              </a>
              <div className="contact-method" style={{cursor:"default"}}>
                <div className="cm-icon">🌍</div>
                <div><div className="cm-en">Location</div><div className="cm-ar">الموقع</div><div className="cm-detail">Online — Serving all of Canada: AB · ON · BC · and more</div></div>
              </div>
            </div>
            <div className="form-card">
              <h3>Send Us a Message</h3>
              <div className="h3-ar">أرسل لنا رسالة</div>
              <form onSubmit={handleContactSubmit}>
                <div className="inp-row">
                  <input className="inp" type="text" placeholder="Your name / اسمك" required />
                  <input className="inp" type="tel" placeholder="WhatsApp / رقم الواتساب" required />
                </div>
                <input className="inp" type="email" placeholder="Email (optional / اختياري)" />
                <textarea className="inp" placeholder="Your message / رسالتك..." required></textarea>
                <button className="btn-submit" type="submit" disabled={contactSent}>✉️ Send Message | أرسل الرسالة</button>
                {contactSent && <div className="success-msg show">✅ Message sent! We'll reply within 24 hours. | تم الإرسال! سنرد خلال 24 ساعة.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ ASSESSMENT BOOKING ════════════════ */}
      <div className="sec-divider"><div className="sd-line"></div>FREE APPOINTMENT | موعد مجاني<div className="sd-line"></div></div>
      <section id="assessment" style={{background:"#F0FAFA",padding:"80px 32px"}}>
        <div className="wrap">
          {/* Centered header */}
          <div style={{textAlign:"center",marginBottom:"56px"}}>
            <div className="sec-tag" style={{margin:"0 auto 20px"}}>📋 FREE APPOINTMENT | موعد مجاني</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#0E1E33",lineHeight:1.15,marginBottom:"8px"}}>
              Book Your Free English &amp; Career Appointment
            </h2>
            <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"clamp(22px,3vw,36px)",fontWeight:800,color:"#0E1E33",direction:"rtl",lineHeight:1.3,marginBottom:"16px"}}>
              احجز موعدك المجاني للإنجليزية والمهنة
            </div>
            <p style={{fontSize:"17px",color:"#64748B",maxWidth:"580px",margin:"0 auto 6px",lineHeight:1.8}}>
              15–20 minutes with our team. Completely free. We'll check your level, understand your goals, and recommend the best plan for you.
            </p>
            <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"15px",color:"#64748B",direction:"rtl",maxWidth:"560px",margin:"0 auto",lineHeight:1.8}}>
              15-20 دقيقة مع فريقنا. مجاناً تماماً. سنحدد مستواك، نفهم أهدافك، ونوصي بأفضل خطة لك.
            </p>
          </div>

          {/* Two-column layout */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:"40px",alignItems:"start"}} className="appt-grid reveal">

            {/* LEFT: dark teal card + guarantees */}
            <div>
              <div style={{background:"linear-gradient(145deg,#1A4A45,#0D3530)",borderRadius:"20px",padding:"36px",marginBottom:"24px"}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"22px",fontWeight:800,color:"#C9903A",lineHeight:1.3,marginBottom:"6px"}}>
                  What Happens During the Appointment?
                </h3>
                <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"17px",fontWeight:700,color:"#F0C96A",direction:"rtl",marginBottom:"24px",lineHeight:1.4}}>
                  ماذا يحدث خلال الموعد؟
                </div>
                <ol style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"14px"}}>
                  {[
                    ["We check your English level (Beginner or Intermediate)","نتحقق من مستوى إنجليزيتك (مبتدئ أو متوسط)"],
                    ["We ask about your career goals and work history","نسأل عن أهدافك المهنية وتاريخ عملك"],
                    ["We understand your newcomer challenges","نفهم تحديات حياتك كوافد جديد"],
                    ["We explain how our program works","نشرح كيف يعمل برنامجنا"],
                    ["We recommend the best plan for you","نوصي بأفضل خطة مناسبة لك"],
                    ["You get your WhatsApp group & Zoom links","تحصل على مجموعة الواتساب وروابط Zoom"],
                  ].map(([en, ar], i) => (
                    <li key={i} style={{display:"flex",gap:"14px",alignItems:"flex-start"}}>
                      <span style={{minWidth:"28px",height:"28px",background:"#C9903A",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:"13px",fontWeight:800,color:"white",flexShrink:0,marginTop:"1px"}}>{i+1}</span>
                      <div>
                        <div style={{fontSize:"14px",color:"rgba(255,255,255,.85)",lineHeight:1.5}}>{en}</div>
                        <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"12px",color:"rgba(255,255,255,.45)",direction:"rtl",marginTop:"2px"}}>{ar}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Guarantee block */}
              <div style={{background:"white",borderRadius:"16px",padding:"24px",border:"1.5px solid #D1ECE9"}}>
                <div style={{fontSize:"16px",fontWeight:700,color:"#0E1E33",marginBottom:"4px"}}>🎁 100% Free</div>
                <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"14px",color:"#64748B",direction:"rtl",marginBottom:"16px"}}>مجاني ١٠٠٪</div>
                {[
                  ["No credit card required","لا حاجة لبطاقة ائتمان"],
                  ["No commitment or obligation","بدون التزام أو شرط"],
                  ["Call is in Arabic — no pressure","المكالمة بالعربي — بدون ضغط"],
                  ["First week is FREE when you join","الأسبوع الأول مجاني عند الانضمام"],
                ].map(([en, ar]) => (
                  <div key={en} style={{display:"flex",alignItems:"flex-start",gap:"10px",padding:"7px 0",borderBottom:"1px solid #F1F5F9"}}>
                    <span style={{color:"#0ABAB5",fontWeight:700,flexShrink:0}}>✓</span>
                    <div>
                      <div style={{fontSize:"14px",color:"#0E1E33"}}>{en}</div>
                      <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"12px",color:"#64748B",direction:"rtl"}}>{ar}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form card */}
            <div style={{background:"white",borderRadius:"24px",padding:"40px",border:"1.5px solid #D1ECE9",boxShadow:"0 8px 40px rgba(10,186,181,.10)"}}>
              <h3 style={{fontSize:"22px",fontWeight:700,color:"#0E1E33",marginBottom:"4px"}}>Complete the Appointment Form</h3>
              <div style={{fontFamily:"'Tajawal',sans-serif",fontSize:"17px",fontWeight:700,color:"#0E1E33",direction:"rtl",marginBottom:"4px"}}>أكمل استمارة الحجز</div>
              <p style={{fontSize:"13px",color:"#64748B",marginBottom:"4px"}}>We'll contact you within 24 hours.</p>
              <p style={{fontFamily:"'Tajawal',sans-serif",fontSize:"12px",color:"#64748B",direction:"rtl",marginBottom:"24px"}}>سنتواصل معك خلال 24 ساعة.</p>
              <form onSubmit={handleAssessSubmit}>
                <div className="inp-row">
                  <div>
                    <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px"}}>Full Name <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ الاسم الكامل</span></label>
                    <input className="inp" type="text" placeholder="Your full name / اسمك الكامل" required style={{marginBottom:0}} />
                  </div>
                  <div>
                    <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px"}}>WhatsApp Number <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ واتساب</span></label>
                    <input className="inp" type="tel" placeholder="+1 587 000 0000" required style={{marginBottom:0}} />
                  </div>
                </div>
                <div style={{height:"14px"}}></div>
                <div className="inp-row">
                  <div>
                    <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px"}}>English Level <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ مستوى الإنجليزية</span></label>
                    <select className="inp" style={{marginBottom:0}}>
                      <option value="">Select level / اختر المستوى</option>
                      <option>Beginner | مبتدئ</option>
                      <option>Elementary | أساسي</option>
                      <option>Intermediate | متوسط</option>
                    </select>
                  </div>
                  <div>
                    <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px"}}>Country of Origin <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ بلد الأصل</span></label>
                    <input className="inp" type="text" placeholder="Egypt, Syria, Iraq... / مصر، سوريا، العراق..." style={{marginBottom:0}} />
                  </div>
                </div>
                <div style={{height:"14px"}}></div>
                <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px"}}>How Long in Canada? <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ منذ متى في كندا؟</span></label>
                <select className="inp">
                  <option value="">Select time / اختر المدة</option>
                  <option>Less than 3 months | أقل من 3 أشهر</option>
                  <option>3–6 months | 3-6 أشهر</option>
                  <option>6–12 months | 6-12 شهراً</option>
                  <option>1–2 years | 1-2 سنة</option>
                  <option>More than 2 years | أكثر من سنتين</option>
                </select>
                <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px",marginTop:"14px"}}>Career Goals <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ أهدافك المهنية</span></label>
                <textarea className="inp" placeholder="What kind of work are you looking for? What are your goals in Canada? / ما نوع العمل الذي تبحث عنه؟ ما أهدافك في كندا؟" rows={3} style={{marginBottom:0}}></textarea>
                <label style={{fontSize:"12px",fontWeight:600,color:"#0E1E33",display:"block",marginBottom:"6px",marginTop:"14px"}}>Biggest Challenge Right Now <span style={{fontFamily:"'Tajawal',sans-serif",color:"#64748B",fontWeight:400}}>/ أكبر تحدٍ تواجهه الآن</span></label>
                <textarea className="inp" placeholder="Tell us your main difficulty — language, jobs, understanding Canadian life... / أخبرنا عن صعوبتك الرئيسية — اللغة، الوظائف، الحياة الكندية..." rows={3}></textarea>
                <button className="btn-submit" type="submit" disabled={assessSent} style={{marginTop:"8px",borderRadius:"40px",fontSize:"16px",background:"linear-gradient(135deg,#0ABAB5,#089994)"}}>
                  📋 Book My Free Appointment | احجز موعدي المجاني
                </button>
                {assessSent && <div className="success-msg show">🎉 Request sent! We'll contact you on WhatsApp within 24 hours. | تم الإرسال! سنتواصل معك على واتساب خلال 24 ساعة.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="hp-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"}}>
                <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#0ABAB5,#089994)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🍁</div>
              </div>
              <span className="logo-name">CanadaReady Academy</span>
              <p>150+ services for newcomers.<br />English, Career &amp; Life Support.</p>
              <p className="p-ar">١٥٠+ خدمة للوافدين الجدد. إنجليزية، مهنة، وحياة.</p>
              <p style={{fontSize:"12px",color:"rgba(255,255,255,.3)",marginTop:"6px"}}>Built by immigrants — for immigrants. 🍁</p>
              <div className="footer-socials">
                <a href="https://wa.me/15870000000" className="social-btn" target="_blank" rel="noopener noreferrer">💬</a>
                <a href="https://facebook.com/canadareadyacademy" className="social-btn" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://instagram.com/canadareadyacademy" className="social-btn" target="_blank" rel="noopener noreferrer">📸</a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <div className="h5-ar">روابط سريعة</div>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About / عن الأكاديمية</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>All Services / الخدمات</a>
              <a href="#programs" onClick={(e) => { e.preventDefault(); scrollTo("programs"); }}>Programs / البرامج</a>
              <a href="#how" onClick={(e) => { e.preventDefault(); scrollTo("how"); }}>How It Works / كيف يعمل</a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo("testimonials"); }}>Testimonials / آراء</a>
              <a href="#assessment" onClick={(e) => { e.preventDefault(); scrollTo("assessment"); }}>Free Assessment / تقييم مجاني</a>
            </div>
            <div className="footer-col">
              <h5>Programs</h5>
              <div className="h5-ar">البرامج</div>
              <span>Starter — $79/mo</span>
              <span className="ar">المبتدئ — ٧٩ دولار</span>
              <span>Premium — $129/mo</span>
              <span className="ar">المميز — ١٢٩ دولار</span>
              <span>Career Boost — $179/mo</span>
              <span className="ar">دفعة المهنة — ١٧٩ دولار</span>
              <span>Canada Ready — $249/mo</span>
              <span className="ar">كندا ريدي — ٢٤٩ دولار</span>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <div className="h5-ar">تواصل</div>
              <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer">💬 +1 (587) 000-0000</a>
              <span className="ar">واتساب — رد خلال ساعات</span>
              <a href="mailto:hello@canadareadyacademy.com">✉️ hello@canadareadyacademy.com</a>
              <span className="ar">البريد — رد خلال 24 ساعة</span>
              <span style={{marginTop:"8px"}}>🌍 Online — All of Canada</span>
              <span className="ar">عبر الإنترنت — كل كندا</span>
              <span>Alberta · Ontario · BC · and more</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 CanadaReady Academy. All rights reserved. 🍁 Your success starts here.</span>
            <span style={{fontFamily:"'Tajawal',sans-serif",direction:"rtl"}}>نجاحك يبدأ من هنا.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
