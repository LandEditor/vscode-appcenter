/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a IntuneCategoryValue.
 */
class IntuneCategoryValue {
  /**
   * Create a IntuneCategoryValue.
   * @member {string} [id] the id of the category
   * @member {string} [displayName] the display name for the category
   * @member {string} [lastModifiedDateTime] modified date for category
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntuneCategoryValue
   *
   * @returns {object} metadata of IntuneCategoryValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntuneCategoryValue',
      type: {
        name: 'Composite',
        className: 'IntuneCategoryValue',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          lastModifiedDateTime: {
            required: false,
            serializedName: 'lastModifiedDateTime',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntuneCategoryValue;
