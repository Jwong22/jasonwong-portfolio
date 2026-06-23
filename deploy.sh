#!/bin/bash
# Deploy static site to S3 and invalidate CloudFront cache

set -e

BUCKET_NAME=$(cd infra && terraform output -raw s3_bucket_name)
DISTRIBUTION_ID=$(cd infra && terraform output -raw cloudfront_distribution_id)

echo "Building site..."
npm run build

echo "Syncing to S3..."
aws s3 sync out/ "s3://$BUCKET_NAME" --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*"

echo "Deploy complete!"
