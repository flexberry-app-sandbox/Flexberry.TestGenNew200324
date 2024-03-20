import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as NewClass6Mixin
} from '../mixins/regenerated/models/i-i-s-test-gen-new200324-new-class6';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(NewClass6Mixin, Validations, {
});

defineProjections(Model);

export default Model;
