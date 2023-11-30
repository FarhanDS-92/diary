import { v4 as uuidv4 } from "uuid";

const days = [];

for (let i = 1; i < 32; i++) {
  let object = {};
  object.id = uuidv4();
  object.day = i;
  days.push(object);
}

export default days;
