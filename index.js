
const axios = require("axios");
const _ = require("lodash");


class git_call_test{
   constructor(url){
     if (!_.isString(url)){
       throw Error("url must be as String")
     }

     this.url = url;
   }

   async newTask(conv_id, obj){
      return axios.post(this.url, {"ops":[{"type":"create",conv_id,obj,"action":"user",
        "data":{"url":"https://www.corezoid.com/api/1/json/public/524878/35e222c0a43bd7a717937f44e471fc050805d0b4","conv_id":"524878","obj":"task"},"ref":"12345"}]})
   }

}


module.exports = git_call_test;
