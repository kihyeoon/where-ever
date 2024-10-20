import Link from "next/link";
import Logo from "@/components/common/logo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <>
      <Separator className="my-6" />
      <footer className="mx-auto mb-20 w-full max-w-[1400px] px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="mb-6 grayscale-0">
              <Logo type="dark" />
            </div>
            <div className="text-sm text-neutral-500">
              <p>(주)웨어에버</p>
              <p>사업자등록번호 : 000-00-00000</p>
              <p>대표이사 : 정원령</p>
              <p>통신판매업 신고번호 : 2024-서울양천-0000</p>
              <p>주소 : 서울특별시 양천구 000로00길 00, 00층 00호</p>
              <p>전화번호 : 0000-0000</p>
              <p>이메일 : contact@where-ever.kr</p>
            </div>
          </div>

          <div className="flex flex-col md:w-2/3 md:flex-row md:space-x-8">
            <div className="mb-8 md:mb-0">
              <h3 className="mb-4 font-semibold">Family site</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500">
                    Wherever LAB
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500">
                    Wherever LAB REWARD
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500">
                    REWARD SOLUTION
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Channel</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2024 Wherever Co., Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
}
