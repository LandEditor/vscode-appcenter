/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * ...
 *
 */
class DeviceAvailability {
	/**
	 * Create a DeviceAvailability.
	 * @member {number} registered
	 * @member {number} available
	 * @member {number} maximum
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceAvailability
	 *
	 * @returns {object} metadata of DeviceAvailability
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceAvailability",
			type: {
				name: "Composite",
				className: "DeviceAvailability",
				modelProperties: {
					registered: {
						required: true,
						serializedName: "registered",
						type: {
							name: "Number",
						},
					},
					available: {
						required: true,
						serializedName: "available",
						type: {
							name: "Number",
						},
					},
					maximum: {
						required: true,
						serializedName: "maximum",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceAvailability;
