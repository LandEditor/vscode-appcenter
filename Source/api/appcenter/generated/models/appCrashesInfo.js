/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a AppCrashesInfo.
 */
class AppCrashesInfo {
	/**
	 * Create a AppCrashesInfo.
	 * @member {boolean} hasCrashes
	 * @member {object} features
	 * @member {boolean} [features.crashgroupModifyStatus] App supports
	 * modification of crashgroup status
	 * @member {boolean} [features.crashgroupModifyAnnotation] App supports
	 * modification of crashgroup annotation
	 * @member {boolean} [features.search] App supports search API
	 * @member {boolean} [features.crashgroupAnalyticsCrashfreeusers] App
	 * supports the 'crash free user' metric
	 * @member {boolean} [features.crashgroupAnalyticsImpactedusers] App supports
	 * the 'impacted users' metric
	 * @member {boolean} [features.crashDownloadRaw] App supports download of raw
	 * crashes
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppCrashesInfo
	 *
	 * @returns {object} metadata of AppCrashesInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppCrashesInfo",
			type: {
				name: "Composite",
				className: "AppCrashesInfo",
				modelProperties: {
					hasCrashes: {
						required: true,
						serializedName: "has_crashes",
						type: {
							name: "Boolean",
						},
					},
					features: {
						required: true,
						serializedName: "features",
						type: {
							name: "Composite",
							className: "AppFeatures",
						},
					},
				},
			},
		};
	}
}

module.exports = AppCrashesInfo;
