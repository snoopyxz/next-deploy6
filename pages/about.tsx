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
import { Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { NotificationIcon } from "@/components/NotificationIcon";
import { CheckIcon } from "@/components/CheckIcon";
import { Spinner } from "@nextui-org/react";
import {Input} from "@nextui-org/react";



export default function IndexPage() {
  const colors = [
    "danger",
  ];
  return (
    
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Section for v23.09 */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>What's New in Version&nbsp;</h1>
          <br />
          <h1 className={title({ color: "red" })}>v23.09&nbsp;</h1>
          <br />
        </div>

        <div className="flex gap-4">
          <Chip variant="flat" color="warning">
            In Development
          </Chip>
        </div>

       

        <div className="flex gap-4">
          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            Bug Fixes
          </Chip>

          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            Performance Improve
          </Chip>

          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            UI & UX
          </Chip>

          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            Music System
          </Chip>

          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            Profile Picture
          </Chip>
        </div>

        {/* Section for v23.08 */}
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>What's New in Version&nbsp;</h1>
            <br />
            <h1 className={title({ color: "red" })}>v23.08&nbsp;</h1>
            <br />
          </div>
        </section>

        <div className="flex gap-4">
          <Chip variant="flat" color="success">
            Done
          </Chip>
        </div>

        <div className="flex gap-4">
          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            Bug Fixes
          </Chip>

          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            Performance Improve
          </Chip>

          <Chip
            endContent={<NotificationIcon size={18} height={undefined} width={undefined} />}
            variant="flat"
            color="danger"
          >
            UI & UX
          </Chip>
        </div>

        <div className="center">
          <Image
            isBlurred
            width={300}
            height={600}
            src="https://app.requestly.io/delay/2000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            alt="NextUI Album Cover"
          />
        </div>
        <br />

        <div className="center">
      {colors.map((color) => (
        <Input
          key={color}
          
          isReadOnly
          color="danger"
          label="Support Email"
          defaultValue="gamevaulthelp@gmail.com"
          className="max-w-[220px]"
        />
      ))}
    </div>
    

      </section>
    </DefaultLayout>
  );
}
