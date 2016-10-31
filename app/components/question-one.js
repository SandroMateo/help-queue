import Ember from 'ember';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),

  actions: {
    moveToQuestionTwo() {
      this.get('showComponents').toggleQuestionOne();
      this.get('showComponents').toggleQuestionTwo();
    }
  }
});
