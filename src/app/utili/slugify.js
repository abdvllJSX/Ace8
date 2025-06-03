export function slugify(text) {
  return text
    .toLowerCase()                    // Convert to lowercase first
    .replace(/[^a-z0-9]+/g, '-')     // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '');        // Remove leading/trailing hyphens
}