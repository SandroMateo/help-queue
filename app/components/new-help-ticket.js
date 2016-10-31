import Ember from 'ember';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),
  actions: {
    saveTicket() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        question: this.get('question'),
      };
      this.sendAction('saveTicket', params);
      this.set('name', '');
      this.set('location', '');
      this.set('question', '');
    }
  }
});
