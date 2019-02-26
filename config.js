
/**
 * User Profile
 */
var profile = {
  userName: 'saml.jackson@example.com',
  nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
  'https://aws.amazon.com/SAML/Attributes/Role': 'arn:aws:iam::123456789012:role/ExampleRole,arn:aws:iam::123456789012:saml-provider/ExampleSSOProvider',

  'https://aws.amazon.com/SAML/Attributes/RoleSessionName': 'saml.jackson@example.com',
  'https://aws.amazon.com/SAML/Attributes/SessionDuration': '900'
}

/**
 * SAML Attribute Metadata
 */
var metadata = [{
  id: 'https://aws.amazon.com/SAML/Attributes/Role',
  optional: false,
  displayName: 'Role',
  description: 'Role to Assume',
  multiValue: false
}, {
  id: 'https://aws.amazon.com/SAML/Attributes/RoleSessionName',
  optional: false,
  displayName: 'RoleSessionName',
  description: 'Session attribution (email)',
  multiValue: false
}, {
  id: 'https://aws.amazon.com/SAML/Attributes/SessionDuration',
  optional: true,
  displayName: 'SessionDuration',
  description: 'Length of Session',
  multiValue: false
}];

module.exports = {
  user: profile,
  metadata: metadata
}
