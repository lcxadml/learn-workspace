import { glob } from "fast-glob";
import { rollup } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { IconOut, lcxDesignIconRootReact } from "../../build-utils";

import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import typescript from "@rollup/plugin-typescript";
import * as path from "path";

const buildModules = async () => {
  const input = await glob("*.tsx", {
    cwd: lcxDesignIconRootReact,
    absolute: true,
    onlyFiles: true,
  });
  const bundle = await rollup({
    input,
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"], //允许我们加载第三方模块
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react", "@babel/preset-flow"],
        extensions: [".ts", ".tsx"],
      }),
      typescript(),
      esbuild(),
      commonjs(),
    ],

    external: [],
  });
  bundle.write({
    format: "esm",
    dir: path.resolve(IconOut, "es"),
    preserveModules: true,
    preserveModulesRoot: IconOut,
    entryFileNames: "[name].mjs",
  });

  bundle.write({
    format: "cjs",
    dir: path.resolve(IconOut, "lib"),
    preserveModules: true,
    preserveModulesRoot: IconOut,
    entryFileNames: "[name].cjs",
  });
};
buildModules();
