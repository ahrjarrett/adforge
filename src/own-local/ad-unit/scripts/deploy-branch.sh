sudo apt-get install s3cmd

s3cmd \
  --access_key=$AWS_ACCESS_KEY_ID --secret_key=$AWS_SECRET_ACCESS_KEY \
  --guess-mime-type \
  --no-mime-magic \
  --acl-public \
  --recursive \
  --add-header="Cache-Control: no-cache, no-store, must-revalidate" \
  --add-header="x-amz-meta-surrogate-control: max-age=31536000" \
  --add-header="x-amz-meta-surrogate-key: ares-unit-bundle-${CIRCLE_BRANCH}" \
  sync "dist/" "s3://${S3_BUCKET_NAME}/unit/${CIRCLE_BRANCH}/"

curl -v "https://api.fastly.com/service/${FASTLY_LF_STAGING_SERVICE_ID}/purge/ares-unit-bundle-${CIRCLE_BRANCH}" \
  -X POST \
  -H "Fastly-Soft-Purge: 1" \
  -H "Fastly-Key: ${FASTLY_API_KEY}" \
  -H "Accept: application/json"

curl -v "https://api.fastly.com/service/${FASTLY_LF_PRODUCTION_SERVICE_ID}/purge/ares-unit-bundle-${CIRCLE_BRANCH}" \
  -X POST \
  -H "Fastly-Soft-Purge: 1" \
  -H "Fastly-Key: ${FASTLY_API_KEY}" \
  -H "Accept: application/json"

curl https://api.rollbar.com/api/1/deploy/ \
  -F access_token=$ADFORGE_AD_ROLLBAR_TOKEN \
  -F environment=$CIRCLE_BRANCH \
  -F revision=$CIRCLE_SHA1 \
  -F local_username=$CIRCLE_USERNAME

curl https://api.rollbar.com/api/1/sourcemap/ \
  -F access_token=$ADFORGE_AD_ROLLBAR_TOKEN \
  -F version=$CIRCLE_SHA1 \
  -F minified_url=https://s3.amazonaws.com/${S3_BUCKET_NAME}/unit/${CIRCLE_BRANCH}/ares.js \
  -F source_map=@dist/ares.js.map
