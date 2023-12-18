/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Alerting webhook ping operation result
 *
 * @extends models['AlertOperationResult']
 */
class AlertWebhookPingResult extends models["AlertOperationResult"] {
	/**
	 * Create a AlertWebhookPingResult.
	 * @member {number} responseStatusCode HTTP status code returned in response
	 * from calling webhook
	 * @member {string} [responseReason] Reason returned in response from calling
	 * webhook
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AlertWebhookPingResult
	 *
	 * @returns {object} metadata of AlertWebhookPingResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertWebhookPingResult",
			type: {
				name: "Composite",
				className: "AlertWebhookPingResult",
				modelProperties: {
					requestId: {
						required: true,
						serializedName: "request_id",
						type: {
							name: "String",
						},
					},
					responseStatusCode: {
						required: true,
						serializedName: "response_status_code",
						type: {
							name: "Number",
						},
					},
					responseReason: {
						required: false,
						serializedName: "response_reason",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AlertWebhookPingResult;
