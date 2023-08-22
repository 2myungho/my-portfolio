import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header 영역 */}
      <header className="bg-blue-500 h-[20px]">
        <h1 className="text-white"></h1>
      </header>

      {/* Main content 영역 */}
      <div className="flex-grow flex justify-center py-20">
        <main className="flex w-full px-4 md:w-[720px] lg:w-[1000px] xl:w-[1140px] flex-col">

          {/* Main content */}
          <section className={styles.section}>
            <div className="text-3xl font-semibold">안녕하세요.</div>
            <div className="text-3xl font-semibold">프론트엔드 엔지니어 이명호입니다!</div>
            <br />
            <div className="text-2xl">3년차 프론트엔드 엔지니어로 근무하고 있으며, 서비스 개발에 큰 관심을 가지고 있습니다.</div>
            <div className="text-2xl">항상 자기개발을 멈추지 않으려고 노력하고 있으며, 최근에는 앱 개발에 관심이 생겨,</div>
            <div className="text-2xl">저의 취미인 운동을 주제로 한 앱을 React Native로 개발하고 지속적으로 업데이트하고 있습니다.</div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <div className={styles.bulletSquare} />
              <h2 >About Me</h2>
            </div>
            <article className="flex">
              <aside className="w-1/4 bg-gray-300">
                <Image
                  src="/cat.jpg"
                  alt="Profile"
                  width={500}
                  height={500}
                />
              </aside>
              <div className="flex flex-col mx-4 gap-y-2">
                <div className="w-full px-4">
                  Name: 이명호
                </div>
                <div className="w-full px-4">
                  Mail: <a href="mailto:sky85210@gmail.com">sky85210@gmail.com</a>
                </div>
                <div className="w-full px-4">
                  Dev Blog: <a href="https://myung-ho.tistory.com/">https://myung-ho.tistory.com/</a>
                </div>
                <div className="w-full px-4">
                  Github: <a href="https://github.com/2myungho">https://github.com/2myungho</a>
                </div>
              </div>
            </article>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <div className={styles.bulletSquare} />
              <h2 >Skills</h2>
            </div>
            <article className="flex mb-8">
              <aside className="w-1/4 text-2xl font-semibold">
                Front-end
              </aside>
              <div className="flex items-center w-full flex-wrap">
                <div className="w-[25%]">React.js 3</div>
                <div className="w-[25%]">Next.js 2</div>
                <div className="w-[25%]">Vue.js 2</div>
                <div className="w-[25%]">Javascript 3</div>
                <div className="w-[25%]">Html / Css 3</div>
                <div className="w-[25%]">React Native 2</div>
              </div>
            </article>
            <hr className={styles.hr} />
            <article className="flex mb-8">
              <aside className="w-1/4 text-2xl font-semibold">
                Back-end
              </aside>
              <div className="flex items-center w-full flex-wrap">
                <div className="w-[25%]">Node.js 2</div>
                <div className="w-[25%]">Typescript 2</div>
                <div className="w-[25%]">Express 2</div>
                <div className="w-[25%]">Java 1</div>
                <div className="w-[25%]">Spring Boot 1</div>
              </div>
            </article>
            <hr className={styles.hr} />
            <article className="flex">
              <aside className="w-1/4 text-2xl font-semibold">
                ETC
              </aside>
              <div className="flex items-center w-full flex-wrap">
                <div className="w-[25%]">Git</div>
                <div className="w-[25%]">Jira</div>
                <div className="w-[25%]">Confluence</div>
                <div className="w-[25%]">AWS</div>
                <div className="w-[25%]">Docker</div>
                <div className="w-[25%]">Firebase</div>
                <div className="w-[25%]">Zeplin</div>
                <div className="w-[25%]">Figma</div>
              </div>
            </article>
          </section>

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
                  <div>"매번 친구랑 못하는 운동 헛둘과 함께하자!"</div>
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
                  <div>이탈리아어로 Lavita는 '풍요로운 삶'을 뜻합니다. 직장인들을 타겟으로 정했으며, 직장인들이 질 좋은 커피로 삶이 조금 더 풍요로워 졌으면 하는 마음으로 제작했습니다.</div>
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

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <div className={styles.bulletSquare} />
              <h2 >Work Experience</h2>
            </div>
            <article className="flex gap-x-20">
              <aside className="w-1/4">
                <Image
                  src="/logo_brique.png"
                  alt="BRIQUE"
                  width={500}
                  height={500}
                />
              </aside>
              <div>
                <div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <h3 className="text-2xl font-semibold">(주) BRIQUE</h3>
                    <div className="text-[#76787A]">(2021.2 ~ 현재)</div>
                  </div>
                  <div>- 데이터솔루션엔지니어팀 / 연구원</div>
                  <div>- 데이터 분석 기반의 예측 및 분류 솔루션을 제공하는 기업.</div>
                </div>
                <br />
                <div>
                  <div>기본적으로는 웹프론트엔드를 담당했으며, Nodejs기반의 API서버를 담당하기도 했습니다.</div>
                  <div>주로 데이터 분석가가 학습시킨 모델의 데이터를 다양한 Chart로 시각화 하는 페이지를 개발했으며, 새 프로젝트부터 기존 프로젝트의 유지보수 및 기능 개발까지 담당하였습니다.</div>
                </div>
                <br />
                <br />
                <div className="mb-8">
                  <div className="flex items-center gap-x-2 mb-1">
                    <h3 className="text-lg font-semibold">RMS UI개발</h3>
                    <div className="text-[#76787A]">(2023.1 ~ 현재)</div>
                  </div>
                  <div className="mb-2">장비 레시피 관리 시스템.</div>
                  <div className="mb-2">
                    <div>- Dashboard 페이지를 설계 및 구현</div>
                    <div>- 전자 결재 기능의 UI 개발 작업을 진행</div>
                    <div>- 장비 및 레시피 등의 이력을 확인할 수 있는 History 페이지 개발</div>
                    <div>- 레거시 코드와 잘못된 동작의 코드 수정</div>
                  </div>

                  <div>Tech: Vuejs</div>
                </div>
                <hr className={styles.hr} />

                <div className="mb-8">
                  <div className="flex items-center gap-x-2 mb-2">
                    <h3 className="text-lg font-semibold">APC UI 개발</h3>
                    <div className="text-[#76787A]">(2022.10 ~ 2022.12)</div>
                  </div>
                  <div className="mb-2">자동 공정 제어 서비스.</div>
                  <div className="mb-2">
                    <div>- MVP에 참여하여 프로젝트의 초기 설정 및 구조 설계</div>
                    <div>- 반도체 공정 각 진행 단계의 페이지 구현</div>
                  </div>

                  <div>Tech: React, Typescript</div>
                </div>
                <hr className={styles.hr} />

                <div className="mb-8">
                  <div className="flex items-center gap-x-2 mb-2">
                    <h3 className="text-lg font-semibold">FDC UI 개발</h3>
                    <div className="text-[#76787A]">(2022.07 ~ 2022.09)</div>
                  </div>
                  <div className="mb-2">실시간 이상감지 서비스.</div>
                  <div className="mb-2">
                    <div>- 기존 서비스의 차트 데이터를 위젯 기반 컴포넌트로 수정하는 작업 진행</div>
                    <div>- 레거시 코드와 에러 코드를 분석하여 효과적으로 수정 및 최적화</div>
                  </div>

                  <div>Tech: Vuejs</div>
                </div>
                <hr className={styles.hr} />

                <div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <h3 className="text-lg font-semibold">Brique 앙상블러 개발</h3>
                    <div className="text-[#76787A]">(2021.02 ~ 2022.06)</div>
                  </div>
                  <div className="mb-2">AI 데이터 분석 기반 스마트팩토리 구축 서비스.</div>
                  <div className="mb-2">
                    <div>- 프로젝트 초기부터 MVP 단계에 참여하여 기본 설정과 구조를 설계</div>
                    <div>- 주로 반도체 공정 관리에서 발생하는 이슈 데이터를 위젯 형태의 차트로 시각화하는 작업을 진행</div>
                    <div>- API 서버를 구현하여 필요한 Row 데이터와 예측 데이터를 처리하고, 해당 데이터를 UI로 전달하는 작업을 진행</div>
                    <div>- 팀 내에서 정한 코드 컨벤션을 지키기 위해서 동료 개발자와 코드리뷰를 진행하며 일관된 스타일을 유지하기 위한 노력을 했습니다.</div>
                    <div>- 해당 프로젝트는 JIRA를 활용해 애자일 스크럼 방식으로 협업했습니다.</div>
                  </div>

                  <div>Tech: React, Typescript, Nodejs, Express, mongoDB</div>
                </div>
              </div>
            </article>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <div className={styles.bulletSquare} />
              <h2 >Other Experience</h2>
            </div>
            <article className="mb-4">
              <h3 className="text-xl font-semibold">티스토리 개발 블로그</h3>
              <div className="text-[#76787A]">2023.08 기준 일 평균 방문자 약150명</div>
              <div className="text-[#76787A]">Link: <a href="https://myung-ho.tistory.com/">https://myung-ho.tistory.com/</a></div>
            </article>
            <article className="mb-4">
              <h3 className="text-xl font-semibold">클라우드를 활용한 MSA 전문가 과정</h3>
              <div className="text-[#76787A]">(2020.7 ~ 2020.12)</div>
            </article>
            <article className="">
              <h3 className="text-xl font-semibold">스마트 디지털 UI/UX 앱 & 웹 디자인 과정</h3>
              <div className="text-[#76787A]">(2019.11 ~ 2020.03)</div>
            </article>
          </section>
        </main>
      </div>

      {/* Footer 영역 */}
      <footer className="bg-blue-500 h-[20px]">
      </footer>
    </div>
  );
}