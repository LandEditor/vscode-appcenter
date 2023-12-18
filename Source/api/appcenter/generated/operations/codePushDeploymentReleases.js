/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Clears a Deployment of releases
 *
 * @param {string} deploymentName deployment name
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteMethod(deploymentName, ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			deploymentName === null ||
			deploymentName === undefined ||
			typeof deploymentName.valueOf() !== "string"
		) {
			throw new Error(
				"deploymentName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			ownerName === null ||
			ownerName === undefined ||
			typeof ownerName.valueOf() !== "string"
		) {
			throw new Error(
				"ownerName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			appName === null ||
			appName === undefined ||
			typeof appName.valueOf() !== "string"
		) {
			throw new Error(
				"appName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases";
	requestUrl = requestUrl.replace(
		"{deployment_name}",
		encodeURIComponent(deploymentName),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "DELETE";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 204) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Gets the history of releases on a Deployment
 *
 * @param {string} deploymentName deployment name
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(deploymentName, ownerName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			deploymentName === null ||
			deploymentName === undefined ||
			typeof deploymentName.valueOf() !== "string"
		) {
			throw new Error(
				"deploymentName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			ownerName === null ||
			ownerName === undefined ||
			typeof ownerName.valueOf() !== "string"
		) {
			throw new Error(
				"ownerName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			appName === null ||
			appName === undefined ||
			typeof appName.valueOf() !== "string"
		) {
			throw new Error(
				"appName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases";
	requestUrl = requestUrl.replace(
		"{deployment_name}",
		encodeURIComponent(deploymentName),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = {
						required: false,
						serializedName: "parsedResponse",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "CodePushReleaseElementType",
								type: {
									name: "Composite",
									className: "CodePushRelease",
								},
							},
						},
					};
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Create a new CodePush release for the specified deployment
 *
 * @param {string} deploymentName deployment name
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {string} targetBinaryVersion the binary version of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.packageProperty] The upload zip file
 *
 * @param {string} [options.deploymentName1] This specifies which deployment
 * you want to release the update to. Default is Staging.
 *
 * @param {string} [options.description] This provides an optional "change log"
 * for the deployment.
 *
 * @param {boolean} [options.disabled] This specifies whether an update should
 * be downloadable by end users or not.
 *
 * @param {boolean} [options.mandatory] This specifies whether the update
 * should be considered mandatory or not (e.g. it includes a critical security
 * fix).
 *
 * @param {boolean} [options.noDuplicateReleaseError] This specifies that if
 * the update is identical to the latest release on the deployment, the CLI
 * should generate a warning instead of an error.
 *
 * @param {number} [options.rollout] This specifies the percentage of users (as
 * an integer between 1 and 100) that should be eligible to receive this
 * update.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link CodePushRelease} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _create(
	deploymentName,
	ownerName,
	appName,
	targetBinaryVersion,
	options,
	callback,
) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const packageProperty =
		options && options.packageProperty !== undefined
			? options.packageProperty
			: undefined;
	const deploymentName1 =
		options && options.deploymentName1 !== undefined
			? options.deploymentName1
			: undefined;
	const description =
		options && options.description !== undefined
			? options.description
			: undefined;
	const disabled =
		options && options.disabled !== undefined
			? options.disabled
			: undefined;
	const mandatory =
		options && options.mandatory !== undefined
			? options.mandatory
			: undefined;
	const noDuplicateReleaseError =
		options && options.noDuplicateReleaseError !== undefined
			? options.noDuplicateReleaseError
			: undefined;
	const rollout =
		options && options.rollout !== undefined ? options.rollout : undefined;
	// Validate
	try {
		if (
			deploymentName === null ||
			deploymentName === undefined ||
			typeof deploymentName.valueOf() !== "string"
		) {
			throw new Error(
				"deploymentName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			ownerName === null ||
			ownerName === undefined ||
			typeof ownerName.valueOf() !== "string"
		) {
			throw new Error(
				"ownerName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			appName === null ||
			appName === undefined ||
			typeof appName.valueOf() !== "string"
		) {
			throw new Error(
				"appName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			packageParameter !== null &&
			packageParameter !== undefined &&
			typeof packageParameter.valueOf() !== "object"
		) {
			throw new Error("packageParameter must be of type object.");
		}
		if (
			targetBinaryVersion === null ||
			targetBinaryVersion === undefined ||
			typeof targetBinaryVersion.valueOf() !== "string"
		) {
			throw new Error(
				"targetBinaryVersion cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			deploymentName1 !== null &&
			deploymentName1 !== undefined &&
			typeof deploymentName1.valueOf() !== "string"
		) {
			throw new Error("deploymentName1 must be of type string.");
		}
		if (
			description !== null &&
			description !== undefined &&
			typeof description.valueOf() !== "string"
		) {
			throw new Error("description must be of type string.");
		}
		if (
			disabled !== null &&
			disabled !== undefined &&
			typeof disabled !== "boolean"
		) {
			throw new Error("disabled must be of type boolean.");
		}
		if (
			mandatory !== null &&
			mandatory !== undefined &&
			typeof mandatory !== "boolean"
		) {
			throw new Error("mandatory must be of type boolean.");
		}
		if (
			noDuplicateReleaseError !== null &&
			noDuplicateReleaseError !== undefined &&
			typeof noDuplicateReleaseError !== "boolean"
		) {
			throw new Error("noDuplicateReleaseError must be of type boolean.");
		}
		if (
			rollout !== null &&
			rollout !== undefined &&
			typeof rollout !== "number"
		) {
			throw new Error("rollout must be of type number.");
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases";
	requestUrl = requestUrl.replace(
		"{deployment_name}",
		encodeURIComponent(deploymentName),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "multipart/form-data";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	// Serialize Request
	const formData = {};
	if (packageParameter !== undefined && packageParameter !== null) {
		formData["package"] = packageParameter;
	}
	if (targetBinaryVersion !== undefined && targetBinaryVersion !== null) {
		formData["targetBinaryVersion"] = targetBinaryVersion;
	}
	if (deploymentName1 !== undefined && deploymentName1 !== null) {
		formData["deploymentName"] = deploymentName1;
	}
	if (description !== undefined && description !== null) {
		formData["description"] = description;
	}
	if (disabled !== undefined && disabled !== null) {
		formData["disabled"] = disabled.toString();
	}
	if (mandatory !== undefined && mandatory !== null) {
		formData["mandatory"] = mandatory.toString();
	}
	if (
		noDuplicateReleaseError !== undefined &&
		noDuplicateReleaseError !== null
	) {
		formData["noDuplicateReleaseError"] =
			noDuplicateReleaseError.toString();
	}
	if (rollout !== undefined && rollout !== null) {
		formData["rollout"] = rollout.toString();
	}
	httpRequest.formData = formData;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 201) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 201) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"CodePushRelease"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/** Class representing a CodePushDeploymentReleases. */
class CodePushDeploymentReleases {
	/**
	 * Create a CodePushDeploymentReleases.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._deleteMethod = _deleteMethod;
		this._get = _get;
		this._create = _create;
	}

	/**
	 * Clears a Deployment of releases
	 *
	 * @param {string} deploymentName deployment name
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	deleteMethodWithHttpOperationResponse(
		deploymentName,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._deleteMethod(
				deploymentName,
				ownerName,
				appName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Clears a Deployment of releases
	 *
	 * @param {string} deploymentName deployment name
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	deleteMethod(
		deploymentName,
		ownerName,
		appName,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._deleteMethod(
				deploymentName,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._deleteMethod(
					deploymentName,
					ownerName,
					appName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Gets the history of releases on a Deployment
	 *
	 * @param {string} deploymentName deployment name
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getWithHttpOperationResponse(deploymentName, ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._get(
				deploymentName,
				ownerName,
				appName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Gets the history of releases on a Deployment
	 *
	 * @param {string} deploymentName deployment name
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {Array} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {array} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	get(deploymentName, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._get(
				deploymentName,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._get(
					deploymentName,
					ownerName,
					appName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Create a new CodePush release for the specified deployment
	 *
	 * @param {string} deploymentName deployment name
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {string} targetBinaryVersion the binary version of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.packageProperty] The upload zip file
	 *
	 * @param {string} [options.deploymentName1] This specifies which deployment
	 * you want to release the update to. Default is Staging.
	 *
	 * @param {string} [options.description] This provides an optional "change log"
	 * for the deployment.
	 *
	 * @param {boolean} [options.disabled] This specifies whether an update should
	 * be downloadable by end users or not.
	 *
	 * @param {boolean} [options.mandatory] This specifies whether the update
	 * should be considered mandatory or not (e.g. it includes a critical security
	 * fix).
	 *
	 * @param {boolean} [options.noDuplicateReleaseError] This specifies that if
	 * the update is identical to the latest release on the deployment, the CLI
	 * should generate a warning instead of an error.
	 *
	 * @param {number} [options.rollout] This specifies the percentage of users (as
	 * an integer between 1 and 100) that should be eligible to receive this
	 * update.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<CodePushRelease>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	createWithHttpOperationResponse(
		deploymentName,
		ownerName,
		appName,
		targetBinaryVersion,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._create(
				deploymentName,
				ownerName,
				appName,
				targetBinaryVersion,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Create a new CodePush release for the specified deployment
	 *
	 * @param {string} deploymentName deployment name
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {string} targetBinaryVersion the binary version of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.packageProperty] The upload zip file
	 *
	 * @param {string} [options.deploymentName1] This specifies which deployment
	 * you want to release the update to. Default is Staging.
	 *
	 * @param {string} [options.description] This provides an optional "change log"
	 * for the deployment.
	 *
	 * @param {boolean} [options.disabled] This specifies whether an update should
	 * be downloadable by end users or not.
	 *
	 * @param {boolean} [options.mandatory] This specifies whether the update
	 * should be considered mandatory or not (e.g. it includes a critical security
	 * fix).
	 *
	 * @param {boolean} [options.noDuplicateReleaseError] This specifies that if
	 * the update is identical to the latest release on the deployment, the CLI
	 * should generate a warning instead of an error.
	 *
	 * @param {number} [options.rollout] This specifies the percentage of users (as
	 * an integer between 1 and 100) that should be eligible to receive this
	 * update.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {CodePushRelease} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link CodePushRelease} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	create(
		deploymentName,
		ownerName,
		appName,
		targetBinaryVersion,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._create(
				deploymentName,
				ownerName,
				appName,
				targetBinaryVersion,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._create(
					deploymentName,
					ownerName,
					appName,
					targetBinaryVersion,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}
}

module.exports = CodePushDeploymentReleases;
