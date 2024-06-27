export function isAnagram(s: string, t: string) {
  // early exit if lengths differ
  if (s.length != t.length) {
    return false;
  }

  const sFreq: Map<string, number> = new Map();
  const tFreq: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    // add s char frequencies
    const sVal = sFreq.get(s[i]);
    if (sVal === undefined) {
      sFreq.set(s[i], 1);
    } else {
      sFreq.set(s[i], sVal + 1);
    }

    // add t char frequencies
    const tVal = tFreq.get(t[i]);
    if (tVal === undefined) {
      tFreq.set(t[i], 1);
    } else {
      tFreq.set(t[i], tVal + 1);
    }
  }

  // must check each key value pair in the maps
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (sFreq.get(char) !== tFreq.get(char)) {
      return false;
    }
  }

  return true;
}
