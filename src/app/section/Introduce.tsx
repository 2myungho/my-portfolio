import React from "react";

import styles from "../Home.module.css";

export default function Introduce() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2>Introduce</h2>
      </div>
      <div className="bg-[#f6f6f6] rounded-md p-4 md:p-8 lg:py-12 lg:px-16 ">
        <div>안녕하세요.</div>
        <div>3년차 프론트엔드 엔지니어 이명호입니다.</div>
        <br />
        <div>
          제품 개발팀의 프론트엔드 엔지니어로 근무하며, 필요에 따라 BFF(Backend
          for Frontend) 서버 업무도 담당했습니다. 다양한 사내 제품 개발과
          유지보수를 맡아, 새 프로젝트의 구축부터 기존 프로젝트의 기능 개발까지
          다양한 업무를 수행했습니다. 주 업무 중 하나는 데이터 분석가들이
          학습시킨 모델로부터 얻은 시계열 데이터를 다양한 차트 형태로 시각화하는
          서비스의 개발이었습니다. 이 과정에서 사용자 경험 향상을 위해 성능
          최적화와 코드 효율성에 중점을 두고 작업했습니다.
        </div>
        <br />
        <div>
          요즘 제 취미인 운동을 주제로 한 &apos;헛둘&apos; 이라는 모바일
          어플리케이션을 React Native로 개발하고 사용자 피드백을 받아 지속해서
          관리하고 있습니다. 사용자들과 소통하는 것에 굉장한 보람을 느끼며,
          어떻게 하면 사용자들이 즐겁게 사용할 수 있을지, 사용에 불편한 점은
          없는지 등에 대한 문제 해결을 지속적으로 고민하고 있습니다. 이러한
          인사이트를 앱의 기획과 개발 과정에 반영하고 사용자 경험에 더욱 신경
          쓰며 개발하고 있습니다.
        </div>
        <br />
        <div>
          다양한 배경을 가진 개발자들과 함께 기술적 경험을 공유하고, 서로 성장을
          돕는 환경에서 근무하기를 기대합니다.
        </div>
      </div>
    </section>
  );
}
