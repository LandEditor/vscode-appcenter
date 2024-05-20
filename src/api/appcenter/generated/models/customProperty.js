/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CustomProperty.
 */
class CustomProperty {
  /**
   * Create a CustomProperty.
   * @member {string} name
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of CustomProperty
   *
   * @returns {object} metadata of CustomProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CustomProperty',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CustomProperty',
        className: 'CustomProperty',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 128,
              Pattern: '^[a-zA-Z][a-zA-Z0-9\-_]*$'
            },
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CustomProperty;
