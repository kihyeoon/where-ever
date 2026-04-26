# `_legacy/`

마케팅 도메인 시절(웨어에버 v1)의 라우트와 컴포넌트를 보존하는 디렉터리.

## 위치 선택 사유
- `src/app/` 외부이므로 Next.js App Router가 라우트로 인식하지 않음
- `tsconfig.json`의 `exclude`에 `src/_legacy/**` 추가되어 빌드/타입체크 대상 제외
- `.eslintrc.json`의 `ignorePatterns`에 `src/_legacy/**` 추가되어 lint 제외

## 보관 내역
- `app-routes/` — 마케팅 시절 6개 라우트 (`about`, `contact`, `place`, `sns`, `viral`, `branding`)
- `components/` — 마케팅 시절 전용 컴포넌트들
  - `home/` — 비디오 히어로(`hero-section.tsx`), 마케팅 오버뷰 등
  - `service/`, `about/` — 서비스/About 전용 컴포넌트
  - `card-carousel.tsx` — 마케팅 서비스 카드 캐러셀

## 주의
- 보존 목적이므로 외부 모듈(`@/components/...`) import가 끊어진 상태일 수 있다.
- 재활용 시 `tsconfig.exclude`/`eslintrc.ignorePatterns`에서 일시 해제 후 작업.
