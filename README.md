# jasonwong.dev — Personal Portfolio

My personal portfolio website built with Next.js and Tailwind CSS, hosted on AWS (S3 + CloudFront).

## Tech Stack

- **Framework:** Next.js 16 (Static Export)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Hosting:** AWS S3 + CloudFront
- **IaC:** Terraform
- **CI/CD:** GitHub Actions (planned)

## Architecture

```
Route 53 (DNS) → CloudFront (CDN + HTTPS) → S3 (Static files)
                        │
                   ACM Certificate
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static files output to `./out/`

## Deploy to AWS

```bash
# First time: provision infrastructure
cd infra
terraform init
terraform apply

# Deploy site
cd ..
./deploy.sh
```

## Project Structure

```
├── app/              # Next.js app router
├── components/       # React components (Hero, About, etc.)
├── infra/            # Terraform (S3, CloudFront, ACM)
├── public/           # Static assets
└── deploy.sh         # Build + sync to S3
```
