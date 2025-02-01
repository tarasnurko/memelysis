import { z } from "zod";

export const enumToArray = (values: {}): string[] => {
    return Object.values(values) as string[];
}

export const arrayToPromptPoints = (arr: string[]): string => {
    return arr.reduce((acc, item, index) => {
        if (index != 0) {
            acc += "\n"
        }

        return acc += `- ${item}`
    }, "")
}

// export const parseJsonWithSchema = <T>(json: string, schema: z.ZodObject<T>): { success: true, data: T } | { success: false, data: null } => {
//     try {
//         const parsedData = schema.parse(JSON.parse(json));

//         return { success: true, data: parsedData }
//     } catch (error) {
//         return { success: false, data: null }
//     }
// }

export const parseJsonWithSchema = <T>(json: string, schema: z.ZodType<T>): { success: true; data: T } | { success: false; data: null } => {
    try {
        const parsedData = schema.parse(JSON.parse(json));
        return { success: true, data: parsedData };
    } catch (error) {
        return { success: false, data: null };
    }
};