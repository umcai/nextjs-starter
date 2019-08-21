export const getRandom = (Min, Max) => {
  // Min <= num < Max
  // https://blog.csdn.net/zgrkaka/article/details/78875621
  const Range = Max - Min
  const Rand = Math.random()
  const num = Min + Math.floor(Rand * Range) //舍去
  return num;
}
