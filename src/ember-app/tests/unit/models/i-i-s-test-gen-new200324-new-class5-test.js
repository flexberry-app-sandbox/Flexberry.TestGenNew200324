import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-gen-new200324-new-class5', 'Unit | Model | i-i-s-test-gen-new200324-new-class5', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-gen-new200324-new-class4',
    'model:i-i-s-test-gen-new200324-new-class5',
    'model:i-i-s-test-gen-new200324-new-class6',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
