import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-gen-new200324-new-class5', 'Unit | Serializer | i-i-s-test-gen-new200324-new-class5', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-gen-new200324-new-class5',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test-gen-new200324-new-class4',
    'model:i-i-s-test-gen-new200324-new-class5',
    'model:i-i-s-test-gen-new200324-new-class6',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
