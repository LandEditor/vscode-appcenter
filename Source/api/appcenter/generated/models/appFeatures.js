/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AppFeatures.
 */
class AppFeatures {
  /**
   * Create a AppFeatures.
   * @member {boolean} [crashgroupModifyStatus] App supports modification of
   * crashgroup status
   * @member {boolean} [crashgroupModifyAnnotation] App supports modification
   * of crashgroup annotation
   * @member {boolean} [search] App supports search API
   * @member {boolean} [crashgroupAnalyticsCrashfreeusers] App supports the
   * 'crash free user' metric
   * @member {boolean} [crashgroupAnalyticsImpactedusers] App supports the
   * 'impacted users' metric
   * @member {boolean} [crashDownloadRaw] App supports download of raw crashes
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppFeatures
   *
   * @returns {object} metadata of AppFeatures
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppFeatures',
      type: {
        name: 'Composite',
        className: 'AppFeatures',
        modelProperties: {
          crashgroupModifyStatus: {
            required: false,
            serializedName: 'crashgroup_modify_status',
            type: {
              name: 'Boolean'
            }
          },
          crashgroupModifyAnnotation: {
            required: false,
            serializedName: 'crashgroup_modify_annotation',
            type: {
              name: 'Boolean'
            }
          },
          search: {
            required: false,
            serializedName: 'search',
            type: {
              name: 'Boolean'
            }
          },
          crashgroupAnalyticsCrashfreeusers: {
            required: false,
            serializedName: 'crashgroup_analytics_crashfreeusers',
            type: {
              name: 'Boolean'
            }
          },
          crashgroupAnalyticsImpactedusers: {
            required: false,
            serializedName: 'crashgroup_analytics_impactedusers',
            type: {
              name: 'Boolean'
            }
          },
          crashDownloadRaw: {
            required: false,
            serializedName: 'crash_download_raw',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AppFeatures;
