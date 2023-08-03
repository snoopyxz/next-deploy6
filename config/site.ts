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
			label: "Donate",
			href: "https://patreon.com/",
		},
	],
	links: {
		instagram: "https://instagram.com/gamevaultx",
		twitter: "https://twitter.com/gamevaultx",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/Sf5vewWdrV",
		download: "/download",
		windows: "",
		linux: "",
		macos: "",
		about: "/about",
        sponsor: "https://patreon.com/"
	},
};
