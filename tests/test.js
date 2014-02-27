test('isOdd()', function() {
    ok(isOdd(1), 'One is an odd number');
    ok(isOdd(3), 'Three is an odd number');
    ok(!isOdd(0), 'Zero is not odd number');
});