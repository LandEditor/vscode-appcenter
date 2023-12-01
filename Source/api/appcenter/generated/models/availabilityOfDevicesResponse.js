/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * The current device availability (registered, available and maxmimum) for
 * iPhones, iPads, iPods and Watches from Apple Developer Portal
 *
 */
class AvailabilityOfDevicesResponse {
	/**
	 * Create a AvailabilityOfDevicesResponse.
	 * @member {object} iphones
	 * @member {number} [iphones.registered]
	 * @member {number} [iphones.available]
	 * @member {number} [iphones.maximum]
	 * @member {object} ipads
	 * @member {number} [ipads.registered]
	 * @member {number} [ipads.available]
	 * @member {number} [ipads.maximum]
	 * @member {object} ipods
	 * @member {number} [ipods.registered]
	 * @member {number} [ipods.available]
	 * @member {number} [ipods.maximum]
	 * @member {object} watches
	 * @member {number} [watches.registered]
	 * @member {number} [watches.available]
	 * @member {number} [watches.maximum]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AvailabilityOfDevicesResponse
	 *
	 * @returns {object} metadata of AvailabilityOfDevicesResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AvailabilityOfDevicesResponse",
			type: {
				name: "Composite",
				className: "AvailabilityOfDevicesResponse",
				modelProperties: {
					iphones: {
						required: true,
						serializedName: "iphones",
						type: {
							name: "Composite",
							className: "DeviceAvailability",
						},
					},
					ipads: {
						required: true,
						serializedName: "ipads",
						type: {
							name: "Composite",
							className: "DeviceAvailability",
						},
					},
					ipods: {
						required: true,
						serializedName: "ipods",
						type: {
							name: "Composite",
							className: "DeviceAvailability",
						},
					},
					watches: {
						required: true,
						serializedName: "watches",
						type: {
							name: "Composite",
							className: "DeviceAvailability",
						},
					},
				},
			},
		};
	}
}

module.exports = AvailabilityOfDevicesResponse;