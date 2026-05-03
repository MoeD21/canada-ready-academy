import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
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

const assessmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  whatsapp: z.string().min(5, "WhatsApp is required"),
  englishLevel: z.string().min(1, "English level is required"),
  country: z.string().min(2, "Country is required"),
  careerGoals: z.string().min(5, "Career goals are required"),
  timeInCanada: z.string().min(1, "Time in Canada is required"),
  biggestChallenge: z.string().min(5, "Biggest challenge is required"),
});

type AssessmentFormValues = z.infer<typeof assessmentSchema>;

export default function Assessment() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const createAssessment = useCreateAssessment();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<AssessmentFormValues>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      englishLevel: "",
      country: "",
      careerGoals: "",
      timeInCanada: "",
      biggestChallenge: "",
    },
  });

  const onSubmit = (data: AssessmentFormValues) => {
    createAssessment.mutate(
      { data },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: t('common.error'),
            description: "Something went wrong. Please try again.",
          });
        }
      }
    );
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-8">
          <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">{t('common.success')}</h2>
        <p className="text-xl text-muted-foreground mb-8">{t('assessment.form.success')}</p>
        <a 
          href="https://wa.me/15870000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
        >
          {t('common.whatsappMsg')}
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('assessment.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('assessment.subtitle')}</p>
      </div>

      <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('assessment.form.name')}</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-assessment-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('assessment.form.whatsapp')}</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-assessment-whatsapp" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="englishLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('assessment.form.englishLevel')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-assessment-english">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">{t('assessment.form.englishLevels.beginner')}</SelectItem>
                        <SelectItem value="intermediate">{t('assessment.form.englishLevels.intermediate')}</SelectItem>
                        <SelectItem value="advanced">{t('assessment.form.englishLevels.advanced')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('assessment.form.country')}</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-assessment-country" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="timeInCanada"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('assessment.form.timeInCanada')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-assessment-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="justArrived">{t('assessment.form.times.justArrived')}</SelectItem>
                      <SelectItem value="lessThan1">{t('assessment.form.times.lessThan1')}</SelectItem>
                      <SelectItem value="oneToTwo">{t('assessment.form.times.oneToTwo')}</SelectItem>
                      <SelectItem value="moreThan2">{t('assessment.form.times.moreThan2')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="careerGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('assessment.form.careerGoals')}</FormLabel>
                  <FormControl>
                    <Textarea {...field} data-testid="input-assessment-goals" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="biggestChallenge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('assessment.form.biggestChallenge')}</FormLabel>
                  <FormControl>
                    <Textarea {...field} data-testid="input-assessment-challenge" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12 text-lg rounded-full" disabled={createAssessment.isPending} data-testid="button-submit-assessment">
              {createAssessment.isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {t('common.submit')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
