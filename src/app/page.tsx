"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProfileImage from "../../public/assets/berker.jpg";

export default function Home() {
  const handleForwardEmail = () => {
    const link = document.createElement("a");
    link.href = "mailto:berkerkelesoglu@gmail.com";
    link.target = "_blank";
    link.click();
  };

  return (
    <main className="wrapper  transition-colors p-3 " suppressHydrationWarning>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center items-center"
      >
        <div className="flex flex-col justify-start items-center gap-4 w-2/4 h-full">
          <div className="flex justify-center items-center">
            <div className="avatar rounded-full border-0 dark:border-white border-black">
              <div
                className="rounded-full"
                style={{ position: "relative", width: 150, height: 150 }}
              >
                <Image
                  src={ProfileImage}
                  alt="Berker Kelesoglu"
                  layout="fill"
                  objectFit="covers"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-darkSecondary p-2">
              Hey 👋, I am Berker, software developer and musician currently
              based in Poland.
            </p>
          </div>
          <div className="lg:text-6xl md:text-2xl sm:text-2xl xs:text-2xl font-extrabold transition-colors bg-gradient-to-bl from-darkSecondary to-[#dcdcdc] bg-clip-text text-transparent text-center">
            <h1>Building mobile and web application to solve user problems.</h1>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleForwardEmail}
              className="px-6 py-4 flex justify-between items-center w-40 dark:bg-black  bg-darkShadow text-white rounded-lg hover:opacity-75 text-md"
            >
              <span>Contact me</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
