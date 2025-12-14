/**
 * @portola/passage
 *
 * Official TypeScript SDK for the Passage API.
 * This package provides auto-generated API clients for public endpoints only.
 *
 * For high-level integrations, use:
 * - @portola/passage-neobank (for neobank integrations)
 * - @portola/passage-lender (for lender integrations) [coming soon]
 *
 * @packageDocumentation
 */

// =============================================================================
// API Client Exports (from openapi.public.yaml)
// =============================================================================

// Export API client under namespace to avoid naming conflicts
export * as PassageAPI from './generated/api';

// Export SDX client under namespace
export * as PassageSDX from './generated/sdx';

// Re-export commonly used API classes at top level for convenience
export {
  Configuration,
  Configuration as PassageConfiguration,
  ApplicationsApi,
  OffersApi,
  AttestationApi,
  EntityDiscoveryApi,
  FundingApi,
  KeyManagementApi,
  LoansApi,
  NeobankSelfServiceApi,
  PlatformApi,
  QueueApi,
  SDXApi,
  SigningApi,
  TransfersApi,
  TreasuryApi,
} from './generated/api';

// =============================================================================
// SDX Client Exports (from sdx/openapi.yaml)
// =============================================================================

// Re-export SDX API classes
export { BlobsApi, HealthApi } from './generated/sdx';

// Re-export SDX types
export type {
  UploadBlob201Response as SDXUploadResponse,
  UploadResponse as SDXUploadResponseAlt,
} from './generated/sdx';

// =============================================================================
// Type Exports (from openapi.public.yaml)
// =============================================================================

export type {
  // Application types
  ApplicationRequest,
  ApplicationRequestEncryptedPayloadsInner,
  ApplicationRequestProductTypeEnum,
  ApplicationResponse,
  ApplicationResponseData,
  ApplicationResponseDataWalletTypeEnum,
  ApplicationSubmitResponse,
  ApplicationSubmitResponseData,
  ApplicationStatus,
  ApplicationStatusUpdateResponse,
  ApplicationStatusUpdateResponseData,
  ApplicationListItem,
  ListApplications200Response,
  ListApplications200ResponseData,

  // Offer types
  EncryptedOffer,
  EncryptedOfferOfferTypeEnum,
  EncryptedOffersResponse,
  EncryptedOffersResponseData,
  EncryptedOffersResponseDataLendersInner,
  OfferAcceptanceRequest,
  OfferAcceptanceRequestBorrowerWallet,
  OfferAcceptanceRequestBorrowerWalletChainEnum,
  OfferAcceptanceRequestBorrowerWalletWalletTypeEnum,
  OfferAcceptanceRequestHardPullConsent,
  OfferAcceptanceRequestCommunicationPreferences,
  OfferAcceptanceResponse,
  OfferAcceptanceResponseData,

  // Loan types
  Loan,
  LoanStatus,
  LoanListResponse,
  LoanListResponseData,
  LoanResponse,
  PaymentScheduleResponse,
  PaymentScheduleResponseData,
  ScheduledPayment,

  // Lender types
  LenderListResponse,
  LenderListResponseData,
  LenderListItem,
  LenderDetailResponse,
  LenderDetailResponseData,

  // Draft submission types
  DraftSubmitRequest,
  DraftSubmitRequestPerLenderKycHandlesInner,
  DraftSubmitResponse,
  DraftSubmitResponseData,

  // Self-service types
  NeobankAccountResponse,
  NeobankAccountResponseData,
  WebhookConfigResponse,
  WebhookConfigResponseData,
  WebhookUrlUpdateResponse,
  WebhookUrlUpdateResponseData,
  WebhookTestResponse,
  WebhookTestResponseData,
  WebhookSecretRotateResponse,
  WebhookSecretRotateResponseData,

  // Signing types
  CreateSigningSessionRequest,
  SigningSessionCreateResponse,
  SigningSessionCreateResponseData,
  SigningSessionStatusResponse,
  SigningSessionStatusResponseData,
  SigningSessionsListResponse,
  SigningSessionsListResponseData,
  SigningSessionsListResponseDataSessionsInner,

  // SDX types
  SDXTokenRequest,
  SDXTokenRequestActionEnum,
  SDXTokenRequestDocumentTypeEnum,
  SDXTokenResponse,
  SDXTokenResponseData,
  KYCHandleRequest,
  KYCHandleResponse,
  KYCHandleResponseData,
} from './generated/api';
