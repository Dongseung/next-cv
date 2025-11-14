import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 서비스의 프론트엔드 개발을 중심으로, 사용자 경험과 효율적인 인터페이스 구현에 집중해 왔습니다. React를 주력으로 사용하며, Next.js, JavaScript(ES6+), CSS-in-JS(Styled-components, Emotion) 등을 활용해 다양한 프로젝트를 진행했습니다. UI 구현뿐 아니라 성능 최적화, 공통 컴포넌트 구조 설계, 반응형 및 접근성 개선 등 실제 서비스 품질 향상을 위한 부분에도 꾸준히 신경 써 왔습니다',
    'TypeScript를 점진적으로 도입하며 코드 안정성과 협업 효율성을 높이는 경험을 쌓는 중입니다. 아직 완벽히 숙련된 수준은 아니지만, 제네릭, 유틸리티 타입, 인터페이스 등 실무에서 필요한 부분을 중심으로 꾸준히 학습하고 있습니다.',
    '디자이너와 백엔드 개발자와의 원활한 협업을 중요하게 생각하며, 사용자와 팀 모두가 만족할 수 있는 결과물을 만드는 과정을 즐깁니다. 또한 개인 프로젝트와 기술 블로그를 통해 배운 내용을 기록하고 공유하며, 새로운 기술을 실험하는 것을 좋아합니다.',
    '프론트엔드 개발자로서 단순히 화면을 만드는 것을 넘어, 사용자 경험과 개발 효율의 균형을 고민하는 개발자가 되고자 합니다. 빠르게 변화하는 웹 생태계 속에서도 꾸준히 배우고 개선하며, 더 나은 서비스를 만들어 가는 과정에서 성장하고 있습니다.',
  ],
  sign: 'D.S.Shin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
