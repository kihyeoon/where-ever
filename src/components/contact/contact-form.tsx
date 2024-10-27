"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const MAX_DESCRIPTION_LENGTH = 500;

const FormSchema = z.object({
  howDidYouHear: z.enum(["유튜브", "네이버블로그", "인스타그램"], {
    required_error: "경로를 선택해주세요.",
  }),
  monthlyBudget: z.enum(["1-50", "50-100", "100-300", "300-500"], {
    required_error: "월 예산을 선택해주세요.",
  }),
  problemDescription: z
    .string()
    .min(1, {
      message: "현재 고민 중인 문제를 입력해주세요.",
    })
    .max(MAX_DESCRIPTION_LENGTH, {
      message: `최대 ${MAX_DESCRIPTION_LENGTH}자까지 입력 가능합니다.`,
    }),
  companyName: z.string().min(1, {
    message: "업체명을 입력해주세요.",
  }),
  region: z.string().min(1, {
    message: "지역을 입력해주세요.",
  }),
  contactNumber: z.string().regex(/^\d+-\d+-\d+$/, {
    message: "연락처는 000-0000-0000 형태로 입력해주세요.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      howDidYouHear: undefined,
      monthlyBudget: undefined,
      problemDescription: "",
      companyName: "",
      region: "",
      contactNumber: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "제출된 정보:",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="howDidYouHear"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-foreground">
                WHEREVER를 어떻게 알게 되셨나요?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-2"
                >
                  {["유튜브", "네이버블로그", "인스타그램"].map((option) => (
                    <FormItem
                      key={option}
                      className="flex items-center space-x-3"
                    >
                      <FormControl>
                        <RadioGroupItem value={option} />
                      </FormControl>
                      <FormLabel className="!mt-0 !text-foreground">
                        {option}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="monthlyBudget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-foreground">
                마케팅 진행의 월 예산은 어느정도로 생각하시나요?
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="월 예산을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1-50", "50-100", "100-300", "300-500"].map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="problemDescription"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel className="!text-foreground">
                  현재 가장 고민 중인 문제를 알려주세요.
                </FormLabel>
                <span className="text-sm">
                  ({field.value.length}/{MAX_DESCRIPTION_LENGTH})
                </span>
              </div>
              <FormControl>
                <Textarea
                  placeholder="문제를 입력해주세요."
                  className="resize-none"
                  rows={7}
                  maxLength={MAX_DESCRIPTION_LENGTH}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-foreground">업체명</FormLabel>
              <FormControl>
                <Input placeholder="업체명을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-foreground">지역</FormLabel>
              <FormControl>
                <Input placeholder="지역을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-foreground">연락처</FormLabel>
              <FormControl>
                <Input placeholder="예: 010-1234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-foreground">이메일</FormLabel>
              <FormControl>
                <Input placeholder="이메일을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">문의하기</Button>
      </form>
    </Form>
  );
}
