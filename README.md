# 웨어에버 회사 소개 사이트

## 소개

웨어에버 회사 소개 사이트입니다. 본 프로젝트는 인터렉티브한 사용자 경험과 반응형 디자인에 중점을 두고 제작되었습니다.

## 특징

- **Next.js 기반**: 최신 Next.js 프레임워크를 사용해 SSR과 클라이언트 사이드 렌더링을 모두 지원합니다.
- **반응형 디자인**: Tailwind CSS를 활용해 다양한 장치에서 최적의 UI/UX를 구현했습니다.
- **애니메이션 효과**: Motion 라이브러리를 활용하여 생동감 있는 인터랙션과 비주얼 효과를 제공합니다.
- **폼 검증 및 이메일 전송**: React Hook Form과 Zod를 사용한 폼 검증 기능과 Nodemailer를 통한 이메일 전송 기능을 포함하고 있습니다.
- **SEO 최적화**: Schema.org 마크업과 Open Graph 설정을 통해 검색 엔진 최적화를 고려하였습니다.

## 기술 스택

- **프론트엔드**: Next.js, React, TypeScript
- **스타일링**: Tailwind CSS
- **폼 및 데이터 검증**: React Hook Form, Zod
- **애니메이션**: Motion(framer-motion)
- **이메일 전송**: Nodemailer
- **기타**: Next-sitemap

## 프로젝트 구조

```
where-ever/
├── public/ # 이미지, 동영상, sitemap, robots.txt 등 정적 파일
├── src/
│ ├── app/ # Next.js 라우팅 폴더 (페이지: about, branding, contact, place, sns, viral 등)
│ ├── components/ # 재사용 가능한 UI 컴포넌트 (헤더, 푸터, 카드, 애니메이션 컴포넌트 등)
│ └── service/ # 비즈니스 로직 및 API 통신 (이메일 전송, 폼 데이터 처리, Zod 스키마 등)
├── styles/ # 전역 스타일 및 Tailwind 설정파일 (글로벌 CSS 포함)
├── .env.local # 환경변수 파일 (SITE_URL, NEXT_PUBLIC_GA_ID, AUTH_USER, AUTH_PASS 등)
├── next-sitemap.config.js # sitemap 및 robots.txt 관련 설정
├── package.json # 프로젝트 의존성 및 스크립트
└── README.md # 프로젝트 문서
```
