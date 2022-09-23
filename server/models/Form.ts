const {Schema,model} = require('mongoose')

const FormSchema =new Schema({
    id:{type:String,unique:true},
     content:{type:JSON}
})

module.exports = model('Form',FormSchema)
