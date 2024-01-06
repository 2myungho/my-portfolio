import ContentsHeader from "./section/ContentsHeader";
import AboutMe from "./section/AboutMe";
import Introduce from "./section/Introduce";
import Project from "./section/Project";
import WorkExperience from "./section/WorkExperience";
import Skill from "./section/Skill";
import OtherExperience from "./section/OtherExperience";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header 영역 */}
      <header className="bg-blue-500 h-[20px]">
        <h1 className="text-white"></h1>
      </header>

      {/* Main content 영역 */}
      <div className="flex-grow flex justify-center py-20">
        <main className="flex w-full px-4 md:w-[720px] lg:w-[900px] xl:w-[1040px] flex-col">
          {/* Main content */}
          {/* <ContentsHeader /> */}
          <AboutMe />
          <Introduce />
          <WorkExperience />
          <Project />
          <Skill />
          <OtherExperience />
        </main>
      </div>

      {/* Footer 영역 */}
      <footer className="bg-blue-500 h-[20px]"></footer>
    </div>
  );
}
