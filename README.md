# @portola/passage

Official TypeScript SDK for the Passage API - the loan distribution platform by Portola.

## Installation

```bash
npm install @portola/passage
```

**Requirements:** Node.js 18+

## Which SDK Should I Use?

| SDK | Use Case |
|-----|----------|
| [`@portola/passage-neobank`](https://www.npmjs.com/package/@portola/passage-neobank) | **Recommended for neobanks.** High-level SDK with encryption helpers, webhook handling, and a streamlined API. |
| `@portola/passage` | Low-level API client for advanced use cases or when building custom integrations. |
| `@portola/passage-lender` | For lender integrations (coming soon). |

This package provides auto-generated TypeScript clients with direct access to the underlying API. Most integrations should use the higher-level SDKs above.

## Quick Start

```typescript
import { Configuration, ApplicationsApi } from '@portola/passage';

const config = new Configuration({
  apiKey: process.env.PASSAGE_API_KEY,
  basePath: 'https://api.tryportola.com/api/v1',
});

const applications = new ApplicationsApi(config);

// List applications
const response = await applications.listApplications();
console.log(`Found ${response.data.data?.applications?.length} applications`);
```

## Available API Clients

### Core APIs

| Client | Description |
|--------|-------------|
| `ApplicationsApi` | Create and manage loan applications |
| `OffersApi` | View and accept loan offers (prequal and final) |
| `LoansApi` | Manage funded loans and payment schedules |
| `SigningApi` | Document signing sessions via HelloSign |
| `FundingApi` | Loan funding operations and consent |

### Discovery & Configuration APIs

| Client | Description |
|--------|-------------|
| `EntityDiscoveryApi` | Discover lenders, neobanks, and their capabilities |
| `NeobankSelfServiceApi` | Neobank account settings, webhooks, and API keys |
| `KeyManagementApi` | Encryption key rotation and revocation |
| `AttestationApi` | KYC attestations and trust evaluation |

### Infrastructure APIs

| Client | Description |
|--------|-------------|
| `SDXApi` | Secure Document Exchange token generation |
| `PlatformApi` | Platform-level operations |
| `QueueApi` | Lender queue management |
| `TransfersApi` | Money movement and transfers |
| `TreasuryApi` | Treasury and wallet management |

### SDX Service (Document Storage)

| Client | Description |
|--------|-------------|
| `BlobsApi` | Upload and download encrypted documents |
| `HealthApi` | SDX service health checks |

## Configuration

```typescript
import { Configuration, ApplicationsApi } from '@portola/passage';

const config = new Configuration({
  // Required
  apiKey: process.env.PASSAGE_API_KEY,
  basePath: 'https://api.tryportola.com/api/v1',

  // Optional: Custom axios options
  baseOptions: {
    timeout: 30000,
    headers: {
      'User-Agent': 'my-app/1.0.0',
    },
  },
});

const applicationsApi = new ApplicationsApi(config);
const offersApi = new OffersApi(config);
// ... create other API clients as needed
```

## Environments

The Passage API uses a single endpoint. Your environment (sandbox vs production) is determined by your API key prefix:

| API Key Prefix | Environment | Blockchain |
|----------------|-------------|------------|
| `nb_test_*` | Sandbox | Base Sepolia (testnet) |
| `nb_live_*` | Production | Base Mainnet |
| `lender_test_*` | Sandbox (lenders) | Base Sepolia (testnet) |
| `lender_live_*` | Production (lenders) | Base Mainnet |

```typescript
// Same code works for both environments - just swap the API key
const config = new Configuration({
  apiKey: process.env.PASSAGE_API_KEY, // nb_test_* or nb_live_*
  basePath: 'https://api.tryportola.com/api/v1',
});
```

## Error Handling

The SDK throws Axios errors. Handle them appropriately:

```typescript
import { Configuration, ApplicationsApi } from '@portola/passage';
import { AxiosError } from 'axios';

const config = new Configuration({
  apiKey: process.env.PASSAGE_API_KEY,
  basePath: 'https://api.tryportola.com/api/v1',
});

const applications = new ApplicationsApi(config);

try {
  const response = await applications.getApplication('invalid-id');
} catch (error) {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const data = error.response?.data;

    switch (status) {
      case 400:
        console.error('Validation error:', data);
        break;
      case 401:
        console.error('Invalid API key');
        break;
      case 403:
        console.error('Not authorized to access this resource');
        break;
      case 404:
        console.error('Resource not found');
        break;
      case 429:
        const retryAfter = error.response?.headers['retry-after'];
        console.error(`Rate limited. Retry after ${retryAfter}s`);
        break;
      default:
        console.error('API error:', status, data);
    }
  } else {
    throw error;
  }
}
```

> **Tip:** The higher-level `@portola/passage-neobank` SDK provides typed error classes (`ValidationError`, `NotFoundError`, etc.) for easier error handling.

## Namespace Imports

To avoid naming conflicts, you can import API clients under namespaces:

```typescript
import { PassageAPI, PassageSDX } from '@portola/passage';

// Use namespaced access
const config = new PassageAPI.Configuration({
  apiKey: process.env.PASSAGE_API_KEY,
  basePath: 'https://api.tryportola.com/api/v1',
});

const applications = new PassageAPI.ApplicationsApi(config);
const blobs = new PassageSDX.BlobsApi(sdxConfig);
```

## TypeScript Support

This package includes full TypeScript definitions. All request and response types are exported:

```typescript
import type {
  // Application types
  ApplicationRequest,
  ApplicationResponse,
  ApplicationStatus,

  // Offer types
  EncryptedOffer,
  OfferAcceptanceRequest,
  OfferAcceptanceResponse,

  // Loan types
  Loan,
  LoanStatus,
  PaymentScheduleResponse,

  // Signing types
  CreateSigningSessionRequest,
  SigningSessionCreateResponse,

  // And many more...
} from '@portola/passage';
```

## Full Documentation

For complete documentation, guides, and examples:

- **Documentation:** [docs.tryportola.com](https://docs.tryportola.com)
- **API Reference:** [docs.tryportola.com/api-reference](https://docs.tryportola.com/api-reference)
- **Developer Portal:** [dashboard.tryportola.com](https://dashboard.tryportola.com)

## Related Packages

- [`@portola/passage-neobank`](https://www.npmjs.com/package/@portola/passage-neobank) - High-level SDK for neobank integrations with encryption helpers and webhook handling

## License

MIT
