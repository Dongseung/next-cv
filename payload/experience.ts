import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'BSTONES',
      positions: [
        {
          title: 'Frontend Developer',
          startedAt: '2020-09',
          endedAt: '2025-06',
          descriptions: [
            '대기업 및 브랜드 캠페인, 커머스 웹사이트 등 다양한 프로젝트의 프론트엔드 개발 담당',
            'HTML, SCSS, JavaScript 기반 퍼블리싱 및 인터랙션 구현',
            'React, Next.js 환경에서 컴포넌트 단위 UI 설계 및 구축',
            '다양한 클라이언트 요구사항에 맞춘 반응형, 접근성 중심의 구조 설계',
            '디자이너·백엔드 개발자와의 협업을 통한 일정 관리 및 품질 유지',
          ],
          skillKeywords: [
            'HTML',
            'SCSS',
            'JavaScript',
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'AEM',
            'Git',
            'GitLab',
            'SVN',
            'Jira',
          ],
        },
      ],
    },
  ],
};

export default experience;
