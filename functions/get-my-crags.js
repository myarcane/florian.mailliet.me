const { Base64 } = require("js-base64")
const { Octokit } = require("@octokit/rest")

const GITHUB_OWNER = "myarcane"
const GITHUB_REPO = "my-portfolio"
const JSON_PATH = "my-crags.json"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

exports.handler = async function() {
  try {
    const octokit = new Octokit({
      auth: GITHUB_TOKEN,
    })

    const {
      data: { content },
    } = await octokit.rest.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: JSON_PATH,
    })

    return {
      statusCode: 200,
      body: Base64.decode(content),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching parking data" }),
    }
  }
}
