import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),a={email:"",message:""};t.addEventListener("input",e=>{a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))});document.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.elements.email.value=e.email,t.elements.message.value=e.message,a.email=e.email,a.message=e.message)});t.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem("feedback-form-state"),t.reset(),a.email="",a.message=""});
//# sourceMappingURL=commonHelpers2.js.map