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
		instagram: "https://instagram.com/gamevaultx",
		twitter: "https://twitter.com/gamevaultx",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
		download: "/download",
        sponsor: "https://patreon.com/jrgarciadev"
	},
};