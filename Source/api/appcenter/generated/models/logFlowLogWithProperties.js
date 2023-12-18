/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a LogFlowLogWithProperties.
 * @extends models['LogFlowLog']
 */
class LogFlowLogWithProperties extends models["LogFlowLog"] {
	/**
	 * Create a LogFlowLogWithProperties.
	 * @member {object} [properties] Additional key/value pair parameters.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowLogWithProperties
	 *
	 * @returns {object} metadata of LogFlowLogWithProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "LogFlowLogWithProperties",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowLogWithProperties",
				modelProperties: {
					timestamp: {
						required: true,
						serializedName: "timestamp",
						type: {
							name: "DateTime",
						},
					},
					installId: {
						required: true,
						serializedName: "install_id",
						type: {
							name: "String",
						},
					},
					device: {
						required: true,
						serializedName: "device",
						type: {
							name: "Composite",
							className: "LogFlowDevice",
						},
					},
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					properties: {
						required: false,
						serializedName: "properties",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowLogWithProperties;
