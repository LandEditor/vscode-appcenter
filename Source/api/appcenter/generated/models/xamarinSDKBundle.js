/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * The Xamarin SDK bundle
 *
 */
class XamarinSDKBundle {
	/**
	 * Create a XamarinSDKBundle.
	 * @member {string} [monoVersion] The Mono version
	 * @member {string} [sdkBundle] The Xamarin SDK version
	 * @member {boolean} [current] If the SDK is latest stable
	 */
	constructor() {}

	/**
	 * Defines the metadata of XamarinSDKBundle
	 *
	 * @returns {object} metadata of XamarinSDKBundle
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XamarinSDKBundle",
			type: {
				name: "Composite",
				className: "XamarinSDKBundle",
				modelProperties: {
					monoVersion: {
						required: false,
						serializedName: "monoVersion",
						type: {
							name: "String",
						},
					},
					sdkBundle: {
						required: false,
						serializedName: "sdkBundle",
						type: {
							name: "String",
						},
					},
					current: {
						required: false,
						serializedName: "current",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = XamarinSDKBundle;
