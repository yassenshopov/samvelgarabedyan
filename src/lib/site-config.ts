export const siteConfig = {
  name: "Samvel Garabedyan",
  firstName: "SAMVEL",
  lastName: "GARABEDYAN",
  title: "Music Composer",
  sinceYear: 2020, // TODO: replace with actual year
  bio: "I'm Samvel Garabedyan, a Bulgarian music composer crafting evocative scores for film, games, and media. Whether it's an intimate scene or an epic orchestral moment — I bring stories to life through music.", // TODO: replace with real bio
  reelCrafterUrl:
    "https://play.reelcrafter.com/embed/f98de4bb-bb5a-45ae-ada1-ffeca7131ae2",
  fullReelUrl: "https://play.reelcrafter.com/gqicb_hvQIG4oVk4EejQ6w",
  portrait: "/samvel.jpg", // TODO: add actual photo to public/samvel.jpg
  email: "samvel@example.com", // TODO: replace with real email
  socials: [
    { platform: "instagram" as const, url: "https://instagram.com/TODO" }, // TODO
    { platform: "youtube" as const, url: "https://youtube.com/@TODO" }, // TODO
    { platform: "linkedin" as const, url: "https://linkedin.com/in/TODO" }, // TODO
  ],
} as const;

export type SocialPlatform = (typeof siteConfig.socials)[number]["platform"];
