var assert = chai.assert;

suite('csv', function() {
    setup(function(){
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            original = document.getElementById("original");
            //finaltable = document.getElementById('finaltable');
            //result = document.getElementById('result');
        }
        
    });

    test('Primera prueba', function() {
        var a = "Hola";
        var result;
        //var original = document.getElementById("original");
        
        original.value = '1';
        calculate();
        
        result = document.getElementById('result');
        
        assert.deepEqual(result.innerHTML, '\n<tbody><tr> <td>1</td> </tr>\n</tbody>', 'Elemento unico.');
    });
    
    
    test('Segunda prueba', function() {
        var b = "Hola 2";
        assert.equal(b, "Hola 2", 'El segundo saludo');
    });
});