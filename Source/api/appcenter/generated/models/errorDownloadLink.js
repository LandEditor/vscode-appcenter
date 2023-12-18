/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a ErrorDownloadLink.
 */
class ErrorDownloadLink {
	/**
	 * Create a ErrorDownloadLink.
	 * @member {string} link
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorDownloadLink
	 *
	 * @returns {object} metadata of ErrorDownloadLink
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorDownloadLink",
			type: {
				name: "Composite",
				className: "ErrorDownloadLink",
				modelProperties: {
					link: {
						required: true,
						serializedName: "link",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorDownloadLink;
