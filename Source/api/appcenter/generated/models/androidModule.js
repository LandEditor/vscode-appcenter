/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AndroidModule.
 */
class AndroidModule {
  /**
   * Create a AndroidModule.
   * @member {string} name Name of the Android module
   * @member {array} [productFlavors] The product flavors of the Android module
   * @member {array} [buildVariants] The detected build variants of the Android
   * module (matrix of product flavor + build type (debug|release))
   * @member {array} [buildTypes] The detected build types fo the Android
   * module
   * @member {boolean} [isRoot] Whether the module is at the root level of the
   * project
   */
  constructor() {
  }

  /**
   * Defines the metadata of AndroidModule
   *
   * @returns {object} metadata of AndroidModule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AndroidModule',
      type: {
        name: 'Composite',
        className: 'AndroidModule',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          productFlavors: {
            required: false,
            serializedName: 'productFlavors',
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
          },
          buildVariants: {
            required: false,
            serializedName: 'buildVariants',
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
          },
          buildTypes: {
            required: false,
            serializedName: 'buildTypes',
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
          },
          isRoot: {
            required: false,
            serializedName: 'isRoot',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AndroidModule;
