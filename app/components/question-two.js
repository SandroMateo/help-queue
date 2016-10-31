import Ember from 'ember';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),
  actions: {
    moveToQuestionThree() {
      this.get('showComponents').toggleQuestionTwo();
      this.get('showComponents').toggleQuestionThree();
    }
  }
});
