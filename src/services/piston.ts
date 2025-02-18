import axios from "axios";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language: string, version: string, sourceCode: any) => {
    const response = await API.post("/execute", {
        language: language,
        version: version,
        files: [
            {
                content: sourceCode,
            },
        ],
    });
    return response.data;
};
