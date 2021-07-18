const Choice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Remove = (arr, item) => {
  return arr.find((val, idx) =>
    val === item ? arr.splice(idx, 1) : undefined
  );
};

export { Choice, Remove };
