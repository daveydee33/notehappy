export default tags => {
  console.log(tags);
  const invalidTagsArray = tags
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag === '');

  console.log(invalidTagsArray);

  console.log(tags);

  if (invalidTagsArray.length) {
    return `There were some empty or invalid tags: ${invalidTagsArray}`;
  }

  return;
};
