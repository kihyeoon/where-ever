export type PortfolioItem = {
  id: string;
  src: string;
  title: string;
  category: string;
  alt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "louis-vuitton",
    src: "/images/portfolio/louis-vuitton.png",
    title: "루이뷔통",
    category: "리테일 매장",
    alt: "루이뷔통 매장 인테리어",
  },
  {
    id: "shinchon-academy",
    src: "/images/portfolio/shinchon-academy.png",
    title: "신촌역 학원",
    category: "교육 공간",
    alt: "신촌역 학원 인테리어",
  },
  {
    id: "model-house",
    src: "/images/portfolio/model-house.jpg",
    title: "모델하우스",
    category: "주거 공간",
    alt: "모델하우스 인테리어",
  },
  {
    id: "roche-bobois",
    src: "/images/portfolio/roche-bobois.png",
    title: "로쉐보보아",
    category: "쇼룸",
    alt: "로쉐보보아 쇼룸 인테리어",
  },
  {
    id: "h2o",
    src: "/images/portfolio/h2o.jpg",
    title: "H2O",
    category: "상업공간",
    alt: "H2O 상업공간 인테리어",
  },
  {
    id: "common-hall",
    src: "/images/portfolio/common-hall.jpg",
    title: "공용 홀",
    category: "상업공간",
    alt: "공용 홀 인테리어",
  },
  {
    id: "cafe",
    src: "/images/portfolio/cafe.jpg",
    title: "카페",
    category: "F&B",
    alt: "카페 인테리어",
  },
  {
    id: "model-house-seonghwangri",
    src: "/images/portfolio/model-house-seonghwangri.jpg",
    title: "성황리 모델하우스",
    category: "주거 공간",
    alt: "성황리 모델하우스 외관",
  },
  {
    id: "model-house-imdang",
    src: "/images/portfolio/model-house-imdang.jpg",
    title: "임당역 스마트시티",
    category: "주거 공간",
    alt: "임당역 스마트시티 모델하우스 외관",
  },
];
