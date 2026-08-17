import axios from "axios";

const ONLINE_COMPILER_URL =
  "https://api.onlinecompiler.io/api/run-code-sync/";

export const executeCode = async ({ compiler, code, input = "" }) => {
  try {
    const response = await axios.post(
      ONLINE_COMPILER_URL,
      {
        compiler,
        code,
        input,
      },
      {
        headers: {
          Authorization: process.env.ONLINE_COMPILER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }  catch (error) {
  console.error(
    "CODE EXECUTION ERROR:",
    error.response?.status,
    error.response?.data || error.message
  );

  throw new Error(
    error.response?.data?.error ||
    error.response?.data?.message ||
    "Code execution failed"
  );
}
};