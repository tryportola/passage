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
  WalletsApi,
} from './generated/api';

// Re-export wallet verification enums at top level
export {
  WalletType,
  WalletVerificationMethod,
  WalletVerificationStatus,
  Chain,
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
  RepaymentStatus,

  // Lender types
  LenderListResponse,
  LenderListResponseData,
  LenderListItem,
  LenderDetailResponse,
  LenderDetailResponseData,
  LenderDetail,
  LenderDetailPublicKey,
  LenderPublicKeyResponse,
  LenderPublicKeyResponseData,

  // Neobank types (for lender discovery)
  NeobankListResponse,
  NeobankListResponseData,
  NeobankListItem,
  NeobankListResponseDataPagination,
  NeobankDetailResponse,
  NeobankDetailResponseData,
  NeobankPublicKeyResponse,
  NeobankPublicKeyResponseData,

  // Batch public key operations
  BatchGetLenderPublicKeysRequest,
  BatchGetNeobankPublicKeysRequest,
  BatchLenderKeysResponse,
  BatchLenderKeysResponseData,
  BatchLenderKeysResponseDataKeysValue,
  BatchNeobankKeysResponse,
  BatchNeobankKeysResponseData,
  BatchNeobankKeysResponseDataKeysValue,

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

  // Key Management types
  KeyRotationResponse,
  KeyRotationResponseData,
  KeyRotationResponseDataStatusEnum,
  KeyRevokeResponse,
  KeyRevokeResponseData,
  KeyRevokeResponseDataStatusEnum,
  KeyHistoryResponse,
  KeyHistoryResponseData,
  KeyHistoryResponseDataKeysInner,
  KeyHistoryResponseDataKeysInnerStatusEnum,
  RotateEntityKeyRequest,
  EmergencyRevokeKeyRequest,
  EmergencyRevokeKeyRequestReasonEnum,

  // Signing types
  CreateSigningSessionRequest,
  SigningSessionCreateResponse,
  SigningSessionCreateResponseData,
  SigningSessionCreateResponseDataStatusEnum,
  SigningSessionStatusResponse,
  SigningSessionStatusResponseData,
  SigningSessionStatusResponseDataStatusEnum,
  SigningSessionsListResponse,
  SigningSessionsListResponseData,
  SigningSessionsListResponseDataSessionsInner,
  SigningSessionsListResponseDataSessionsInnerStatusEnum,
  CompleteSigningSessionRequest,
  SigningSessionCompleteResponse,
  SigningSessionCompleteResponseData,
  SigningSessionCompleteResponseDataStatusEnum,

  // SDX types
  SDXTokenRequest,
  SDXTokenRequestActionEnum,
  SDXTokenRequestDocumentTypeEnum,
  SDXTokenResponse,
  SDXTokenResponseData,
  KYCHandleRequest,
  KYCHandleResponse,
  KYCHandleResponseData,

  // Funding types
  FundingRecord,
  FundingRecordStatusEnum,
  FundingRecordApplication,
  GetFundingById200Response,
  GetPendingFundings200Response,
  ConsentToFunding200Response,
  ConsentToFunding200ResponseData,
  DeclineFunding200Response,
  DeclineFunding200ResponseData,
  DeclineFundingRequest,

  // Treasury types
  TreasuryOverviewResponse,
  TreasuryOverviewData,
  TreasuryWallet,
  TreasuryVirtualAccount,
  TreasuryVirtualAccountStatusEnum,
  TreasuryCustomer,
  TreasuryCustomerKybStatusEnum,
  TreasuryTransaction,
  TreasuryTransactionTypeEnum,
  TreasuryTransactionsResponse,
  TreasuryTransactionsResponseData,
  AllWalletsResponse,
  AllWalletsData,
  SweepPreviewResponse,
  SweepResponse,
  SweepRequest,

  // Attestation types (lender-facing)
  Attestation,
  AttestationProvider,
  AttestationTrustEvaluation,
  AttestationVerification,
  AttestationVerificationTypeEnum,
  AttestationVerificationStatusEnum,
  AttestationsResponse,
  AttestationsResponseData,
  AttestationsSummary,
  ProofAccessTokenResponse,
  ProofAccessTokenResponseData,

  // Trust types (lender-facing)
  TrustEvaluationResponse,
  TrustEvaluationResponseData,
  TrustSettingsResponse,
  TrustSettingsResponseData,
  TrustSettingsResponseDataSettingsInner,
  TrustSettingsUpdateResponse,
  TrustSettingsUpdateResponseData,

  // KYC types (neobank-facing)
  KYCProvidersResponse,
  KYCProvidersResponseData,
  KYCProvidersResponseDataProvidersInner,
  KYCStatusResponse,
  KYCStatusResponseData,
  KYCStatusResponseDataStatusEnum,
  KYCStatusResponseDataAttestationsInner,
  KYCInitiateResponse,
  KYCInitiateResponseData,

  // Wallet ownership verification types
  WalletData,
  WalletResponse,
  WalletListResponse,
  WalletListResponseData,
  WalletListResponseDataPagination,
  CreateWalletRequest,
  UpdateWalletRequest,
  InitiateVerificationRequest,
  SubmitProofRequest,
  MessageSignChallenge,
  VerificationChallengeData,
  VerificationChallengeResponse,
  VerificationStatusData,
  VerificationStatusResponse,
  VerificationListResponse,
  VerificationProofData,
  VerificationProofResponse,
  VerificationProofDataWallet,
} from './generated/api';
