import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showComponents: Ember.inject.service('show-hide'),
  actions: {
    saveTicket() {
      console.log(this.get('name'));
      if(this.get('name') === undefined || this.get('question') === undefined) {
        alert('Please enter your names and questions');
      } else {
        var params = {
          name: this.get('name'),
          location: this.get('location'),
          question: this.get('question'),
          timestamp: moment().format('LL h:mm:ss a')
        };
        this.sendAction('saveTicket', params);
        this.get('showComponents').toggleTicketForm();
        this.get('showComponents').toggleTicketConfirmation();
        this.set('name', '');
        this.set('location', '');
        this.set('question', '');
      }
    }
  }
});
