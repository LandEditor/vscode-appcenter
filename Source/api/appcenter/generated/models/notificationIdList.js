/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * List of notification Ids
 *
 */
class NotificationIdList {
	/**
	 * Create a NotificationIdList.
	 * @member {array} values List of notification Ids.
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationIdList
	 *
	 * @returns {object} metadata of NotificationIdList
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationIdList",
			type: {
				name: "Composite",
				className: "NotificationIdList",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
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

module.exports = NotificationIdList;