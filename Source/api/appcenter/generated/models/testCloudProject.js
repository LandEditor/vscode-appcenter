/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a TestCloudProject.
 */
class TestCloudProject {
  /**
   * Create a TestCloudProject.
   * @member {string} path The path to the TestCloud project
   * @member {string} frameworkType Possible values include: 'Appium',
   * 'Calabash', 'Espresso', 'UITest', 'Generated'
   * @member {object} [frameworkProperties]
   * @member {array} [frameworkProperties.configurations]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestCloudProject
   *
   * @returns {object} metadata of TestCloudProject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestCloudProject',
      type: {
        name: 'Composite',
        className: 'TestCloudProject',
        modelProperties: {
          path: {
            required: true,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          frameworkType: {
            required: true,
            serializedName: 'frameworkType',
            type: {
              name: 'String'
            }
          },
          frameworkProperties: {
            required: false,
            serializedName: 'frameworkProperties',
            type: {
              name: 'Composite',
              className: 'TestCloudProjectFrameworkProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = TestCloudProject;
