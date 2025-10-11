"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import Providers from "@/app/provider";
import { ThemeButton } from "./theme-button";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { MenuItem } from "./menu-item";
import { Navigations } from "@/data/constants";
import { LinkType } from "@/models/models";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { DropdownNavbar } from "@/components/dropdown-navbar";
import { Links } from "@/data/constants";
import { useState } from "react";
import Image from "next/image";
import ProfileImage from "../../public/assets/berker.jpg";

export default function Toast({
  message,
  isVisible,
}: {
  message: string;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: "10px",

        transform: "translateX(-50%)",
        backgroundColor: "#4BB543",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        zIndex: 1000,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {message}
    </motion.div>
  );
}

export const TopTools = () => {
  const router = useRouter();
  const params = useParams();
  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };
  const [isCopied, setIsCopied] = useState(false);
  // const handleDownloadResume = () => {
  //   const link = document.createElement("a");
  //   link.target = "_blank";
  //   link.href = "https://read.cv/berkerkelesoglu";
  //   link.click();
  // };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("berkerkelesoglu@gmail.com")
      .then(function () {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(function (err) {
        if (err) {
          console.error("Failed to copy text:", err);
        }
      });
  };

  return (
    <div
      className="flex justify-center items-center transition-colors h-32 w-full"
      suppressHydrationWarning
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
        className="w-full "
      >
        <div className="lg:flex md:hidden sm:hidden xs:hidden justify-around h-full">
          <div className="flex gap-8 justify-between items-center">
            <div className="flex justify-between items-center gap-4">
            <div
                className="rounded-full border-0 dark:border-white border-black"
                style={{ position: "relative", width: 35, height: 35 }}
              >
                <Image
                  src={ProfileImage}
                  alt="Berker Kelesoglu"
                  layout="fill"
                  objectFit="covers"
                  className="rounded-full"
                  priority
                />
              </div>
              <div className="flex">
                <p className="text-darkSecondary">berkerkelesoglu@gmail.com</p>
              </div>
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCopy}
                  className="absolute w-4.5 h-4.5 rounded-full cursor-pointer hover:opacity-75"
                  onClick={handleCopyClick}
                />
              </div>
            </div>
            {/* <div>
              <button
                onClick={handleDownloadResume}
                className="px-3 py-2 dark:bg-darkShadow bg-lightSecondary rounded-lg hover:opacity-75 text-md"
              >
                cv
              </button>
            </div> */}
          </div>
          <div className="flex justify-between items-center h-16 px-4 rounded-full dark:bg-darkShadow bg-lightSecondary">
            {Navigations &&
              Navigations.map((item: LinkType) => (
                <MenuItem href={item.href} label={item.label} key={item.href} />
              ))}
          </div>
          <div className="flex justify-between gap-4 items-center pa-0">
            {Links &&
              Links.map((item: LinkType) => (
                <MenuItem href={item.href} label={item.label} key={item.href} />
              ))}
          </div>
        </div>
        <div className="relative lg:hidden md:flex sm:flex xs:flex justify-around h-full">
          <DropdownNavbar />
          <div className="absolute -top-8 left-4 w-52 transition-colors mt-4 cursor-pointer">
            <div className="lg:hidden flex justify-start items-center gap-2">
              <button
                onClick={handleCopyClick}
                className="px-3 py-2 dark:bg-darkShadow bg-lightSecondary rounded-lg hover:opacity-75 text-md"
              >
                email
              </button>
              {/* <button
                onClick={handleDownloadResume}
                className="px-3 py-2 dark:bg-darkShadow bg-lightSecondary rounded-lg hover:opacity-75 text-md"
              >
                cv
              </button> */}
            </div>
          </div>
          <div
            className={cn(
              "lg:hidden absolute left-2 top-10 mt-5 py-0.5 ml-3 cursor-pointer",
              !params.slug ? "hidden" : ""
            )}
          >
            <button
              onClick={() => router.push("/blog")}
              className="px-4 py-2 rounded-xl flex justify-center items-center gap-4 dark:bg-darkShadow"
            >
              <FontAwesomeIcon
                size={"lg"}
                icon={faArrowLeft}
                className="h-3 w-3"
              />
              <p className="text-xs">Back</p>
            </button>
          </div>
        </div>
      </motion.div>
      <Providers>
        <ThemeButton />
      </Providers>
      <Toast isVisible={isCopied} message="Copied to clipboard!" />
    </div>
  );
};
