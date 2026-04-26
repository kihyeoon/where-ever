# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Task | Command |
|---|---|
| 개발 서버 | `pnpm dev` |
| 프로덕션 빌드 (sitemap 자동 생성) | `pnpm build` |
| 프로덕션 실행 | `pnpm start` |
| 린트 | `pnpm lint` |

테스트 러너는 설정되어 있지 않다. 검증은 `pnpm lint && pnpm build` + 수동 브라우저 확인.

## Architecture

### 단일 페이지 + Contact API

App Router 기반이지만 사실상 **싱글 페이지 사이트**다. `src/app/page.tsx`가 `Portfolio` → `Contact` → `About` 세 섹션을 한 번에 렌더하며, 헤더 nav는 앵커(`/#about`, `/#portfolio`, `/#contact`)로 스크롤만 이동한다. 별도 라우트 페이지는 `src/app/api/contact/route.ts` 하나뿐.

홈 섹션 컴포넌트는 `src/components/home/{about,portfolio,contact}-section.tsx`에 1:1 대응.

### `_legacy/` 보존 디렉터리

이 프로젝트는 마케팅 사이트(v1)에서 인테리어 스튜디오 사이트(v2)로 도메인 전환된 코드베이스다. 구버전 라우트(`/about`, `/contact`, `/place`, `/sns`, `/viral`, `/branding`)와 전용 컴포넌트는 `src/_legacy/`에 보존돼 있고, 다음 3중 격리로 빌드에서 제외된다:

- `tsconfig.json` `exclude`: `src/_legacy/**`
- `.eslintrc.json` `ignorePatterns`: `src/_legacy/**`
- `next-sitemap.config.js` `exclude`: 6개 레거시 경로

레거시 자산을 다시 살릴 때는 위 3개 모두 일시 해제 필요. import는 끊어진 상태일 수 있다 (`src/_legacy/README.md` 참고).

### Contact 메일 전송 흐름

`contact-form.tsx` (RHF + zodResolver) → `service/contact.ts:sendEmail` (POST `/api/contact`) → `app/api/contact/route.ts` (Zod 재검증) → `service/email.ts` (nodemailer + Naver SMTP).

- SMTP 호스트: `smtp.naver.com:465` secure
- 환경변수 `AUTH_USER` / `AUTH_PASS` (Naver 메일 + **앱 비밀번호** 필수, 일반 비밀번호 X)
- `to = from = AUTH_USER` 구조로 자기 메일에 자기가 보내는 형태
- Vercel 등 배포 환경에는 같은 환경변수가 별도 등록돼 있어야 함

### 디자인 시스템

- shadcn/ui (`new-york` 스타일, `zinc` baseColor) — `src/components/ui/`. `components.json` 참고.
- Tailwind CSS, CSS 변수 기반 토큰 (`globals.css`)
- 폰트: 본문 `Pretendard` (local woff2), 헤딩 `Alata` (Google Fonts). CSS 변수 `--font-pretendard`, `--font-alata`로 노출 — 헤딩은 `font-[family-name:var(--font-alata)]` 인라인 클래스 패턴 통일.
- 한국어 본문은 `break-keep` 적용 (줄바꿈 시 단어 단위 유지).
- 애니메이션은 `motion/react` (motion v12, 구 Framer Motion). cubic-bezier `[0.16, 1, 0.3, 1]`이 사이트 전반의 시그니처 ease.
- 잉크 배경 (`BackgroundInkDrops`)이 `fixed inset-0 -z-10`로 깔려 있어 모든 섹션이 그 위에 렌더된다 — 사진/카드는 정상 흐름이라 자동으로 위에 오지만 `z-index` 작업 시 -10이 기준.

### 패딩 컨벤션

홈 섹션 좌우 패딩은 통일됨: `px-4 md:px-14 lg:px-28 xl:px-44 2xl:px-56`. Header도 동일. 새 섹션 추가 시 그대로 따라야 시각 일관성 유지.

## 코드 컨벤션

- Path alias: `@/*` → `src/*` (tsconfig)
- shadcn aliases (`components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`
- Prettier import order: 외부 모듈 → `@/components` → `@/hooks` → `@/services` → `@/features` → `@/models` → `@/commons` → `@/app` → `@/libs` → 상대경로. `@trivago/prettier-plugin-sort-imports`가 자동 정렬.
- Tailwind 클래스 자동 정렬은 `prettier-plugin-tailwindcss` 사용. `cn`, `cva`, `clsx`도 정렬 대상으로 등록됨.
- 빈 라인 없는 import 정렬, double quote, semi true, trailingComma all.

## SEO / 환경변수

- `SITE_URL` — sitemap, JSON-LD, OG 태그가 사용
- `NEXT_PUBLIC_GA_ID` — `app/layout.tsx`에서 `GoogleAnalytics` 컴포넌트로 주입
- `AUTH_USER` / `AUTH_PASS` — 메일 전송 (위 Contact 섹션 참고)
- JSON-LD `Organization` 스키마는 `app/layout.tsx`에 인라인 — 회사 정보 변경 시 layout.tsx도 함께 업데이트.
- `next-sitemap`이 `postbuild` 훅에서 자동 실행. `priority: 1` 단일 페이지 사이트라 우선순위 분기 없음.

## 커밋 규칙

- 한국어로 작성
- Co-Authored-By 등 Claude 관련 서명 **금지**
- 형식: `type(scope): 한글 설명` (예: `feat(contact): 메일 전송 UX 개선`). `git log --oneline` 참고.
