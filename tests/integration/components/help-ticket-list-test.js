import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('help-ticket-list', 'Integration | Component | help ticket list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{help-ticket-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#help-ticket-list}}
      template block text
    {{/help-ticket-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
