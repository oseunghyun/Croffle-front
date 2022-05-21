// 바이트 계산기
const getByte = (str) => {
  return str
    .split("")
    .map((s) => s.charCodeAt(0))
    .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
};

export { getByte };
