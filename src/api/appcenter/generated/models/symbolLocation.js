/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Location for downloading symbol
 *
 */
class SymbolLocation {
  /**
   * Create a SymbolLocation.
   * @member {string} uri
   */
  constructor() {
  }

  /**
   * Defines the metadata of SymbolLocation
   *
   * @returns {object} metadata of SymbolLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SymbolLocation',
      type: {
        name: 'Composite',
        className: 'SymbolLocation',
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

module.exports = SymbolLocation;
