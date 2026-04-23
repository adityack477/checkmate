/*scoring logic */

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return Math.abs(h);
}

function pickItems(pool, seed, count) {
  const indices = [...pool.keys()].sort(
    (a, b) => hashString(seed + String(a)) - hashString(seed + String(b))
  );
  return indices.slice(0, count).map(i => pool[i]);
}

function computeScore(url) {
  const seed = hashString(url);

  return 28 + (hashString(seed * 3) % 48);
}

function getScoreColor(score) {
  if (score >= 70) return '#4af0a0';
  if (score >= 45) return '#f0a84a';
  return '#f04a4a';
}

function getScoreLabel(score) {
  if (score >= 70) return 'Good';
  if (score >= 45) return 'Needs Work';
  return 'Poor';
}

function normalizeUrl(raw) {
  raw = raw.trim();
  if (!raw.startsWith('http')) raw = 'https://' + raw;
  return raw;
}

function getSiteName(url) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
}
