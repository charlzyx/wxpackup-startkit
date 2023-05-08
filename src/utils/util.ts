export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  // 注意 行末分号, 同样在保存的时候进行了修复
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // 长度超过 80个字符, 保存的同时进行了格式化修复
  // 刚才两个示例都是 formatter
  return (
    // 快速修复给我们指出了 这个代码可以优化 通过快捷键可以调起fix 菜单
    `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second]
      .map(formatNumber)
      .join(':')}`
  );
};

const formatNumber = (n: number) => {
  const s = n.toString();
  // 当然, 我们也可以这样通过注释来忽略这个报错
  // rome-ignore lint/style/useTemplate: <explanation>
  return s[1] ? s : '0' + s;
};
