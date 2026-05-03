import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const T = "#81D8D0"; const TDK = "#007A77"; const GOLD = "#C9903A"; const GOLD_LT = "#E8B84B"; const BG = "#F5FFFE"; const MID = "#4A6B69";

export default function Testimonials() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const stories = [
    { emoji: "👨", name: "Ahmed M.", origin_en: "From Egypt — Now in Calgary, Alberta", origin_ar: "من مصر — الآن في كالغاري، ألبرتا", plan_en: "Career Boost Plan", plan_ar: "باقة الانطلاقة المهنية",
      text_en: "I arrived in Calgary without knowing how interviews work in Canada. After joining Canada Ready Academy, I went through 4 mock interviews with the coach. Within 3 months I got my first IT job at a local company. The program didn't just improve my English — it taught me how to present myself, dress professionally, and communicate like a Canadian professional.",
      text_ar: "وصلت إلى كالغاري دون أن أعرف كيف تعمل المقابلات في كندا. بعد الانضمام لأكاديمية كندا ريدي، خضت 4 مقابلات تجريبية مع المدرب. خلال 3 أشهر حصلت على أول وظيفة في مجال تكنولوجيا المعلومات. البرنامج لم يُحسّن إنجليزيتي فقط — بل علمني كيف أقدم نفسي وأتواصل كمهني كندي.",
    },
    { emoji: "👩", name: "Fatima S.", origin_en: "From Syria — Now in Edmonton, Alberta", origin_ar: "من سوريا — الآن في إدمونتون، ألبرتا", plan_en: "Canada Ready Plan", plan_ar: "باقة جاهز لكندا",
      text_en: "The Canada Life Support pillar was exactly what I needed. I had no idea how the tax system or credit score worked. My coach helped me understand CRA, open a proper bank account, and find a great apartment for my family. I now file my own taxes and my credit score is 720. I feel like a real Canadian.",
      text_ar: "ركيزة دعم الحياة كانت بالضبط ما احتجته. لم يكن لدي أي فكرة عن نظام الضرائب أو درجة الائتمان. ساعدني المدرب على فهم CRA، وفتح حساب بنكي مناسب، وإيجاد شقة رائعة لعائلتي. الآن أقدم ضرائبي بنفسي ودرجة الائتمان 720. أشعر أنني كندية حقيقية.",
    },
    { emoji: "👨‍💻", name: "Omar K.", origin_en: "From Iraq — Now in Toronto, Ontario", origin_ar: "من العراق — الآن في تورونتو، أونتاريو", plan_en: "Starter → Career Boost", plan_ar: "البداية ← الانطلاقة المهنية",
      text_en: "I started with very basic English — I could barely introduce myself. After 6 months in the Starter plan, I upgraded to Career Boost. Now I communicate comfortably at work, I started my own small delivery business, and I am teaching my kids the same confidence I learned. The WhatsApp group support is available 24/7.",
      text_ar: "بدأت بإنجليزية ضعيفة جداً — بالكاد كنت أتعرف بنفسي. بعد 6 أشهر في باقة البداية، انتقلت إلى الانطلاقة المهنية. الآن أتواصل براحة في العمل، بدأت مشروعي الصغير للتوصيل، وأعلّم أطفالي نفس الثقة التي اكتسبتها. دعم مجموعة واتساب متاح 24/7.",
    },
    { emoji: "👩‍🎓", name: "Layla H.", origin_en: "From Lebanon — Now in Vancouver, BC", origin_ar: "من لبنان — الآن في فانكوفر، كولومبيا البريطانية", plan_en: "Premium Plan", plan_ar: "الباقة المميزة",
      text_en: "The WhatsApp community is something I did not expect. Whenever I have a question — about healthcare, a government form, a letter from the CRA — I get an answer within minutes. It is like having 200 helpful friends who all understand what it means to be a newcomer. The pronunciation classes also completely changed how my colleagues respond to me at work.",
      text_ar: "مجتمع واتساب كان مفاجأة لم أتوقعها. كلما كان لدي سؤال — عن الرعاية الصحية، نموذج حكومي، رسالة من CRA — أحصل على إجابة في دقائق. مثل وجود 200 صديق مفيد يفهمون معنى أن تكون وافداً جديداً. حصص النطق أيضاً غيّرت تماماً كيف يتجاوب معي زملائي في العمل.",
    },
    { emoji: "👨‍🍳", name: "Youssef A.", origin_en: "From Morocco — Now in Mississauga, Ontario", origin_ar: "من المغرب — الآن في ميسيسوغا، أونتاريو", plan_en: "Canada Ready Plan", plan_ar: "باقة جاهز لكندا",
      text_en: "I enrolled in the Canada Ready plan — the top plan. My coach helped me register my small catering business, create my first invoice, and set up my freelancing profile on Upwork. In 4 months I was earning extra income of $800–$1200 per month. I wish I had found this program the day I arrived in Canada.",
      text_ar: "اشتركت في باقة كندا ريدي — الخطة الأعلى. ساعدني المدرب في تسجيل عملي الصغير لتقديم الطعام، إنشاء أول فاتورة، وإعداد ملف عمل حر على Upwork. في 4 أشهر كنت أكسب دخلاً إضافياً من $800 إلى $1200 شهرياً. أتمنى لو وجدت هذا البرنامج يوم وصولي إلى كندا.",
    },
    { emoji: "👩‍💼", name: "Rania T.", origin_en: "From Jordan — Now in Ottawa, Ontario", origin_ar: "من الأردن — الآن في أوتاوا، أونتاريو", plan_en: "Premium Plan", plan_ar: "الباقة المميزة",
      text_en: "The pronunciation classes made the biggest difference for me. My colleagues used to ask me to repeat myself constantly, which was so embarrassing. After 3 months of Wednesday classes, my confidence at work is completely different. My manager even mentioned my improvement in my performance review and recommended me for a promotion.",
      text_ar: "حصص النطق صنعت أكبر فارق بالنسبة لي. كان زملائي يطلبون مني إعادة الكلام باستمرار مما كان محرجاً جداً. بعد 3 أشهر من حصص الأربعاء، ثقتي في العمل تغيرت تماماً. حتى مديري ذكر تحسني في تقييمي وأوصى بترقيتي.",
    },
  ];

  const stag = { display: "inline-flex" as const, alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" };

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg,${BG},#e8fffe)`, textAlign: "center" }}>
        <div style={stag}>⭐ {isAr ? "قصص النجاح" : "SUCCESS STORIES"}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "ماذا يقول طلابنا" : "What Our Students Say"}
        </h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "560px", margin: "0 auto" }}>
          {isAr ? "نتائج حقيقية من أشخاص حقيقيين كانوا في نفس وضعك." : "Real results from real people who were once in the same situation as you."}
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "72px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "22px" }}>
          {stories.map((s) => (
            <div key={s.name} style={{ background: "#fff", borderRadius: "18px", padding: "28px", border: "1px solid rgba(129,216,208,0.15)", transition: "0.3s", display: "flex", flexDirection: "column" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(129,216,208,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ""; (e.currentTarget as HTMLDivElement).style.transform = ""; }}
            >
              <div style={{ color: GOLD, fontSize: "17px", marginBottom: "11px" }}>★★★★★</div>
              <p style={{ fontSize: "14px", color: MID, lineHeight: 1.75, marginBottom: "18px", fontStyle: "italic", flex: 1 }}>"{isAr ? s.text_ar : s.text_en}"</p>
              <div style={{ borderTop: "1px solid rgba(129,216,208,0.1)", paddingTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: TDK, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{s.emoji}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: TDK }}>{s.name}</div>
                  <div style={{ fontSize: "12px", color: "#8896AB", marginBottom: "3px" }}>{isAr ? s.origin_ar : s.origin_en}</div>
                  <div style={{ display: "inline-block", background: "rgba(129,216,208,0.1)", color: TDK, fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "8px" }}>{isAr ? s.plan_ar : s.plan_en}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: TDK, padding: "60px 5%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0", textAlign: "center" }}>
          {[
            { n: "500+", l_en: "Students Helped", l_ar: "طالب تم مساعدتهم" },
            { n: "4", l_en: "Programs Available", l_ar: "برامج متاحة" },
            { n: "3×", l_en: "Live Classes/Week", l_ar: "حصص مباشرة/أسبوع" },
            { n: "100%", l_en: "Arabic + English Support", l_ar: "دعم عربي وإنجليزي" },
          ].map((s) => (
            <div key={s.n} style={{ padding: "28px 20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 700, color: GOLD_LT, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "5px" }}>{isAr ? s.l_ar : s.l_en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BG, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: TDK, marginBottom: "14px" }}>
            {isAr ? "قصة نجاحك تبدأ هنا" : "Your Success Story Starts Here"}
          </h2>
          <p style={{ color: MID, fontSize: "17px", marginBottom: "28px" }}>
            {isAr ? "انضم إلى مئات الوافدين الذين غيّروا حياتهم مع أكاديمية كندا ريدي." : "Join hundreds of newcomers who have already changed their lives with Canada Ready Academy."}
          </p>
          <Link href="/assessment" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: TDK, color: "#fff", padding: "16px 40px", borderRadius: "32px", fontSize: "16px", fontWeight: 800, textDecoration: "none" }} data-testid="testi-cta">
            📋 {isAr ? "احجز تقييمك المجاني" : "Book Your Free Assessment"}
          </Link>
        </div>
      </section>
    </div>
  );
}
