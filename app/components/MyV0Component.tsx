/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bEcpNm9UnaZ
 */
export default function Component() {
  return (
    <article className="flex space-x-4 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <div className="flex-shrink-0">
        <img
          alt="Elon Musk"
          className="rounded-full"
          height="50"
          src="/placeholder.svg"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <h2 className="font-bold text-gray-900 dark:text-white">Elon Musk</h2>
          <span className="text-gray-500 dark:text-gray-400">@elonmusk</span>
        </div>
        <p className="text-gray-800 dark:text-gray-200">
          The sky is falling! Just kidding, satellite deployment was successful. Stay tuned for updates.
        </p>
        <div className="flex items-center space-x-8 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <svg
              className=" h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
            <span>543</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className=" h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m17 2 4 4-4 4" />
              <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
              <path d="m7 22-4-4 4-4" />
              <path d="M21 13v1a4 4 0 0 1-4 4H3" />
            </svg>
            <span>2.1K</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className=" h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>13.7K</span>
          </div>
        </div>
      </div>
    </article>
  )
}

