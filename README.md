# Ember Validators

[![build](https://img.shields.io/github/workflow/status/summit-electric-supply/ember-validators/CI)](https://github.com/summit-electric-supply/ember-validators/actions?query=workflow%3ACI)
[![npm](https://img.shields.io/npm/v/@summit-electric-supply/ember-validators)](https://www.npmjs.com/package/@summit-electric-supply/ember-validators)

A collection of EmberJS validators, forked from [ember-validators](https://github.com/offirgolan/ember-validators).

## Compatibility

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Installation

```shell
ember install @summit-electric-supply/ember-validators
```

## Helpful Links

- ### [Documentation](https://summit-electric-supply.github.io/ember-validators)
- ### [Changelog](CHANGELOG.md)

## Looking for help?

If it is a bug [please open an issue on GitHub](http://github.com/summit-electric-supply/ember-validators/issues).

## Usage

Validators can be individually imported and used as such

```js
import validatePresence from '@summit-electric-supply/ember-validators/presence';
import validateLength from '@summit-electric-supply/ember-validators/length';

validatePresence('foo', { presence: true });
validateLength('foo', { min: 1 });
```

or via the **validate** method provided

```js
import { validate } from '@summit-electric-supply/ember-validators';

validate('presence', 'foo', { presence: true });
validate('length', 'foo', { min: 1 });
```

## Validator Method Signature

Each validator has the following signature:

```js
function (value, options, model, attribute) {}
```

#### Parameters:

- value (**Mixed**):

  The value to validate

- options (**Object**):

  A mutable object that holds validation specific options

- model (**Object**):

  The model that is being validated

- attribute (**String**):

  The attribute that is being validated

#### Returns:

- **Boolean**

  `true` will be returned if the validation passed

- **Object**

  Validation failed and a message should be built with the given attributes

  - type (**String**):

    The message type

  - value (**Mixed**):

    The value that was validated

  - context (**Object**):

    The error message context

  - message (**String**):

    The error message. If this is specified, use this string as the error message instead of building one.
