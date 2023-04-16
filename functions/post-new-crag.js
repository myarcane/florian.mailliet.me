const coordinates = require("parse-coords")
const { Base64 } = require("js-base64")
const { Octokit } = require("@octokit/rest")

const GITHUB_OWNER = "myarcane"
const GITHUB_REPO = "my-portfolio"
const JSON_PATH = "my-crags.json"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_EMAIL = process.env.GITHUB_EMAIL

exports.handler = async function(event) {
  const { country, parking, geo, crags } = JSON.parse(event.body)
  const newGeo = coordinates(geo)

  if (newGeo && newGeo.lat && newGeo.lng) {
    try {
      const octokit = new Octokit({
        auth: GITHUB_TOKEN,
      })

      const {
        data: { sha, content },
      } = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: JSON_PATH,
      })

      const cragParkingCoordinates = JSON.parse(Base64.decode(content))
      cragParkingCoordinates.push({ country, parking, geo: newGeo, crags })

      await octokit.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: JSON_PATH,
        sha,
        message: "Update crags parking list programatically",
        content: Base64.encode(JSON.stringify(cragParkingCoordinates)),
        committer: {
          name: "Octokit Bot",
          email: GITHUB_EMAIL,
        },
        author: {
          name: "Octokit Bot",
          email: GITHUB_EMAIL,
        },
      })

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "ok",
        }),
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Can not write coordinates to github",
        }),
      }
    }
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Can not convert these coordinates",
      }),
    }
  }
}
