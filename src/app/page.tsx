import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header 영역 */}
      <header className="bg-blue-500">
        <h1 className="text-white">제목</h1>
        {/* Nav */}
      </header>

      {/* Main content 영역 */}
      <div className="flex-grow flex justify-center">
        <main className="flex w-full px-4 md:w-[720px] lg:w-[1000px] xl:w-[1140px] flex-col">

          {/* Main content */}
          <section className={styles.section}>
            <div className="text-2x">안녕하세요.</div>
            <div>프론트엔드 엔지니어 이명호입니다.</div>
            <div>3년차 프론트엔드 엔지니어로 근무하고 있으며, 서비스 개발에 큰 관심을 가지고 있습니다.</div>
            <div>지속적인 자기개발을 추구하는 성격으로, 최근에는 앱 개발에 관심이 생겨,</div>
            <div>제 취미인 운동을 주제로 한 앱을 React Native로 개발하고 지속적으로 업데이트하고 있습니다.</div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.section_title}>About Me</h2>
            <article className="flex">
              <aside className="w-1/4 bg-gray-300">
                <Image
                  src="/cat.jpg"
                  alt="Profile"
                  width={500}
                  height={500}
                />
              </aside>
              <div className="flex flex-col mx-4">
                <div className="w-full px-4">
                  이름 아이콘 <a href="mailto:sky85210@gmail.com">이명호</a>
                </div>
                <div className="w-full px-4">
                  메일 아이콘 <a href="mailto:sky85210@gmail.com">sky85210@gmail.com</a>
                </div>
                <div className="w-full px-4">
                  번호 아이콘
                </div>
                <div className="w-full px-4">
                  블로그 아이콘 <a href="https://myung-ho.tistory.com/">https://myung-ho.tistory.com/</a>
                </div>
                <div className="w-full px-4">
                  깃 아이콘 <a href="https://github.com/2myungho">https://github.com/2myungho</a>
                </div>
              </div>
            </article>
          </section>

          <section className={styles.section}>
            <h2 className={styles.section_title}>Skill  ?</h2>
            <article className="flex mb-8">
              <aside className="w-1/4 text-2xl">
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
              <aside className="w-1/4 text-2xl">
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
            <article className="flex mb-8">
              <aside className="w-1/4 text-2xl">
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
            <h2 className={styles.section_title}>Project</h2>
            <article className="flex">
              <aside className="w-1/4 bg-gray-300">
                사이드바
              </aside>
              <div>ㅎㅇㅎㅇ</div>
            </article>
          </section>

          <section className={styles.section}>
            <h2 className={styles.section_title}>Work Experience</h2>
            <article className="flex">
              <aside className="w-1/4 bg-gray-300">
                사이드바
              </aside>
              <div>ㅎㅇㅎㅇ</div>
            </article>
          </section>

          <section className={styles.section}>
            <h2 className={styles.section_title}>Other Experience</h2>
            <article className="flex">
              <aside className="w-1/4 bg-gray-300">
                사이드바
              </aside>
              <div>ㅎㅇㅎㅇ</div>
            </article>
          </section>
        </main>
      </div>

      {/* Footer 영역 */}
      <footer className="bg-blue-500">
        푸터
      </footer>
    </div>
  );
}