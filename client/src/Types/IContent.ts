import { IField } from "@/Types/IField";

export interface IContent {
  id: string;
  content: IField[] | string;
  title: string;
  description: string;
}
