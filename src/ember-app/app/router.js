import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-gen-new200324-new-class4-l');
  this.route('i-i-s-test-gen-new200324-new-class4-e',
  { path: 'i-i-s-test-gen-new200324-new-class4-e/:id' });
  this.route('i-i-s-test-gen-new200324-new-class4-e.new',
  { path: 'i-i-s-test-gen-new200324-new-class4-e/new' });
  this.route('i-i-s-test-gen-new200324-new-class6-l');
  this.route('i-i-s-test-gen-new200324-new-class6-e',
  { path: 'i-i-s-test-gen-new200324-new-class6-e/:id' });
  this.route('i-i-s-test-gen-new200324-new-class6-e.new',
  { path: 'i-i-s-test-gen-new200324-new-class6-e/new' });
});

export default Router;
