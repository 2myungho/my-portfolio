import React from 'react'

import Image from "next/image";
import styles from '../Home.module.css';

export default function Project() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2 >Project</h2>
      </div>
      <article className="">
        <div className="w-full">
          <h3 className="text-2xl font-semibold">HUTDUL</h3>
          <div className="text-[#76787A]">( 2023.03 ~ 진행중 )</div>
        </div>
        <br />
        <div className="flex mb-8 gap-x-20">
          <div className="w-3/5">
            <div>&quot;매번 친구랑 못하는 운동 헛둘과 함께하자!&quot;</div>
            <div>혼자 운동하는 사람들이 재미있게 운동할 수 있도록 도와주는 AI음성 타이머 앱입니다.</div>
            <div>항상 같이 운동하던 친구와 지역적으로 멀어져서 혼자서도 같이 운동하는 기분을 내고 싶은 마음에 개발했습니다.</div>
            <br />
            <div>React Native와 Typescript를 사용했으며, 아토믹 디자인 패턴을 적용했습니다. </div>
            <div>디자이너 친구와 매주 목요일 저녁에 기획과 UI/UX 회의를 진행하고, Notion, Figma를 이용했습니다.</div>
            <div>APP Store와 Google Play에 배포 되었으며, 사용자 피드백을 받아 지속적인 업데이트 중입니다.</div>
            <br />
            <div>IOS: <a href="" >App Store URL</a></div>
            <div>Android: <a href="" >Google Play URL</a></div>
            <div>Git: Private</div>
            <div>Tech: React Native, TypeScript, Recoil, fireBase</div>
          </div>
          <aside className="w-2/5">
            <Image
              src="/cat.jpg"
              alt="Profile"
              width={500}
              height={500}
            />
          </aside>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="">
        <div className="w-full">
          <h3 className="text-2xl font-semibold">포트폴리오 페이지</h3>
          <div className="text-[#76787A]">( 2023.08 ~ 2023.08 )</div>
        </div>
        <br />
        <div className="flex mb-8 gap-x-20">
          <div className="w-3/5">
            <div>포트폴리오 용도로 제작한 웹사이트입니다.</div>
            <br />
            <div>Git: <a href="https://github.com/2myungho/my-portfolio"> Git README </a></div>
            <div>Tech: React, Nextjs</div>
          </div>
        <aside className="w-2/5">
          <Image
              src="/cat.jpg"
              alt="Profile"
              width={500}
              height={500}
            />
        </aside>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="">
        <div className="w-full">
          <h3 className="text-2xl font-semibold">Planit</h3>
          <div className="text-[#76787A]">( 2020.09 ~ 2020.12 )</div>
        </div>
        <br />
        <div className="flex mb-8 flex mb-8 gap-x-20">
          <div className="w-3/5">
            <div>계획 관리형 SNS 서비스입니다. 계획들의 행성이라는 의미에 Planit 서비스는 계획을 공유하며 동기부여 및 능률을 향상시키고, 더 많은 사람들의 계획을 돕기 위해 제작되었습니다.</div>
            <br />
            <div>해당 프로젝트에서 주로 프론트엔드 부분을 담담하고, 서버 보조 및 배포에 참여했습니다.</div>
            <div>서버는 MSA구조로 설계하였으며, AWS를 활용해 배포를 진행했습니다.</div>
            <div>담당한 기능: </div>
            <div>- Group 서비스 개발</div>
            <div>- S3 파일 업로드 서비스 개발</div>
            <div>- 프로젝트 배포 참여</div>
            <div>- 풀스택 개발</div>
            <br />
            <div>Git: <a href="https://github.com/2myungho/Planit-Project"> Git README </a></div>
            <div>Tech: React, Typescript, Java, SpringBoot, MariaDB, AWS, Docker</div>
          </div>
        <aside className="w-2/5 bg-gray-300">
          <Image
              src="/cat.jpg"
              alt="Profile"
              width={500}
              height={500}
            />
        </aside>
        </div>
      </article>
      <hr className={styles.hr} />

      <article className="">
        <div className="w-full">
          <h3 className="text-2xl font-semibold">COFFEE & LAVITA</h3>
          <div className="text-[#76787A]">( 1차: 2019.12 ~ 2020.01, 2차: 2020.09 ~ 2020.09, 3차: 2020.11 ~ 2020.11  )</div>
        </div>
        <br />
        <div className="flex mb-8 flex mb-8 gap-x-20">
          <div className="w-3/5">
            <div>이탈리아어로 Lavita는 &quot;풍요로운 삶&quot;을 뜻합니다. 직장인들을 타겟으로 정했으며, 직장인들이 질 좋은 커피로 삶이 조금 더 풍요로워 졌으면 하는 마음으로 제작했습니다.</div>
            <br />
            <div  className="mb-1">학습한 내용이 생길 때마다 직접 적용해보던 개인 프로젝트입니다.</div>
            <div className="mb-2">
              <div>1차 진행:</div>
              <div>-  Html, CSS, Javascript, JQuery 를 이용하여 홈페이지 폼 제작</div>
            </div>
            <div className="mb-2">
              <div>2차 진행: </div>
              <div>- 학습한 Spring Framework, Jsp, Oracle 등을 적용하여 서버 구현</div>
            </div>
            <div>
              <div>3차 진행: </div>
              <div>- AWS EC2서버를 활용해 프로젝트 배포하기</div>
              <div>- AWS RDS를 EC2 서버에서 연동</div>
              <div>- RDS에서 Oracla이 유료이기 때문에 MariaDB로 변경</div>
            </div>
            <br />
            <div>Git: <a href="https://github.com/2myungho/CoffeeLavita_Project"> Git README </a></div>
            <div>Tech: Html/Css, Javascript JQuery, Java, Spring Framework, Jsp, MariaDB, AWS</div>
          </div>
        <aside className="w-2/5 bg-gray-300">
          <Image
              src="/cat.jpg"
              alt="Profile"
              width={500}
              height={500}
            />
        </aside>
        </div>
      </article>
    </section>
  )
}
