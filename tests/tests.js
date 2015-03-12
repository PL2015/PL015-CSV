var assert = chai.assert;

suite('CSV - Creando las tablas ...', function() {
    setup(function(){
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            original = document.getElementById("original");
        }
        
    });

    test('Primera prueba: Creando tablas con una fila.', function() {
        var result;
        
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
        var result;
        
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
