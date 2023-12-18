/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a DataSubjectRightStatusResponse.
 */
class DataSubjectRightStatusResponse {
	/**
	 * Create a DataSubjectRightStatusResponse.
	 * @member {string} [sasUrl] Azure Storage shared access signature (SAS) URL
	 * for exported user data.
	 * @member {boolean} [sasUrlExpired] Whether Azure Storage shared access
	 * signature (SAS) URL has expired or not.
	 * @member {string} status Status of data subject right request. Possible
	 * values include: 'None', 'Created', 'Queued', 'InProgress', 'Completed',
	 * 'Failed'
	 * @member {string} message explanation message of the status
	 */
	constructor() {}

	/**
	 * Defines the metadata of DataSubjectRightStatusResponse
	 *
	 * @returns {object} metadata of DataSubjectRightStatusResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DataSubjectRightStatusResponse",
			type: {
				name: "Composite",
				className: "DataSubjectRightStatusResponse",
				modelProperties: {
					sasUrl: {
						required: false,
						serializedName: "sasUrl",
						type: {
							name: "String",
						},
					},
					sasUrlExpired: {
						required: false,
						serializedName: "sasUrlExpired",
						type: {
							name: "Boolean",
						},
					},
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					message: {
						required: true,
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

module.exports = DataSubjectRightStatusResponse;
