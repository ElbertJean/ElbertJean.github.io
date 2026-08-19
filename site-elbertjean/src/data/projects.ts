import { FeaturedProject } from '../types';

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: "evinil",
    sectionId: "evinil",
    levelTitle: "BOSS LEVEL 1: EVINIL",
    titleColor: "var(--snes-red)",
    showcaseClass: "evinil-showcase",
    layoutClass: "evinil-layout",
    graphicClass: "evinil-graphic",
    cartridgeClass: "evinil-cartridge",
    labelClass: "evinil-label",
    labelTitle: "EVINIL",
    labelSubtitle: "SUPER 16-BIT PLATFORM",
    domain: "evinil.com.br",
    paragraphs: [
      "Idealizei, projetei e desenvolvi por completo uma plataforma SaaS voltada para lojistas de discos de vinil, criada para centralizar a gestão de estoque, vendas e indicadores do negócio, além de oferecer uma vitrine digital para exposição do catálogo aos clientes.",
      "Fui responsável por todo o ciclo do produto, desde a concepção da ideia e definição da estrutura técnica até a implementação e publicação da plataforma. Implementei a arquitetura de banco de dados e a integração backend, construindo uma base sólida e escalável para suportar as operações do sistema.",
      "Desenvolvi dashboards financeiros, área administrativa, autenticação de usuários, sistema de planos e checkout com recorrência, unindo visão técnica de banco de dados e visão de negócio em uma solução real."
    ],
    tags: ["SAAS", "REACT", "TYPESCRIPT", "FULLSTACK", "POSTGRESQL", "STRIPE", "WEBHOOK", "CHECKOUT", "VERCEL", "TAILWIND CSS"],
    tagClass: "evinil-tag",
    buttons: [
      { label: "VISITAR PLATAFORMA 🔗", url: "https://evinil.com.br", btnClass: "btn-red" },
      { label: "INSTAGRAM 📸", url: "https://www.instagram.com/evinil__/", btnClass: "btn-yellow" }
    ]
  },
  {
    id: "rotinabusiness",
    sectionId: "rotinabusiness",
    levelTitle: "BOSS LEVEL 2: ROTINABUSINESS",
    titleColor: "#00d2d3",
    showcaseClass: "rotina-showcase",
    layoutClass: "rotina-layout",
    graphicClass: "rotina-graphic",
    cartridgeClass: "rotina-cartridge",
    labelClass: "rotina-label",
    labelTitle: "ROTINABUSINESS",
    labelSubtitle: "OPERATIONAL SAAS",
    domain: "rotinabusiness.com.br",
    paragraphs: [
      "Idealizei, projetei e desenvolvi por completo o RotinaBusiness, uma plataforma SaaS de alta performance operacional criada para eliminar o caos de planilhas e grupos de mensagens, centralizando a gestão de rotinas diárias, checklists de abertura/fechamento e auditorias em tempo real.",
      "Como único idealizador e desenvolvedor fullstack, construí o produto do zero à publicação: desenvolvi uma interface focada na operação (\"chão de fábrica\"), sistema de Rollover Automático de tarefas em atraso, central de compliance integrativa e controle de permissões por setores e unidades.",
      "Estruturei todo o modelo comercial e técnico com planos escaláveis por unidade (Free, Starter, Pro, Business), checkout com pagamentos recorrentes (Stripe), banco relacional com RLS no Supabase (PostgreSQL) e deploy contínuo na Vercel."
    ],
    tags: ["SAAS", "REACT", "TYPESCRIPT", "FULLSTACK", "SUPABASE", "POSTGRESQL", "WEBHOOK", "VERCEL", "TAILWIND CSS"],
    tagClass: "rotina-tag",
    buttons: [
      { label: "VISITAR PLATAFORMA 🔗", url: "https://www.rotinabusiness.com.br", btnClass: "btn-green" }
    ]
  }
];
