declare module 'react-native-crypto';
export function randomBytes(
  length: number,
  callback: (random: string, as: any) => void,
): number[];
