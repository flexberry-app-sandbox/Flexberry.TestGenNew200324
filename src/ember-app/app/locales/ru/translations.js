import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test gen new200324',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test gen new200324',
          title: 'Test gen new200324'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-gen-new200324-new-class4-l': IISTestGenNew200324NewClass4LForm,
    'i-i-s-test-gen-new200324-new-class6-l': IISTestGenNew200324NewClass6LForm,
    'i-i-s-test-gen-new200324-new-class4-e': IISTestGenNew200324NewClass4EForm,
    'i-i-s-test-gen-new200324-new-class6-e': IISTestGenNew200324NewClass6EForm
  },

});

export default translations;
