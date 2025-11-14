import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '고려사이버대학교',
      subTitle: '2026-02 졸업예정',
      startedAt: '2018-03',
      endedAt: '재학중',
    },
    {
      title: 'Seattle Central College',
      subTitle: '휴학',
      startedAt: '2012-03',
      endedAt: '2013-11',
    },
    {
      title: 'Licensed Victullers school',
      subTitle: '영국 고등학교(A-Level)',
      startedAt: '2009-09',
      endedAt: '2011-08',
    },
  ],
};

export default education;
