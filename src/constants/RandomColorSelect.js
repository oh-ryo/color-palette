import TextColor from "./TextColor";

const RandomColorSelect = () => {
  const rDecimalNumber = Math.floor(Math.random() * 256);
  const gDecimalNumber = Math.floor(Math.random() * 256);
  const bDecimalNumber = Math.floor(Math.random() * 256);
  const rHexaDecimal = ("0" + rDecimalNumber.toString(16)).slice(-2);
  const gHexaDecimal = ("0" + gDecimalNumber.toString(16)).slice(-2);
  const bHexaDecimal = ("0" + bDecimalNumber.toString(16)).slice(-2);
  const RGB = `${rHexaDecimal}${gHexaDecimal}${bHexaDecimal}`;
  const colorStyle = [RGB, TextColor(rDecimalNumber, gDecimalNumber, bDecimalNumber)]
  return colorStyle;
}


export default RandomColorSelect;