/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a AppResponse.
 * @extends models['BasicAppResponse']
 */
class AppResponse extends models['BasicAppResponse'] {
  /**
   * Create a AppResponse.
   * @member {string} appSecret A unique and secret key used to identify the
   * app in communication with the ingestion endpoint for crash reporting and
   * analytics
   * @member {object} [azureSubscription]
   * @member {string} [azureSubscription.subscriptionId] The azure subscription
   * id
   * @member {string} [azureSubscription.tenantId] The tenant id of the azure
   * subscription belongs to
   * @member {string} [azureSubscription.subscriptionName] The name of the
   * azure subscription
   * @member {boolean} [azureSubscription.isBilling] If the subscription is
   * used for billing
   * @member {boolean} [azureSubscription.isBillable] If the subscription can
   * be used for billing
   * @member {string} platform The platform of the app. Possible values
   * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
   * 'Unity', 'Xamarin', 'Unknown'
   * @member {string} origin The creation origin of this app. Possible values
   * include: 'appcenter', 'hockeyapp', 'codepush'
   * @member {string} [createdAt] The created date of this app
   * @member {string} [updatedAt] The last updated date of this app
   * @member {array} [memberPermissions] The permissions of the calling user
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AppResponse
   *
   * @returns {object} metadata of AppResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppResponse',
      type: {
        name: 'Composite',
        className: 'AppResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          iconUrl: {
            required: false,
            serializedName: 'icon_url',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          os: {
            required: true,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          owner: {
            required: true,
            serializedName: 'owner',
            type: {
              name: 'Composite',
              className: 'Owner'
            }
          },
          appSecret: {
            required: true,
            serializedName: 'app_secret',
            type: {
              name: 'String'
            }
          },
          azureSubscription: {
            required: false,
            serializedName: 'azure_subscription',
            type: {
              name: 'Composite',
              className: 'AzureSubscriptionResponse'
            }
          },
          platform: {
            required: true,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          createdAt: {
            required: false,
            serializedName: 'created_at',
            type: {
              name: 'String'
            }
          },
          updatedAt: {
            required: false,
            serializedName: 'updated_at',
            type: {
              name: 'String'
            }
          },
          memberPermissions: {
            required: false,
            serializedName: 'member_permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AppResponse;
