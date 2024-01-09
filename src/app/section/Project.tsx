"use client";

import React, { useState } from "react";

import Image from "next/image";
import styles from "../Home.module.css";

interface ImageSliderProps {
  images: string[];
  imageHeight: string;
}

export function ImageSlider({ images, imageHeight }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="overflow-hidden w-full relative">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className={`flex-none w-full ${imageHeight} overflow-hidden`}
            key={index}
          >
            <Image
              className="m-auto"
              src={image}
              alt={`Image ${index + 1}`}
              width={400}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center h-[50px]">
        <button className="w-[50px] h-[50px]" onClick={handlePrev}>
          〈
        </button>
        <div>
          {currentIndex + 1} / {images.length}
        </div>
        <button className="w-[50px] h-[50px]" onClick={handleNext}>
          〉
        </button>
      </div>
    </div>
  );
}

export default function Project() {
  const totalExtensionImages = [
    "/img/rank_1.jpg",
    "/img/rank_2.jpg",
    "/img/rank_3.jpg",
    "/img/rank_4.jpg",
    "/img/rank_5.jpg",
    "/img/ox_1.png",
    "/img/ox_2.png",
    "/img/ox_3.png",
    "/img/ox_4.png",
  ];
  const rankImages = [
    "/img/rank_1.jpg",
    "/img/rank_2.jpg",
    "/img/rank_3.jpg",
    "/img/rank_4.jpg",
    "/img/rank_5.jpg",
  ];
  const oxImages = [
    "/img/ox_1.png",
    "/img/ox_2.png",
    "/img/ox_3.png",
    "/img/ox_4.png",
  ];
  const hutdulImages = [
    "/img/hutdul_1.jpg",
    "/img/hutdul_2.jpg",
    "/img/hutdul_3.jpg",
  ];
  const portfoliImages = ["/img/portfolio_1.png"];
  const planitImages = [
    "/img/planit_0_2.png",
    "/img/planit_1.png",
    "/img/planit_2.png",
    "/img/planit_3.png",
    "/img/planit_4.png",
    "/img/planit_5.png",
  ];
  const coffeeLavitaImages = [
    "/img/lavita_1.png",
    "/img/lavita_2.png",
    "/img/lavita_3.png",
    "/img/lavita_4.png",
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2>Project</h2>
      </div>
      <article className="lg:flex gap-x-10 mb-8">
        <aside className="hidden w-full mb-6 lg:w-3/5 lg:mb-0 lg:block">
          <div>
            <ImageSlider images={rankImages} imageHeight="h-[220px]" />
          </div>
          <div>
            <ImageSlider images={oxImages} imageHeight="h-[220px]" />
          </div>
        </aside>
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold">
              아프리카TV 확장프로그램 공모전
            </h3>
            <div className="text-[#76787A]">( 2023.11 ~ 2023.12 )</div>
          </div>
          <br />
          <aside className="w-full mb-6 lg:w-3/5 lg:mb-0 md:block lg:hidden">
            <ImageSlider
              images={totalExtensionImages}
              imageHeight="h-[220px]"
            />
          </aside>
          <div className="lg:flex gap-x-10">
            <div className="w-full">
              <div>
                &quot;시청자 랭킹과 채팅 기록을 한눈에 파악해 보세요!&quot;
              </div>
              <div>
                시청자 랭킹 확장 프로그램은 BJ 방송에 보다 많은 시청자를
                노출하기 위해 개발되었으며, 이를 통해 시청자의 방송 참여를
                높이는 목표로 개발되었습니다.
              </div>
              <br />
              <div>
                아프리카TV에서 주최한 Extension개발 공모전에 참여한
                프로젝트입니다.
              </div>
              <div>
                React.js를 사용해 BJ, User, Mobile 화면을 개발했습니다. 제출을
                위해 각 화면마다 별도의 프로젝트 빌드 파일이 필요했고, 이미지,
                폰트, 스타일 등의 공통 리소스도 많이 사용되었습니다.
              </div>
              <div>
                이러한 상황에서 세 개의 레포지토리로 관리하는 것 보다는 개발속도
                향상과 공통 리소스의 중복을 방지하기 위해 모노레포 구조를
                채택했습니다.
              </div>
              <br />

              <div>
                시청자 랭킹:{" "}
                <div className="ml-6">
                  <a
                    href="https://extension.afreecatv.com/detail.php?ext_id=56ee32e433c49bb4843a3c74d89eab4c&develop=false"
                    target="_blank"
                  >
                    Extension Market
                  </a>
                </div>
                <div className="ml-6">
                  <a
                    href="https://laced-reward-1d6.notion.site/d53add72efc34705af742e0c69996a73?pvs=4"
                    target="_blank"
                  >
                    기획 & 매뉴얼 URL
                  </a>
                </div>
                <div className="ml-6">
                  <a href="https://www.fmkorea.com/6497564483" target="_blank">
                    커뮤니티 반응
                  </a>
                </div>
              </div>

              <div>
                OX 퀴즈:{" "}
                <div className="ml-6">
                  <a
                    href="https://extension.afreecatv.com/detail.php?ext_id=3bd729084d2e9fb705b73f1b88e272d8&version=1.2.0&develop=false"
                    target="_blank"
                  >
                    Extension Market
                  </a>
                </div>
                <div className="ml-6">
                  <a
                    href="https://extension.afreecatv.com/detail.php?ext_id=56ee32e433c49bb4843a3c74d89eab4c&develop=false"
                    target="_blank"
                  >
                    기획 & 매뉴얼 URL
                  </a>
                </div>
                <div className="ml-6">
                  <a href="https://www.fmkorea.com/6497012517" target="_blank">
                    커뮤니티 반응
                  </a>
                </div>
              </div>
              <div>Git: Private</div>
              <div>Tech: React, Recoil, 아프리카TV SDK, Monorepo</div>
            </div>
          </div>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="lg:flex gap-x-10 mb-8">
        <aside className="hidden w-full mb-6 lg:w-3/5 lg:mb-0 lg:block">
          <ImageSlider images={hutdulImages} imageHeight="h-[400px]" />
        </aside>
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold">HUTDUL</h3>
            <div className="text-[#76787A]">( 2023.03 ~ ver3. 진행중 )</div>
          </div>
          <br />
          <aside className="w-full mb-6 lg:w-3/5 lg:mb-0 md:block lg:hidden">
            <ImageSlider images={hutdulImages} imageHeight="h-[400px]" />
          </aside>
          <div className="lg:flex gap-x-10">
            <div className="w-full">
              <div>&quot;매번 친구랑 못하는 운동 헛둘과 함께하자!&quot;</div>
              <div>
                혼자 운동하는 사람들이 재미있게 운동할 수 있도록 도와주는 AI음성
                타이머 앱입니다.
              </div>
              <div>
                항상 같이 운동하던 친구와 지역적으로 멀어져서 혼자서도 같이
                운동하는 기분을 내고 싶은 마음에 개발했습니다.
              </div>
              <br />
              <div>
                React Native와 Typescript를 사용했으며, 아토믹 디자인 패턴을
                적용했습니다.{" "}
              </div>
              <div>
                디자이너 친구와 매주 목요일 저녁에 기획과 UI/UX 회의를 진행하고,
                Notion, Figma를 이용하고 있습니다..
              </div>
              <div>
                APP Store와 Google Play에 배포 되었으며, 사용자 피드백을 받아
                지속적인 업데이트 중입니다.
              </div>
              <br />
              <div>
                IOS:{" "}
                <a
                  href="https://apps.apple.com/kr/app/%ED%97%9B%EB%91%98-%EC%9A%B4%EB%8F%99-%EC%9D%8C%EC%84%B1-%ED%83%80%EC%9D%B4%EB%A8%B8/id6450903261"
                  target="_blank"
                >
                  App Store URL
                </a>
              </div>
              <div>
                Android:{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.hutdul&pcampaignid=web_share"
                  target="_blank"
                >
                  Google Play URL
                </a>
              </div>
              <div>Git: Private</div>
              <div>Tech: React Native, TypeScript, Recoil, fireBase</div>
            </div>
          </div>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="lg:flex gap-x-10 mb-8">
        <aside className="hidden w-full mb-6 lg:w-3/5 lg:mb-0 lg:block">
          <ImageSlider images={portfoliImages} imageHeight="h-[300px]" />
        </aside>
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold">포트폴리오 페이지</h3>
            <div className="text-[#76787A]">( 2023.08 ~ 2023.08 )</div>
          </div>
          <br />
          <aside className="w-full mb-6 lg:w-3/5 lg:mb-0 md:block lg:hidden">
            <ImageSlider images={portfoliImages} imageHeight="h-[300px]" />
          </aside>
          <div className="lg:flex gap-x-10">
            <div className="w-full">
              <div>Nextjs 학습을 목적으로 제작한 포트폴리오 페이지입니다.</div>
              <div>현재 보고 있는 웹사이트에 해당합니다.</div>
              <div>
                반응형 디자인을 적용하여 다양한 디바이스에서도 원활하게 접근
                가능합니다.
              </div>
              <div></div>
              <br />
              <div>
                Git:{" "}
                <a
                  href="https://github.com/2myungho/my-portfolio"
                  target="_blank"
                >
                  {" "}
                  Git README{" "}
                </a>
              </div>
              <div>Tech: React, Typescript, Nextjs</div>
            </div>
          </div>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="lg:flex gap-x-10 mb-8">
        <aside className="hidden w-full mb-6 lg:w-3/5 lg:mb-0 lg:block">
          <ImageSlider images={planitImages} imageHeight="h-[300px]" />
        </aside>
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold">Planit</h3>
            <div className="text-[#76787A]">( 2020.09 ~ 2020.12 )</div>
          </div>
          <br />
          <aside className="w-full mb-6 lg:w-3/5 lg:mb-0 md:block lg:hidden">
            <ImageSlider images={planitImages} imageHeight="h-[300px]" />
          </aside>
          <div className="lg:flex gap-x-10">
            <div className="w-full">
              <div>
                계획 관리형 SNS 서비스입니다. 계획들의 행성이라는 의미의 Planit
                서비스는 계획을 공유하며 동기부여 및 능률을 향상시키고, 더 많은
                사람들의 계획을 돕기 위해 제작되었습니다.
              </div>
              <br />
              <div>
                해당 프로젝트에서 주로 프론트엔드 부분을 담담하고, 서버 보조 및
                배포에 참여했습니다.
              </div>
              <div className="mb-1">
                서버는 MSA구조로 설계하였으며, AWS를 활용해 배포를 진행했습니다.
              </div>
              <div className="mb-1">
                <div>담당한 기능: </div>
                <div>- Group 서비스 개발</div>
                <div>- S3 파일 업로드 서비스 개발</div>
                <div>- 프로젝트 배포 참여</div>
                <div>- 풀스택 개발</div>
              </div>
              <div>자세한 내용은 Git README에서 확인할 수 있습니다.</div>
              <br />
              <div>
                Git:{" "}
                <a
                  href="https://github.com/2myungho/Planit-Project"
                  target="_blank"
                >
                  {" "}
                  Git README{" "}
                </a>
              </div>
              <div>
                Tech: React, Typescript, Java, SpringBoot, MariaDB, AWS, Docker
              </div>
            </div>
          </div>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="lg:flex gap-x-10 mb-8">
        <aside className="hidden w-full mb-6 lg:w-3/5 lg:mb-0 lg:block">
          <ImageSlider images={coffeeLavitaImages} imageHeight="h-[280px]" />
        </aside>
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold">COFFEE & LAVITA</h3>
            <div className="text-[#76787A]">
              ( 1차: 2019.12 ~ 2020.01, 2차: 2020.09 ~ 2020.09, 3차: 2020.11 ~
              2020.11 )
            </div>
          </div>
          <br />
          <aside className="w-full mb-6 lg:w-3/5 lg:mb-0 md:block lg:hidden">
            <ImageSlider images={coffeeLavitaImages} imageHeight="h-[280px]" />
          </aside>
          <div className="lg:flex gap-x-10">
            <div className="w-full">
              <div>
                이탈리아어로 Lavita는 &quot;풍요로운 삶&quot;을 뜻합니다.
                직장인들을 타겟으로 정했으며, 직장인들이 질 좋은 커피로 삶이
                조금 더 풍요로워 졌으면 하는 마음으로 제작했습니다.
              </div>
              <br />
              <div className="mb-1">
                학습한 내용이 생길 때마다 직접 적용해보던 개인 프로젝트입니다.
              </div>
              <div className="mb-2">
                <div>1차 진행:</div>
                <div>
                  - Html, CSS, Javascript, JQuery 를 이용하여 홈페이지 폼 제작
                </div>
              </div>
              <div className="mb-2">
                <div>2차 진행: </div>
                <div>
                  - 학습한 Spring Framework, Jsp, Oracle 등을 적용하여 서버 구현
                </div>
              </div>
              <div className="mb-2">
                <div>3차 진행: </div>
                <div>- AWS EC2서버를 활용해 프로젝트 배포하기</div>
                <div>- AWS RDS를 EC2 서버에서 연동</div>
                <div>- RDS에서 Oracla이 유료이기 때문에 MariaDB로 변경</div>
              </div>
              <div>자세한 내용은 Git README에서 확인할 수 있습니다.</div>
              <br />
              <div>
                Git:{" "}
                <a
                  href="https://github.com/2myungho/CoffeeLavita_Project"
                  target="_blank"
                >
                  {" "}
                  Git README{" "}
                </a>
              </div>
              <div>
                Tech: Html/Css, Javascript JQuery, Java, Spring Framework, Jsp,
                MariaDB, AWS
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
