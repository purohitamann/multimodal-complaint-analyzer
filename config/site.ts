export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Complaint Analyzer",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Text",
      href: "/text",
    },
    {
      label: "Voice",
      href: "/voice",
    },
    {
      label: "image",
      href: "/image",
    },
    {
      label: "video",
      href: "/video",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/purohitamann/multimodal-complaint-analyzer",
    docs: "https://nextui-docs-v2.vercel.app",
   
  },
};
