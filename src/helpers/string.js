export const capitalizeFirstLet = (sentence) => {
  if (typeof sentence !== "string") return "";
  sentence = sentence.replace(/\s+/g, " ").trim();
  return sentence[0].toUpperCase() + sentence.slice(1);
};

export const capitalize = (sentence) => {
  if (typeof sentence !== "string") return "";
  sentence = sentence.replace(/\s+/g, " ").trim();
  return sentence
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
