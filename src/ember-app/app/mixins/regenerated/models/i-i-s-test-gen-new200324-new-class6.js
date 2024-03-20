import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd2: DS.attr('boolean'),
  newClass4: DS.belongsTo('i-i-s-test-gen-new200324-new-class4', { inverse: null, async: false }),
  newClass5: DS.hasMany('i-i-s-test-gen-new200324-new-class5', { inverse: 'newClass6', async: false })
});

export let ValidationRules = {
  asd2: {
    descriptionKey: 'models.i-i-s-test-gen-new200324-new-class6.validations.asd2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  newClass4: {
    descriptionKey: 'models.i-i-s-test-gen-new200324-new-class6.validations.newClass4.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  newClass5: {
    descriptionKey: 'models.i-i-s-test-gen-new200324-new-class6.validations.newClass5.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass6E', 'i-i-s-test-gen-new200324-new-class6', {
    asd2: attr('Asd2', { index: 0 }),
    newClass4: belongsTo('i-i-s-test-gen-new200324-new-class4', 'New class4', {
      asd1: attr('Asd1', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'asd1' }),
    newClass5: hasMany('i-i-s-test-gen-new200324-new-class5', 'New class5', {
      asd3: attr('Asd3', { index: 0 })
    })
  });

  modelClass.defineProjection('NewClass6L', 'i-i-s-test-gen-new200324-new-class6', {
    asd2: attr('Asd2', { index: 0 }),
    newClass4: belongsTo('i-i-s-test-gen-new200324-new-class4', 'Asd1', {
      asd1: attr('Asd1', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
