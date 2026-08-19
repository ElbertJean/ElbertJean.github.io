export interface NavLinkItem {
  id: string;
  label: string;
}

export interface SocialLinkItem {
  id: string;
  label: string;
  url: string;
  isExternal: boolean;
}

export interface PassiveItem {
  id: string;
  title: string;
  statusClass: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  color: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  icon: string;
  typeTitle: string;
  institution: string;
  course: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  date: string;
  status: string;
  statusClass: string;
  isLight?: boolean;
  tasks: string[];
}

export interface ProjectButton {
  label: string;
  url: string;
  btnClass: string;
}

export interface FeaturedProject {
  id: string;
  sectionId: string;
  levelTitle: string;
  titleColor: string;
  showcaseClass: string;
  layoutClass: string;
  graphicClass: string;
  cartridgeClass: string;
  labelClass: string;
  labelTitle: string;
  labelSubtitle: string;
  domain: string;
  paragraphs: string[];
  tags: string[];
  tagClass: string;
  buttons: ProjectButton[];
}

export interface HobbyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavbarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
