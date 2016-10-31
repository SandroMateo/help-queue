import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveTicket(params) {
      var newHelpTicket = this.store.createRecord('help-ticket', params);
      newHelpTicket.save();
      this.transitionTo('help-ticket', newHelpTicket);
    }
  }
});
