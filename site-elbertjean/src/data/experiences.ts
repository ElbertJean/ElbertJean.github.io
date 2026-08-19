import { ExperienceItem } from '../types';

export const experiencesData: ExperienceItem[] = [
  {
    id: "spotsat",
    title: "Desenvolvedor Front-end Pleno",
    company: "SpotSat",
    date: "Maio 2023 - Atualmente",
    status: "EM ANDAMENTO",
    statusClass: "ongoing",
    isLight: false,
    tasks: [
      "Atuação como principal responsável pelo ecossistema front-end (React/TypeScript), garantindo a sustentação de 4 plataformas web em produção e liderando a arquitetura e desenvolvimento de um novo sistema do zero.",
      "Implementação de soluções avançadas de geoprocessamento em tempo real utilizando Leaflet e GeoJSON, otimizando a renderização dinâmica de milhares de coordenadas simultâneas com alta performance.",
      "Desenvolvimento de painéis analíticos complexos e 2 sistemas automatizados para emissão de relatórios técnicos, processando grandes volumes de dados para validar a conformidade de propriedades e agilizar a tomada de decisão dos clientes.",
      "Idealização e criação de protótipos de interface (UX/UI) no Figma antes do código, além da definição proativa da arquitetura de componentes e integrações com APIs REST, assegurando escalabilidade e a melhor experiência para o usuário."
    ]
  },
  {
    id: "ej-informatica",
    title: "Técnico de TI (Autônomo)",
    company: "EJ Informática",
    date: "Nov 2021 - Atualmente",
    status: "COMPLETA",
    statusClass: "",
    isLight: true,
    tasks: [
      "Atuação autônoma em manutenção preventiva e corretiva de hardware e sistemas operacionais, desenvolvendo forte capacidade de diagnóstico e resolução de problemas.",
      "Gestão direta de clientes, traduzindo problemas técnicos complexos em soluções práticas e prestando consultoria em TI."
    ]
  },
  {
    id: "normalizei",
    title: "Desenvolvedor React Native / Front-end",
    company: "Normalizei",
    date: "Out 2021 - Jan 2022",
    status: "COMPLETA",
    statusClass: "",
    isLight: false,
    tasks: [
      "Atuação no desenvolvimento de interfaces mobile com React Native, criando telas responsivas e focadas em boa experiência do usuário.",
      "Participação na manutenção de aplicações web, integração com APIs REST e evolução de funcionalidades existentes, contribuindo para estabilidade e melhorias contínuas da plataforma."
    ]
  }
];
