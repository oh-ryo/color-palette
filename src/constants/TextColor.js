const TextColor = (r, g, b) => {
  let textColor = "#000";
  if (r + g + b <= 400) {
    textColor = "#fff";
  }
  return textColor;
}

export default TextColor;