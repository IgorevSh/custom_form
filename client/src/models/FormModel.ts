import FormRequest from "@/request/FormRequest";

export default class FormModel {
  static async getList(id?: string | null) {
    return await FormRequest.getListForm(id);
  }
  static async updateForm(id: string, content: string) {
    return await FormRequest.updateForm(id, content);
  }
  static async deleteForm(id: string) {
    return await FormRequest.deleteForm(id);
  }
  static async saveForm(id: string, content: string) {
    return await FormRequest.saveForm(id, content);
  }
}
