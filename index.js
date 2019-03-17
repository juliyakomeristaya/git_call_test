
const axios = require("axios");
const _ = require("lodash");


class HelloWorld{
   constructor(url){
     if (!_.isString(url)){
       throw Error("url must be as String")
     }

     this.url = url;
   }

   async getScheme(obj_id, obj_type){
      return axios.post(this.url, {"ops":[{"type":"get", "obj":"obj_scheme", obj_id, obj_type}]})
   }

   getMe(){
     return "Привет, " + this.name
   }

}


module.exports = HelloWorld;
