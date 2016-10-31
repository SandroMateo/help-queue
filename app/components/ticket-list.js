import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),
  actions: {
    showTicketDetails(ticket) {
      this.sendAction('showTicketDetails', ticket);
    }
  }
});
