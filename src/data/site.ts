// Shared site data — edit these and the pages update together.

export interface Project { name: string; desc: string; tags: string[]; href: string; }
export interface Talk { meta: string; title: string; tail: string; href: string; }
export interface Link { k: string; v: string; href: string; }
export interface Award { title: string; meta: string; href: string; }

export const projects: Project[] = [
  { name: "recon-ritual", desc: "my recon setup glued into one script so i stop forgetting steps at 2am.", tags: ["python", "bash"], href: "#" },
  { name: "idorbot", desc: "a burp extension that swaps object IDs around and yells when something answers that shouldn't.", tags: ["java", "burp"], href: "#" },
  { name: "bundle-digger", desc: "greps minified JS for keys, routes and endpoints so i don't have to squint.", tags: ["go"], href: "#" },
];

export const talks: Talk[] = [
  { meta: "2026 · meetup", title: '"reading code like an attacker"', tail: "a talk at a local meetup about the paranoid mindset.", href: "#" },
  { meta: "2025 · guest post", title: "how i think about access control", tail: "wrote this for a friend's blog.", href: "#" },
  { meta: "2025 · lightning talk", title: "five minutes, one IDOR", tail: "a quick one at a security night.", href: "#" },
];

export const awards: Award[] = [
  { title: "hall of fame — a company you've heard of", meta: "2026", href: "#" },
  { title: "1st place, some local CTF", meta: "2025", href: "#" },
  { title: "letter of appreciation, responsible disclosure", meta: "2025", href: "#" },
];

export const links: Link[] = [
  { k: "x / twitter", v: "@pwnspirit", href: "#" },
  { k: "github", v: "github.com/pwnspirit", href: "https://github.com/pwnspirit" },
  { k: "mastodon", v: "@pwnspirit", href: "#" },
  { k: "email", v: "hi@roshan-tiwari.com.np", href: "mailto:hi@roshan-tiwari.com.np" },
];
