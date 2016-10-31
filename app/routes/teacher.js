import Ember from 'ember';

export default Ember.Route.extend({
  showComponents: Ember.inject.service('show-hide'),

  model() {
    return this.store.findAll('help-ticket');
  },

  actions: {
    showTicketDetails(ticket) {
      console.log(ticket);
      this.transitionTo('help-ticket', ticket);
    }
  }

});
