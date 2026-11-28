// Shared site data — edit these and the pages update together.

export interface Project { name: string; desc: string; tags: string[]; href: string; }
export interface Talk { meta: string; title: string; tail: string; href: string; }
export interface Link { k: string; v: string; href: string; }
export interface Award { title: string; meta: string; href: string; }

export const projects: Project[] = [
  { name: "MetisLinux", desc: "I was a maintainer at MetisLinux", tags: ["c", "bash","python"], href: "https://github.com/metis-os" },
  { name: "earlymoon", desc: "Simple DNS query tool written in go", tags: ["Go"], href: "https://github.com/pwnspirit/earlymoon" },
];

export const talks: Talk[] = [
  ];

export const awards: Award[] = [
  { title: "hall of fame — at Cambridge University", meta: "2026", href: "https://www.cambridge.org/legal/security-and-vulnerability-disclosure-policy/acknowledgement" },
  { title: "3rd place, HackAstra CTF", meta: "2026", href: "https://lnkd.in/p/gwipGNMp" },
  { title: "3rd runner-up, BSides Kathmandu 2026", meta: "2026", href: "/notes/bsidesktm/" },
];

export const links: Link[] = [
  { k: "x / twitter", v: "@pwnspirit", href: "https://twitter.com/pwnspirit" },
  { k: "github", v: "github.com/pwnspirit", href: "https://github.com/pwnspirit" },
  { k: "discord", v: "@pwnspirit", href: "https://discord.com/users/936853051984199750" },
];
