import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test-gen-new200324.caption'),
          title: i18n.t('forms.application.sitemap.test-gen-new200324.title'),
          children: [{
            link: 'i-i-s-test-gen-new200324-new-class4-l',
            caption: i18n.t('forms.application.sitemap.test-gen-new200324.i-i-s-test-gen-new200324-new-class4-l.caption'),
            title: i18n.t('forms.application.sitemap.test-gen-new200324.i-i-s-test-gen-new200324-new-class4-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-test-gen-new200324-new-class6-l',
            caption: i18n.t('forms.application.sitemap.test-gen-new200324.i-i-s-test-gen-new200324-new-class6-l.caption'),
            title: i18n.t('forms.application.sitemap.test-gen-new200324.i-i-s-test-gen-new200324-new-class6-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})