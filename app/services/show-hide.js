import Ember from 'ember';

export default Ember.Service.extend({
  showQuestionOne: true,
  showQuestionTwo: false,
  showQuestionThree: false,
  showTicketForm: false,

  toggleQuestionOne() {
    if(this.get('showQuestionOne')) {
      this.set('showQuestionOne', false);
    } else {
      this.set('showQuestionOne', true);
    }
  },

  toggleQuestionTwo() {
    if(this.get('showQuestionTwo')) {
      this.set('showQuestionTwo', false);
    } else {
      this.set('showQuestionTwo', true);
    }
  },

  toggleQuestionThree() {
    if(this.get('showQuestionThree')) {
      this.set('showQuestionThree', false);
    } else {
      this.set('showQuestionThree', true);
    }
  },

  toggleTicketForm() {
    if(this.get('showTicketForm')){
      this.set('showTicketForm', false);
    } else {
      this.set('showTicketForm', true);
    }
  }
});
