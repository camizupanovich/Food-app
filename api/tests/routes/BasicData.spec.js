const { capitalizeFirstLetter } = require('../../src/controllers/BasicData')

describe ('capitalizeFirstLetter(str)', function(){
    it ('Should return a the first string to capitalize first letter', function(){
        expect(capitalizeFirstLetter('food')).toBe('Food');
        expect(capitalizeFirstLetter('food to capitalize')).toBe('Food to capitalize');
    });
    }
);