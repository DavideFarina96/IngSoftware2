const index = require('../index');

test('gets current date in dd-mm-yy format', () =>{
	expect(index.GetDate(new Date("2000-12-01"))).toEqual("01-12-2000");
});