/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a CrashGroupCarrier.
 */
class CrashGroupCarrier {
	/**
	 * Create a CrashGroupCarrier.
	 * @member {string} [carrierName] carrier name
	 * @member {number} [crashCount] crash count of carrier
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupCarrier
	 *
	 * @returns {object} metadata of CrashGroupCarrier
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupCarrier",
			type: {
				name: "Composite",
				className: "CrashGroupCarrier",
				modelProperties: {
					carrierName: {
						required: false,
						serializedName: "carrier_name",
						type: {
							name: "String",
						},
					},
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupCarrier;