/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Aggregated Billing Information for a user or an organization
 *
 */
class AggregatedBillingInformation {
  /**
   * Create a AggregatedBillingInformation.
   * @member {string} [version] Version of the Billing Information schema
   * @member {string} [timestamp] The ISO 8601 datetime of last modification
   * @member {string} [id] ID of the user or organization
   * @member {object} [billingPlans]
   * @member {object} [billingPlans.buildService]
   * @member {boolean} [billingPlans.buildService.canSelectTrialPlan] Can
   * customer select trial plan for that service (if it exists)?
   * @member {string} [billingPlans.buildService.lastTrialPlanExpirationTime]
   * Expiration time of the last selected trial plan. Will be null if trial
   * plan was not used.
   * @member {object} [billingPlans.buildService.currentBillingPeriod]
   * @member {string}
   * [billingPlans.buildService.currentBillingPeriod.startTime] Inclusive start
   * of the period
   * @member {string} [billingPlans.buildService.currentBillingPeriod.endTime]
   * Exclusive end of the period.
   * @member {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount]
   * @member {number}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @member {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan]
   * @member {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.id] The
   * Billing Plan ID
   * @member {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.version]
   * Version of the Billing Plan schema
   * @member {number}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.priceBucket]
   * Price bucket of the billing plan. Free plans start with 0, paid plans have
   * higher price buckets
   * @member {string}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.service]
   * Name of the service that the plan applies to. Possible values include:
   * 'Build', 'Push', 'Test'
   * @member {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.limits]
   * @member {object}
   * [billingPlans.buildService.currentBillingPeriod.byAccount.plan.attributes]
   * @member {object} [billingPlans.pushService]
   * @member {boolean} [billingPlans.pushService.canSelectTrialPlan] Can
   * customer select trial plan for that service (if it exists)?
   * @member {string} [billingPlans.pushService.lastTrialPlanExpirationTime]
   * Expiration time of the last selected trial plan. Will be null if trial
   * plan was not used.
   * @member {object} [billingPlans.pushService.currentBillingPeriod]
   * @member {string} [billingPlans.pushService.currentBillingPeriod.startTime]
   * Inclusive start of the period
   * @member {string} [billingPlans.pushService.currentBillingPeriod.endTime]
   * Exclusive end of the period.
   * @member {object} [billingPlans.pushService.currentBillingPeriod.byAccount]
   * @member {number}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @member {object}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan]
   * @member {string}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan.id] The
   * Billing Plan ID
   * @member {string}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan.version]
   * Version of the Billing Plan schema
   * @member {number}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan.priceBucket]
   * Price bucket of the billing plan. Free plans start with 0, paid plans have
   * higher price buckets
   * @member {string}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan.service]
   * Name of the service that the plan applies to. Possible values include:
   * 'Build', 'Push', 'Test'
   * @member {object}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan.limits]
   * @member {object}
   * [billingPlans.pushService.currentBillingPeriod.byAccount.plan.attributes]
   * @member {object} [billingPlans.testService]
   * @member {boolean} [billingPlans.testService.canSelectTrialPlan] Can
   * customer select trial plan for that service (if it exists)?
   * @member {string} [billingPlans.testService.lastTrialPlanExpirationTime]
   * Expiration time of the last selected trial plan. Will be null if trial
   * plan was not used.
   * @member {object} [billingPlans.testService.currentBillingPeriod]
   * @member {string} [billingPlans.testService.currentBillingPeriod.startTime]
   * Inclusive start of the period
   * @member {string} [billingPlans.testService.currentBillingPeriod.endTime]
   * Exclusive end of the period.
   * @member {object} [billingPlans.testService.currentBillingPeriod.byAccount]
   * @member {number}
   * [billingPlans.testService.currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @member {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan]
   * @member {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.id] The
   * Billing Plan ID
   * @member {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.version]
   * Version of the Billing Plan schema
   * @member {number}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.priceBucket]
   * Price bucket of the billing plan. Free plans start with 0, paid plans have
   * higher price buckets
   * @member {string}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.service]
   * Name of the service that the plan applies to. Possible values include:
   * 'Build', 'Push', 'Test'
   * @member {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.limits]
   * @member {object}
   * [billingPlans.testService.currentBillingPeriod.byAccount.plan.attributes]
   * @member {object} [usage]
   * @member {object} [usage.buildService]
   * @member {object} [usage.buildService.currentUsagePeriod]
   * @member {string} [usage.buildService.currentUsagePeriod.startTime]
   * Inclusive start time of the usage period
   * @member {string} [usage.buildService.currentUsagePeriod.endTime] Exclusive
   * end time of the usage period.
   * @member {object} [usage.buildService.currentUsagePeriod.byAccount]
   * @member {object} [usage.buildService.currentUsagePeriod.byApp]
   * @member {object} [usage.pushService]
   * @member {object} [usage.pushService.currentUsagePeriod]
   * @member {string} [usage.pushService.currentUsagePeriod.startTime]
   * Inclusive start time of the usage period
   * @member {string} [usage.pushService.currentUsagePeriod.endTime] Exclusive
   * end time of the usage period.
   * @member {object} [usage.pushService.currentUsagePeriod.byAccount]
   * @member {object} [usage.pushService.currentUsagePeriod.byApp]
   * @member {object} [usage.testService]
   * @member {object} [usage.testService.currentUsagePeriod]
   * @member {string} [usage.testService.currentUsagePeriod.startTime]
   * Inclusive start time of the usage period
   * @member {string} [usage.testService.currentUsagePeriod.endTime] Exclusive
   * end time of the usage period.
   * @member {object} [usage.testService.currentUsagePeriod.byAccount]
   * @member {object} [usage.testService.currentUsagePeriod.byApp]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AggregatedBillingInformation
   *
   * @returns {object} metadata of AggregatedBillingInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregatedBillingInformation',
      type: {
        name: 'Composite',
        className: 'AggregatedBillingInformation',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          billingPlans: {
            required: false,
            serializedName: 'billingPlans',
            type: {
              name: 'Composite',
              className: 'BillingInformationPlans'
            }
          },
          usage: {
            required: false,
            serializedName: 'usage',
            type: {
              name: 'Composite',
              className: 'BillingResourceUsage'
            }
          }
        }
      }
    };
  }
}

module.exports = AggregatedBillingInformation;
