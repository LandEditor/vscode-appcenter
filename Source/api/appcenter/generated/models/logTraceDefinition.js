/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a LogTraceDefinition.
 */
class LogTraceDefinition {
	/**
	 * Create a LogTraceDefinition.
	 * @member {string} appSecret
	 * @member {string} [installId]
	 * @member {date} [expiration]
	 */
	constructor() {}

	/**
	 * Defines the metadata of LogTraceDefinition
	 *
	 * @returns {object} metadata of LogTraceDefinition
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "LogTraceDefinition",
			type: {
				name: "Composite",
				className: "LogTraceDefinition",
				modelProperties: {
					appSecret: {
						required: true,
						serializedName: "app_secret",
						type: {
							name: "String",
						},
					},
					installId: {
						required: false,
						serializedName: "install_id",
						type: {
							name: "String",
						},
					},
					expiration: {
						required: false,
						serializedName: "expiration",
						type: {
							name: "DateTime",
						},
					},
				},
			},
		};
	}
}

module.exports = LogTraceDefinition;