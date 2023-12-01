/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Audience with details.
 *
 * @extends models['AudienceSummary']
 */
class Audience extends models["AudienceSummary"] {
	/**
	 * Create a Audience.
	 * @member {boolean} [enabled] Default value: true .
	 * @member {object} [customProperties] Custom properties used in the
	 * definition.
	 * @member {number} [estimatedTotalCount] Estimated total audience size.
	 * @member {date} [timestamp] Date the audience was last refreshed.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of Audience
	 *
	 * @returns {object} metadata of Audience
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Audience",
			type: {
				name: "Composite",
				className: "Audience",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					estimatedCount: {
						required: false,
						serializedName: "estimated_count",
						type: {
							name: "Number",
						},
					},
					definition: {
						required: false,
						serializedName: "definition",
						type: {
							name: "String",
						},
					},
					state: {
						required: false,
						serializedName: "state",
						type: {
							name: "Enum",
							allowedValues: ["Calculating", "Ready", "Disabled"],
						},
					},
					enabled: {
						required: false,
						serializedName: "enabled",
						defaultValue: true,
						type: {
							name: "Boolean",
						},
					},
					customProperties: {
						required: false,
						serializedName: "custom_properties",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "DevicePropertyTypeElementType",
								type: {
									name: "Enum",
									allowedValues: [
										"string",
										"number",
										"boolean",
										"date_time",
									],
								},
							},
						},
					},
					estimatedTotalCount: {
						required: false,
						serializedName: "estimated_total_count",
						type: {
							name: "Number",
						},
					},
					timestamp: {
						required: false,
						serializedName: "timestamp",
						type: {
							name: "DateTime",
						},
					},
				},
			},
		};
	}
}

module.exports = Audience;