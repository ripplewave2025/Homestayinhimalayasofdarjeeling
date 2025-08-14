# Security Policy

## Supported Versions

This project is currently in active development. Security updates will be provided for the latest version.

## Environment Variables and Vite

⚠️ **Important Security Notice for Vite Environment Variables**

This project uses Vite as the build tool. Please be aware of the following security considerations:

### Vite Environment Variable Exposure

- **VITE_* prefixed variables**: Any environment variable prefixed with `VITE_` will be exposed to the client-side code and bundled into the final build
- **Public exposure**: These variables are accessible to anyone who can view the application's source code in the browser
- **Never use VITE_* prefix for sensitive data**: Do not prefix sensitive information (API keys, database credentials, secrets) with `VITE_`

### Safe Practices

1. **Sensitive variables**: Keep sensitive environment variables (API keys, database URLs, secrets) without the `VITE_` prefix
2. **Public configuration**: Only use `VITE_` prefix for public configuration values that are safe to expose (e.g., `VITE_APP_NAME`, `VITE_API_BASE_URL` for public APIs)
3. **Environment files**: Ensure `.env`, `.env.local`, and other environment files are properly added to `.gitignore`
4. **Build verification**: Always verify your production builds don't contain sensitive information

### Example

```env
# ❌ DON'T DO THIS - Will be exposed to client
VITE_DATABASE_PASSWORD=secret123
VITE_STRIPE_SECRET_KEY=sk_live_...

# ✅ SAFE - Not exposed to client (used only server-side)
DATABASE_PASSWORD=secret123
STRIPE_SECRET_KEY=sk_live_...

# ✅ SAFE - Public information, OK to expose
VITE_APP_NAME=Homestay in Himalayas
VITE_PUBLIC_API_URL=https://api.example.com
```

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please help us maintain the security of the project by reporting it responsibly.

### How to Report

1. **Email**: Send details to [security contact - replace with actual email]
2. **Include**: 
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

### What to Expect

- **Response time**: We aim to respond to security reports within 48 hours
- **Updates**: You will receive updates on the progress of addressing the vulnerability
- **Credit**: With your permission, we will credit you for the discovery

### Please Do NOT

- Create public issues for security vulnerabilities
- Share vulnerability details publicly until we've had time to address them
- Attempt to access data that doesn't belong to you

## Additional Security Measures

This project implements several security measures:

- Environment variables are properly configured and sensitive data is excluded from client builds
- Dependencies are regularly updated
- The `.gitignore` file prevents accidental exposure of sensitive files

Thank you for helping keep our project secure!
