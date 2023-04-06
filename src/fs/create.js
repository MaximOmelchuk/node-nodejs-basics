// const fs = require("fs");
import fs from "fs";

const create = async () => {
  const path = "./files/fresh.txt";
  const content = "I am fresh and young";

  fs.readFile(path, (err) => {
    if (err) {
      fs.writeFile(path, content, () => {});
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
