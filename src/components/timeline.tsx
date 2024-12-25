import { Journey } from "@/data/constants";
import { JourneyItemType } from "@/models/models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export const Timeline = () => {
  return (
    <ol className="relative flex-col justify-center items-center border-s border-gray-200">
      {Journey.map((item: JourneyItemType, index: number) => {
        return (
          <li className="mb-20 ms-4" key={index}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="absolute w-4 h-4 rounded-full dark:bg-black z-auto"
              style={{ left: -8.5 }}
            />
            <time className="text-sm font-normal leading-none text-gray-400">
              {`${item.startDate}${item.endDate ? ` - ${item.endDate}` : ""}`}
            </time>
            <h3 className="text-lg font-semibold transition-colors ">
              {item.title}
            </h3>
            <h5 className="text-sm font-normal leading-none  dark:text-gray-500 text-darkShadow">
              {item.company ? item.company : item.university}
            </h5>
            <p className="mb-4 text-base font-light text-darkSecondary">
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};
