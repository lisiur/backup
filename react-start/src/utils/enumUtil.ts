export function enumKeys(E: any) {
  return Object.keys(E).filter(k => typeof E[k as any] === 'number');
}

export function enumValues(E: any) {
  return enumKeys(E).map(k => E[k as any]);
}

export function enumEntries(E: any) {
  const keys = enumKeys(E);
  const values = enumValues(E);
  return keys.map((key, index) => [key, values[index]]);
}
