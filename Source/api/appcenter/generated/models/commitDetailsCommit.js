/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a CommitDetailsCommit.
 */
class CommitDetailsCommit {
	/**
	 * Create a CommitDetailsCommit.
	 * @member {string} [message] Commit message
	 * @member {object} [author]
	 * @member {string} [author.date] Date and time of the commit
	 * @member {string} [author.name] Author name
	 * @member {string} [author.email] Author's email
	 */
	constructor() {}

	/**
	 * Defines the metadata of CommitDetailsCommit
	 *
	 * @returns {object} metadata of CommitDetailsCommit
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CommitDetails_commit",
			type: {
				name: "Composite",
				className: "CommitDetailsCommit",
				modelProperties: {
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
					author: {
						required: false,
						serializedName: "author",
						type: {
							name: "Composite",
							className: "CommitDetailsCommitAuthor",
						},
					},
				},
			},
		};
	}
}

module.exports = CommitDetailsCommit;
