import { writeFile } from "fs/promises";
import Image from "next/image";
import { join } from "path";

export default function Home() {

  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file upload')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // writing to filesystem temporarly
    const path = join('/', 'tmp', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see uploaded file`);
    
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 p-2 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className="text-lg font-bold">share-on-network</p>
          <p>Share files seamlessly using Nextjs on local network</p>
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <b>Ankit Singh</b>
          </a>
        </div>
      </div>

      <div className="mt-14 md:mt-16 lg:mt-20">
        main
        <form action={upload}>
          <input type="file" name="file" />
          <input type="submit" value="Upload File" />
        </form>
      </div>

    </main>
  );
}
