const slugSegment = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replaceAll("/", "-");

/** Build search URLs with country first, type second, then remaining filters. */
export function buildSearchUrl(filters = []) {
  const priority = { country: 0, type: 1 };
  const ordered = filters
    .map((filter, index) => ({ filter, index }))
    .sort((a, b) => {
      const aLabel = String(a.filter.label || "").toLowerCase();
      const bLabel = String(b.filter.label || "").toLowerCase();
      const aPriority = priority[aLabel] ?? 2;
      const bPriority = priority[bLabel] ?? 2;
      return aPriority - bPriority || a.index - b.index;
    })
    .map(({ filter }) => {
      const label = slugSegment(filter.label);
      return `${label}-${slugSegment(filter.value)}`;
    });

  return `/search/${ordered.join("/")}`;
}
