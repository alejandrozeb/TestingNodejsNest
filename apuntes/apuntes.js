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

*****************Review Doc JEST *******************

.toBe  uses object.is to test exact equality

.toEqual recursively checks every field of an object or array(values of an object)

.not  test the oposite example .not.toBe()

-----------truthiness-------------
distinguish between undefined, null and false

toBeNull       match null
toBeUndefined match undefined
toBeDefined oppposite of toBeUndeined
toBeTruthy match an if statement treats as true
toBeFalsy match an if statement treats as true
-------numbers-------------------------
.toBeGreaterThan();
.toBeGreaterThanOrEqual();
.toBeLessThan();
.toBeLessThanOrEqual();

toBe and toEqual are equivalent for numbers
.toBe(4);
.toEqual(4);

For float
.toBeCloseTo() dont wanna a test to depend on tiny roundubg error.

----Strings----------------------------
regulr expresions
.tomatch() 
example
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

-----Arrays and iterables--------------
toContain() verify if an array or iterable contains a particular item

---exception-----------
toThrow() also used for tehe exact error message or a regexp

have to used in a wrapping function

expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
expect(() => compileAndroidCode()).toThrow(/JDK/);

*********asynchronous************
-----Callbacks------------
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

done have to used for test

----Promises-----------------------
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
be sure to return of a promise

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});
catch an error in a promise

wait for an respond
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

or if rejected

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});




*/