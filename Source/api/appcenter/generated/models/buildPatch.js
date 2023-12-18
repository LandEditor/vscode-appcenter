/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a BuildPatch.
 */
class BuildPatch {
	/**
	 * Create a BuildPatch.
	 * @member {string} [status] The build status; used to cancel builds.
	 * Possible values include: 'cancelling'
	 */
	constructor() {}

	/**
	 * Defines the metadata of BuildPatch
	 *
	 * @returns {object} metadata of BuildPatch
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildPatch",
			type: {
				name: "Composite",
				className: "BuildPatch",
				modelProperties: {
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BuildPatch;
