/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a AppRepoPatchRequest.
 */
class AppRepoPatchRequest {
	/**
	 * Create a AppRepoPatchRequest.
	 * @member {string} [repoUrl] The absolute URL of the repository
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppRepoPatchRequest
	 *
	 * @returns {object} metadata of AppRepoPatchRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppRepoPatchRequest",
			type: {
				name: "Composite",
				className: "AppRepoPatchRequest",
				modelProperties: {
					repoUrl: {
						required: false,
						serializedName: "repo_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppRepoPatchRequest;