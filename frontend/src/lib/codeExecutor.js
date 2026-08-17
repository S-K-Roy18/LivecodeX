import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const LANGUAGE_COMPILERS = {
  python: "python-3.14",
  java: "openjdk-25",
  c: "gcc-15",
  cpp: "g++-15",
};

export async function executeCode(language, code, input = "") {
  try {
    const compiler = LANGUAGE_COMPILERS[language];

    if (!compiler) {
      return {
        success: false,
        output: "",
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await axios.post(`${API_URL}/code/run`, {
      compiler,
      code,
      input,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Code execution error:",
      error.response?.data || error.message
    );

    return {
      success: false,
      output: "",
      error:
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Code execution failed",
    };
  }
}