import Ember from 'ember';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),
  actions: {
    moveToTicketForm() {
      this.get('showComponents').toggleQuestionThree();
      this.get('showComponents').toggleTicketForm();
    }
  }
});
