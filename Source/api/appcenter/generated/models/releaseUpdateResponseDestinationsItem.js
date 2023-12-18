/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a ReleaseUpdateResponseDestinationsItem.
 */
class ReleaseUpdateResponseDestinationsItem {
	/**
	 * Create a ReleaseUpdateResponseDestinationsItem.
	 * @member {string} [id]
	 * @member {string} [name]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseUpdateResponseDestinationsItem
	 *
	 * @returns {object} metadata of ReleaseUpdateResponseDestinationsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseUpdateResponse_destinationsItem",
			type: {
				name: "Composite",
				className: "ReleaseUpdateResponseDestinationsItem",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseUpdateResponseDestinationsItem;
