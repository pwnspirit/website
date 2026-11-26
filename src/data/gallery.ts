// Gallery photos. To add one: drop the image in public/ and add an entry here.
// Photos with the same `album` are grouped together; newest albums go first in this list.

export interface Photo { src: string; alt: string; caption?: string; album: string; }

export const photos: Photo[] = [
  {
    album: "BSides Kathmandu 2026",
    src: "/bsidektm/bsides_post_01.webp",
    alt: "The crowd, the registration desk and the speakers at BSides Kathmandu 2026",
    caption: "The crowd, the registration desk and the speakers.",
  },
  {
    album: "BSides Kathmandu 2026",
    src: "/bsidektm/bsides_post_02.webp",
    alt: "The signboard pointing to the Rookie Stage, the Hardware Hacking Village and the CTF Arena on the 1st floor",
    caption: "Rookie Stage, Hardware Hacking Village and CTF Arena.",
  },
  {
    album: "BSides Kathmandu 2026",
    src: "/bsidektm/bsides_post_05.webp",
    alt: "The CTF scoreboard showing every team's score over time",
    caption: "The CTF scoreboard.",
  },
];
