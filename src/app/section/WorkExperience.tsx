import React from "react";

import Image from "next/image";
import styles from "../Home.module.css";

export default function WorkExperience() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2>Work Experience</h2>
      </div>
      <article className="lg:flex gap-x-20">
        <aside className="lg:w-1/4 w-2/5 lg:mb-0 mb-6 ">
          <Image
            src="/img/logo_brique.png"
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
            <div>- 데이터솔루션엔지니어팀 / 선임 연구원</div>
            <div>- 데이터 분석 기반의 예측 및 분류 솔루션을 제공하는 기업.</div>
          </div>
          <br />
          <div>
            <div>
              기본적으로는 웹프론트엔드를 담당했으며, Nodejs기반의 BFF서버를
              담당하기도 했습니다.
            </div>
            <div>
              주로 데이터 분석가가 학습시킨 모델의 시계열 데이터를 다양한
              Chart로 시각화 하는 서비스를 개발했으며, 새 프로젝트부터 기존
              프로젝트의 유지보수 및 기능 개발까지 담당하였습니다.
            </div>
          </div>
          <br />
          <br />
          <div className="mb-8">
            <div className="flex items-center gap-x-2 mb-1">
              <h3 className="text-lg font-semibold">RMS UI개발</h3>
              <div className="text-[#76787A]">(2023.1 ~ 2023.12)</div>
            </div>
            <div className="mb-2">
              장비 레시피 관리 시스템. (Recipe Management System)
            </div>
            <div className="mb-2">
              <div>- Dashboard 페이지를 설계 및 구현</div>
              <div>- 전자 결재 기능의 UI 개발 작업을 진행</div>
              <div>
                - 장비 및 레시피 등의 이력을 확인할 수 있는 History 페이지 개발
              </div>
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
            <div className="mb-2">
              자동 공정 제어 서비스. (Advanced Process Control)
            </div>
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
            <div className="mb-2">
              실시간 이상감지 서비스. (Fault Detection & Classification)
            </div>
            <div className="mb-2">
              <div>
                - 기존 서비스의 차트 데이터를 위젯 기반 컴포넌트로 수정하는 작업
                진행
              </div>
              <div>
                - 레거시 코드와 에러 코드를 분석하여 효과적으로 수정 및 최적화
              </div>
            </div>

            <div>Tech: Vuejs</div>
          </div>
          <hr className={styles.hr} />

          <div>
            <div className="flex items-center gap-x-2 mb-2">
              <h3 className="text-lg font-semibold">Brique 앙상블러 개발</h3>
              <div className="text-[#76787A]">(2021.02 ~ 2022.06)</div>
            </div>
            <div className="mb-2">
              AI 데이터 분석 기반 스마트팩토리 구축 서비스.
            </div>
            <div className="mb-2">
              <div>
                - 프로젝트 초기부터 MVP 단계에 참여하여 기본 설정과 구조를 설계
              </div>
              <div>
                - 주로 반도체 공정 관리에서 발생하는 이슈 데이터를 위젯 형태의
                차트로 시각화하는 작업을 진행
              </div>
              <div>
                - API 서버를 구현하여 필요한 Row 데이터와 예측 데이터를
                처리하고, 해당 데이터를 UI와 통신하는 작업을 진행
              </div>
              <div>
                - 팀 내에서 정한 코드 컨벤션을 지키기 위해서 동료 개발자와
                코드리뷰를 진행하며 일관된 스타일을 유지하기 위한 노력을
                했습니다.
              </div>
              <div>
                - 해당 프로젝트는 JIRA를 활용해 애자일 스크럼 방식으로
                협업했습니다.
              </div>
            </div>

            <div>Tech: React, Typescript, Nodejs, Express, mongoDB</div>
          </div>
        </div>
      </article>
    </section>
  );
}
