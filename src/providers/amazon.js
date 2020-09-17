export default (options) => {
  return {
    id: 'amazon',
    name: 'Amazon',
    type: 'oauth',
    version: '2.0',
    scope: 'profile',
    params: { grant_type: 'authorization_code' },
    accessTokenUrl: 'https://api.amazon.com/auth/o2/token',
    requestTokenUrl: 'https://api.amazon.com/auth/o2/token',
    authorizationUrl: 'https://www.amazon.com/ap/oa?response_type=code',
    profileUrl: 'https://api.amazon.com/user/profile',
    profile: (profile) => {
      return {
        id: profile.user_id,
        name: profile.name,
        email: profile.email,
        image: null
      }
    },
    ...options
  }
}
