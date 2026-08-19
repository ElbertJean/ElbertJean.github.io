import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "🔮 FRONT-END & VISUALIZAÇÃO",
    color: "var(--snes-red)",
    skills: [
      "React", "TypeScript", "JavaScript", "React Native", "Tailwind CSS",
      "Bootstrap", "Material UI", "Leaflet", "Recharts", "Vue.js",
      "GeoJSON", "Hooks & Custom Hooks", "Gerenciamento de Estado",
      "Arquitetura Front-end", "SPA"
    ]
  },
  {
    id: "testing",
    title: "🎯 TESTES & QUALIDADE",
    color: "var(--snes-green)",
    skills: ["Jest", "Vitest", "React Testing Library", "Testes Unitários"]
  },
  {
    id: "backend",
    title: "🛡️ BACK-END & APIS",
    color: "var(--snes-blue)",
    skills: [
      "Node.js", "NestJS", "Express", "APIs REST", "Webhooks",
      "JWT & Auth", "Swagger / OpenAPI", "Java", "Spring Boot",
      "Python", "Django", "DTOs"
    ]
  },
  {
    id: "database",
    title: "🗄️ BANCO DE DADOS & SUPABASE",
    color: "#00d2d3",
    skills: [
      "PostgreSQL", "MySQL", "SQL", "Supabase", "RLS",
      "Migrations", "Edge Functions", "Otimização de Consultas", "Modelagem de Dados"
    ]
  },
  {
    id: "tools",
    title: "🧪 FERRAMENTAS & INFRAESTRUTURA",
    color: "#a29bfe",
    skills: [
      "Git & GitHub", "Docker", "Postman", "DBeaver", "AWS",
      "Vercel", "Stripe", "Figma", "Jira", "PostHog"
    ]
  },
  {
    id: "advanced",
    title: "⚡ ARQUITETURA AVANÇADA (EM APROFUNDAMENTO)",
    color: "#ff9f43",
    skills: [
      "Kafka", "RabbitMQ", "Kubernetes", "AWS", "Mensageria",
      "Arquitetura Orientada a Eventos", "Microsserviços"
    ]
  },
  {
    id: "ai",
    title: "🤖 IA APLICADA AO DESENVOLVIMENTO",
    color: "var(--snes-yellow)",
    skills: ["GitHub Copilot", "Claude", "Gemini", "Agentes de IA", "SKILLS"]
  }
];
