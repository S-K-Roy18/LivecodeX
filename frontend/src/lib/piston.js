import axios from "axios";
import axiosInstance from "./axios";

const LANGUAGE_VERSIONS = {
  javascript: "javascript",
  python: "python",
  java: "java",
};

/**
 * Execute code using the backend API
 *
 * @param {string} language
 * @param {string} code
 * @returns {Promise<{success: boolean, output?: string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const selectedLanguage = LANGUAGE_VERSIONS[language];

    if (!selectedLanguage) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await axiosInstance.post("/code/execute", {
      language: selectedLanguage,
      source_code: code,
        }
      );

    return {
      success: response.data.success,
      output: response.data.output || "No output",
      error: response.data.error,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error.response?.data?.error ||
        error.message ||
        "Failed to execute code",
    };
  }
}

export function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
  };

  return extensions[language] || "txt";
}