function repeat(num, string) {
  let phrase = '';
  for (let i = 0; i < num; i++) {
    phrase += string;
  };
  return phrase;
};

console.log(repeat(3, 'ha')); // 'hahaha'