import axios from "axios";

const api = "http://localhost:3000";

export default class FormRequest {
  static async saveForm(id: string, content: string) {
    return await axios.post(`${api}/form/save`, {
      id: id,
      content: content,
    });
  }
  static async deleteForm(id: string) {
    return await axios.delete(`${api}/form/save`, {
      params: {
        id,
      },
    });
  }
  static async updateForm(id: string, content: string) {
    return await axios.post(`${api}/form/update`, {
      id: id,
      content: content,
    });
  }
  static async getListForm(id: string | null = null) {
    return await axios.get(`${api}/form/list`, {
      params: { id: id },
    });
  }
}
