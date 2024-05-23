async function extractUsernameFromEmail(email: string) {
  const parts = email.split('@');
  const username = parts[0];
  return username;
}

export default extractUsernameFromEmail;