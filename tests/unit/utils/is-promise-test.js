import isPromise from '@summit-electric-supply/ember-validators/utils/is-promise';
import { module, test } from 'qunit';

module('Unit | Utility | is-promise', function() {
  test('correctly detects promise', function(assert) {
    assert.ok(isPromise(new Promise((resolve) => resolve())));
    assert.ok(isPromise(Promise.resolve()));
    assert.notOk(isPromise({}));
    assert.notOk(isPromise(null));
  });
});
