import Link from "next/link";
import { ArrowIcon } from "@/components/common/icons";
import Logo from "@/components/common/logo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <>
      <Separator className="my-6 mt-40" />
      <footer className="mx-auto mb-20 w-full max-w-[1440px] px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="mb-6 grayscale-0">
              <Logo type="color" />
            </div>
            <div className="text-sm text-neutral-400">
              <p>(주)웨어에버</p>
              <p>사업자등록번호 : 251-81-02584</p>
              <p>통신판매업 신고번호 : 2024-서울양천-1301</p>
              <p>주소 : 서울특별시 양천구 중앙로48길 10</p>
              <p>전화번호 : 070-7801-3030</p>
              <p>
                이메일 :
                <a href="mailto:contact@where-ever.kr">contact@where-ever.kr</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-1/2 md:flex-row md:justify-between">
            <div>
              <h3 className="mb-4 font-semibold">Channel</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <Link
                    href="https://instagram.com/wherever___official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                  <ArrowIcon className="size-3 -rotate-45 transform" />
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <Link href="#">Kakao</Link>
                  <ArrowIcon className="size-3 -rotate-45 transform" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          © 2024 Wherever Co., Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
}
