import fs from "fs";
import { writeDataToFile } from "../common";

it("should write data to file ", () => {
  writeDataToFile("abc.json", { name: "Mahima", age: "22" });

  const doesFileExist = fs.existsSync("abc.json");
  const data = JSON.parse(fs.readFileSync("abc.json", "utf-8"));

  expect(doesFileExist).toEqual(true);
  expect(data.name).toEqual("Mahima");
});
