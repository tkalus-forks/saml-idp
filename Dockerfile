FROM node:latest

ADD ./package.json package.json
RUN npm install

EXPOSE 7000 7000

# ADD ./node_modules node_modules
ADD ./lib lib
ADD ./views views
ADD ./app.js app.js
ADD ./config.js config.js
ADD ./idp-public-cert.pem idp-public-cert.pem
ADD ./idp-private-key.pem idp-private-key.pem
ADD ./public public

ENTRYPOINT [ "node",  "app.js", "--acs", "https://signin.aws.amazon.com/saml", "--aud", "https://signin.aws.amazon.com/saml", "--slo", "https://signin.aws.amazon.com/oauth?Action=logout&redirect_uri=localhost:7000", "--no-signResponse" ]
