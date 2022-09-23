// @ts-ignore
import Form from "../models/Form"

class FormService {
    async saveForm(id :string,content:string){
      return   await Form.create({id:id,content:content})
    }
    async updateForm(id:string,content:string){
        await Form.updateOne({ id: id }, { content: content });
    }
    async deleteForm(id:string){
        let formForChange=  await Form.deleteOne({
                id: id
            }
        );
        return  formForChange;
    }
    async getAllForms(id:string){
        let formForChange;
        if(id&&id!=='null'){
            formForChange = await Form.find({id:id});
        }else {
            formForChange = await Form.find();
        }
            return  formForChange;
    }

}
export default new FormService();
