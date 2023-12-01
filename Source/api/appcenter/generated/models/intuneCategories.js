/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a IntuneCategories.
 */
class IntuneCategories {
	/**
	 * Create a IntuneCategories.
	 * @member {string} [odatacontext] context
	 * @member {array} [value] categories for intune app
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneCategories
	 *
	 * @returns {object} metadata of IntuneCategories
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneCategories",
			type: {
				name: "Composite",
				className: "IntuneCategories",
				modelProperties: {
					odatacontext: {
						required: false,
						serializedName: "odata\\.context",
						type: {
							name: "String",
						},
					},
					value: {
						required: false,
						serializedName: "value",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"IntuneCategoryValueElementType",
								type: {
									name: "Composite",
									className: "IntuneCategoryValue",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneCategories;