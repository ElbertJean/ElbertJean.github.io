import { AcademicProject } from '../types';

export const academicProjectsData: AcademicProject[] = [
  {
    id: "api-1",
    semester: "1º SEMESTRE",
    period: "2023-2",
    partner: "Fatec São José dos Campos",
    partnerUrl: "https://fatecsjc-prd.azurewebsites.net/",
    title: "TimeMorize — Gestão de Avaliação FEE",
    problem: "Desenvolvimento de uma aplicação web para gerenciamento dos ciclos de avaliação da instituição, acompanhamento de scores dos alunos e cálculo do FEE (Fator de Ensino Evolutivo). O desafio principal foi realizar a persistência completa de dados sem a utilização de bancos de dados SQL ou NoSQL, utilizando estruturas de arquivos JSON.",
    myRole: "Product Owner (PO) e Desenvolvedor Web. Gerenciei o backlog Scrum, mapeei todo o fluxo de funcionamento e navegação do sistema e atuei no desenvolvimento do frontend e persistência JSON.",
    fullContributions: [
      "Atuei como Product Owner (PO), realizando o levantamento de requisitos com os professores da Fatec e compreendendo os fluxos para alunos, professores e diretores.",
      "Desenvolvi o fluxograma completo de funcionamento da aplicação e mapeamento de navegação no Miro, além dos wireframes e proposta visual no Figma.",
      "Participei ativamente da implementação web, padronizando componentes visuais (HTML5, CSS3, Bootstrap) e auxiliando no desenvolvimento do backend em Python com Flask.",
      "Estruturei a lógica de persistência e manipulação dos dados em arquivos JSON sem gerenciador de banco de dados.",
      "Liderei a organização da documentação técnica das entregas das sprints e acompanhamento de tarefas da equipe."
    ],
    hardSkills: [
      { skill: "Estruturação e estilização de páginas (HTML5, CSS3, Bootstrap)", level: "AUTONOMIA" },
      { skill: "Prototipação e criação de wireframes no Figma", level: "AUTONOMIA" },
      { skill: "Modelagem de fluxos de navegação no Miro", level: "AUTONOMIA" },
      { skill: "Manipulação e estruturação de dados em JSON", level: "AUTONOMIA" },
      { skill: "Desenvolvimento de rotas backend com Python e Flask", level: "COM ORIENTAÇÃO" },
      { skill: "Organização de backlog e Scrum como Product Owner", level: "COM ORIENTAÇÃO" }
    ],
    softSkillsText: "Desenvolvimento de comunicação assertiva, liderança e gestão de conflitos. Como Product Owner, enfrentei o desafio de tomar decisões difíceis pela saúde do projeto coletivo, reestruturando a equipe ao final da 2ª sprint para garantir o comprometimento dos integrantes e o cumprimento rigoroso dos prazos acadêmicos.",
    technologies: ["PYTHON", "FLASK", "HTML5", "CSS3", "BOOTSTRAP", "JQUERY", "AXIOS", "JSON", "FIGMA", "GIT/GITHUB", "SCRUM / PO"],
    repoUrl: "https://github.com/ElbertJean/API-1",
    badgeColor: "#e74c3c"
  },
  {
    id: "api-2",
    semester: "2º SEMESTRE",
    period: "2024-1",
    partner: "Fatec São José dos Campos",
    partnerUrl: "https://fatecsjc-prd.azurewebsites.net/",
    title: "Equipe Javali — Dados Meteorológicos",
    problem: "Desenvolvimento de uma aplicação desktop para importação, validação e análise de dados meteorológicos provenientes de múltiplos arquivos CSV de estações do Estado de SP com formatos heterogêneos, armazenando os registros de forma relacional no PostgreSQL com tratamento de medições suspeitas.",
    myRole: "Desenvolvedor Frontend Desktop e Integração JDBC. Fui responsável pela criação das interfaces em JavaFX/FXML, implementação do relatório BoxPlot e consultas SQL via JDBC.",
    fullContributions: [
      "Desenvolvi as interfaces gráficas desktop da aplicação utilizando JavaFX, FXML e Scene Builder.",
      "Participei ativamente da criação da tela principal e dos fluxos de navegação entre as funcionalidades.",
      "Desenvolvi integralmente a funcionalidade do Relatório BoxPlot: criei os controllers em Java, a seleção de estações/variáveis climáticas e a integração com o banco de dados.",
      "Implementei consultas SQL utilizando JDBC para carregar dinamicamente cidades e estações registradas no PostgreSQL.",
      "Contribuí com ajustes e integração visual no relatório de valor médio e persistência relacional."
    ],
    hardSkills: [
      { skill: "Criação de interfaces desktop com Scene Builder e FXML", level: "AUTONOMIA" },
      { skill: "Desenvolvimento de aplicações Java e controllers JavaFX", level: "COM ORIENTAÇÃO" },
      { skill: "Integração com banco PostgreSQL utilizando JDBC", level: "COM ORIENTAÇÃO" },
      { skill: "Operações CRUD e consultas SQL em banco relacional", level: "COM ORIENTAÇÃO" },
      { skill: "Arquitetura em camadas e padrão MVC", level: "COM ORIENTAÇÃO" }
    ],
    softSkillsText: "Resiliência e aprendizado contínuo sob pressão. Enfrentei uma stack completamente nova (Java, JavaFX, JDBC e PostgreSQL) mantendo o foco e realizando diversos testes práticos até solucionar os problemas de integração do relatório BoxPlot e garantir a exibição correta dos dados.",
    technologies: ["JAVA", "JAVAFX", "SCENE BUILDER", "POSTGRESQL", "JDBC", "MAVEN", "DOCKER", "GIT/GITHUB"],
    repoUrl: "https://github.com/ElbertJean/API-2-semestre",
    badgeColor: "#f39c12"
  },
  {
    id: "api-3",
    semester: "3º SEMESTRE",
    period: "2024-2",
    partner: "GSW Soluções em Tecnologia",
    partnerUrl: "http://www.gsw.com.br",
    title: "Morpheus — Web Scraping & Monitoramento de Notícias",
    problem: "Construção de uma plataforma para captura automatizada e periódica de notícias estratégicas provenientes de múltiplos portais web configuráveis por seletores dinâmicos, com categorização por tags/sinônimos e consumo de APIs externas.",
    myRole: "Desenvolvedor Fullstack (Frontend -> Backend). Modelei os wireframes e telas no Vue.js e desenvolvi o motor backend de Web Scraping dinâmico em Java/Spring Boot com Jsoup.",
    fullContributions: [
      "Desenvolvi na 1ª sprint a base da interface web em Vue.js, criando wireframes, layouts e a tela de listagem de notícias.",
      "Assumi a partir da 2ª sprint o desenvolvimento do motor backend de Web Scraping em Java e Spring Boot.",
      "Utilizei a biblioteca Jsoup para extrair dados de portais web, evoluindo a solução para carregar seletores, URLs e tags dinamicamente do banco MySQL.",
      "Implementei a filtragem de notícias com base em tags vinculadas a sinônimos, validação de registros e prevenção de conteúdos duplicados.",
      "Desenvolvi a integração com APIs externas de notícias, incluindo DTOs, controllers, serviços e agendamentos de execução periódica."
    ],
    hardSkills: [
      { skill: "Desenvolvimento backend com Java e Spring Boot", level: "AUTONOMIA" },
      { skill: "Desenvolvimento de Web Scraping dinâmico com Jsoup", level: "AUTONOMIA" },
      { skill: "Integração entre Vue.js, Axios e APIs REST", level: "AUTONOMIA" },
      { skill: "Estruturação e padronização de rotas RESTful", level: "AUTONOMIA" },
      { skill: "Consumo e processamento de APIs externas", level: "AUTONOMIA" },
      { skill: "Persistência em banco MySQL com JDBC", level: "AUTONOMIA" }
    ],
    softSkillsText: "Autonomia técnica e alto comprometimento com entregas críticas. Fui encarregado de construir o motor de coleta (componente vital do projeto) com Jsoup, aprendendo a ferramenta de forma rápida e iterativa para não comprometer o cronograma da equipe.",
    technologies: ["JAVA", "SPRING BOOT", "JSOUP", "MYSQL", "REST API", "VUE.JS", "JAVASCRIPT", "BOOTSTRAP", "JDBC", "GIT/GITHUB"],
    repoUrl: "https://github.com/Morpheus-Fatec/morpheus",
    badgeColor: "#9b59b6"
  },
  {
    id: "api-4",
    semester: "4º SEMESTRE",
    period: "2025-1",
    partner: "Visiona Tecnologia Espacial",
    partnerUrl: "https://www.visionaespacial.com.br/",
    title: "Demeter — Plataforma Geoespacial Agrícola & Polígonos",
    problem: "Desenvolvimento de uma plataforma web para visualização, análise e edição manual de dados geoespaciais agrícolas (GeoJSON/MultiPolygon) gerados por modelos de inteligência artificial, identificando divergências (falsos positivos/negativos) e alimentando novamente o modelo de IA.",
    myRole: "Desenvolvedor Frontend Lead Geoespacial. Estruturei a arquitetura em Leaflet + Vue.js + Pinia e desenvolvi as ferramentas de desenho, edição e manipulação de polígonos geoespaciais.",
    fullContributions: [
      "Liderei a estruturação inicial do frontend com Vue.js, definindo a arquitetura de componentes, rotas e wireframes do sistema.",
      "Desenvolvi toda a lógica de mapas interativos utilizando a biblioteca Leaflet e gerenciamento de estado global com Pinia.",
      "Construí a ferramenta completa para desenhar manualmente novos polígonos sobre o mapa, além das funcionalidades de edição e exclusão de geometrias.",
      "Implementei a exibição de áreas com MarkerCluster, carregamento de raster GeoTIFF sobre as glebas e controles de ativação/desativação de camadas.",
      "Integrei o mapa com a API REST do backend para salvar alterações e disponibilizar o download dos talhões validados em formato GeoJSON."
    ],
    hardSkills: [
      { skill: "Desenvolvimento frontend com Vue.js e Leaflet", level: "AUTONOMIA" },
      { skill: "Criação, edição e manipulação de polígonos no mapa", level: "AUTONOMIA" },
      { skill: "Manipulação de dados geoespaciais (GeoJSON e GeoTIFF)", level: "AUTONOMIA" },
      { skill: "Gerenciamento de estado com Pinia e Axios", level: "AUTONOMIA" },
      { skill: "Consultas espaciais com PostgreSQL e PostGIS", level: "AUTONOMIA" },
      { skill: "Desenvolvimento de APIs REST com Java e Spring Boot", level: "AUTONOMIA" },
      { skill: "Deploy de aplicações em ambiente AWS", level: "AUTONOMIA" }
    ],
    softSkillsText: "Tomada de decisão e otimização de performance. Para manter o mapa interativo performático durante a renderização e manipulação de grandes volumes de geometrias geoespaciais, avaliei alternativas de renderização e estado, garantindo uma interface fluida que destravou o trabalho de toda a equipe.",
    technologies: ["REACT", "JAVASCRIPT", "VUE.JS", "LEAFLET", "PINIA", "POSTGIS", "POSTGRESQL", "GEOJSON", "GEOTIFF", "JAVA", "SPRING BOOT", "AWS"],
    repoUrl: "https://github.com/Morpheus-Fatec/API_4S_Visiona_PolygonEditor",
    badgeColor: "#2ecc71"
  },
  {
    id: "api-5",
    semester: "5º SEMESTRE",
    period: "2026-1",
    partner: "SIATT",
    partnerUrl: "https://www.siatt.com.br/?lang=pt",
    title: "SQLutions — Data Warehouse & Gestão Operacional",
    problem: "Centralização e consolidação de dados fragmentados de projetos, custos, horas trabalhadas, materiais, estoque e fornecedores através de um Data Warehouse com modelagem dimensional (Fatos e Dimensões) e práticas integradas de DevOps.",
    myRole: "Desenvolvedor Frontend Lead, ETL & DevOps Docs. Desenvolvi dashboards no React + TypeScript, pipelines ETL em Python e liderança da documentação e práticas de DevOps.",
    fullContributions: [
      "Desenvolvi a interface web e os dashboards interativos de acompanhamento de projetos, compras e estoque utilizando React, TypeScript e Tailwind CSS.",
      "Participei da criação de scripts em Python para pipelines ETL, realizando a extração, transformação e carga de dados de estoque para o Data Warehouse.",
      "Atuei diretamente no backend em Python/Django e na estrutura relacional de dados.",
      "Liderei a área de documentação na estrutura de DevOps, organizando e padronizando a Wiki oficial do projeto com instruções de ambientes, Docker e monitoramento.",
      "Auxiliei na integração dos serviços com ferramentas de monitoramento e qualidade de código (Prometheus, Grafana e SonarQube)."
    ],
    hardSkills: [
      { skill: "Modelagem dimensional com tabelas Fato e Dimensão", level: "AUTONOMIA" },
      { skill: "Desenvolvimento frontend com React e TypeScript", level: "AUTONOMIA" },
      { skill: "Construção de dashboards e visualização de dados", level: "AUTONOMIA" },
      { skill: "Conteinerização e orquestração com Docker", level: "AUTONOMIA" },
      { skill: "Documentação técnica e padronização DevOps", level: "AUTONOMIA" },
      { skill: "Desenvolvimento de pipelines ETL com Python", level: "COM ORIENTAÇÃO" },
      { skill: "Desenvolvimento de APIs REST com Django", level: "COM ORIENTAÇÃO" }
    ],
    softSkillsText: "Pensamento sistêmico e responsabilidade técnica. Assumi a frente de padronizar a documentação e processos de DevOps da equipe, transformando configurações de infraestrutura e ambientes em registros claros para que qualquer integrante pudesse desenvolver, testar e publicar com autonomia.",
    technologies: ["REACT", "TYPESCRIPT", "DATA WAREHOUSE (ETL)", "PYTHON", "DJANGO", "MYSQL", "DOCKER", "PROMETHEUS", "GRAFANA", "DevOps"],
    repoUrl: "https://github.com/SQLutions-FATEC/API-5-Semestre",
    badgeColor: "#00d2d3"
  },
  {
    id: "api-6",
    semester: "6º SEMESTRE",
    period: "2026-2 (EM ANDAMENTO)",
    partner: "AKAER",
    partnerUrl: "https://www.akaer.com.br/",
    title: "AKAER — Classificador Inteligente de Documentos Técnicos & IA (LGPD)",
    problem: "A gestão e cruzamento de documentos técnicos (PDF, Word, Excel) divididos em 4 áreas (Técnicos, Qualitativos, Jurídicos e Normativos) demandavam leitura manual exaustiva e sem padronização. O objetivo da solução é reduzir o tempo de busca e cruzamento de dados via IA, permitindo acesso rápido com governança e conformidade com a LGPD.",
    myRole: "Desenvolvedor Fullstack & Arquitetura de Dados (Em Desenvolvimento). Atuando na concepção da arquitetura de extração híbrida (MongoDB + PostgreSQL), classificação por Machine Learning, autenticação OAuth 2.0 e governança LGPD.",
    fullContributions: [
      "Participação no Kick-Off oficial com a AKAER, mapeando a dor do cliente referente a buscas manuais e falta de padronização em documentos das 4 áreas.",
      "Modelagem do fluxo de entrada e tratamento de dados: upload (PDF, Word, Excel), extração de conteúdo e identificação automatizada de metadados (título, data, revisão, autor, área e tipo/labels).",
      "Definição da arquitetura de persistência dual: uso de MongoDB para a camada não estruturada de arquivos/extração e PostgreSQL para metadados, controle de acesso e LGPD.",
      "Desenvolvimento do motor de busca inteligente com IA/Machine Learning (estilo NotebookLM) permitindo perguntas no chat com indicação de fontes e rastreabilidade dos documentos.",
      "Implementação das diretrizes de governança e segurança: controle de perfis de usuário via OAuth 2.0, logs de auditoria e rotinas de anonimização conforme a LGPD."
    ],
    hardSkills: [
      { skill: "Arquitetura de dados híbrida (MongoDB + PostgreSQL)", level: "AUTONOMIA" },
      { skill: "Classificação de documentos com Machine Learning", level: "COM ORIENTAÇÃO" },
      { skill: "Implementação de conformidade e anonimização LGPD", level: "AUTONOMIA" },
      { skill: "Autenticação e controle de níveis de acesso (OAuth 2.0)", level: "COM ORIENTAÇÃO" },
      { skill: "Desenvolvimento de APIs RESTful para busca híbrida", level: "AUTONOMIA" }
    ],
    softSkillsText: "Visão estratégica e planejamento arquitetural de produto. Participação ativa nas reuniões de Kick-Off com a AKAER para transformar requisitos complexos de governança documental e inteligência artificial em um plano de entregas sustentável por sprints.",
    technologies: ["AKAER", "MACHINE LEARNING", "MONGODB", "POSTGRESQL", "LGPD", "OAUTH 2.0", "PYTHON", "JAVA / SPRING", "DOCKER", "EM DESENVOLVIMENTO"],
    repoUrl: "https://github.com/elbertjean",
    badgeColor: "#ff4757"
  }
];
