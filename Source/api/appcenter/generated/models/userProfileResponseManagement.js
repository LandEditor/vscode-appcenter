/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a UserProfileResponseManagement.
 * @extends models['UserProfileResponseInternal']
 */
class UserProfileResponseManagement extends models[
	"UserProfileResponseInternal"
] {
	/**
	 * Create a UserProfileResponseManagement.
	 * @member {string} [updatedAt] The date when the app was last updated
	 * @member {boolean} [verified] A boolean flag that indicates if the user is
	 * already verified
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of UserProfileResponseManagement
	 *
	 * @returns {object} metadata of UserProfileResponseManagement
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserProfileResponseManagement",
			type: {
				name: "Composite",
				className: "UserProfileResponseManagement",
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
					canChangePassword: {
						required: false,
						serializedName: "can_change_password",
						type: {
							name: "Boolean",
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
						required: true,
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
					permissions: {
						required: false,
						serializedName: "permissions",
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
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
						},
					},
					featureFlags: {
						required: false,
						serializedName: "feature_flags",
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
					adminRole: {
						required: false,
						serializedName: "admin_role",
						type: {
							name: "String",
						},
					},
					settings: {
						required: false,
						serializedName: "settings",
						type: {
							name: "Composite",
							className: "UserProfileResponseInternalSettings",
						},
					},
					updatedAt: {
						required: false,
						serializedName: "updated_at",
						type: {
							name: "String",
						},
					},
					verified: {
						required: false,
						serializedName: "verified",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = UserProfileResponseManagement;
