import React from "react";
import Link from "next/link";

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.86176 10.8883C4.60166 10.6282 4.60166 10.2065 4.86176 9.94643L8.05384 6.75434L4.86176 3.56226C4.60166 3.30217 4.60166 2.88047 4.86176 2.62038C5.12185 2.36029 5.54354 2.36029 5.80363 2.62038L8.99572 5.81247C9.5159 6.33265 9.5159 7.17604 8.99572 7.69622L5.80363 10.8883C5.54354 11.1484 5.12185 11.1484 4.86176 10.8883Z"
      fill="#676F7C"
    />
  </svg>
);

const Breadcrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="#"
            className="inline-flex items-center text-sm font-normal text-neutral-90 gap-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.86 15.1667H4.13998C2.31331 15.1667 0.833313 13.68 0.833313 11.8534V6.91336C0.833313 6.00669 1.39331 4.86669 2.11331 4.30669L5.70665 1.50669C6.78665 0.66669 8.51331 0.62669 9.63331 1.41336L13.7533 4.30002C14.5466 4.85336 15.1666 6.04002 15.1666 7.00669V11.86C15.1666 13.68 13.6866 15.1667 11.86 15.1667ZM6.31998 2.29336L2.72665 5.09336C2.25331 5.46669 1.83331 6.31336 1.83331 6.91336V11.8534C1.83331 13.1267 2.86665 14.1667 4.13998 14.1667H11.86C13.1333 14.1667 14.1666 13.1334 14.1666 11.86V7.00669C14.1666 6.36669 13.7066 5.48002 13.18 5.12002L9.05998 2.23336C8.29998 1.70002 7.04665 1.72669 6.31998 2.29336Z"
                fill="#6B47F5"
              />
              <path
                d="M8 12.5C7.72667 12.5 7.5 12.2733 7.5 12V10C7.5 9.72667 7.72667 9.5 8 9.5C8.27333 9.5 8.5 9.72667 8.5 10V12C8.5 12.2733 8.27333 12.5 8 12.5Z"
                fill="#6B47F5"
              />
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            {ArrowRight()}
            <Link
              href="#"
              className="ms-1 text-sm font-normal text-neutral-90 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Policies
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            {ArrowRight()}
            <span className="ms-1 text-sm font-normal text-gray-500 md:ms-2 dark:text-gray-400">
              20268494
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
