/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Bugtracker specific settings
 *
 */
class AlertingBugtrackerSettings {
  /**
   * Create a AlertingBugtrackerSettings.
   * @member {string} [callbackUrl]
   * @member {string} ownerName
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertingBugtrackerSettings
   *
   * @returns {object} metadata of AlertingBugtrackerSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertingBugtrackerSettings',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'AlertingBugtrackerSettings',
        className: 'AlertingBugtrackerSettings',
        modelProperties: {
          callbackUrl: {
            required: false,
            serializedName: 'callback_url',
            type: {
              name: 'String'
            }
          },
          ownerName: {
            required: true,
            serializedName: 'owner_name',
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

module.exports = AlertingBugtrackerSettings;
