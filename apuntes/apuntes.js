/* apuntes tutorial fazt */
/* 
npm i -D jest supertest
Jest Framework de testing
supertest realiza peticiones http

Jest usa modulos globales entonces es opcional importar
.spec .test para archivos de testing

set NODE_OPTIONS=--experimental-vm-modules &&  npx jest 
JEST pude ustilizar modulos

"test": "set NODE_OPTIONS=--experimental-vm-modules &&jest"
en package.json para dejar de escribir el comando largo

formas de  desarrollo con pruebas 
primero los test TDD testing driven desing
Bdd 

uuid
genera un id aleatorios


podemos anidar describe y declarar objetos en un scope de describe que comparten los test


--detectOpenHandles
muestra las tareas abiertas depues del request

se esta haciendo test a los end points pero tambien s epuede probar conexiones a bd, funciones, metodos.

Review Doc


*/