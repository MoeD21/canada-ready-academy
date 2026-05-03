import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateAssessment } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";

const T = "#66E6DE"; const TDK = "#007A77"; const GOLD = "#C9903A"; const GOLD_LT = "#E8B84B"; const BG = "#F5FFFE"; const MID = "#4A6B69";

const schema = z.object({
  name: z.string().min(2),
  whatsapp: z.string().min(5),
  englishLevel: z.string().min(1),
  country: z.string().min(2),
  careerGoals: z.string().min(5),
  timeInCanada: z.string().min(1),
  biggestChallenge: z.string().min(5),
});

export default function Assessment() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const { toast } = useToast();
  const createAssessment = useCreateAssessment();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", whatsapp: "", englishLevel: "", country: "", careerGoals: "", timeInCanada: "", biggestChallenge: "" },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    createAssessment.mutate({ data }, {
      onSuccess: () => setSubmitted(true),
      onError: () => toast({ variant: "destructive", title: isAr ? "حدث خطأ" : "Error", description: isAr ? "حاول مرة أخرى." : "Please try again." }),
    });
  };

  if (submitted) {
    return (
      <div style={{ padding: "80px 5%", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `rgba(129,216,208,0.12)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", margin: "0 auto 24px" }}>✅</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "تم حجز موعدك!" : "Appointment Submitted!"}
        </h2>
        <p style={{ fontSize: "17px", color: MID, lineHeight: 1.7, marginBottom: "28px" }}>
          {isAr ? "سنتواصل معك على واتساب خلال 24 ساعة لتأكيد موعدك المجاني. ابق قريباً!" : "We will contact you on WhatsApp within 24 hours to confirm your free appointment. Stay close!"}
        </p>
        <a href="https://wa.me/15870000000" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "32px", fontSize: "16px", fontWeight: 700, textDecoration: "none" }} data-testid="success-whatsapp">
          💬 {isAr ? "تحدث معنا الآن على واتساب" : "Chat With Us Now on WhatsApp"}
        </a>
      </div>
    );
  }

  const whatHappens = [
    { en: "We check your English level (Beginner or Intermediate)", ar: "نتحقق من مستوى إنجليزيتك (مبتدئ أو متوسط)" },
    { en: "We ask about your career goals and work history", ar: "نسأل عن أهدافك المهنية وتاريخك الوظيفي" },
    { en: "We understand your newcomer challenges", ar: "نفهم تحديات حياتك الجديدة" },
    { en: "We explain how our program works", ar: "نشرح لك كيف يعمل برنامجنا" },
    { en: "We recommend the best plan for you", ar: "نوصيك بأفضل خطة تناسبك" },
    { en: "You get your WhatsApp group & Zoom links", ar: "تحصل على مجموعة واتساب وروابط زووم" },
  ];

  const inputStyle = { border: `1.5px solid rgba(129,216,208,0.25)`, borderRadius: "10px", padding: "12px 14px", fontSize: "14px", fontFamily: "inherit", color: "#1A2E2D", background: "#fff", outline: "none", width: "100%" };
  const labelStyle = { display: "block" as const, fontSize: "12px", fontWeight: 700, color: TDK, marginBottom: "5px" };

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <section style={{ padding: "60px 5% 50px", background: `linear-gradient(135deg,${BG},#e8fffe)`, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.28)", color: TDK, padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" as const, marginBottom: "12px" }}>
          📋 {isAr ? "موعد مجاني" : "FREE APPOINTMENT"}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, color: TDK, marginBottom: "12px" }}>
          {isAr ? "احجز موعدك المجاني للإنجليزية والمهنة" : "Book Your Free English & Career Appointment"}
        </h1>
        <p style={{ fontSize: "17px", color: MID, maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          {isAr ? "15–20 دقيقة مع فريقنا. مجانية تماماً. سنتحقق من مستواك، ونفهم أهدافك، ونوصيك بأفضل خطة لك." : "15–20 minutes with our team. Completely free. We'll check your level, understand your goals, and recommend the best plan for you."}
        </p>
      </section>

      <section style={{ padding: "60px 5% 80px", background: "#fff" }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "52px", alignItems: "start" }}>

          {/* Left: What happens */}
          <div>
            <div style={{ background: TDK, borderRadius: "22px", padding: "34px", color: "#fff", marginBottom: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: GOLD_LT, marginBottom: "18px" }}>
                {isAr ? "ماذا يحدث خلال الموعد؟" : "What Happens During the Appointment?"}
              </div>
              {whatHappens.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "22px", height: "22px", background: "rgba(201,144,58,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: GOLD_LT, fontSize: "11px", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>{i + 1}</div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.55 }}>{isAr ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
            <div style={{ background: BG, border: "1px solid rgba(129,216,208,0.15)", borderRadius: "16px", padding: "22px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", color: TDK, marginBottom: "10px" }}>🎁 {isAr ? "مجاني تماماً" : "100% Free"}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                {[
                  { en: "No credit card required", ar: "لا بطاقة ائتمان مطلوبة" },
                  { en: "No commitment or obligation", ar: "لا التزام أو ضغط" },
                  { en: "Call is in Arabic — no pressure", ar: "المكالمة بالعربية — لا ضغط" },
                  { en: "First week is FREE when you join", ar: "الأسبوع الأول مجاني عند الانضمام" },
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: MID }}>
                    <span style={{ color: GOLD, fontWeight: 800 }}>✓</span>{isAr ? item.ar : item.en}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: BG, borderRadius: "22px", padding: "38px", boxShadow: "0 24px 60px rgba(129,216,208,0.1)", border: "1px solid rgba(129,216,208,0.12)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 800, color: TDK, marginBottom: "4px" }}>
              {isAr ? "أكمل استمارة الموعد" : "Complete the Appointment Form"}
            </h3>
            <p style={{ fontSize: "13px", color: "#8896AB", marginBottom: "24px" }}>
              {isAr ? "سنتصل بك خلال 24 ساعة." : "We'll contact you within 24 hours."}
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel style={labelStyle}>{isAr ? "الاسم الكامل" : "Full Name"}</FormLabel><FormControl><Input {...field} style={inputStyle} data-testid="input-name" /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="whatsapp" render={({ field }) => (
                    <FormItem><FormLabel style={labelStyle}>{isAr ? "رقم الواتساب" : "WhatsApp Number"}</FormLabel><FormControl><Input placeholder="+1 587 000 0000" {...field} style={inputStyle} data-testid="input-whatsapp" /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
                  <FormField control={form.control} name="englishLevel" render={({ field }) => (
                    <FormItem>
                      <FormLabel style={labelStyle}>{isAr ? "مستوى الإنجليزية" : "English Level"}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger style={inputStyle} data-testid="sel-english"><SelectValue placeholder={isAr ? "اختر المستوى" : "Select level"} /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">{isAr ? "مبتدئ" : "Beginner"}</SelectItem>
                          <SelectItem value="intermediate">{isAr ? "متوسط" : "Intermediate"}</SelectItem>
                          <SelectItem value="advanced">{isAr ? "متقدم" : "Advanced"}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="country" render={({ field }) => (
                    <FormItem><FormLabel style={labelStyle}>{isAr ? "بلد الأصل" : "Country of Origin"}</FormLabel><FormControl><Input placeholder={isAr ? "مصر، سوريا، العراق..." : "Egypt, Syria, Iraq..."} {...field} style={inputStyle} data-testid="input-country" /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="timeInCanada" render={({ field }) => (
                  <FormItem>
                    <FormLabel style={labelStyle}>{isAr ? "منذ متى وأنت في كندا؟" : "How Long in Canada?"}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger style={inputStyle} data-testid="sel-time"><SelectValue placeholder={isAr ? "اختر المدة" : "Select time"} /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="justArrived">{isAr ? "وصلت للتو (أقل من شهر)" : "Just arrived (less than 1 month)"}</SelectItem>
                        <SelectItem value="lessThan1">{isAr ? "أقل من سنة" : "Less than 1 year"}</SelectItem>
                        <SelectItem value="oneToTwo">{isAr ? "1–2 سنوات" : "1–2 years"}</SelectItem>
                        <SelectItem value="moreThan2">{isAr ? "أكثر من سنتين" : "More than 2 years"}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="careerGoals" render={({ field }) => (
                  <FormItem>
                    <FormLabel style={labelStyle}>{isAr ? "أهدافك المهنية" : "Career Goals"}</FormLabel>
                    <FormControl><Textarea placeholder={isAr ? "ما نوع العمل الذي تبحث عنه؟ ما هي أهدافك في كندا؟" : "What kind of work are you looking for? What are your goals in Canada?"} {...field} style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }} data-testid="input-goals" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="biggestChallenge" render={({ field }) => (
                  <FormItem>
                    <FormLabel style={labelStyle}>{isAr ? "أكبر تحدٍّ تواجهه الآن" : "Biggest Challenge Right Now"}</FormLabel>
                    <FormControl><Textarea placeholder={isAr ? "أخبرنا عن أكبر صعوبة — اللغة، العمل، فهم الحياة الكندية..." : "Tell us your main difficulty — language, jobs, understanding Canadian life..."} {...field} style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }} data-testid="input-challenge" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" disabled={createAssessment.isPending} style={{ width: "100%", padding: "16px", background: TDK, color: "#fff", border: "none", borderRadius: "26px", fontSize: "16px", fontWeight: 700, cursor: createAssessment.isPending ? "not-allowed" : "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", opacity: createAssessment.isPending ? 0.65 : 1, marginTop: "6px" }} data-testid="submit-assessment">
                  {createAssessment.isPending && <Loader2 className="w-5 h-5 animate-spin" />}
                  📋 {isAr ? "احجز موعدي المجاني" : "Book My Free Appointment"}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
