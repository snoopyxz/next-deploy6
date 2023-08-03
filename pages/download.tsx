import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import React from "react";
import {Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { NotificationIcon } from "@/components/NotificationIcon";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Download&nbsp;</h1>	
					<h1 className={title({ color: "red" })}>Now !&nbsp;</h1>
					<br />
					<br />

					<div className="center">
					<Chip color="danger" variant="flat">v23.08</Chip>
        </div>

					
				</div>
				<br />

				<div className="flex gap-3">
			

					<Link
						
						as={NextLink}
						href={siteConfig.links.linux}
						className={buttonStyles({
							color: "danger",
							radius: "full",
							variant: "shadow",
						})}
					>
						<HiDownload size={20} />
						Download Linux
					</Link>

					<Link
						
						as={NextLink}
						href={siteConfig.links.windows}
						className={buttonStyles({
							color: "danger",
							radius: "full",
							variant: "shadow",
						})}
					>
						<HiDownload size={20} />
						Download Windows
					</Link>

					<Link
						
						as={NextLink}
						href={siteConfig.links.macos}
						className={buttonStyles({
							color: "danger",
							radius: "full",
							variant: "shadow",
						})}
					>
						<HiDownload size={20} />
						Download MacOS
					</Link>

				</div>
				<br />
				<Image
      isBlurred
      width={600}
	  height={500}
      src="https://app.requestly.io/delay/2000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      alt="NextUI Album Cover"
      className="center"
    />

	
				
			</section>
		</DefaultLayout>
	);
}
