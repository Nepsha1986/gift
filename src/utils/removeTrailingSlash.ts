export const removeTrailingSlash = (path: string): string =>
  path.replace(/\/$/, '')
