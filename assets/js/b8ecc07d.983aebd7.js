"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[61],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>d});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),c=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=c(e.components);return o.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=t,v=m["".concat(i,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(v,l(l({ref:a},u),{},{components:n})):o.createElement(v,l({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5576:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),t=(n(7294),n(3905));const r={sidebar_position:2},l="JavaScript Basico 2",s={unversionedId:"Javascript/basico-2",id:"Javascript/basico-2",title:"JavaScript Basico 2",description:"TIP",source:"@site/docs/Javascript/basico-2.md",sourceDirName:"Javascript",slug:"/Javascript/basico-2",permalink:"/documentacion/docs/Javascript/basico-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/basico-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"Javascript",previous:{title:"JavaScript Basico",permalink:"/documentacion/docs/Javascript/basico"},next:{title:"Objeto",permalink:"/documentacion/docs/Javascript/objeto"}},i={},c=[{value:"Interpolacion template string",id:"interpolacion-template-string",level:2},{value:"toUpperCase();",id:"touppercase",level:2},{value:"var vs let vs const",id:"var-vs-let-vs-const",level:2},{value:"Scope",id:"scope",level:3},{value:"const",id:"const",level:3},{value:"Array vs const",id:"array-vs-const",level:3},{value:"Metodos del Array",id:"metodos-del-array",level:2},{value:"push",id:"push",level:2},{value:"pop",id:"pop",level:2},{value:"shift",id:"shift",level:2},{value:"unshift",id:"unshift",level:2},{value:"confirm()",id:"confirm",level:2},{value:"Funciones an\xf3nimas",id:"funciones-an\xf3nimas",level:2},{value:"Diferencia declarativa vs Expresada:",id:"diferencia-declarativa-vs-expresada",level:3},{value:"Arrow functions",id:"arrow-functions",level:2},{value:"Abreviaciones:",id:"abreviaciones",level:3},{value:"Limitantes:",id:"limitantes",level:3},{value:"Arrow &amp; forEach()",id:"arrow--foreach",level:2}],u={toc:c};function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"javascript-basico-2"},"JavaScript Basico 2"),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"TIP\nPreocuparse por la eficiencia puede ser una distracci\xf3n. Es otro factor m\xe1s que complica el dise\xf1o del programa, y cuando est\xe1s haciendo algo que ya es dif\xedcil, esa cosa extra de la que preocuparte puede ser paralizante. Por lo tanto, empieza siempre por escribir algo que sea correcto y f\xe1cil de entender. Si te preocupa que sea demasiado lento, que normalmente no lo es, ya que la mayor\xeda del c\xf3digo simplemente no se ejecuta con la frecuencia suficiente para llevar una cantidad significativa de tiempo, puedes medirlo despu\xe9s y mejorarlo si es necesario."))),(0,t.kt)("h2",{id:"interpolacion-template-string"},"Interpolacion template string"),(0,t.kt)("p",null,"Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de m\xe1s de una l\xednea, y funcionalidades de interpolaci\xf3n de cadenas de caracteres."),(0,t.kt)("p",null,"Cuenta el espacio en blanco y habilita el uso de expresiones incrustadas."),(0,t.kt)("p",null,"Interpolaci\xf3n de expresiones"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'barra invertida "alt + 92" = Para saltos de linea'),(0,t.kt)("li",{parentName:"ul"},'acento grave "alt + 96"  = Para hacer plantillas')),(0,t.kt)("p",null,"Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de d\xf3lar y envueltos en llaves ${expresi\xf3n}. Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una funci\xf3n\nla expresi\xf3n es c\xf3digo js (variable , funci\xf3n , objeto , etc)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let nombreUsuario = "nombre";\nconsole.log("Bienvenido: \\n" + nombreUsuario + "\\n");\n')),(0,t.kt)("p",null,"\\n = Hace un salto de linea"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let nombreUsuario = "nombre";\nconsole.log(`Bienvenido:   :  \n ${nombreUsuario}`);\n')),(0,t.kt)("p",null,"Con la plantilla, usamos la interpolacion (${expresion})\n,Con la interpolaci\xf3n podemos poner variables u otro tipo de c\xf3digo js"),(0,t.kt)("p",null,"En este ejemplo lo mandamos a mayuscula con una funci\xf3n."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'\nlet nombreUsuario = "nombre";\nconsole.log(`Bienvenido:   :  \n ${nombreUsuario.toUpperCase()}`);\n\n')),(0,t.kt)("h2",{id:"touppercase"},"toUpperCase();"),(0,t.kt)("p",null,"toUpperCase() = Para convertir a mayuscula"),(0,t.kt)("p",null,"Como reconoce los espacios en blanco , no hace falta usar el \u201c+\u201d "),(0,t.kt)("p",null,"Ejemplo con el operador ternario:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let nombreUsuario = \"Nombre\"\nlet estado = false\n\nconsole.log(`\n${estado ? 'Bienvenido!' : 'Adi\xf3s!'} ${nombreUsuario}\n`);\n\n")),(0,t.kt)("h2",{id:"var-vs-let-vs-const"},"var vs let vs const"),(0,t.kt)("p",null,"var = todo lo hace de manera global. (no recomendado)."),(0,t.kt)("p",null,"Uno de los mayores problemas al declarar variables con var, es que puede sobrescribir las declaraciones de variables sin errores."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"var estado = true;\nvar estado = false;\nconsole.log(estado);\n\u2003\n\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"En una aplicaci\xf3n peque\xf1a, es posible que no se encuentre con este tipo de problema, pero cuando su c\xf3digo se agrande, puede sobrescribir accidentalmente una variable que no ten\xeda la intenci\xf3n de sobrescribir."))),(0,t.kt)("p",null,"let: Una variable con el mismo nombre solo se puede declarar una vez."),(0,t.kt)("p",null,"No se permite declarar dos veces la misma variable."),(0,t.kt)("p",null,"Tira error:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let estado = true;\nlet estado = false;\nconsole.log(estado);\n\n")),(0,t.kt)("p",null,"Pero let si deja sobrescribir el valor (NO EL NOMBRE DE LA VARIABLE)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let estado = true;\n estado = false;\nconsole.log(estado);\n\n")),(0,t.kt)("h3",{id:"scope"},"Scope"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"var estado = true\nif (estado) {\n    var estado = false\n}\nconsole.log(estado)\n\n")),(0,t.kt)("p",null,"Da false ya que la variable es global"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let estado = true\nif (estado) {\n    let estado = false\n}\nconsole.log(estado)\n\n")),(0,t.kt)("p",null,"Da true ya que en este ejemplo hay dos variable estado(uno en cada bloque)"),(0,t.kt)("p",null,"bloque = {  c\xf3digo }"),(0,t.kt)("p",null,"Tenemos un scope."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\n{ variable = x }\n{ variable = x }\n//Son dos variables diferente ya que est\xe1n existiendo en diferentes bloques\n\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},'TIP\nEn simples palabras el "scope de una variable" hace referencia al lugar donde esta va a vivir o podr\xe1 ser accesible.'))),(0,t.kt)("p",null,"El scope de un var es global"),(0,t.kt)("p",null,"El scope de un let esta limitado al bloque."),(0,t.kt)("p",null,"en for siempre es un let asi respeta el scope (solo existe en el for)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 10; i++) {\n}\nconsole.log(i)\n\n")),(0,t.kt)("h3",{id:"const"},"const"),(0,t.kt)("p",null,"const tiene todas las caracter\xedsticas incre\xedbles de let, con la ventaja adicional de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar."),(0,t.kt)("p",null,"Error:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const estado = true\nestado = false\nerror:\nfor (const i = 0; i < 10; i++) {\n    console.log(i)\n}\n\n")),(0,t.kt)("p",null,"Como el scope esta limitado al bloque, funciona:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const estado = true\nif (estado) {\n    const estado = false\n    console.log(estado)\n}\nconsole.log(estado)\n\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Algunos desarrolladores prefieren asignar todas sus variables usando const de forma predeterminada (me incluyo), a menos que sepan que necesitar\xe1n reasignar el valor. Solo en ese caso, usan let"))),(0,t.kt)("h3",{id:"array-vs-const"},"Array vs const"),(0,t.kt)("p",null,"Es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable mediante el uso const siguen siendo mutables. El uso de const solo evita la reasignaci\xf3n del identificador de variable."),(0,t.kt)("p",null,"Puede modificar lo que hay en el interior."),(0,t.kt)("p",null,"Error:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const miArray = []\nmiArray = ["nuevoElemento"]\nvalido\n')),(0,t.kt)("p",null,"Valido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const miArray = []\nmiArray[0] = ["nuevoElemento"]\nconsole.log(miArray)\n')),(0,t.kt)("h2",{id:"metodos-del-array"},"Metodos del Array"),(0,t.kt)("h2",{id:"push"},"push"),(0,t.kt)("p",null,"El m\xe9todo push() a\xf1ade uno o m\xe1s elementos al final de un array y devuelve la nueva longitud del array."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Banana"]\nfrutas.push("Sand\xeda")\nconsole.log(frutas)\n\n')),(0,t.kt)("h2",{id:"pop"},"pop"),(0,t.kt)("p",null,"El m\xe9todo pop() elimina el \xfaltimo elemento de un array y lo devuelve. Este m\xe9todo cambia la longitud del array."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Banana" , "Pera"]\nconst frutaEliminado = frutas.pop();\nconsole.log(frutas)\nconsole.log(frutaEliminado);\n\n')),(0,t.kt)("h2",{id:"shift"},"shift"),(0,t.kt)("p",null,"El m\xe9todo shift() elimina el primer elemento del array y lo retorna. Este m\xe9todo modifica la longitud del array."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Banana" , "Pera"]\nconst frutaEliminado = frutas.shift();\nconsole.log(frutas)\nconsole.log(frutaEliminado);\n\n')),(0,t.kt)("h2",{id:"unshift"},"unshift"),(0,t.kt)("p",null,"El m\xe9todo unshift() agrega uno o m\xe1s elementos al inicio del array, y devuelve la nueva longitud del array."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const frutas = ["Banana"]\nfrutas.unshift("Sand\xeda")\nconsole.log(frutas)\n\n')),(0,t.kt)("p",null,"Ejemplo: "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const frutas = []\nconst fruta = prompt('\ud83c\udf52 Feria Market \ud83c\udf49 \xbfqu\xe9 fruta desea comprar?')\n\nfrutas.push(fruta)\n\nwhile (confirm('\xbfDesea agregar otro elemento al \ud83d\uded2?')) {\n    const fruta = prompt('\xbfqu\xe9 fruta desea comprar?')\n    frutas.push(fruta)\n}\n\nconsole.log('Ustede compr\xf3: ')\nfor (let fruta of frutas) {\n    console.log(fruta)\n}\n\n")),(0,t.kt)("h2",{id:"confirm"},"confirm()"),(0,t.kt)("p",null,"confirm(): muestra una ventana de di\xe1logo con un mensaje opcional y dos botones, Aceptar (true) y Cancelar (false)."),(0,t.kt)("p",null,"Confirm devuelve un valor boolean , aceptar = true y cancelar = false."),(0,t.kt)("h2",{id:"funciones-an\xf3nimas"},"Funciones an\xf3nimas"),(0,t.kt)("p",null,"En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una funci\xf3n como argumento a otra funci\xf3n. En su lugar, creamos funciones inline (en l\xednea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar."),(0,t.kt)("p",null,"Funcion declarativa:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// declaro la funci\xf3n\nfunction numAleatorioRango(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\n\n// invoco la funci\xf3n\nconsole.log(numAleatorioRango(1, 11))\n\n")),(0,t.kt)("p",null,"Funcion expresada:"),(0,t.kt)("p",null,"Es anonima ya que esta expresada en una variable."),(0,t.kt)("p",null,"La funcion se va a una variable"),(0,t.kt)("p",null,"Es an\xf3nima porque la funci\xf3n no tiene ning\xfan nombre"),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const miNumero = function (min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\nconsole.log(miNumero(1, 11))\n\n")),(0,t.kt)("h3",{id:"diferencia-declarativa-vs-expresada"},"Diferencia declarativa vs Expresada:"),(0,t.kt)("p",null,"Una funci\xf3n expresada  No tiene hoisting"),(0,t.kt)("p",null,"Si la invocas y luego la declaras, te va a tirar un error."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"console.log(miNumero(1, 11))\nconst miNumero = function (min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\n\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"La forma correcta de definir una funci\xf3n var\xeda seg\xfan el comportamiento que esperemos de la misma: con las funciones declaradas, tenemos la seguridad de que siempre estar\xe1n disponibles en tiempo de ejecuci\xf3n. Con las funciones expresadas, tendremos que \xe9stas no son evaluadas hasta que el int\xe9rprete no alcance su posici\xf3n en el c\xf3digo, lo cual puede generar errores en arquitecturas muy anidadas."),(0,t.kt)("p",{parentName:"div"},"El hecho de que las funciones declarativas se eval\xfaen antes que las expresiones, pueden producir comportamientos no deseados cuando forman parte de condicionales. Para estos casos, el uso de las funciones expresadas garantiza que \xe9stas formar\xe1n parte del flujo general del programa, lo cual puede evitarnos sorpresa en determinados entornos."))),(0,t.kt)("h2",{id:"arrow-functions"},"Arrow functions"),(0,t.kt)("p",null,"Una expresi\xf3n de funci\xf3n flecha es una alternativa compacta a una expresi\xf3n de funci\xf3n tradicional"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Le borras la palabra function"),(0,t.kt)("li",{parentName:"ol"},"Luego de los parentesis  va la flecha (=>).\nQuedando:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nconst miNumero =  (min, max) => {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\n\nconsole.log(miNumero(1,10));\n\n")),(0,t.kt)("h3",{id:"abreviaciones"},"Abreviaciones:"),(0,t.kt)("p",null,"Si se retorna en una l\xednea , podemos quitar las llaves ({}) y la palabra return."),(0,t.kt)("p",null,"De esta forma el interpretre sabe que hay que retornar un valor"),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const miNumero =  (min, max) =>  Math.floor(Math.random() * (max - min)) + min;\n\nconsole.log(miNumero(1,10));\n\n")),(0,t.kt)("p",null,"Lo que se retorna, lo pueden encerrar entre par\xe9ntesis:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"}," const miNumero =  (min, max) => ( Math.floor(Math.random() * (max - min)) + min);\n\nconsole.log(miNumero(1,10));\n\n")),(0,t.kt)("p",null,"Si solo hay un par\xe1metro , se puede quitar los parentesis:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nconst miNumero =  max => ( Math.floor(Math.random() * (max - 1)) + 1);\n\nconsole.log(miNumero(11));\n\n")),(0,t.kt)("p",null,"Para colocar un par\xe1metro con un valor por defecto es con el signo igual (=)."),(0,t.kt)("p",null,"En este ejemplo el par\xe1metro max tiene el valor 100 por defecto:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nconst miNumero =  (min, max = 100) => ( Math.floor(Math.random() * (max - min)) + min);\n\nconsole.log(miNumero(1));\n\n")),(0,t.kt)("p",null,"Otros ejemplos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nconst miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);\n\nconsole.log(miNumero());\n\n")),(0,t.kt)("p",null,"El minimo es 10 y el max 100:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);\n\nconsole.log(miNumero(10));\n\n")),(0,t.kt)("p",null,"La palabra null/undefined para omitir el primer par\xe1metro."),(0,t.kt)("p",null,"El m\xednimo es 1 y el m\xe1ximo 50:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);\n\nconsole.log(miNumero(null , 50));\n\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);\n\nconsole.log(miNumero(undefined , 50));\n\n\n")),(0,t.kt)("p",null,"Los parametros con valores por defecto se puede aplicar a los otros tipos de funciones."),(0,t.kt)("h3",{id:"limitantes"},"Limitantes:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"No tiene sus propios enlaces a this o super y no se debe usar como m\xe9todos. (No se puede acceder a this o super)."),(0,t.kt)("li",{parentName:"ul"},"No tiene argumentos o palabras clave new.target."),(0,t.kt)("li",{parentName:"ul"},"No apta para los m\xe9todos call, apply y bind, que generalmente se basan en establecer un \xe1mbito o alcance"),(0,t.kt)("li",{parentName:"ul"},"No se puede utilizar como constructor")),(0,t.kt)("h2",{id:"arrow--foreach"},"Arrow & forEach()"),(0,t.kt)("p",null," El m\xe9todo forEach() ejecuta la funci\xf3n indicada una vez por cada elemento del array\n:::tip\nNo solo recorre arrays "),(0,t.kt)("p",null," forEach puede recorrer NodeList y muchos mas"),(0,t.kt)("p",null," :::"),(0,t.kt)("p",null,"El par\xe1metro es una funci\xf3n flecha (la que se va a ejecutar por cada elemento)"),(0,t.kt)("p",null,"La funci\xf3n flecha puede tener un par\xe1metro que va a representar el  valor de cada elemento del array:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let frutas = ["manzana", "sand\xeda", "pera"]\nfrutas.forEach(fruta => console.log(fruta))\n')),(0,t.kt)("p",null,"La funci\xf3n flecha puede tener un segundo par\xe1metro que va a representar el \xedndice del valor de cada elemento del array:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let frutas = ["manzana", "sand\xeda", "pera"]\nfrutas.forEach((fruta , index) => { \n    console.log(`${index}  :  ${fruta}  `)\n})\n\n')),(0,t.kt)("p",null,"La funci\xf3n flecha puede tener un tercer par\xe1metro que va a presentar el array entero:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let frutas = ["manzana", "sand\xeda", "pera"]\nfrutas.forEach((fruta , index , array) => { \n    console.log(`${index}  :  ${fruta}  `)\n    console.log(array);\n})\n\n\n')))}p.isMDXComponent=!0}}]);