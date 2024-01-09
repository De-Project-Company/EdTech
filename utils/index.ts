/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (str: string): string => {
  const buffer = Buffer.from(str, 'base64');
  return buffer.toString();
};

export const getArrowIndicator = (grade: number): string | null => {
  if (grade >= 80) {
    return '🟢';
  } else if (grade >= 70 && grade < 80) {
    return '🔺';
  } else if (grade >= 60 && grade < 70) {
    return '➡️';
  } else {
    return '🔻';
  }
};
