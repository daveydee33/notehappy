export default tags => {
  const invalidTagsArray = tags
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag === '');

  if (invalidTagsArray.length) {
    return `There were some empty or invalid tags: ${invalidTagsArray}`;
  }

  return;
};
