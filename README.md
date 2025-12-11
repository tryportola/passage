# @portola/passage

Official TypeScript SDK for the Passage API - the loan distribution platform by Portola.

## Installation

```bash
npm install @portola/passage
```

## Overview

This package provides auto-generated TypeScript clients for the Passage API. For most integrations, we recommend using the higher-level SDKs:

- **Neobanks**: Use [`@portola/passage-neobank`](https://www.npmjs.com/package/@portola/passage-neobank) for a streamlined integration experience
- **Lenders**: Use [`@portola/passage-lender`](https://www.npmjs.com/package/@portola/passage-lender) (coming soon)

This base SDK is intended for advanced users who need direct access to the underlying API clients.

## Usage

```typescript
import { Configuration, ApplicationsApi, OffersApi } from '@portola/passage';

// Configure the SDK
const config = new Configuration({
  apiKey: process.env.PASSAGE_API_KEY,
  basePath: 'https://api.tryportola.com/api/v1',
});

// Use API clients directly
const applicationsApi = new ApplicationsApi(config);
const offersApi = new OffersApi(config);

// List applications
const response = await applicationsApi.listApplications();
console.log(response.data);
```

## Available API Clients

### Core APIs
- `ApplicationsApi` - Create and manage loan applications
- `OffersApi` - View and accept loan offers
- `LoansApi` - Manage funded loans
- `SigningApi` - Document signing sessions

### Discovery APIs
- `EntityDiscoveryApi` - Discover lenders and their capabilities
- `NeobankSelfServiceApi` - Neobank account management

### Infrastructure APIs
- `SDXApi` - Secure Document Exchange tokens
- `PlatformApi` - Platform-level operations
- `QueueApi` - Lender queue management

### SDX Service
- `BlobsApi` - Upload/download encrypted documents
- `HealthApi` - Service health checks

## Configuration Options

```typescript
const config = new Configuration({
  apiKey: 'your-api-key',
  basePath: 'https://api.tryportola.com/api/v1',
  baseOptions: {
    timeout: 30000,
    headers: {
      'User-Agent': 'my-app/1.0.0',
    },
  },
});
```

## Environments

The API uses a single endpoint for both environments. The environment is determined automatically by your API key prefix:

| API Key Prefix | Environment |
|----------------|-------------|
| `nb_live_*` | Production |
| `nb_test_*` | Sandbox |

```typescript
// Both use the same base URL - environment is determined by the key
const config = new Configuration({
  apiKey: 'nb_test_...',  // Sandbox
  // apiKey: 'nb_live_...',  // Production
  basePath: 'https://api.tryportola.com/api/v1',
});
```

## TypeScript Support

This package includes full TypeScript type definitions. All request and response types are exported:

```typescript
import type {
  ApplicationRequest,
  ApplicationResponse,
  EncryptedOffer,
  Loan,
  LoanStatus,
} from '@portola/passage';
```

## License

MIT
