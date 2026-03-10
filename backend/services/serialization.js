function safeJsonParse(value, fallback) {
  if (value === null || value === undefined) return fallback;
  if (typeof value === 'object') return value;
  try {
    return JSON.parse(value);
  } catch (err) {
    return fallback;
  }
}

function toJsonString(value) {
  if (value === null || value === undefined) return null;
  return JSON.stringify(value);
}

module.exports = {
  safeJsonParse,
  toJsonString,
};
