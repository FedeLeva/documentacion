"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[425],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?t.createElement(v,r(r({ref:a},d),{},{components:n})):t.createElement(v,r({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7458:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const s={sidebar_position:7},r="Promesas, Async, Await , API",i={unversionedId:"Javascript/promesas",id:"Javascript/promesas",title:"Promesas, Async, Await , API",description:"CallBack",source:"@site/docs/Javascript/promesas.md",sourceDirName:"Javascript",slug:"/Javascript/promesas",permalink:"/documentacion/docs/Javascript/promesas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/promesas.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"Javascript",previous:{title:"Validaciones (Formulario)",permalink:"/documentacion/docs/Javascript/formulario"},next:{title:"AJAX Y FETCH",permalink:"/documentacion/docs/Javascript/ajax"}},l={},c=[{value:"CallBack",id:"callback",level:2},{value:"Manejar los Errores",id:"manejar-los-errores",level:3},{value:"Callback Hell",id:"callback-hell",level:2},{value:"Promesas",id:"promesas",level:2},{value:"Hell de las Promesas",id:"hell-de-las-promesas",level:2},{value:"setTimeout()",id:"settimeout",level:2},{value:"Tiene dos par\xe1metros.",id:"tiene-dos-par\xe1metros",level:3},{value:"async await",id:"async-await",level:2},{value:"Try catch",id:"try-catch",level:2},{value:"Manejar Errores",id:"manejar-errores",level:3},{value:"Promise.all",id:"promiseall",level:2},{value:"fetch API",id:"fetch-api",level:2},{value:"Metodos del response",id:"metodos-del-response",level:3},{value:"json()",id:"json",level:2},{value:"Completo",id:"completo",level:3},{value:"\xbfQu\xe9 son las APIs?",id:"qu\xe9-son-las-apis",level:2},{value:"APIs en JavaScript del lado cliente",id:"apis-en-javascript-del-lado-cliente",level:2},{value:"APIs de navegador m\xe1s comunes",id:"apis-de-navegador-m\xe1s-comunes",level:2},{value:"APIs populares de terceros",id:"apis-populares-de-terceros",level:2},{value:"\xbfQue es API REST?",id:"que-es-api-rest",level:2},{value:"\xbfQu\xe9 es Restful?",id:"qu\xe9-es-restful",level:2}],d={toc:c};function p(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promesas-async-await--api"},"Promesas, Async, Await , API"),(0,o.kt)("h2",{id:"callback"},"CallBack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"}," Es una funci\xf3n que se pasa a otra funci\xf3n como un argumento, que luego se invoca dentro de la funci\xf3n externa para completar alg\xfan tipo de rutina o acci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"Cada vez se ocupan menos."),(0,o.kt)("li",{parentName:"ul"},"Pasar una funci\xf3n como argumento."),(0,o.kt)("li",{parentName:"ul"},"Es una funci\xf3n que se pasa como argumento a otra funci\xf3n (externa).")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," Tener en cuenta los parametros de la funcion callback"))),(0,o.kt)("p",null,"Ejemplo de una funcion callback con 1 parametro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const posts = [\n    {\n        "userId": 1,\n        "id": 1,\n        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n        "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"\n    },\n    {\n        "userId": 1,\n        "id": 2,\n        "title": "qui est esse",\n        "body": "est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla"\n    },\n    {\n        "userId": 1,\n        "id": 3,\n        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",\n        "body": "et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut"\n    },\n];\n\n// Creamos una funcion flecha\nconst findPostById = (id, callback) => {\n    const post = posts.find((item) => item.id === id);\n\n    callback(post);\n};\n// La llamamos\nfindPostById(1, (post) => {\n    console.log(post);\n});\n\n')),(0,o.kt)("h3",{id:"manejar-los-errores"},"Manejar los Errores"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Problema")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si la ID buscada no est\xe1, aparece un error."))),(0,o.kt)("p",null,"Soluci\xf3n:"),(0,o.kt)("p",null,"Siempre en los callback se manda como primer argumento el error y en el segundo argumento la respuesta satisfactoria (funciono correctamente)."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Las funciones callback deben tener dos argumentos, por lo tanto."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Creamos una funcion flecha\nconst findPostById = (id, callback) => {\n    const post = posts.find((item) => item.id === id);\n    // Existe el post?\n    if (post) {\n        // Si lo encontro\n        callback(null , post);\n    } else {\n        // Si no lo encuentra\n        // En el error\n        callback("No se encontro el post con id " + id);\n    }\n    \n};\n// La llamamos\nfindPostById(4, (err , post) => {\n    // Si existe el error\n    if (err) {\n      return  console.log(err)\n    } \n    console.log(post);\n\n});\n\n')),(0,o.kt)("h2",{id:"callback-hell"},"Callback Hell"),(0,o.kt)("p",null,"Cuando hay muchas validaciones (callback anidados (error/correcto)) "),(0,o.kt)("p",null,"Cuando hay un callback dentro de otro callback y as\xed consecutivamente."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// La llamamos\nfindPostById(1, (err, post) => {\n    if (err) {\n        return console.log(err);\n    }\n    console.log(post);\n    findPostById(2, (err, post2) => {\n        if (err) {\n            return console.log(err);\n        }\n        console.log(post2);\n\n       findPostById(3, (err , post) => {\n           // Return de una linea\n           if (err) return console.log(err);\n           console.log(post)\n\n          findPostById(4, (err , post) => {\n            if (err) return console.log(err);\n            console.log(post)\n          })\n\n       })\n     \n\n    });\n});\n\n")),(0,o.kt)("h2",{id:"promesas"},"Promesas"),(0,o.kt)("p",null,"Para solucionar el callback hell , aparecieron las promesas."),(0,o.kt)("p",null,"Es una promesa, donde el otro espera dos cosas , que  cumpla la promesa o que no la cumpla."),(0,o.kt)("p",null,"En caso de que se cumpla la promesa sucede algo y en caso que no, sucede otra cosa."),(0,o.kt)("p",null,"Una Promise (promesa en castellano) es un objeto que representa la terminaci\xf3n(\xe9xito) o el fracaso de una operaci\xf3n as\xedncrona."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Creamos una funcion flecha\nconst findPostById = (id) => {\n  const post = posts.find(item=>item.id == id) ;\n   // Devolvemos una promesa (nueva)\n   // La promesa tiene un callback con dos argumentos , la respuesta sastifactoria y la negativa\n   return new Promise((sastifactoria , negativa) => {\n       // Si existe el post  \n       if (post) { \n           // Respuesta sastifactoria\n           // Tiene un argumento\n        sastifactoria(post)\n       } else {\n           // Respuesta negativa\n          negativa("no se encontro id   " + id);\n       }\n\n   })\n\n   \n  \n\n}\n\n// Llamamos a la funcion y devuelve una promesa\nconsole.log(findPostById(1));\n\n// Se usa la propiedad then para obtener la respuesta sastifactoria\n// Se requiere un callback en el then con los mismos argumentos que la respuesta sastifactoria\nfindPostById(1).then(post => console.log(post));\n\n    \n// Se usa la propiedad catch para obtener la respuesta negativa , la cual tambien necesita un callback con los mismos argumentos que la respuesta negativa.\nfindPostById(4).then(post => console.log(post)).catch(e => {\n console.log(e);\n})\n\n')),(0,o.kt)("p",null,"Se puede hacer de esta manera tambien:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  // Creamos una funcion flecha\n  // Devolvemos una promesa (resolve = respuesta sastifactoria , reject = respuesta negativa)\n // Devuelve una promesa la funci\xf3n flecha\n  const findPostById = (id) => new Promise((resolve,reject) => {\n    const post = posts.find(item=>item.id == id) ;\n    // Si existe el post\n    if (post) { \n                // Respuesta sastifactoria\n                 // Tiene un argumento\n                resolve(post)\n               } else {\n                   // Si no existe el post\n                   // Respuesta negativa\n                   // Tiene un argumento\n                  reject("no se encontro id   " + id);\n               }\n  })\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si no se necesita par\xe1metros, se devuelve directamente la promesa sin necesidad de la funci\xf3n flecha"))),(0,o.kt)("h2",{id:"hell-de-las-promesas"},"Hell de las Promesas"),(0,o.kt)("p",null,"Muchas promesas anidadas"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Como se puede ver, el then() puede devolver una promesa y se trata con otro then\n// un catch es suficiente para tratar todas las respuestas negativas\nfindPostById(1)\n    .then(post => {\n        console.log(post)\n        return findPostById(2)\n    }).then(post => {\n        console.log(post);\n        return findPostById(3)\n    }).then(post => {\n        console.log(post);\n        return findPostById(4)\n\n    }).then(post => {\n        console.log(post)\n    })\n    .catch(e => {\n        console.log(e);\n    })\n\n")),(0,o.kt)("h2",{id:"settimeout"},"setTimeout()"),(0,o.kt)("h3",{id:"tiene-dos-par\xe1metros"},"Tiene dos par\xe1metros."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Una funci\xf3n"),(0,o.kt)("li",{parentName:"ol"},"El tiempo en milisegundo")),(0,o.kt)("p",null,"setTimeout ejecutara la funci\xf3n especificada (1 parametro)  despu\xe9s de x(2 par\xe1metro) tiempo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// La funcion se ejecuta despues de 2 segundos\nsetTimeout(() => {\n            const post = posts.find((item) => item.id === id);\n          if  (post)  {\n               resolve(post) \n           } else {reject("No encontrado por id: " + id);} \n        }, 2000);\n\n')),(0,o.kt)("h2",{id:"async-await"},"async await"),(0,o.kt)("p",null,"Vamos a suponer que demora un tiempo tratar una base de datos."),(0,o.kt)("p",null,"Para eso usaremos la funci\xf3n setTimeout()."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const findPostById = (id) =>\n    new Promise((resolve, reject) => {\n        setTimeout(() => {\n            const post = posts.find((item) => item.id === id);\n          if  (post)  {\n               resolve(post) \n           } else {reject("No encontrado por id: " + id);} \n        }, 2000);\n    });\n\n    \nfindPostById(1)\n.then((post) => console.log(post))\n.catch((e) => console.log(e));\n\n')),(0,o.kt)("p",null,"Las promesas son as\xedncronas. Se empiezan a ejecutar sin detener el c\xf3digo."),(0,o.kt)("p",null,"No me voy a quedar esperando a que el otro cumpla la promesa o no."),(0,o.kt)("p",null,"Mientras se espera una respuesta (de la promesa), se sigue ejecutando el resto."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const findPostById = (id) =>\n    new Promise((resolve, reject) => {\n        setTimeout(() => {\n            const post = posts.find((item) => item.id === id);\n          if  (post)  {\n               resolve(post) \n           } else {reject("No encontrado por id: " + id);} \n        }, 2000);\n    });\n\n    \nfindPostById(1)\n.then((post) => console.log(post))\n.catch((e) => console.log(e));\n\nconsole.log("fin del codigo");\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Regla 1")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hay que utilizar funciones async."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"el await no puede funcionar sin un async."),(0,o.kt)("p",{parentName:"div"},"con la palabra await se espera a que se ejecute la instrucci\xf3n(promesa) para luego seguir con el resto del c\xf3digo."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const buscar = async (id) => {\n    const post = await findPostById(id);\n    console.log(post)\n}\nbuscar(1);\n\nconsole.log("fin del codigo");\n\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Ojo")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"el await debe estar adentro de un async para funcionar."),(0,o.kt)("p",{parentName:"div"},"el async y el await funciona solo con promesas"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"async : La declaraci\xf3n de funci\xf3n async define una funci\xf3n as\xedncrona"),(0,o.kt)("li",{parentName:"ul"},"await: El operador await es usado para esperar a una Promise. S\xf3lo puede ser usado dentro de una funci\xf3n async function.")),(0,o.kt)("h2",{id:"try-catch"},"Try catch"),(0,o.kt)("h3",{id:"manejar-errores"},"Manejar Errores"),(0,o.kt)("p",null,"Se utiliza try catch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try { \nintenta ejecutar esto\n} catch (error ) { \nSi falla lo que contiene el try, se ejecuta esto\n}\n\n")),(0,o.kt)("p",null,"se puede usar el finally a lo ultimo para ejecutar un c\xf3digo al final (se ejecuta si o si)"),(0,o.kt)("p",null,"Se usa para la barra de cargar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const buscar = async (id) => {\n    let loading = true;\n    try {\n        const post = await findPostById(id);\n    } catch (error) {\n        console.log(error)\n    } finally {\n        console.log("se ejecuta si o si");\nloading = false;\n    }\n   \n   \n}\nbuscar(4);\n\nconsole.log("fin del codigo");\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const buscar = async () => {\n    try {\n        const postUno = await findPostById(1);\n        const postDos = await findPostById(2);\n\n//est\xe1 demorando 4 segundos \n        console.log(postUno.title, postDos.title);\n    } catch (error) {\n        console.log(error);\n    }\n};\n\nbuscar();\n\n")),(0,o.kt)("h2",{id:"promiseall"},"Promise.all"),(0,o.kt)("p",null,"Pero si quieres que demore menos, cuando estas esperando promesa que no dependen entre ellas."),(0,o.kt)("p",null,"para eso se utiliza Promise.all que recibe las promesas que se quieren ejecutar."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  const buscar = async () => {\n        try {\n            // Ejecutamos dos promesas juntas y devuelve los resultados en un array\n            const resPosts = await Promise.all([\n                findPostById(1) , findPostById(2)\n            ])\n          \n    \n            \n            console.log(resPosts);\n            console.log(resPosts[0]);\n            console.log(resPosts[1]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    \n    buscar();\n\n    console.log("final del codigo");\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"el await sirve para esperar a una promesa."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Advertencia ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Solo te manda la respuesta (te devuelve el array) si todas las promesas funcionan correctamente."),(0,o.kt)("p",{parentName:"div"},"Si uno falla, va a saltar al catch y no va a seguir con el c\xf3digo en cuesti\xf3n (no devuelve el array)."))),(0,o.kt)("h2",{id:"fetch-api"},"fetch API"),(0,o.kt)("p",null,"La API Fetch proporciona una interfaz para recuperar recursos (incluso a trav\xe9s de la red). Resultar\xe1 familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de caracter\xedsticas m\xe1s potente y flexible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El m\xe9todo fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar."),(0,o.kt)("li",{parentName:"ul"},"Devuelve una Promise que contiene la Response"),(0,o.kt)("li",{parentName:"ul"},"Una vez que Response es recuperada, hay varios m\xe9todos disponibles para definir cu\xe1l es el contenido del cuerpo y como se debe manejar.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[API que vamos a usar en los ejemplos](https://jsonplaceholder.typicode.com/)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// lA url CON TODOS LOS POST\n// const url = 'https://jsonplaceholder.typicode.com/posts';\n\n// La url con el post que tiene la id 1\nconst url = 'https://jsonplaceholder.typicode.com/posts/1';\n\n//El fetch recibe la url del recurso y devuelve una promesa\nfetch(url)\n    // Te muestra el response\n    .then(res => console.log(res));\n\n")),(0,o.kt)("h3",{id:"metodos-del-response"},"Metodos del response"),(0,o.kt)("h2",{id:"json"},"json()"),(0,o.kt)("p",null,"Te transforma la respuesta en json y te devuelve una promesa(con el contenido de la respuesta en formato json)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//El fetch recibe la url del recurso y devuelve una promesa\nfetch(url)\n    // Te muestra el response\n    .then(res => res.json())\n    .then(data => console.log(data));\n\n")),(0,o.kt)("h3",{id:"completo"},"Completo"),(0,o.kt)("p",null,"Tiene el catch(maneja los errores) y el finally(se ejecuta al final)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'//El fetch recibe la url del recurso y devuelve una promesa\nfetch(url)\n    // Te muestra el response\n    .then(res => res.json())\n    .then(data => console.log(data))\n    .catch((e)=> console.log(e))\n    .finally(() => console.log("finalizo"));\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Podemos acceder a la url porque es una petici\xf3n GET."),(0,o.kt)("p",{parentName:"div"},"Podes configurar las cabeceras, m\xe9todos, verbos, etc con fetch pero por defecto lo hace GET."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const url = 'https://jsonplaceholder.typicode.com/posts/1';\n\nconst buscarID = async (id) => {\n    try {\n        // Es importante el await porque data depende de res\n        const res = await fetch(url);\n        const data = await res.json();\n        console.log(data);\n\n    } catch (e) {\n           console.log(e);\n    }\n}\n\nbuscarID();\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const url = 'https://jsonplaceholder.typicode.com/posts/';\n\nconst buscarID = async (id) => {\n    try {\n        // Es importante el await porque data depende de res\n        const res = await fetch(url + id);\n        const data = await res.json();\n        console.log(data);\n\n    } catch (e) {\n           console.log(e);\n    }\n}\n\nbuscarID(2);\n\n")),(0,o.kt)("h2",{id:"qu\xe9-son-las-apis"},"\xbfQu\xe9 son las APIs?"),(0,o.kt)("p",null,"Interfaces de Programacion de Aplicaciones (APIs por sus siglas en ingl\xe9s)"),(0,o.kt)("p",null,"API son construcciones disponibles en los lenguajes de programaci\xf3n que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el c\xf3digo m\xe1s complejo para proveer una sintaxis m\xe1s f\xe1cil de usar en su lugar."),(0,o.kt)("p",null,"Si quisieras programar gr\xe1ficos 3D, ser\xeda mucho m\xe1s facil hacerlo usando una API escrita en un lenguaje de alto nivel como JavaScript o Python, en lugar de intentar escribir c\xf3digo de bajo nivel (por ejemplo: C o C++) que controle directamente la GPU del equipo u otras funciones gr\xe1ficas"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"API")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Es cuando queremos conectarnos a un recurso."),(0,o.kt)("p",{parentName:"div"},"A trav\xe9s del \u201crecurso\u201d, obtenemos funcionalidades que pueden estar escrito en otro lenguaje."),(0,o.kt)("p",{parentName:"div"},"Esas funcionalidades puede usar utilizar Google maps , habilitar la c\xe1mara del tel\xe9fono , brindar informaci\xf3n o manipularla  , etc."),(0,o.kt)("p",{parentName:"div"},"API es una forma de comunicar dos recursos con un est\xe1ndar."))),(0,o.kt)("h2",{id:"apis-en-javascript-del-lado-cliente"},"APIs en JavaScript del lado cliente"),(0,o.kt)("p",null,"JavaScript del lado cliente, particularmente, tiene muchas APIs disponibles \u2014 estas no son parte del lenguaje en s\xed, sino que est\xe1n construidas sobre el n\xfacleo de este lenguaje de programaci\xf3n, proporcion\xe1ndote superpoderes adicionales para usar en tu c\xf3digo. Por lo general, se dividen en dos categor\xedas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las APIs de navegador: est\xe1n integradas en tu navegador web, Por ejemplo, la API de Geolocalizaci\xf3n proporciona algunas construcciones simples de JavaScript para obtener datos de ubicaci\xf3n con los que, por ejemplo, trazar tu ubicaci\xf3n en un mapa de Google. Realmente, el navegador est\xe1 haciendo uso de c\xf3digos de bajo nivel complejos en segundo plano (por ejemplo, C++) para comunicarse con el hardware GPS del dispositivo (o lo que est\xe9 disponible para determinar los datos de posici\xf3n), recuperar datos de posici\xf3n y devolverlos al entorno del navegador para su uso en tu c\xf3digo. Pero una vez m\xe1s, la API se encarga de abstraer esta complejidad.\nEj: fetch API , DOM , para acceder a la c\xe1mara , etc."),(0,o.kt)("li",{parentName:"ul"},"Las APIs de terceros: no est\xe1n inclu\xeddas por defecto en el navegador, y por lo general es necesario obtener el c\xf3digo e informaci\xf3n desde alg\xfan lugar de la Web. Por ejemplo, la API de Twitter permite hacer cosas como mostrar tus \xfaltimos tweets en un sitio web.\nEs la que accedemos a sus recursos\nEj: La url que usamos, ")),(0,o.kt)("h2",{id:"apis-de-navegador-m\xe1s-comunes"},"APIs de navegador m\xe1s comunes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"APIs para manipular documentos cargados en el navegador. El ejemplo m\xe1s obvio es la API DOM"),(0,o.kt)("li",{parentName:"ul"},"APIs que obtienen datos del servidor, comunmente usadas para actualizar peque\xf1as secciones de una p\xe1gina web. Fetch API "),(0,o.kt)("li",{parentName:"ul"},"Las APIs para dibujar y manipular graficos: Las m\xe1s populares son Canvas y WebGL"),(0,o.kt)("li",{parentName:"ul"},"APIS de audio y v\xeddeo como HTMLMediaElement, la Web Audio API, y WebRTC"),(0,o.kt)("li",{parentName:"ul"},"Las APIs de dispositivos: geolocalizaci\xf3n, notificaciones de sistema, vibraci\xf3n de hardware, etc"),(0,o.kt)("li",{parentName:"ul"},"Las APIS de almacenamiento en el lado del cliente: Web Storage API (sessionStorage, localStorage), IndexedDB API")),(0,o.kt)("h2",{id:"apis-populares-de-terceros"},"APIs populares de terceros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google maps"),(0,o.kt)("li",{parentName:"ul"},"Facebook, Twitter, Instagram, Discord, Youtube, etc"),(0,o.kt)("li",{parentName:"ul"},"jsonplaceholde")),(0,o.kt)("h2",{id:"que-es-api-rest"},"\xbfQue es API REST?"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"REST")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Es un est\xe1ndar"),(0,o.kt)("p",{parentName:"div"},"Un paso a paso que hay que seguir para que sea una API REST."))),(0,o.kt)("p",null,'REST: "Representational State Transfer" o traducido a "Transferencia de presentaci\xf3n de estado".'),(0,o.kt)("p",null,"Cuando queremos comunicar nuestro mundo del Frontend con el Backend (por ejemplo con Node.js), necesitamos alguna t\xe9cnica. "),(0,o.kt)("p",null,"Aqu\xed es donde nosotros podemos construir nuestra propia API para que nuestras aplicaciones se comuniquen de manera efectiva."),(0,o.kt)("p",null,"Para que la comunicaci\xf3n no sea un despelote existe el t\xe9rmino de REST, que es un estandar para la construcci\xf3n de APIS. una t\xe9cnica de arquitectura de software usada para construir APIs que permitan comunicar a nuestro servidor con sus clientes usando el protocolo HTTP mediante URIs lo suficientemente inteligentes para poder satisfacer la necesidad del cliente."),(0,o.kt)("p",null,"Por ende API REST en simples palabras ser\xeda: Una forma de entregar recursos para su utilizaci\xf3n (comunicaci\xf3n) estandarizado y basado en arquitectura REST."),(0,o.kt)("p",null,"Para que sea REST:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REST es STATELESS: TOKEN para cada petici\xf3n realizada a la API. (trabaja con token)"),(0,o.kt)("li",{parentName:"ul"},"Crea URIs \xfanicas que permiten al cliente entender y utilizar lo que est\xe1 exponiendo. api.anexsoft.com/users (tiene uris \xfanicas)"),(0,o.kt)("li",{parentName:"ul"},"Tiene que responder a verbos Http: GET, POST, PUT, DELETE (trabajo con los verbos conocidos)")),(0,o.kt)("h2",{id:"qu\xe9-es-restful"},"\xbfQu\xe9 es Restful?"),(0,o.kt)("p",null,"REST es el concepto, RESTFul es la implementaci\xf3n y al crear un RESTFul creamos una API, la cual una API es un conjunto de funciones o procedimientos para que sea utilizado por otro software."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Restful")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si ya esta en producci\xf3n y ya se puede comunicar con otros software , es una API Restful"))))}p.isMDXComponent=!0}}]);