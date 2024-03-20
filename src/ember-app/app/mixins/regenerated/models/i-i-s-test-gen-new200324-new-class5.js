import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd3: DS.attr('string'),
  newClass6: DS.belongsTo('i-i-s-test-gen-new200324-new-class6', { inverse: 'newClass5', async: false })
});

export let ValidationRules = {
  asd3: {
    descriptionKey: 'models.i-i-s-test-gen-new200324-new-class5.validations.asd3.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  newClass6: {
    descriptionKey: 'models.i-i-s-test-gen-new200324-new-class5.validations.newClass6.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass5E', 'i-i-s-test-gen-new200324-new-class5', {
    asd3: attr('Asd3', { index: 0 })
  });
};
