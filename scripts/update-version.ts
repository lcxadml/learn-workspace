import { readFile, writeFile } from "fs/promises";
import path from "path";
import { lcxDesignRoot } from "../internal/build/build-utils";
import chalk from "chalk";

const packPath = path.resolve(lcxDesignRoot, "package.json");

const main = async () => {
  const tagVersion = process.env.TAG_VERSION;
  const dataStr = await readFile(packPath, "utf-8");
  let data;
  try {
    data = JSON.parse(dataStr);
  } catch (error) {
    console.log("error:", error);
  }

  console.log("=====comp version data: ", data);

  if (!tagVersion) {
    return chalk.whiteBright.bold.redBright("版本号不存在！");
  }

  const [publishType, publishVersion] = tagVersion.split("-");
  if (!publishType || !publishVersion || publishType !== "comp") {
    return chalk.whiteBright.bold.redBright("Tag版本有误！");
  }

  data.version = publishVersion;

  await writeFile(packPath, JSON.stringify(data, null, 2));
  console.log("update comp version successful!", data?.version);
};

main();
