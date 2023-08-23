'use client'

import React, { useState, ReactElement } from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa';

import styles from '../Home.module.css';

interface TooltipProps {
  text: string[];
  children: ReactElement;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      {showTooltip && (
          <div
            style={{
              position: 'absolute',
              bottom: '-100%',
              left: 60,
              padding: '8px 12px',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '6px',
              zIndex: 1,
              fontSize: '0.8rem',
              width: '200px',
            }}
          >
            {text.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
             <div style={{
                position: 'absolute',
                top: '50%',
                left: -6,
                width: '0',
                height: '0',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderRight: '8px solid black',
                transform: 'translateY(-50%)'
                }}
              />
          </div>
      )}
      <div onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)} >
        {children}
      </div>
    </div>
  );
}

interface ArticleType {
  title: string;
  items: string[];
}

const frontEnd: ArticleType = {
  title: 'Front-end',
  items: ['React.js 3', 'Next.js 2', 'Vue.js 2', 'Javascript 3', 'Html / Css 3', 'React Native 2']
}
const backEnd: ArticleType = {
  title: 'Back-end',
  items: ['Node.js 2', 'Typescript 2', 'Express 2', 'Java 1', 'Spring Boot 1']
}
const etc: ArticleType = {
  title: 'ETC',
  items: ['Git', 'Jira', 'Confluence', 'AWS', 'Docker', 'Firebase', 'Zeplin', 'Figma']
}

interface ArticleDisplayProps {
  article: ArticleType
  isHr?: boolean
}

const ArticleDisplay = ({article, isHr= true}: ArticleDisplayProps) => {
  const items = article.items.map(item => (
    <div key={item} className="w-[25%]">{item}</div>
  ))
  return (
    <>
      <article className="lg:flex mb-8">
        <aside className="w-full lg:w-1/4 text-2xl font-semibold mb-4 lg:mb-0">
            {article.title}
        </aside>
        <div className="flex items-center w-full flex-wrap">
          {items}
        </div>
      </article>
      {isHr && <hr className={styles.hr} />}
    </>
  )
}

export default function Skill() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2 >Skills</h2>
        <Tooltip text={['1: 기초 수준', '2: 사이드 프로젝트 개발 수준', '3: Production 개발 가능 수준']}>
          <FaRegQuestionCircle
            size="1.5rem"
            color="#1664FF"
            style={{marginLeft: '1rem', cursor: 'pointer'}}
          />
        </Tooltip>
      </div>
      <ArticleDisplay article={frontEnd} />
      <ArticleDisplay article={backEnd} />
      <ArticleDisplay article={etc} isHr={false}  />
    </section>
  )
}
