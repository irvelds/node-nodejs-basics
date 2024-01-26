import { stat } from 'fs/promises';

export async function isExistPath(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}
