function groupByKey<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((grouped: Record<string, T[]>, obj: T) => {
    const objKey = obj[key] as string;
    if (!grouped[objKey]) {
      grouped[objKey] = [];
    }
    grouped[objKey].push(obj);
    return grouped;
  }, {});
}

export { groupByKey };
