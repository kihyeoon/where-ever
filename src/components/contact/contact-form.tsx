"use client";

import {
  FormData,
  FormSchema,
  MAX_MESSAGE_LENGTH,
  sendEmail,
} from "@/service/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const lineInput = cn(
  "rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 py-3 text-base shadow-none",
  "focus-visible:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0",
  "placeholder:text-foreground/30",
);

const lineTextarea = cn(
  "rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 py-3 text-base shadow-none resize-none",
  "focus-visible:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0",
  "placeholder:text-foreground/30",
);

const lineLabel = "text-xs uppercase tracking-wider text-foreground/60";

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      companyName: "",
      email: "",
      contactNumber: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    return sendEmail(data)
      .then(() => {
        toast({
          title: "메시지를 보냈습니다",
          description: "확인 후 빠르게 회신드리겠습니다.",
        });
        form.reset();
      })
      .catch((err: Error) => {
        console.error(err);
        toast({
          variant: "destructive",
          title: "메일 전송에 실패했습니다",
          description:
            "잠시 후 다시 시도하거나 wherever23@naver.com으로 직접 연락 주세요.",
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className={lineLabel}>업체명</FormLabel>
              <FormControl>
                <Input
                  placeholder="업체명을 입력해주세요"
                  className={lineInput}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className={lineLabel}>이메일</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  className={lineInput}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className={lineLabel}>연락처</FormLabel>
              <FormControl>
                <Input
                  placeholder="010-0000-0000"
                  className={lineInput}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex items-end justify-between">
                <FormLabel className={lineLabel}>내용</FormLabel>
                <span className="text-xs text-foreground/40">
                  {field.value.length}/{MAX_MESSAGE_LENGTH}
                </span>
              </div>
              <FormControl>
                <Textarea
                  placeholder="공간에 대한 고민이나 요청사항을 자유롭게 적어주세요"
                  rows={5}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className={lineTextarea}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-pretty break-keep text-xs text-foreground/40">
          ※ 기재해주신 문의 내용은 오직 상담만을 위해 저장되며, 절대 제3자에게
          공유되지 않습니다. 문의 내용은 3개월 뒤 폐기됩니다.
        </p>

        <Button
          type="submit"
          variant="outline"
          disabled={form.formState.isSubmitting}
          className="rounded-none border-foreground/40 bg-transparent px-10 py-6 text-sm font-normal tracking-wider hover:bg-foreground hover:text-background"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              보내는 중...
            </>
          ) : (
            "메시지 보내기"
          )}
        </Button>
      </form>
    </Form>
  );
}
