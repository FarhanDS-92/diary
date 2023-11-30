import { v4 as uuidv4 } from "uuid";

const days = [];

for (let i = 1; i < 32; i++) {
  let object = {
    id: uuidv4(),
  };

  if (i < 10) {
    let stringI = `0${i}`;
    object.day = stringI;
  } else {
    object.day = i;
  }

  days.push(object);
}

export default days;
