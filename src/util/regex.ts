export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


export const setMoneyMask = (value:string) => {
  if (!value) return "";
  let v = value.replace(/\D/g, "");
  v = (Number(v) / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  return "R$ " + v;
  }
  
export const removeMoneyMask = (value:string)=> {
  const noMaskValue = value?.replace(/[^0-9]/g, '');
  const floatValue = parseFloat(noMaskValue) / 100;
  return parseFloat(floatValue?.toFixed(2));
}

export const setWeightMask = (value:string)=> {
  if (!value) return "";
  let v = value.replace(/\D/g, "");
  v = (Number(v) / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  return 'Kg ' + v  ;
}
  