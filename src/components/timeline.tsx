import { Journey } from '@/data/constants';
import { JourneyItemType } from '@/models/models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export const Timeline = () => {
  return (
    <ol className="relative border-s">
      {Journey.map((item: JourneyItemType) => {
        return (
          <li className="mb-20 ms-4">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="absolute w-5 h-5 rounded-full mt-1.5 -start-1.5"
            />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {`${item.startDate}${item.endDate ? ` - ${item.endDate}` : ''}`}
            </time>
            <h3 className="text-lg font-semibold transition-colors">
              {item.title}
            </h3>
            <h5 className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">
              {item.company ? item.company : item.university}
            </h5>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};
