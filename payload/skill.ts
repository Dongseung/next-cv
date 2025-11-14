import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'HTML/CSS',
    },
    {
      title: 'javascript',
    },
    {
      title: 'TypeScript',
    },
  ],
};

const FameworksLibraries: ISkill.Skill = {
  category: 'Fameworks&Libraries',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'Node.js',
    },
    {
      title: 'Next.js',
    },
  ],
};

const ToolsIdes: ISkill.Skill = {
  category: 'Tools&IDEs',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
    {
      title: 'GitLab',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

// const automation: ISkill.Skill = {
//   category: 'Automation',
//   items: [
//     {
//       title: 'Ansible',
//       level: 3,
//     },
//     {
//       title: 'Puppet',
//       level: 3,
//     },
//     {
//       title: 'Chef',
//       level: 2,
//     },
//     {
//       title: 'Jenkins',
//       level: 2,
//     },
//     {
//       title: 'CI/CD Pipelines',
//       level: 1,
//     },
//     {
//       title: 'Infrastructure as Code',
//       level: 1,
//     },
//   ],
// };

// const networkSecurity: ISkill.Skill = {
//   category: 'Network Security',
//   items: [
//     {
//       title: 'iptables',
//       level: 3,
//     },
//     {
//       title: 'OpenSSH',
//       level: 3,
//     },
//     {
//       title: 'OpenSSL',
//       level: 2,
//     },
//     {
//       title: 'NACLs',
//       level: 2,
//     },
//     {
//       title: 'VPN Technologies',
//       level: 2,
//     },
//     {
//       title: 'Intrusion Detection',
//       level: 1,
//     },
//   ],
// };

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Football',
    },
    {
      title: 'Running',
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Base Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, FameworksLibraries, ToolsIdes, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
