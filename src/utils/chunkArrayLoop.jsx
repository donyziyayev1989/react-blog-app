const chunkArrayLoop = (array, size) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = [];
    for (let j = i; j < i + size && j < array.length; j++) {
      chunk.push(array[j]);
    }
    result.push(chunk);
  }
  return result;
};

export default chunkArrayLoop;
