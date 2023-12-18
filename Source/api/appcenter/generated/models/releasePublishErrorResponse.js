/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * ReleasePublishErrorResponse
 *
 */
class ReleasePublishErrorResponse {
	/**
	 * Create a ReleasePublishErrorResponse.
	 * @member {string} [message] error Details
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleasePublishErrorResponse
	 *
	 * @returns {object} metadata of ReleasePublishErrorResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleasePublishErrorResponse",
			type: {
				name: "Composite",
				className: "ReleasePublishErrorResponse",
				modelProperties: {
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleasePublishErrorResponse;
