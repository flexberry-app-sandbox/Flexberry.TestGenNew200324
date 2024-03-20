import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestGenNew200324NewClass4LForm from './forms/i-i-s-test-gen-new200324-new-class4-l';
import IISTestGenNew200324NewClass6LForm from './forms/i-i-s-test-gen-new200324-new-class6-l';
import IISTestGenNew200324NewClass4EForm from './forms/i-i-s-test-gen-new200324-new-class4-e';
import IISTestGenNew200324NewClass6EForm from './forms/i-i-s-test-gen-new200324-new-class6-e';
import IISTestGenNew200324NewClass4Model from './models/i-i-s-test-gen-new200324-new-class4';
import IISTestGenNew200324NewClass5Model from './models/i-i-s-test-gen-new200324-new-class5';
import IISTestGenNew200324NewClass6Model from './models/i-i-s-test-gen-new200324-new-class6';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-gen-new200324-new-class4': IISTestGenNew200324NewClass4Model,
    'i-i-s-test-gen-new200324-new-class5': IISTestGenNew200324NewClass5Model,
    'i-i-s-test-gen-new200324-new-class6': IISTestGenNew200324NewClass6Model
  },

  'application-name': 'Test gen new200324',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test gen new200324',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test gen new200324',
          title: 'Test gen new200324'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-gen-new200324': {
          caption: 'TestGenNew200324',
          title: 'TestGenNew200324',
          'i-i-s-test-gen-new200324-new-class4-l': {
            caption: 'New class4',
            title: ''
          },
          'i-i-s-test-gen-new200324-new-class6-l': {
            caption: 'New class6',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-gen-new200324-new-class4-l': IISTestGenNew200324NewClass4LForm,
    'i-i-s-test-gen-new200324-new-class6-l': IISTestGenNew200324NewClass6LForm,
    'i-i-s-test-gen-new200324-new-class4-e': IISTestGenNew200324NewClass4EForm,
    'i-i-s-test-gen-new200324-new-class6-e': IISTestGenNew200324NewClass6EForm
  },

});

export default translations;
