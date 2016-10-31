import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('help-ticket', params.helpTicket_id);
  },

  actions: {
    destroyTicket(ticket) {
      ticket.destroyRecord();
    }
  }
});
