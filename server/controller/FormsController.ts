import FormService from "../service/form-service"
// @ts-ignore
import express  from 'express';
class FormsController{
   async save(req:express.Request, res:express.Response, next:express.NextFunction){
        const {id,content}=req.body;
        const form= await FormService.saveForm(id,content)
        return res.json(form);
    }
 async delete(req:express.Request, res:express.Response, next:express.NextFunction){
     const id:any=req.query.id;
     const form= await FormService.deleteForm(id);
     return res.json(form);
    }
 async  update(req:express.Request, res:express.Response, next:express.NextFunction){
        const {id,content}=req.body;
        const form= await FormService.updateForm(id,content)
        return res.json(form);
    }
   async getList(req:express.Request, res:express.Response, next:express.NextFunction){
       const id:any=req.query.id;
        const form= await FormService.getAllForms(id)
        return res.json(form);
    }
}
export default new FormsController();
