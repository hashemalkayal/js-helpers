import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS format for Node.js
      exports: "auto",
    },
    {
      file: "dist/index.mjs",
      format: "esm", // ES modules format for frontend frameworks
    },
  ],
  plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
};
