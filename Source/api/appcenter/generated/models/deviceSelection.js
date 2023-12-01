/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * @summary Device Selection
 *
 * Short ID for a list of device IDs
 *
 */
class DeviceSelection {
	/**
	 * Create a DeviceSelection.
	 * @member {string} shortId Identifier of the device selection
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceSelection
	 *
	 * @returns {object} metadata of DeviceSelection
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSelection",
			type: {
				name: "Composite",
				className: "DeviceSelection",
				modelProperties: {
					shortId: {
						required: true,
						serializedName: "shortId",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceSelection;