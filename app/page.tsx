'use client'

import { useRef, useState, useEffect } from "react";
import Upload from "./actions/Upload";
import SharedFiles from "./actions/SharedFiles";
import useDownloader from "react-use-downloader";

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
    useDownloader();

  async function getFiles() {
    const files: Array<String> | undefined = await SharedFiles()
    console.log(files);
    setUploadedFiles(files)
  }

  useEffect(() => {
    getFiles()
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-screen">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 p-2 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className="text-lg font-bold">share-on-network</p>
          <p>Share files seamlessly using Nextjs on local network</p>
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/ankitzm"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <b>Ankit Singh</b>
          </a>
        </div>
      </div>

      <div className="mt-14 md:mt-16 lg:mt-20 w-auto">
        <form action={Upload}>
          <label htmlFor="uploadFile"
            className="bg-white backdrop-blur-sm bg-opacity-20 text-center rounded w-[300px] sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif] m-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mb-6 fill-white" viewBox="0 0 24 24">
              <path
                d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                data-original="#000000" />
              <path
                d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                data-original="#000000" />
            </svg>
            <p className="text-white font-semibold text-sm">Drag & Drop or <span className="text-[#4498f2]">Choose file</span> to
              upload</p>
            <input type="file" id='uploadFile' name="file" className="hidden" />
          </label>
          <input type="submit" value="Upload File" className="bg-white backdrop-blur-sm bg-opacity-20 p-2 font-semibold rounded w-full cursor-pointer" onClick={getFiles} />
        </form>

        <div className="mt-8 md:mt-12 lg:mt-14">
          <p className="font-semibold text-xl">Shared Files(click to download)</p>
          {
            uploadedFiles.length == 0 ?
              <div>
                no file uploaded ...
              </div> :
              <div className="flex flex-col gap-2 mt-2">
                {
                  uploadedFiles.map(item => {
                    return (
                      <button key={item} className="text-left p-2 pl-6 rounded bg-white bg-opacity-10 hover:bg-opacity-15" onClick={() => download(`/shared-files/${item}`, item)}>{item}</button>
                    )
                  })
                }
              </div>
          }
        </div>
      </div>
    </main>
  );
}
