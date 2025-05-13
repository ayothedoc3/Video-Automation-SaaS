# Contributing to Video Automation SaaS

We love your input! We want to make contributing to Video Automation SaaS as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Development Process

1. Fork the repo and create your branch from `main`
2. Set up your development environment following the README.md instructions
3. Make your changes and ensure they follow our coding standards
4. Test your changes thoroughly
5. Submit a pull request

## Development Environment Setup

1. Install prerequisites:
   - Node.js 18+
   - Docker and Docker Compose
   - PostgreSQL 14+
   - MongoDB 6+
   - Redis 7+

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/video-automation-saas.git
   cd video-automation-saas
   ```

3. Install dependencies:
   ```bash
   # Frontend dependencies
   cd frontend && npm install
   
   # Backend dependencies
   cd ../backend && npm install
   ```

4. Set up environment variables:
   ```bash
   # Frontend
   cp frontend/.env.example frontend/.env.local
   
   # Backend
   cp backend/.env.example backend/.env
   ```

5. Start development servers:
   ```bash
   # Start all services
   docker-compose up -d
   
   # Start backend
   cd backend && npm run dev
   
   # Start frontend
   cd frontend && npm run dev
   ```

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the documentation with any new environment variables, exposed ports, etc.
3. The PR may be merged once you have the sign-off of two other developers

## Coding Standards

### General

- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Document new code using JSDoc comments

### Frontend

- Use functional components with hooks
- Follow React best practices
- Implement responsive design
- Write unit tests for components
- Use Tailwind CSS for styling

### Backend

- Follow RESTful API design principles
- Implement proper error handling
- Write unit tests for services
- Document API endpoints using OpenAPI/Swagger
- Follow security best practices

## Testing

- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Include integration tests where appropriate
- Test across different browsers (frontend)

## Reporting Bugs

We use GitHub issues to track public bugs. Report a bug by opening a new issue.

### Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

## Feature Requests

We use GitHub issues to track feature requests. When proposing a feature:

- Explain in detail how it would work
- Keep the scope as narrow as possible
- Remember that this is a volunteer-driven project

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).
