/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a GenericLogContainer.
 */
class GenericLogContainer {
	/**
	 * Create a GenericLogContainer.
	 * @member {boolean} [exceededMaxLimit] indicates if the number of available
	 * logs are more than the max allowed return limit(100).
	 * @member {date} [lastReceivedLogTimestamp] the timestamp of the last log
	 * received. This value can be used as the start time parameter in the
	 * consecutive API call.
	 * @member {array} logs the list of logs
	 */
	constructor() {}

	/**
	 * Defines the metadata of GenericLogContainer
	 *
	 * @returns {object} metadata of GenericLogContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "GenericLogContainer",
			type: {
				name: "Composite",
				className: "GenericLogContainer",
				modelProperties: {
					exceededMaxLimit: {
						required: false,
						serializedName: "exceeded_max_limit",
						type: {
							name: "Boolean",
						},
					},
					lastReceivedLogTimestamp: {
						required: false,
						serializedName: "last_received_log_timestamp",
						type: {
							name: "DateTime",
						},
					},
					logs: {
						required: true,
						serializedName: "logs",
						constraints: {
							MinItems: 0,
						},
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "GenericLogElementType",
								type: {
									name: "Composite",
									className: "GenericLog",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = GenericLogContainer;