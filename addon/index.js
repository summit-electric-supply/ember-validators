import { assert } from '@ember/debug';
import collection from '@summit-electric-supply/ember-validators/collection';
import confirmation from '@summit-electric-supply/ember-validators/confirmation';
import date from '@summit-electric-supply/ember-validators/date';
import dsError from '@summit-electric-supply/ember-validators/ds-error';
import exclusion from '@summit-electric-supply/ember-validators/exclusion';
import format from '@summit-electric-supply/ember-validators/format';
import inclusion from '@summit-electric-supply/ember-validators/inclusion';
import index from '@summit-electric-supply/ember-validators/index';
import length from '@summit-electric-supply/ember-validators/length';
import messages from '@summit-electric-supply/ember-validators/messages';
import number from '@summit-electric-supply/ember-validators/number';
import presence from '@summit-electric-supply/ember-validators/presence';

export function validate(type, ...args) {
  switch (type) {
    case 'collection':
      return collection(...args);
    case 'confirmation':
      return confirmation(...args);
    case 'date':
      return date(...args);
    case 'ds-error':
      return dsError(...args);
    case 'exclusion':
      return exclusion(...args);
    case 'format':
      return format(...args);
    case 'inclusion':
      return inclusion(...args);
    case 'index':
      return index(...args);
    case 'length':
      return length(...args);
    case 'messages':
      return messages(...args);
    case 'number':
      return number(...args);
    case 'presence':
      return presence(...args);
    default:
      assert(`Validator not found of type: ${type}.`, false);
  }
}
