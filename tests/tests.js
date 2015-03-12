var assert = chai.assert;

suite('CSV - Creando las tablas ...', function() {
    setup(function(){
        var result;
    
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            original = document.getElementById("original");
        }
        
    });

    test('Primera prueba: Creando tablas con una fila.', function() {
        original.value = '1';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML
                        , '\n<tbody><tr> <td>1</td> </tr>\n</tbody>'
                        , 'Elemento unico.');
        
        original.value = '1, 2';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML
                        , '\n<tbody><tr> <td>1</td>  <td> 2</td> </tr>\n</tbody>'
                        , 'Dos elementos.');
        
    });
    
    
    test('Segunda prueba: Creando tablas con varias filas.', function() {
        original.value = '1\n2';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML
                        , '\n<tbody><tr> <td>1</td> </tr>\n<tr> <td>2</td> </tr>\n</tbody>'
                        , 'Elemento unico.');
        
        original.value = '1, 2\n3, 4';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML
                        , '\n<tbody><tr> <td>1</td>  <td> 2</td> </tr>\n<tr> <td>3</td>  <td> 4</td> </tr>\n</tbody>'
                        , 'Dos elementos.');
    });
});

suite('CSV - Comprobando funcionalidades ...', function() {
    setup(function(){
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            original = document.getElementById("original");
        }
        
    });

    test('Tercera prueba: Comprobando el uso de localStorage.', function() {
        if (window.localStorage)
            assert.deepEqual(localStorage.original, '1, 2\n3, 4');
    });
    
    
});


suite('CSV - Comprobando deteccion de errores ...', function() {
    setup(function(){
        var result;
        
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            original = document.getElementById("original");
        }
        
    });

    test('Cuarta prueba: Comprobando la aparicion de error cuando el texto de entrada esta vacio.', function() {
        original.value = '';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML
                        , '\n'
                        , 'Error - Sin texto');
    });
    
    test('Quinta prueba: Comprobando la aparicion de error cuando una linea del texto no tiene el numero esperado de elementos.', function() {
        original.value = '1,2\n1';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML
                        , '\n<tbody><tr> <td>1</td>  <td>2</td> </tr>\n<tr class="error"> <td>1</td> </tr>\n</tbody>'
                        , 'Error - numero erroneo de entradas');
    });
});