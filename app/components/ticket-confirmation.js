import Ember from 'ember';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),

  actions: {
    deleteTicket(ticket) {
      this.get('showComponents').toggleTicketConfirmation();
      this.get('showComponents').toggleCloseTicket();
      this.sendAction('deleteTicket', ticket);
    }
  }
});
