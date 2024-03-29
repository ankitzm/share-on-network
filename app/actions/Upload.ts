'use server'

import { writeFile } from "fs/promises";
import { join } from "path";

async function Upload(data: FormData) {
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
        throw new Error('No file upload')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // writing to filesystem temporarly
    const path = join('./public/shared-files', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see uploaded file`);
}

export default Upload