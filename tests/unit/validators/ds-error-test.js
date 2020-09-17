import EmberObject from '@ember/object';
import { Errors } from '@ember-data/model/-private';
import { module, test } from 'qunit';
import validate from '@summit-electric-supply/ember-validators/ds-error';
import processResult from '../../helpers/process-result';

let model, result;

module('Unit | Validator | ds-error', function() {
  test('works with empty object', function(assert) {
    assert.expect(1);

    model = EmberObject.create();

    result = validate(undefined, undefined, model, 'username');
    assert.equal(processResult(result), true);
  });

  test('it works', function(assert) {
    assert.expect(2);

    model = EmberObject.create({
      errors: Errors.create(),
      username: null
    });

    result = validate(undefined, undefined, model, 'username');
    assert.equal(processResult(result), true);

    model.get('errors').add('username', 'Username is not unique');

    result = validate(undefined, undefined, model, 'username');
    assert.equal(processResult(result), 'Username is not unique');
  });

  test('gets last message', function(assert) {
    assert.expect(2);

    model = EmberObject.create({
      errors: Errors.create(),
      username: null
    });

    result = validate(undefined, undefined, model, 'username');
    assert.equal(processResult(result), true);

    model.get('errors').add('username', 'Username is not unique');
    model.get('errors').add('username', 'Username is too long');

    result = validate(undefined, undefined, model, 'username');
    assert.equal(processResult(result), 'Username is too long');
  });
});
