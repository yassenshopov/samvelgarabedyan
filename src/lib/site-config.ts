export const siteConfig = {
  name: "Samvel Garabedyan",
  firstName: "SAMVEL",
  lastName: "GARABEDYAN",
  title: "Music Composer",
  sinceYear: 2020,
  bio: "A selection of my work in composition and sound design, including film scoring, podcast audio, and theatre music. All music and sound design by Samvel Garabedyan.",
  reelCrafterUrl:
    "https://play.reelcrafter.com/embed/f98de4bb-bb5a-45ae-ada1-ffeca7131ae2",
  fullReelUrl: "https://play.reelcrafter.com/gqicb_hvQIG4oVk4EejQ6w",
  vimeoEmbedUrl: "https://player.vimeo.com/video/1186513783",
  portrait: "/samvel.jpg", // TODO: add actual photo to public/samvel.jpg
  email: "samvel.garabedyan@gmail.com",
  socials: [
    { platform: "instagram" as const, url: "https://instagram.com/maestrosamvel" },
    { platform: "youtube" as const, url: "https://www.youtube.com/@samigar143" },
  ],
} as const;

export type SocialPlatform = (typeof siteConfig.socials)[number]["platform"];
