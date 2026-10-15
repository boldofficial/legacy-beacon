import content from "./services.json";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  introduction: string;
  uses: string[];
  considerations: string[];
};

export const services: Service[] = content;
