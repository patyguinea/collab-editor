export const getDiff = (string1, string2) => {
  const type = 'insert';
  const arr1 = string1.split('');
  const arr2 = string2.split('');

  if (arr1.length > arr2.length) {
    const index = arr1.findIndex((item, index) => arr1[index] !== arr2[index]);
    return {
      diff: [],
      type: 'delete',
      index,
      length: arr1.length - arr2.length,
    };
  }
  const diff = arr2.reduce((acc, item, index) => {
    if (arr2[index] !== arr1[index]) {
      acc.push({ index, value: arr2[index] });
    }
    return acc;
  }, []);
  return { diff, type, index: diff[0]?.index, length: diff.length };
};
