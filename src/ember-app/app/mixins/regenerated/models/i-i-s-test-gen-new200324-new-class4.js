import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd1: DS.attr('number')
});

export let ValidationRules = {
  asd1: {
    descriptionKey: 'models.i-i-s-test-gen-new200324-new-class4.validations.asd1.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass4E', 'i-i-s-test-gen-new200324-new-class4', {
    asd1: attr('Asd1', { index: 0 })
  });

  modelClass.defineProjection('NewClass4L', 'i-i-s-test-gen-new200324-new-class4', {
    asd1: attr('Asd1', { index: 0 })
  });
};
