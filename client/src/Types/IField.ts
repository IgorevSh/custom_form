export interface IField {
  type: string;
  value: string | boolean;
  required: boolean;
  name?: string;
  list: string[];
  default?: string | boolean;
}
