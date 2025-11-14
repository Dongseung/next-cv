import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '시간 맞춤 배송',
      startedAt: '2023-09',
      endedAt: '2023-12',
      where: 'HTML, SCSS, javascript',
      descriptions: [
        {
          content: '발주처 : PTK (상주)',
          descriptions: [
            { content: '반응형 페이지 월간운영건' },
            { content: '삼성 가전제품 시간 맞춤 배송 신청 및 안내페이지 신규제작 및 운영' },
          ],
        },
      ],
    },
    {
      title: '갤럭시북3 (런칭)',
      startedAt: '2023-09',
      endedAt: '2023-12',
      where: 'HTML, SCSS, javascript',
      descriptions: [
        {
          content: '발주처 : PTK (상주)',
          descriptions: [{ content: '반응형 페이지 월간운영건' }],
        },
      ],
    },
    {
      title: '삼성 갤럭시 언팩',
      startedAt: '2023-07',
      endedAt: '2023-09',
      where: 'HTML, SCSS, javascript',
      descriptions: [
        {
          content: '발주처 : PTK (상주)',
          descriptions: [
            { content: '반응형 페이지 제작 및 운영' },
            { content: '삼성 갤럭시 신제품 페이지 - 갤럭시폴드5' },
            { content: '바잉툴 기능 구현' },
          ],
        },
      ],
    },
    {
      title: '(주)비스톤스 홈페이지 리뉴얼 구축',
      startedAt: '2023-05',
      endedAt: '2023-07',
      where: 'HTML, SCSS, React.js',
      descriptions: [
        {
          content: '발주처 : (주)비스톤스',
          descriptions: [{ content: '자사 홈페이지 리액트 기반 리뉴얼 제작' }],
        },
      ],
    },
    {
      title: '삼성카드 iD럭키드로우',
      startedAt: '2023-02',
      endedAt: '2023-09',
      where: 'HTML, SCSS, javascript, FTP',
      descriptions: [
        {
          content: '발주처 : PTK (비상주)',
          descriptions: [
            { content: '신규 삼성iD카드 소지 고객들 한정 이벤트 추첨 및 응모 페이지 구축' },
            { content: '월간 단위 추첨자 공개 및 카톡 공유기능 구현' },
          ],
        },
      ],
    },
    {
      title: '한샘몰 리뉴얼 구축',
      startedAt: '2022-11',
      endedAt: '2023-02',
      where: 'HTML, SCSS, javascript, SVN',
      descriptions: [
        {
          content: '발주처 : 한샘 (상주)',
          descriptions: [
            { content: 'PC, 모바일 적응형 페이지 리뉴얼' },
            { content: '한샘 제품 쇼핑몰 리뉴얼 제작' },
          ],
        },
      ],
    },
    {
      title: '삼성 갤럭시 언팩',
      startedAt: '2022-08',
      endedAt: '2022-09',
      where: 'HTML, SCSS, javascript, SVN',
      descriptions: [
        {
          content: '발주처 : PTK (상주)',
          descriptions: [
            { content: '반응형 페이지 제작 및 운영' },
            { content: '삼성 갤럭시 신제품 페이지 - 워치 및 워치 체험단 이벤트 페이지 구축' },
            { content: '타임어택 기능 구현' },
          ],
        },
      ],
    },
    {
      title: 'Cj bbp 구축',
      startedAt: '2022-01',
      endedAt: '2022-08',
      where: 'HTML, SCSS, javascript, bootstrap, slack, SVN',
      descriptions: [
        {
          content: '발주처 : CJ제일제당 (상주)',
          descriptions: [
            { content: '반응형' },
            { content: '광고대행 서비스 신규사업 페이지 제작' },
            { content: '어드민페이지 제작' },
          ],
        },
      ],
    },
    {
      title: 'DU 모바일 쇼핑몰 구축',
      startedAt: '2021-09',
      endedAt: '2022-01',
      where: 'HTML, SCSS, javascript, swiper, slack, SVN',
      descriptions: [
        {
          content: '발주처 : SIV (비상주)',
          descriptions: [{ content: '모바일 쇼핑몰 페이지 구축' }],
        },
      ],
    },
    {
      title: '타임스퀘어&EXIT홍대&페퍼저축은행 운영',
      startedAt: '2021-02',
      endedAt: '2022-03',
      where: 'HTML, CSS, jQuery, swiper, Jandi, SVN, FTP',
      descriptions: [
        {
          content: '발주처 : 유플리트 (비상주)',
          descriptions: [
            { content: '쇼핑몰 홈페이지 운영(적응형 페이지)' },
            { content: '은행 약관 파일 업로드 및 업데이트' },
            { content: '기획&디자인팀 요청 기반 운영성 화면' },
          ],
        },
      ],
    },
    {
      title: '대한항공 이벤트페이지 구축',
      startedAt: '2021-02',
      endedAt: '2022-03',
      where: 'HTML, CSS, jQuery',
      descriptions: [
        {
          content: '대한항공 회원정보 업데이트 이벤트 페이지 반응형 구축',
        },
      ],
    },
    {
      title: '비맥스 홈페이지 운영',
      startedAt: '2021-01',
      endedAt: '2022-03',
      where: 'PHP, HTML, CSS, jQuery',
      descriptions: [
        {
          content: 'PHP 기반 페이지 유지보수 및 UI 수정',
        },
        {
          content: '기획팀 요청 기반 운영성 화면 및 판매기능 수정',
        },
      ],
    },
    {
      title: '삼성증권 투자스쿨 구축',
      startedAt: '2021-03',
      endedAt: '2021-05',
      where: 'HTML, CSS, jQuery, zeplin, swiper',
      descriptions: [
        {
          content: '삼성증권에서 투자자들을 위한 교육페이지 모바일뷰 제작',
        },
      ],
    },
    {
      title: 'SM celebrand 모바일 구축',
      startedAt: '2021-02',
      endedAt: '2021-05',
      where: 'HTML, CSS, jQuery, zeplin',
      descriptions: [
        {
          content: 'SM엔터테인먼트 소속 연예인의 굿즈 홍보 페이지 구축',
        },
        {
          content: '모바일 페이지 구축',
        },
      ],
    },
    {
      title: '삼성 갤럭시 S21 이벤트 페이지 구축',
      startedAt: '2021-02',
      // endedAt: '2021-03',
      where: 'HTML, CSS, javascript, photoshop',
      descriptions: [
        {
          content: '유재석 & 펭수가 함께한 갤럭시 S21 구매자 이벤트 응모 반응형 페이지 구축',
        },
      ],
    },
    {
      title: '포스트 시리얼바 이벤트 페이지 구축',
      startedAt: '2021-01',
      endedAt: '2021-03',
      where: 'HTML, CSS, javascript, photoshop',
      descriptions: [
        {
          content: '포스트 시리얼바 신제품 출시기념 이벤트 페이지 반응형 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '2개의 광고 유튜브 영상 랜덤재생 기능 구현' },
            { content: '시청한 영상에 따라 다른 쿠폰증정 기능 구현' },
          ],
        },
      ],
    },
    {
      title: '삼성 글로벌 페이지 제작',
      startedAt: '2020-09',
      endedAt: '2020-12',
      where: 'AEM, HTML, CSS',
      descriptions: [
        {
          content: 'AEM 기반으로 세계각국 삼성전자 글로벌 페이지 제작',
        },
      ],
    },
  ],
};

export default project;
