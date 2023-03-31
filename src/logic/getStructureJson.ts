export function getJson(structure: string): JSON | null {
  try {
    const obj = JSON.parse(structure);
    return obj;
  } catch (e) {
    return null;
  }
}
