/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * String property.
 *
 * @extends models['CustomProperty']
 */
class StringProperty extends models["CustomProperty"] {
	/**
	 * Create a StringProperty.
	 * @member {string} value String property value.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of StringProperty
	 *
	 * @returns {object} metadata of StringProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "string",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "CustomProperty",
				className: "StringProperty",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						constraints: {
							MaxLength: 128,
							Pattern: "^[a-zA-Z][a-zA-Z0-9-_]*$",
						},
						type: {
							name: "String",
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
					value: {
						required: true,
						serializedName: "value",
						constraints: {
							MaxLength: 128,
						},
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StringProperty;
