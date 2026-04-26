"use client";

import {
  FormData,
  FormSchema,
  MAX_MESSAGE_LENGTH,
  sendEmail,
} from "@/service/contact";
import { zodResolver } from "@hookform/resolvers/zod";
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
    sendEmail(data)
      .then(() => {
        toast({
          title: "메일을 성공적으로 보냈습니다.",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "메일을 보내는데 실패했습니다.",
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
          className="rounded-none border-foreground/40 bg-transparent px-10 py-6 text-sm font-normal tracking-wider hover:bg-foreground hover:text-background"
        >
          메시지 보내기
        </Button>
      </form>
    </Form>
  );
}
