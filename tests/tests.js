var assert = chai.assert;

suite('csv', function() {
    setup(function(){
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            //original = document.getElementById('original');
            //finaltable = document.getElementById('finaltable');
        }
    });

    test('Primera prueba', function() {
        var a = "Hola";
        assert.equal(a, "Hola", 'El saludo');
    });
    test('Segunda prueba', function() {
        var b = "Hola 2";
        assert.equal(b, "Hola 2", 'El segundo saludo');
    });
});