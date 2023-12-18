/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a IntuneStoreResponse.
 */
class IntuneStoreResponse {
	/**
	 * Create a IntuneStoreResponse.
	 * @member {object} [targetAudience]
	 * @member {string} [targetAudience.name] display name for the target
	 * audience/group
	 * @member {string} [targetAudience.id] ID for the target audience/group.
	 * @member {object} [appCategory]
	 * @member {string} [appCategory.name] display name for the app category
	 * @member {string} [appCategory.id] ID for the category.
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneStoreResponse
	 *
	 * @returns {object} metadata of IntuneStoreResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneStoreResponse",
			type: {
				name: "Composite",
				className: "IntuneStoreResponse",
				modelProperties: {
					targetAudience: {
						required: false,
						serializedName: "target_audience",
						type: {
							name: "Composite",
							className: "IntuneTargetAudienceResponse",
						},
					},
					appCategory: {
						required: false,
						serializedName: "app_category",
						type: {
							name: "Composite",
							className: "IntuneAppCategoryResponse",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneStoreResponse;
