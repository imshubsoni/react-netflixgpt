import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openaiConfig = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openaiConfig;
