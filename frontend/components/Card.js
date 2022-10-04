import { API_URL } from "../config";
import RightArrow from "../public/images/arrow-right.svg";
import Link from "next/link";

export const Card = (data) => {
  const id = data.data.id;
  const { name, description, image } = data.data.attributes;
  const imageSrc = `${API_URL}${image.data.attributes.url}`;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/shops?id=${id}`} as={`/shops/${id}`}>
        <a>
          <img
            className="object-cover w-full rounded-t-lg h-1/2"
            src={imageSrc}
            alt={name}
          />
        </a>
      </Link>
      <div className="p-5">
        <Link href={`/shops?id=${id}`} as={`/shops/${id}`}>
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link href={`/shops?id=${id}`} as={`/shops/${id}`}>
          <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            訪問する <RightArrow className="w-4 h-4 ml-2 -mr-1" />
          </a>
        </Link>
      </div>
    </div>
  );
};
