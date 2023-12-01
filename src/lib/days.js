import { v4 as uuidv4 } from "uuid";

const days = [];
// used npm uuid to create unique keys that will be mapped, bcz a number less than 10 will be single digits this will make it difficult for validate -- as npm validate uses a YYYY-MM-DD format -- so had to store numbers less than 10 as a string inorder to show 01 for example --- that said also to show on calender
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
