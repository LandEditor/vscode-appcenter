/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Location for downloading symbol upload
 *
 */
class SymbolUploadLocation {
  /**
   * Create a SymbolUploadLocation.
   * @member {string} uri
   */
  constructor() {
  }

  /**
   * Defines the metadata of SymbolUploadLocation
   *
   * @returns {object} metadata of SymbolUploadLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SymbolUploadLocation',
      type: {
        name: 'Composite',
        className: 'SymbolUploadLocation',
        modelProperties: {
          uri: {
            required: true,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SymbolUploadLocation;
