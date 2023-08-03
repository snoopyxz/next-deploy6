export type SiteConfig = typeof siteConfig;


export const siteConfig = {
	name: "GameVault",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Download",
      href: "/download",
    },
    {
	  
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Download",
			href: "/download",
		},
		{
			label: "About",
			href: "/about",
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
		instagram: "https://instagram.com/gamevaultx",
		twitter: "https://twitter.com/gamevaultx",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/",
		download: "/download",
		about: "/about",
        sponsor: "https://patreon.com/"
	},
};
