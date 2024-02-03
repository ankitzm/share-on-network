'use server'

import fs from 'fs';

export default async function SharedFiles() {
  const folderPath = './public/shared-files' // pat-to-files
  try {
    const files = await fs.promises.readdir(folderPath);
    return files
  }
  catch (error) {
    console.error(error);
    return
  }
}