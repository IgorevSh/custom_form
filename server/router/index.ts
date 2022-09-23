// @ts-ignore
import { Router } from "express";
const router:any =  Router;
// @ts-ignore
import FormsController from "../controller/FormsController.ts";

let setRout:any = new router();
setRout.post(
    "/save",FormsController.save);
setRout.get(
    "/list",FormsController.getList);
setRout.delete(
    "/save",FormsController.delete);
setRout.post(
    "/update",FormsController.update);


export default setRout;
