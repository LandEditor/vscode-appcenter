/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a InvitationDetailResponse.
 */
class InvitationDetailResponse {
	/**
	 * Create a InvitationDetailResponse.
	 * @member {string} invitationId The id of the invitation
	 * @member {object} invitedBy
	 * @member {string} [invitedBy.id] The unique id (UUID) of the user
	 * @member {string} [invitedBy.avatarUrl] The avatar URL of the user
	 * @member {boolean} [invitedBy.canChangePassword] User is required to send
	 * an old password in order to change the password.
	 * @member {string} [invitedBy.displayName] The full name of the user. Might
	 * for example be first and last name
	 * @member {string} [invitedBy.email] The email address of the user
	 * @member {string} [invitedBy.name] The unique name that is used to identify
	 * the user.
	 * @member {array} [invitedBy.permissions] The permissions the user has for
	 * the app
	 * @member {string} [invitedBy.origin] The creation origin of this user.
	 * Possible values include: 'appcenter', 'hockeyapp', 'codepush'
	 * @member {object} [organization]
	 * @member {string} [organization.id] The internal unique id (UUID) of the
	 * organization.
	 * @member {string} [organization.displayName] The display name of the
	 * organization
	 * @member {string} [organization.name] The slug name of the organization
	 * @member {string} [organization.origin] The creation origin of this
	 * organization. Possible values include: 'appcenter', 'hockeyapp'
	 * @member {string} [organization.createdAt] The creation date of this
	 * organization
	 * @member {string} [organization.updatedAt] The date the organization was
	 * last updated at
	 * @member {object} [app]
	 * @member {string} [app.appSecret] A unique and secret key used to identify
	 * the app in communication with the ingestion endpoint for crash reporting
	 * and analytics
	 * @member {object} [app.azureSubscription]
	 * @member {string} [app.azureSubscription.subscriptionId] The azure
	 * subscription id
	 * @member {string} [app.azureSubscription.tenantId] The tenant id of the
	 * azure subscription belongs to
	 * @member {string} [app.azureSubscription.subscriptionName] The name of the
	 * azure subscription
	 * @member {boolean} [app.azureSubscription.isBilling] If the subscription is
	 * used for billing
	 * @member {boolean} [app.azureSubscription.isBillable] If the subscription
	 * can be used for billing
	 * @member {string} [app.platform] The platform of the app. Possible values
	 * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
	 * 'Unity', 'Xamarin', 'Unknown'
	 * @member {string} [app.origin] The creation origin of this app. Possible
	 * values include: 'appcenter', 'hockeyapp', 'codepush'
	 * @member {string} [app.createdAt] The created date of this app
	 * @member {string} [app.updatedAt] The last updated date of this app
	 * @member {array} [app.memberPermissions] The permissions of the calling
	 * user
	 */
	constructor() {}

	/**
	 * Defines the metadata of InvitationDetailResponse
	 *
	 * @returns {object} metadata of InvitationDetailResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "InvitationDetailResponse",
			type: {
				name: "Composite",
				className: "InvitationDetailResponse",
				modelProperties: {
					invitationId: {
						required: true,
						serializedName: "invitation_id",
						type: {
							name: "String",
						},
					},
					invitedBy: {
						required: true,
						serializedName: "invited_by",
						type: {
							name: "Composite",
							className: "UserProfileResponse",
						},
					},
					organization: {
						required: false,
						serializedName: "organization",
						type: {
							name: "Composite",
							className: "OrganizationResponse",
						},
					},
					app: {
						required: false,
						serializedName: "app",
						type: {
							name: "Composite",
							className: "AppResponse",
						},
					},
				},
			},
		};
	}
}

module.exports = InvitationDetailResponse;
