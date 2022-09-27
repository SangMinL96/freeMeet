export const openPopup = (url, popUpName) => {
  const width = 500;
  const height = 900;

  // 팝업을 가운데 위치시키기 위해 아래와 같이 값 구하기
  const _left = Math.ceil((global.window && window.screen.width - width) / 2);
  const _top = Math.ceil((global.window && window.screen.height - height) / 2);

  window.open(url, popUpName, "width=" + width + ", height=" + height);
};

export const isEven = (val: number) => {
  return val % 2 == 0;
};

export const empty = (data: any) => {
  if (
    data === "" ||
    !data ||
    data.length < 1 ||
    data === "null" ||
    data === "undefined"
  ) {
    return false;
  } else {
    return true;
  }
};

export const isJson = (str) => {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === `object`) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
};

export const isDate = (date) => {
  const newDate = new Date(!empty(date) ? "null" : date);
  return newDate instanceof Date && !isNaN(newDate.valueOf());
};

export function jsonParse(str) {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === `object`) {
      return JSON.parse(str);
    }
  } catch (err) {
    return str;
  }
  return str;
}

export function isArray(data) {
  try {
    if (Array.isArray(data)) {
      return data;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
}

export const parseText = (text, target) => {
  const regex = new RegExp(`${target}=([a-z0-9.,_-]*)`);
  return text?.match(regex)?.[1];
};
