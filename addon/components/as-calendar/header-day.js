import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':as-calendar-header-day'],
  calendar: null,
  day: null,

  isSelected: Ember.computed('day.isSelected', function(key, value) {
    if (arguments.length > 1) {
      this.sendAction('onToggleSelection', {
        day: this.get('day'),
        value: value
      });
    }

    return this.get('day.isSelected');
  }),

  checkboxId: Ember.computed('elementId', function() {
    return `${this.get('elementId')}-checkbox`;
  })
});