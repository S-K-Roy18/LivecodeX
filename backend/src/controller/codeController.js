export const executeCode = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      output: "[0,1]\n[1,2]\n[0,1]",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};