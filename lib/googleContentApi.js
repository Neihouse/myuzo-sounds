const { google } = require('googleapis');

const content = google.content('v2.1');

async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    keyFilename: 'path/to/your/service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/content'],
  });

  const authClient = await auth.getClient();
  google.options({ auth: authClient });
}

module.exports = {
  content,
  authenticate,
};
