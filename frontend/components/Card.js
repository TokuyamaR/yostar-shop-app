/* eslint-disable @next/next/no-img-element */
import { API_URL } from "../config";
import RightArrow from "../public/images/arrow-right.svg";
import Link from "next/link";

export const Card = ({ data, linkText, path }) => {
  const id = data.id;
  const { name, description, image } = data.attributes;
  const imageSrc = `${API_URL}${image.data.attributes.url}`;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`${path}/?id=${id}`} as={`${path}/${id}`}>
        <a>
          <img
            className="object-cover w-full h-48 rounded-t-lg"
            src={imageSrc}
            alt={name}
          />
        </a>
      </Link>
      <div className="p-5">
        <Link href={`${path}/?id=${id}`} as={`${path}/${id}`}>
          <a>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="text-right">
          <Link href={`${path}/?id=${id}`} as={`${path}/${id}`}>
            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {linkText} <RightArrow className="w-4 h-4 ml-2 -mr-1" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
