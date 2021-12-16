const path = require('path')
const fs = require('fs');
const assert = require('assert');
const ajv = require('ajv');


describe('Display Mapping Object', function () {
  describe('JSON Schema', function () {
    it('should validate the example object with "text" using JSON Schema Draft 7', function () {
      const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../../../schemas/display-mapping-object.json')));
      const data = JSON.parse(fs.readFileSync(__dirname + '/with-text.json'));
      const jv = new ajv({allErrors: true});
      const validate = jv.compile(schema);
      const valid = validate(data);

      assert.equal(null, validate.errors);
      assert.equal(true, valid);
    });

    it('should validate the example object with "path" using JSON Schema Draft 7', function () {
      const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../../../schemas/display-mapping-object.json')));
      const data = JSON.parse(fs.readFileSync(__dirname + '/with-path.json'));
      const jv = new ajv({allErrors: true});
      const validate = jv.compile(schema);
      const valid = validate(data);

      assert.equal(null, validate.errors);
      assert.equal(true, valid);
    });
  });
});
