/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * The information about the app's owner
 *
 */
class Owner {
	/**
	 * Create a Owner.
	 * @member {string} id The unique id (UUID) of the owner
	 * @member {string} [avatarUrl] The avatar URL of the owner
	 * @member {string} displayName The owner's display name
	 * @member {string} [email] The owner's email address
	 * @member {string} name The unique name that used to identify the owner
	 * @member {string} type The owner type. Can either be 'org' or 'user'.
	 * Possible values include: 'org', 'user'
	 */
	constructor() {}

	/**
	 * Defines the metadata of Owner
	 *
	 * @returns {object} metadata of Owner
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Owner",
			type: {
				name: "Composite",
				className: "Owner",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					avatarUrl: {
						required: false,
						serializedName: "avatar_url",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					email: {
						required: false,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					type: {
						required: true,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Owner;