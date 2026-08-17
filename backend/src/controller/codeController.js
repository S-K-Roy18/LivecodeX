import { executeCode } from "../services/codeExecutionService.js";

export const runCode = async (req, res) => {
  try {
    const { compiler, code, input } = req.body;

    if (!compiler || !code) {
      return res.status(400).json({
        success: false,
        message: "Compiler and code are required",
      });
    }

    const result = await executeCode({
      compiler,
      code,
      input,
    });

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Code execution failed",
    });
  }
};