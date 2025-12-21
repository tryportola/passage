'use strict';

var globalAxios2 = require('axios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var globalAxios2__default = /*#__PURE__*/_interopDefault(globalAxios2);

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/generated/api/index.ts
var api_exports = {};
__export(api_exports, {
  ApplicationListItemProductTypeEnum: () => ApplicationListItemProductTypeEnum,
  ApplicationRequestBorrowerWalletChainEnum: () => ApplicationRequestBorrowerWalletChainEnum,
  ApplicationRequestProductTypeEnum: () => ApplicationRequestProductTypeEnum,
  ApplicationResponseDataProductTypeEnum: () => ApplicationResponseDataProductTypeEnum,
  ApplicationResponseDataWalletTypeEnum: () => ApplicationResponseDataWalletTypeEnum,
  ApplicationStatus: () => ApplicationStatus,
  ApplicationsApi: () => ApplicationsApi,
  ApplicationsApiAxiosParamCreator: () => ApplicationsApiAxiosParamCreator,
  ApplicationsApiFactory: () => ApplicationsApiFactory,
  ApplicationsApiFp: () => ApplicationsApiFp,
  AttestationApi: () => AttestationApi,
  AttestationApiAxiosParamCreator: () => AttestationApiAxiosParamCreator,
  AttestationApiFactory: () => AttestationApiFactory,
  AttestationApiFp: () => AttestationApiFp,
  AttestationVerificationStatusEnum: () => AttestationVerificationStatusEnum,
  AttestationVerificationTypeEnum: () => AttestationVerificationTypeEnum,
  Chain: () => Chain,
  Configuration: () => Configuration,
  ConfirmESignComplete200ResponseDataStatusEnum: () => ConfirmESignComplete200ResponseDataStatusEnum,
  DeclineApplication200ResponseDataStatusEnum: () => DeclineApplication200ResponseDataStatusEnum,
  DeclinedApplicationsResponseDataApplicationsInnerProductTypeEnum: () => DeclinedApplicationsResponseDataApplicationsInnerProductTypeEnum,
  EmergencyRevokeKeyRequestReasonEnum: () => EmergencyRevokeKeyRequestReasonEnum,
  EncryptedOfferOfferTypeEnum: () => EncryptedOfferOfferTypeEnum,
  EncryptedOffersResponseDataOfferTypeEnum: () => EncryptedOffersResponseDataOfferTypeEnum,
  EntityDiscoveryApi: () => EntityDiscoveryApi,
  EntityDiscoveryApiAxiosParamCreator: () => EntityDiscoveryApiAxiosParamCreator,
  EntityDiscoveryApiFactory: () => EntityDiscoveryApiFactory,
  EntityDiscoveryApiFp: () => EntityDiscoveryApiFp,
  FundingApi: () => FundingApi,
  FundingApiAxiosParamCreator: () => FundingApiAxiosParamCreator,
  FundingApiFactory: () => FundingApiFactory,
  FundingApiFp: () => FundingApiFp,
  FundingRecordStatusEnum: () => FundingRecordStatusEnum,
  GetHardPullConsent200ResponseDataOfferTypeEnum: () => GetHardPullConsent200ResponseDataOfferTypeEnum,
  GetLenderOfferByIdOfferTypeEnum: () => GetLenderOfferByIdOfferTypeEnum,
  KYCStatusResponseDataStatusEnum: () => KYCStatusResponseDataStatusEnum,
  KeyHistoryResponseDataKeysInnerStatusEnum: () => KeyHistoryResponseDataKeysInnerStatusEnum,
  KeyManagementApi: () => KeyManagementApi,
  KeyManagementApiAxiosParamCreator: () => KeyManagementApiAxiosParamCreator,
  KeyManagementApiFactory: () => KeyManagementApiFactory,
  KeyManagementApiFp: () => KeyManagementApiFp,
  KeyRevokeResponseDataStatusEnum: () => KeyRevokeResponseDataStatusEnum,
  KeyRotationResponseDataStatusEnum: () => KeyRotationResponseDataStatusEnum,
  ListApplicationsProductTypeEnum: () => ListApplicationsProductTypeEnum,
  ListLenderOffersOfferTypeEnum: () => ListLenderOffersOfferTypeEnum,
  ListLoanRepaymentsSourceEnum: () => ListLoanRepaymentsSourceEnum,
  ListTransfersStateEnum: () => ListTransfersStateEnum,
  LoanRepaymentStatusEnum: () => LoanRepaymentStatusEnum,
  LoanStatus: () => LoanStatus,
  LoanWalletInfraStatusEnum: () => LoanWalletInfraStatusEnum,
  LoanWalletResponseDataLiquidationAddressStatusEnum: () => LoanWalletResponseDataLiquidationAddressStatusEnum,
  LoanWalletResponseDataLoanRepaymentInfraStatusEnum: () => LoanWalletResponseDataLoanRepaymentInfraStatusEnum,
  LoansApi: () => LoansApi,
  LoansApiAxiosParamCreator: () => LoansApiAxiosParamCreator,
  LoansApiFactory: () => LoansApiFactory,
  LoansApiFp: () => LoansApiFp,
  MessageSignChallengeSigningStandardEnum: () => MessageSignChallengeSigningStandardEnum,
  NeobankSelfServiceApi: () => NeobankSelfServiceApi,
  NeobankSelfServiceApiAxiosParamCreator: () => NeobankSelfServiceApiAxiosParamCreator,
  NeobankSelfServiceApiFactory: () => NeobankSelfServiceApiFactory,
  NeobankSelfServiceApiFp: () => NeobankSelfServiceApiFp,
  OfferAcceptanceRequestBorrowerWalletChainEnum: () => OfferAcceptanceRequestBorrowerWalletChainEnum,
  OfferAcceptanceRequestBorrowerWalletWalletTypeEnum: () => OfferAcceptanceRequestBorrowerWalletWalletTypeEnum,
  OfferAcceptanceRequestRequestedDisbursementMethodEnum: () => OfferAcceptanceRequestRequestedDisbursementMethodEnum,
  OfferAcceptanceResponseDataNextStepsActionEnum: () => OfferAcceptanceResponseDataNextStepsActionEnum,
  OfferAcceptanceResponseDataOfferTypeEnum: () => OfferAcceptanceResponseDataOfferTypeEnum,
  OfferAcceptanceResponseDataStatusEnum: () => OfferAcceptanceResponseDataStatusEnum,
  OfferDetailResponseDataOfferOfferTypeEnum: () => OfferDetailResponseDataOfferOfferTypeEnum,
  OfferStatus: () => OfferStatus,
  OfferSubmissionResponseDataOfferTypeEnum: () => OfferSubmissionResponseDataOfferTypeEnum,
  OffersApi: () => OffersApi,
  OffersApiAxiosParamCreator: () => OffersApiAxiosParamCreator,
  OffersApiFactory: () => OffersApiFactory,
  OffersApiFp: () => OffersApiFp,
  PlatformApi: () => PlatformApi,
  PlatformApiAxiosParamCreator: () => PlatformApiAxiosParamCreator,
  PlatformApiFactory: () => PlatformApiFactory,
  PlatformApiFp: () => PlatformApiFp,
  QueueApi: () => QueueApi,
  QueueApiAxiosParamCreator: () => QueueApiAxiosParamCreator,
  QueueApiFactory: () => QueueApiFactory,
  QueueApiFp: () => QueueApiFp,
  QueueApplicationProductTypeEnum: () => QueueApplicationProductTypeEnum,
  RepaymentStatus: () => RepaymentStatus,
  SDXApi: () => SDXApi,
  SDXApiAxiosParamCreator: () => SDXApiAxiosParamCreator,
  SDXApiFactory: () => SDXApiFactory,
  SDXApiFp: () => SDXApiFp,
  SDXTokenRequestActionEnum: () => SDXTokenRequestActionEnum,
  SDXTokenRequestDocumentTypeEnum: () => SDXTokenRequestDocumentTypeEnum,
  SigningApi: () => SigningApi,
  SigningApiAxiosParamCreator: () => SigningApiAxiosParamCreator,
  SigningApiFactory: () => SigningApiFactory,
  SigningApiFp: () => SigningApiFp,
  SigningSessionCompleteResponseDataStatusEnum: () => SigningSessionCompleteResponseDataStatusEnum,
  SigningSessionCreateResponseDataStatusEnum: () => SigningSessionCreateResponseDataStatusEnum,
  SigningSessionStatusResponseDataStatusEnum: () => SigningSessionStatusResponseDataStatusEnum,
  SigningSessionsListResponseDataSessionsInnerStatusEnum: () => SigningSessionsListResponseDataSessionsInnerStatusEnum,
  SweepResultStatusEnum: () => SweepResultStatusEnum,
  TransferDetailStateEnum: () => TransferDetailStateEnum,
  TransferSummaryStateEnum: () => TransferSummaryStateEnum,
  TransfersApi: () => TransfersApi,
  TransfersApiAxiosParamCreator: () => TransfersApiAxiosParamCreator,
  TransfersApiFactory: () => TransfersApiFactory,
  TransfersApiFp: () => TransfersApiFp,
  TreasuryApi: () => TreasuryApi,
  TreasuryApiAxiosParamCreator: () => TreasuryApiAxiosParamCreator,
  TreasuryApiFactory: () => TreasuryApiFactory,
  TreasuryApiFp: () => TreasuryApiFp,
  TreasuryCustomerKybStatusEnum: () => TreasuryCustomerKybStatusEnum,
  TreasuryTransactionTypeEnum: () => TreasuryTransactionTypeEnum,
  TreasuryVirtualAccountStatusEnum: () => TreasuryVirtualAccountStatusEnum,
  ValidationErrorResponseErrorEnum: () => ValidationErrorResponseErrorEnum,
  ValidationErrorResponseStatusEnum: () => ValidationErrorResponseStatusEnum,
  WalletType: () => WalletType,
  WalletVerificationMethod: () => WalletVerificationMethod,
  WalletVerificationStatus: () => WalletVerificationStatus,
  WalletsApi: () => WalletsApi,
  WalletsApiAxiosParamCreator: () => WalletsApiAxiosParamCreator,
  WalletsApiFactory: () => WalletsApiFactory,
  WalletsApiFp: () => WalletsApiFp
});
var BASE_PATH = "https://api.tryportola.com/api/v1".replace(/\/+$/, "");
var BaseAPI = class {
  constructor(configuration, basePath = BASE_PATH, axios = globalAxios2__default.default) {
    this.basePath = basePath;
    this.axios = axios;
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath ?? basePath;
    }
  }
};
var RequiredError = class extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
    this.name = "RequiredError";
  }
};
var operationServerMap = {};

// src/generated/api/common.ts
var DUMMY_BASE_URL = "https://example.com";
var assertParamExists = function(functionName, paramName, paramValue) {
  if (paramValue === null || paramValue === void 0) {
    throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
  }
};
var setApiKeyToObject = async function(object, keyParamName, configuration) {
  if (configuration && configuration.apiKey) {
    const localVarApiKeyValue = typeof configuration.apiKey === "function" ? await configuration.apiKey(keyParamName) : await configuration.apiKey;
    object[keyParamName] = localVarApiKeyValue;
  }
};
function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
  if (parameter == null) return;
  if (typeof parameter === "object") {
    if (Array.isArray(parameter)) {
      parameter.forEach((item) => setFlattenedQueryParams(urlSearchParams, item, key));
    } else {
      Object.keys(parameter).forEach(
        (currentKey) => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== "" ? "." : ""}${currentKey}`)
      );
    }
  } else {
    if (urlSearchParams.has(key)) {
      urlSearchParams.append(key, parameter);
    } else {
      urlSearchParams.set(key, parameter);
    }
  }
}
var setSearchParams = function(url, ...objects) {
  const searchParams = new URLSearchParams(url.search);
  setFlattenedQueryParams(searchParams, objects);
  url.search = searchParams.toString();
};
var serializeDataIfNeeded = function(value, requestOptions, configuration) {
  const nonString = typeof value !== "string";
  const needsSerialization = nonString && configuration && configuration.isJsonMime ? configuration.isJsonMime(requestOptions.headers["Content-Type"]) : nonString;
  return needsSerialization ? JSON.stringify(value !== void 0 ? value : {}) : value || "";
};
var toPathString = function(url) {
  return url.pathname + url.search + url.hash;
};
var createRequestFunction = function(axiosArgs, globalAxios5, BASE_PATH3, configuration) {
  return (axios = globalAxios5, basePath = BASE_PATH3) => {
    const axiosRequestArgs = { ...axiosArgs.options, url: (axios.defaults.baseURL ? "" : configuration?.basePath ?? basePath) + axiosArgs.url };
    return axios.request(axiosRequestArgs);
  };
};

// src/generated/api/api.ts
var ApplicationListItemProductTypeEnum = {
  Consumer: "consumer",
  Auto: "auto",
  Mortgage: "mortgage",
  Personal: "personal",
  Business: "business"
};
var ApplicationRequestProductTypeEnum = {
  Consumer: "consumer",
  Auto: "auto",
  Mortgage: "mortgage",
  Personal: "personal",
  Business: "business"
};
var ApplicationRequestBorrowerWalletChainEnum = {
  Base: "base",
  Ethereum: "ethereum",
  Polygon: "polygon",
  Arbitrum: "arbitrum",
  Optimism: "optimism",
  Solana: "solana"
};
var ApplicationResponseDataProductTypeEnum = {
  Consumer: "consumer",
  Auto: "auto",
  Mortgage: "mortgage",
  Personal: "personal",
  Business: "business"
};
var ApplicationResponseDataWalletTypeEnum = {
  BorrowerSelfCustody: "borrower_self_custody",
  NeobankCustodial: "neobank_custodial"
};
var ApplicationStatus = {
  Draft: "DRAFT",
  Pending: "PENDING",
  Routing: "ROUTING",
  OffersPending: "OFFERS_PENDING",
  OffersReady: "OFFERS_READY",
  Accepted: "ACCEPTED",
  Processing: "PROCESSING",
  Approved: "APPROVED",
  Rejected: "REJECTED",
  Funded: "FUNDED",
  Expired: "EXPIRED",
  Cancelled: "CANCELLED",
  Signed: "SIGNED",
  Settled: "SETTLED"
};
var AttestationVerificationTypeEnum = {
  Document: "document",
  Identity: "identity",
  Address: "address",
  Age: "age"
};
var AttestationVerificationStatusEnum = {
  Passed: "passed",
  Failed: "failed",
  ManualReview: "manual_review",
  Insufficient: "insufficient"
};
var Chain = {
  Base: "base",
  Ethereum: "ethereum",
  Polygon: "polygon",
  Arbitrum: "arbitrum",
  Optimism: "optimism",
  Solana: "solana"
};
var ConfirmESignComplete200ResponseDataStatusEnum = {
  Signed: "SIGNED"
};
var DeclineApplication200ResponseDataStatusEnum = {
  Declined: "DECLINED"
};
var DeclinedApplicationsResponseDataApplicationsInnerProductTypeEnum = {
  Consumer: "consumer",
  Auto: "auto",
  Mortgage: "mortgage",
  Personal: "personal",
  Business: "business"
};
var EmergencyRevokeKeyRequestReasonEnum = {
  Compromised: "COMPROMISED",
  Lost: "LOST",
  Rotation: "ROTATION"
};
var EncryptedOfferOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var EncryptedOffersResponseDataOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var FundingRecordStatusEnum = {
  Pending: "PENDING",
  Consented: "CONSENTED",
  Disbursing: "DISBURSING",
  Disbursed: "DISBURSED",
  Funded: "FUNDED",
  Failed: "FAILED",
  Cancelled: "CANCELLED"
};
var GetHardPullConsent200ResponseDataOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var KYCStatusResponseDataStatusEnum = {
  NotStarted: "NOT_STARTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED"
};
var KeyHistoryResponseDataKeysInnerStatusEnum = {
  Active: "ACTIVE",
  PendingActivation: "PENDING_ACTIVATION",
  RotatingOut: "ROTATING_OUT",
  Revoked: "REVOKED",
  Expired: "EXPIRED"
};
var KeyRevokeResponseDataStatusEnum = {
  Revoked: "REVOKED"
};
var KeyRotationResponseDataStatusEnum = {
  PendingActivation: "PENDING_ACTIVATION",
  Active: "ACTIVE"
};
var LoanRepaymentStatusEnum = {
  Pending: "pending",
  Creating: "creating",
  Ready: "ready",
  Failed: "failed",
  FailedNotified: "failed_notified"
};
var LoanStatus = {
  Active: "ACTIVE",
  PaidOff: "PAID_OFF",
  Delinquent: "DELINQUENT",
  Defaulted: "DEFAULTED",
  Closed: "CLOSED"
};
var LoanWalletInfraStatusEnum = {
  Pending: "pending",
  Creating: "creating",
  Ready: "ready",
  Failed: "failed",
  FailedNotified: "failed_notified"
};
var LoanWalletResponseDataLiquidationAddressStatusEnum = {
  Active: "active",
  Deactivated: "deactivated",
  Unknown: "unknown"
};
var LoanWalletResponseDataLoanRepaymentInfraStatusEnum = {
  Pending: "pending",
  Creating: "creating",
  Ready: "ready",
  Failed: "failed"
};
var MessageSignChallengeSigningStandardEnum = {
  PersonalSign: "personal_sign",
  EthSignTypedDataV4: "eth_signTypedData_v4"
};
var OfferAcceptanceRequestBorrowerWalletChainEnum = {
  Base: "base",
  Ethereum: "ethereum",
  Polygon: "polygon"
};
var OfferAcceptanceRequestBorrowerWalletWalletTypeEnum = {
  BorrowerSelfCustody: "borrower_self_custody",
  NeobankCustodial: "neobank_custodial"
};
var OfferAcceptanceRequestRequestedDisbursementMethodEnum = {
  Ach: "ach",
  Wire: "wire",
  Stablecoin: "stablecoin"
};
var OfferAcceptanceResponseDataOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var OfferAcceptanceResponseDataStatusEnum = {
  Accepted: "ACCEPTED"
};
var OfferAcceptanceResponseDataNextStepsActionEnum = {
  HardPull: "HARD_PULL",
  DocumentSigning: "DOCUMENT_SIGNING"
};
var OfferDetailResponseDataOfferOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var OfferStatus = {
  Pending: "PENDING",
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  Expired: "EXPIRED",
  Withdrawn: "WITHDRAWN",
  Superseded: "SUPERSEDED"
};
var OfferSubmissionResponseDataOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var QueueApplicationProductTypeEnum = {
  Consumer: "consumer",
  Auto: "auto",
  Mortgage: "mortgage",
  Personal: "personal",
  Business: "business"
};
var RepaymentStatus = {
  Pending: "PENDING",
  Processing: "PROCESSING",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Refunded: "REFUNDED"
};
var SDXTokenRequestActionEnum = {
  Upload: "upload",
  Download: "download"
};
var SDXTokenRequestDocumentTypeEnum = {
  Kyc: "kyc",
  Contract: "contract",
  SignedContract: "signed_contract"
};
var SigningSessionCompleteResponseDataStatusEnum = {
  Completed: "COMPLETED"
};
var SigningSessionCreateResponseDataStatusEnum = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Expired: "EXPIRED",
  Cancelled: "CANCELLED"
};
var SigningSessionStatusResponseDataStatusEnum = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Expired: "EXPIRED",
  Cancelled: "CANCELLED"
};
var SigningSessionsListResponseDataSessionsInnerStatusEnum = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Expired: "EXPIRED",
  Cancelled: "CANCELLED"
};
var SweepResultStatusEnum = {
  Success: "success",
  Skipped: "skipped",
  Failed: "failed",
  Pending: "pending"
};
var TransferDetailStateEnum = {
  AwaitingFunds: "awaiting_funds",
  FundsReceived: "funds_received",
  PaymentSubmitted: "payment_submitted",
  PaymentProcessed: "payment_processed",
  Canceled: "canceled",
  Undeliverable: "undeliverable",
  Returned: "returned",
  Refunded: "refunded"
};
var TransferSummaryStateEnum = {
  AwaitingFunds: "awaiting_funds",
  FundsReceived: "funds_received",
  PaymentSubmitted: "payment_submitted",
  PaymentProcessed: "payment_processed",
  Canceled: "canceled",
  Undeliverable: "undeliverable",
  Returned: "returned",
  Refunded: "refunded"
};
var TreasuryCustomerKybStatusEnum = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  Incomplete: "incomplete",
  ManualReview: "manual_review"
};
var TreasuryTransactionTypeEnum = {
  Deposit: "deposit",
  DepositPending: "deposit_pending",
  Refund: "refund",
  Unknown: "unknown"
};
var TreasuryVirtualAccountStatusEnum = {
  Pending: "pending",
  Activated: "activated"
};
var ValidationErrorResponseErrorEnum = {
  ValidationError: "VALIDATION_ERROR"
};
var ValidationErrorResponseStatusEnum = {
  NUMBER_400: 400
};
var WalletType = {
  EmbeddedNonCustodial: "EMBEDDED_NON_CUSTODIAL",
  EmbeddedCustodial: "EMBEDDED_CUSTODIAL",
  ExternalNonCustodial: "EXTERNAL_NON_CUSTODIAL"
};
var WalletVerificationMethod = {
  MessageSign: "MESSAGE_SIGN",
  MicroDeposit: "MICRO_DEPOSIT",
  Aopp: "AOPP"
};
var WalletVerificationStatus = {
  Pending: "PENDING",
  AwaitingConfirmation: "AWAITING_CONFIRMATION",
  Verified: "VERIFIED",
  Failed: "FAILED",
  Expired: "EXPIRED"
};
var ApplicationsApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Lender declines an application after performing a hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  **Requirements:** - Application must be in ACCEPTED, PROCESSING, or APPROVED status - Lender must have been routed to this application - Records declinedAt timestamp for 30-day adverse action notice deadline  **Note:** Reason codes and adverse action notice content are the lender\'s responsibility. This endpoint only tracks the decline event for compliance. 
     * @summary Decline application after hard pull
     * @param {string} applicationId Unique identifier for the application
     * @param {DeclineApplicationRequest} [declineApplicationRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    declineApplication: async (applicationId, declineApplicationRequest, options = {}) => {
      assertParamExists("declineApplication", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/decline`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(declineApplicationRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get application details. - Neobanks can access their own applications - Lenders can access applications routed to them 
     * @summary Get application details
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApplication: async (applicationId, options = {}) => {
      assertParamExists("getApplication", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Retrieve the current status of a loan application (neobank only)
     * @summary Get application status
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApplicationStatus: async (applicationId, options = {}) => {
      assertParamExists("getApplicationStatus", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/status`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get hard pull consent for an application (lender-only endpoint)
     * @summary Get hard pull consent
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHardPullConsent: async (applicationId, options = {}) => {
      assertParamExists("getHardPullConsent", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/consent`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Retrieve list of applications. - Neobanks: Returns only their own applications - Lenders: Returns applications routed to them  Neobanks can filter by `externalId` (their user reference) or `borrowerWalletAddress` (wallet address) to efficiently retrieve applications for a specific borrower. 
     * @summary List applications
     * @param {ApplicationStatus} [status] Filter by application status
     * @param {ListApplicationsProductTypeEnum} [productType] Filter by product type
     * @param {string} [externalId] Filter by application\&#39;s external reference ID (neobank-only). Exact match. Use this when you have your own user ID system. 
     * @param {string} [borrowerWalletAddress] Filter by borrower\&#39;s wallet address (case-insensitive, neobank-only). Use this for wallet-first applications. 
     * @param {number} [limit] Number of results to return
     * @param {number} [offset] Number of results to skip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listApplications: async (status, productType, externalId, borrowerWalletAddress, limit, offset, options = {}) => {
      const localVarPath = `/applications`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (status !== void 0) {
        localVarQueryParameter["status"] = status;
      }
      if (productType !== void 0) {
        localVarQueryParameter["productType"] = productType;
      }
      if (externalId !== void 0) {
        localVarQueryParameter["externalId"] = externalId;
      }
      if (borrowerWalletAddress !== void 0) {
        localVarQueryParameter["borrowerWalletAddress"] = borrowerWalletAddress;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (offset !== void 0) {
        localVarQueryParameter["offset"] = offset;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Neobank submits an encrypted loan application packet. The application is broadcast to all configured lenders supporting the product type. 
     * @summary Submit loan application
     * @param {ApplicationRequest} applicationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitApplication: async (applicationRequest, options = {}) => {
      assertParamExists("submitApplication", "applicationRequest", applicationRequest);
      const localVarPath = `/applications`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(applicationRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Finalize a draft application by attaching per-lender KYC handles and routing to lenders.  **Prerequisites:** - Application must be in DRAFT status (created with draft: true) - KYC documents must be uploaded to SDX for each lender using their public key  **What this does:** 1. Validates perLenderKycHandles match the original encryptedPayloads lenders 2. Creates ApplicationRoutes with per-lender KYC handles attached 3. Transitions status from DRAFT to OFFERS_PENDING 4. Sends webhooks to notify lenders  **Idempotency:** This endpoint is naturally idempotent. Calling it on an already-submitted application returns 200 with current state and alreadySubmitted: true. 
     * @summary Submit draft application
     * @param {string} applicationId Unique identifier for the application
     * @param {DraftSubmitRequest} [draftSubmitRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitDraftApplication: async (applicationId, draftSubmitRequest, options = {}) => {
      assertParamExists("submitDraftApplication", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/submit`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(draftSubmitRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Update application status (neobank only)
     * @summary Update application status
     * @param {string} applicationId Unique identifier for the application
     * @param {UpdateApplicationStatusRequest} updateApplicationStatusRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateApplicationStatus: async (applicationId, updateApplicationStatusRequest, options = {}) => {
      assertParamExists("updateApplicationStatus", "applicationId", applicationId);
      assertParamExists("updateApplicationStatus", "updateApplicationStatusRequest", updateApplicationStatusRequest);
      const localVarPath = `/applications/{applicationId}/status`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "PATCH", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(updateApplicationStatusRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var ApplicationsApiFp = function(configuration) {
  const localVarAxiosParamCreator = ApplicationsApiAxiosParamCreator(configuration);
  return {
    /**
     * Lender declines an application after performing a hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  **Requirements:** - Application must be in ACCEPTED, PROCESSING, or APPROVED status - Lender must have been routed to this application - Records declinedAt timestamp for 30-day adverse action notice deadline  **Note:** Reason codes and adverse action notice content are the lender\'s responsibility. This endpoint only tracks the decline event for compliance. 
     * @summary Decline application after hard pull
     * @param {string} applicationId Unique identifier for the application
     * @param {DeclineApplicationRequest} [declineApplicationRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async declineApplication(applicationId, declineApplicationRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.declineApplication(applicationId, declineApplicationRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.declineApplication"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get application details. - Neobanks can access their own applications - Lenders can access applications routed to them 
     * @summary Get application details
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getApplication(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getApplication(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.getApplication"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Retrieve the current status of a loan application (neobank only)
     * @summary Get application status
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getApplicationStatus(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getApplicationStatus(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.getApplicationStatus"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get hard pull consent for an application (lender-only endpoint)
     * @summary Get hard pull consent
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getHardPullConsent(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getHardPullConsent(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.getHardPullConsent"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Retrieve list of applications. - Neobanks: Returns only their own applications - Lenders: Returns applications routed to them  Neobanks can filter by `externalId` (their user reference) or `borrowerWalletAddress` (wallet address) to efficiently retrieve applications for a specific borrower. 
     * @summary List applications
     * @param {ApplicationStatus} [status] Filter by application status
     * @param {ListApplicationsProductTypeEnum} [productType] Filter by product type
     * @param {string} [externalId] Filter by application\&#39;s external reference ID (neobank-only). Exact match. Use this when you have your own user ID system. 
     * @param {string} [borrowerWalletAddress] Filter by borrower\&#39;s wallet address (case-insensitive, neobank-only). Use this for wallet-first applications. 
     * @param {number} [limit] Number of results to return
     * @param {number} [offset] Number of results to skip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listApplications(status, productType, externalId, borrowerWalletAddress, limit, offset, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listApplications(status, productType, externalId, borrowerWalletAddress, limit, offset, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.listApplications"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Neobank submits an encrypted loan application packet. The application is broadcast to all configured lenders supporting the product type. 
     * @summary Submit loan application
     * @param {ApplicationRequest} applicationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submitApplication(applicationRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.submitApplication(applicationRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.submitApplication"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Finalize a draft application by attaching per-lender KYC handles and routing to lenders.  **Prerequisites:** - Application must be in DRAFT status (created with draft: true) - KYC documents must be uploaded to SDX for each lender using their public key  **What this does:** 1. Validates perLenderKycHandles match the original encryptedPayloads lenders 2. Creates ApplicationRoutes with per-lender KYC handles attached 3. Transitions status from DRAFT to OFFERS_PENDING 4. Sends webhooks to notify lenders  **Idempotency:** This endpoint is naturally idempotent. Calling it on an already-submitted application returns 200 with current state and alreadySubmitted: true. 
     * @summary Submit draft application
     * @param {string} applicationId Unique identifier for the application
     * @param {DraftSubmitRequest} [draftSubmitRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submitDraftApplication(applicationId, draftSubmitRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.submitDraftApplication(applicationId, draftSubmitRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.submitDraftApplication"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update application status (neobank only)
     * @summary Update application status
     * @param {string} applicationId Unique identifier for the application
     * @param {UpdateApplicationStatusRequest} updateApplicationStatusRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateApplicationStatus(applicationId, updateApplicationStatusRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateApplicationStatus(applicationId, updateApplicationStatusRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ApplicationsApi.updateApplicationStatus"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var ApplicationsApiFactory = function(configuration, basePath, axios) {
  const localVarFp = ApplicationsApiFp(configuration);
  return {
    /**
     * Lender declines an application after performing a hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  **Requirements:** - Application must be in ACCEPTED, PROCESSING, or APPROVED status - Lender must have been routed to this application - Records declinedAt timestamp for 30-day adverse action notice deadline  **Note:** Reason codes and adverse action notice content are the lender\'s responsibility. This endpoint only tracks the decline event for compliance. 
     * @summary Decline application after hard pull
     * @param {ApplicationsApiDeclineApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    declineApplication(requestParameters, options) {
      return localVarFp.declineApplication(requestParameters.applicationId, requestParameters.declineApplicationRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get application details. - Neobanks can access their own applications - Lenders can access applications routed to them 
     * @summary Get application details
     * @param {ApplicationsApiGetApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApplication(requestParameters, options) {
      return localVarFp.getApplication(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Retrieve the current status of a loan application (neobank only)
     * @summary Get application status
     * @param {ApplicationsApiGetApplicationStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApplicationStatus(requestParameters, options) {
      return localVarFp.getApplicationStatus(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get hard pull consent for an application (lender-only endpoint)
     * @summary Get hard pull consent
     * @param {ApplicationsApiGetHardPullConsentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHardPullConsent(requestParameters, options) {
      return localVarFp.getHardPullConsent(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Retrieve list of applications. - Neobanks: Returns only their own applications - Lenders: Returns applications routed to them  Neobanks can filter by `externalId` (their user reference) or `borrowerWalletAddress` (wallet address) to efficiently retrieve applications for a specific borrower. 
     * @summary List applications
     * @param {ApplicationsApiListApplicationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listApplications(requestParameters = {}, options) {
      return localVarFp.listApplications(requestParameters.status, requestParameters.productType, requestParameters.externalId, requestParameters.borrowerWalletAddress, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
    },
    /**
     * Neobank submits an encrypted loan application packet. The application is broadcast to all configured lenders supporting the product type. 
     * @summary Submit loan application
     * @param {ApplicationsApiSubmitApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitApplication(requestParameters, options) {
      return localVarFp.submitApplication(requestParameters.applicationRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Finalize a draft application by attaching per-lender KYC handles and routing to lenders.  **Prerequisites:** - Application must be in DRAFT status (created with draft: true) - KYC documents must be uploaded to SDX for each lender using their public key  **What this does:** 1. Validates perLenderKycHandles match the original encryptedPayloads lenders 2. Creates ApplicationRoutes with per-lender KYC handles attached 3. Transitions status from DRAFT to OFFERS_PENDING 4. Sends webhooks to notify lenders  **Idempotency:** This endpoint is naturally idempotent. Calling it on an already-submitted application returns 200 with current state and alreadySubmitted: true. 
     * @summary Submit draft application
     * @param {ApplicationsApiSubmitDraftApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitDraftApplication(requestParameters, options) {
      return localVarFp.submitDraftApplication(requestParameters.applicationId, requestParameters.draftSubmitRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Update application status (neobank only)
     * @summary Update application status
     * @param {ApplicationsApiUpdateApplicationStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateApplicationStatus(requestParameters, options) {
      return localVarFp.updateApplicationStatus(requestParameters.applicationId, requestParameters.updateApplicationStatusRequest, options).then((request) => request(axios, basePath));
    }
  };
};
var ApplicationsApi = class extends BaseAPI {
  /**
   * Lender declines an application after performing a hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  **Requirements:** - Application must be in ACCEPTED, PROCESSING, or APPROVED status - Lender must have been routed to this application - Records declinedAt timestamp for 30-day adverse action notice deadline  **Note:** Reason codes and adverse action notice content are the lender\'s responsibility. This endpoint only tracks the decline event for compliance. 
   * @summary Decline application after hard pull
   * @param {ApplicationsApiDeclineApplicationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  declineApplication(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).declineApplication(requestParameters.applicationId, requestParameters.declineApplicationRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get application details. - Neobanks can access their own applications - Lenders can access applications routed to them 
   * @summary Get application details
   * @param {ApplicationsApiGetApplicationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  getApplication(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).getApplication(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Retrieve the current status of a loan application (neobank only)
   * @summary Get application status
   * @param {ApplicationsApiGetApplicationStatusRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  getApplicationStatus(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).getApplicationStatus(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get hard pull consent for an application (lender-only endpoint)
   * @summary Get hard pull consent
   * @param {ApplicationsApiGetHardPullConsentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  getHardPullConsent(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).getHardPullConsent(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Retrieve list of applications. - Neobanks: Returns only their own applications - Lenders: Returns applications routed to them  Neobanks can filter by `externalId` (their user reference) or `borrowerWalletAddress` (wallet address) to efficiently retrieve applications for a specific borrower. 
   * @summary List applications
   * @param {ApplicationsApiListApplicationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  listApplications(requestParameters = {}, options) {
    return ApplicationsApiFp(this.configuration).listApplications(requestParameters.status, requestParameters.productType, requestParameters.externalId, requestParameters.borrowerWalletAddress, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Neobank submits an encrypted loan application packet. The application is broadcast to all configured lenders supporting the product type. 
   * @summary Submit loan application
   * @param {ApplicationsApiSubmitApplicationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  submitApplication(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).submitApplication(requestParameters.applicationRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Finalize a draft application by attaching per-lender KYC handles and routing to lenders.  **Prerequisites:** - Application must be in DRAFT status (created with draft: true) - KYC documents must be uploaded to SDX for each lender using their public key  **What this does:** 1. Validates perLenderKycHandles match the original encryptedPayloads lenders 2. Creates ApplicationRoutes with per-lender KYC handles attached 3. Transitions status from DRAFT to OFFERS_PENDING 4. Sends webhooks to notify lenders  **Idempotency:** This endpoint is naturally idempotent. Calling it on an already-submitted application returns 200 with current state and alreadySubmitted: true. 
   * @summary Submit draft application
   * @param {ApplicationsApiSubmitDraftApplicationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  submitDraftApplication(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).submitDraftApplication(requestParameters.applicationId, requestParameters.draftSubmitRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Update application status (neobank only)
   * @summary Update application status
   * @param {ApplicationsApiUpdateApplicationStatusRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApplicationsApi
   */
  updateApplicationStatus(requestParameters, options) {
    return ApplicationsApiFp(this.configuration).updateApplicationStatus(requestParameters.applicationId, requestParameters.updateApplicationStatusRequest, options).then((request) => request(this.axios, this.basePath));
  }
};
var ListApplicationsProductTypeEnum = {
  Consumer: "consumer",
  Auto: "auto",
  Mortgage: "mortgage",
  Personal: "personal",
  Business: "business"
};
var AttestationApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Configure lender\'s trust settings for a KYC provider
     * @summary Configure lender trust settings
     * @param {string} providerCode 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configureLenderTrust: async (providerCode, body, options = {}) => {
      assertParamExists("configureLenderTrust", "providerCode", providerCode);
      assertParamExists("configureLenderTrust", "body", body);
      const localVarPath = `/trust/{provider_code}`.replace(`{${"provider_code"}}`, encodeURIComponent(String(providerCode)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "PUT", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Check if lender trusts a specific attestation
     * @summary Evaluate attestation trust
     * @param {string} attestationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    evaluateAttestationTrust: async (attestationId, options = {}) => {
      assertParamExists("evaluateAttestationTrust", "attestationId", attestationId);
      const localVarPath = `/attestations/{attestationId}/trust`.replace(`{${"attestationId"}}`, encodeURIComponent(String(attestationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get attestations for an application (lender only)
     * @summary Get attestations for application
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttestations: async (applicationId, options = {}) => {
      assertParamExists("getAttestations", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/attestations`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get list of supported KYC providers
     * @summary Get supported KYC providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKYCProviders: async (options = {}) => {
      const localVarPath = `/providers`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get KYC verification status for an application (neobank only)
     * @summary Get KYC status
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKYCStatus: async (applicationId, options = {}) => {
      assertParamExists("getKYCStatus", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/kyc/status`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get lender\'s current trust settings for all providers
     * @summary Get lender trust settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderTrustSettings: async (options = {}) => {
      const localVarPath = `/trust`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get SDX access token for proof retrieval (if lender trusts attestation)
     * @summary Get proof access token
     * @param {string} attestationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProofAccessToken: async (attestationId, options = {}) => {
      assertParamExists("getProofAccessToken", "attestationId", attestationId);
      const localVarPath = `/attestations/{attestationId}/proof-token`.replace(`{${"attestationId"}}`, encodeURIComponent(String(attestationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Initiate KYC verification for an application (neobank only)
     * @summary Initiate KYC verification
     * @param {string} applicationId Unique identifier for the application
     * @param {InitiateKYCRequest} initiateKYCRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    initiateKYC: async (applicationId, initiateKYCRequest, options = {}) => {
      assertParamExists("initiateKYC", "applicationId", applicationId);
      assertParamExists("initiateKYC", "initiateKYCRequest", initiateKYCRequest);
      const localVarPath = `/applications/{applicationId}/kyc/initiate`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(initiateKYCRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Webhook endpoint for KYC providers to post results
     * @summary KYC provider webhook
     * @param {string} provider 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    kycProviderWebhook: async (provider, body, options = {}) => {
      assertParamExists("kycProviderWebhook", "provider", provider);
      assertParamExists("kycProviderWebhook", "body", body);
      const localVarPath = `/webhook/{provider}`.replace(`{${"provider"}}`, encodeURIComponent(String(provider)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Store KYC attestation for an application (KYC provider endpoint)
     * @summary Store attestation
     * @param {string} applicationId Unique identifier for the application
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    storeAttestation: async (applicationId, body, options = {}) => {
      assertParamExists("storeAttestation", "applicationId", applicationId);
      assertParamExists("storeAttestation", "body", body);
      const localVarPath = `/applications/{applicationId}/attestations`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var AttestationApiFp = function(configuration) {
  const localVarAxiosParamCreator = AttestationApiAxiosParamCreator(configuration);
  return {
    /**
     * Configure lender\'s trust settings for a KYC provider
     * @summary Configure lender trust settings
     * @param {string} providerCode 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async configureLenderTrust(providerCode, body, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.configureLenderTrust(providerCode, body, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.configureLenderTrust"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Check if lender trusts a specific attestation
     * @summary Evaluate attestation trust
     * @param {string} attestationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async evaluateAttestationTrust(attestationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.evaluateAttestationTrust(attestationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.evaluateAttestationTrust"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get attestations for an application (lender only)
     * @summary Get attestations for application
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAttestations(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAttestations(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.getAttestations"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get list of supported KYC providers
     * @summary Get supported KYC providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getKYCProviders(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getKYCProviders(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.getKYCProviders"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get KYC verification status for an application (neobank only)
     * @summary Get KYC status
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getKYCStatus(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getKYCStatus(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.getKYCStatus"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get lender\'s current trust settings for all providers
     * @summary Get lender trust settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLenderTrustSettings(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLenderTrustSettings(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.getLenderTrustSettings"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get SDX access token for proof retrieval (if lender trusts attestation)
     * @summary Get proof access token
     * @param {string} attestationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProofAccessToken(attestationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProofAccessToken(attestationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.getProofAccessToken"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Initiate KYC verification for an application (neobank only)
     * @summary Initiate KYC verification
     * @param {string} applicationId Unique identifier for the application
     * @param {InitiateKYCRequest} initiateKYCRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async initiateKYC(applicationId, initiateKYCRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.initiateKYC(applicationId, initiateKYCRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.initiateKYC"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Webhook endpoint for KYC providers to post results
     * @summary KYC provider webhook
     * @param {string} provider 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async kycProviderWebhook(provider, body, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.kycProviderWebhook(provider, body, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.kycProviderWebhook"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Store KYC attestation for an application (KYC provider endpoint)
     * @summary Store attestation
     * @param {string} applicationId Unique identifier for the application
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async storeAttestation(applicationId, body, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.storeAttestation(applicationId, body, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AttestationApi.storeAttestation"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var AttestationApiFactory = function(configuration, basePath, axios) {
  const localVarFp = AttestationApiFp(configuration);
  return {
    /**
     * Configure lender\'s trust settings for a KYC provider
     * @summary Configure lender trust settings
     * @param {AttestationApiConfigureLenderTrustRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configureLenderTrust(requestParameters, options) {
      return localVarFp.configureLenderTrust(requestParameters.providerCode, requestParameters.body, options).then((request) => request(axios, basePath));
    },
    /**
     * Check if lender trusts a specific attestation
     * @summary Evaluate attestation trust
     * @param {AttestationApiEvaluateAttestationTrustRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    evaluateAttestationTrust(requestParameters, options) {
      return localVarFp.evaluateAttestationTrust(requestParameters.attestationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get attestations for an application (lender only)
     * @summary Get attestations for application
     * @param {AttestationApiGetAttestationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttestations(requestParameters, options) {
      return localVarFp.getAttestations(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get list of supported KYC providers
     * @summary Get supported KYC providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKYCProviders(options) {
      return localVarFp.getKYCProviders(options).then((request) => request(axios, basePath));
    },
    /**
     * Get KYC verification status for an application (neobank only)
     * @summary Get KYC status
     * @param {AttestationApiGetKYCStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKYCStatus(requestParameters, options) {
      return localVarFp.getKYCStatus(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get lender\'s current trust settings for all providers
     * @summary Get lender trust settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderTrustSettings(options) {
      return localVarFp.getLenderTrustSettings(options).then((request) => request(axios, basePath));
    },
    /**
     * Get SDX access token for proof retrieval (if lender trusts attestation)
     * @summary Get proof access token
     * @param {AttestationApiGetProofAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProofAccessToken(requestParameters, options) {
      return localVarFp.getProofAccessToken(requestParameters.attestationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Initiate KYC verification for an application (neobank only)
     * @summary Initiate KYC verification
     * @param {AttestationApiInitiateKYCRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    initiateKYC(requestParameters, options) {
      return localVarFp.initiateKYC(requestParameters.applicationId, requestParameters.initiateKYCRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Webhook endpoint for KYC providers to post results
     * @summary KYC provider webhook
     * @param {AttestationApiKycProviderWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    kycProviderWebhook(requestParameters, options) {
      return localVarFp.kycProviderWebhook(requestParameters.provider, requestParameters.body, options).then((request) => request(axios, basePath));
    },
    /**
     * Store KYC attestation for an application (KYC provider endpoint)
     * @summary Store attestation
     * @param {AttestationApiStoreAttestationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    storeAttestation(requestParameters, options) {
      return localVarFp.storeAttestation(requestParameters.applicationId, requestParameters.body, options).then((request) => request(axios, basePath));
    }
  };
};
var AttestationApi = class extends BaseAPI {
  /**
   * Configure lender\'s trust settings for a KYC provider
   * @summary Configure lender trust settings
   * @param {AttestationApiConfigureLenderTrustRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  configureLenderTrust(requestParameters, options) {
    return AttestationApiFp(this.configuration).configureLenderTrust(requestParameters.providerCode, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Check if lender trusts a specific attestation
   * @summary Evaluate attestation trust
   * @param {AttestationApiEvaluateAttestationTrustRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  evaluateAttestationTrust(requestParameters, options) {
    return AttestationApiFp(this.configuration).evaluateAttestationTrust(requestParameters.attestationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get attestations for an application (lender only)
   * @summary Get attestations for application
   * @param {AttestationApiGetAttestationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  getAttestations(requestParameters, options) {
    return AttestationApiFp(this.configuration).getAttestations(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get list of supported KYC providers
   * @summary Get supported KYC providers
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  getKYCProviders(options) {
    return AttestationApiFp(this.configuration).getKYCProviders(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get KYC verification status for an application (neobank only)
   * @summary Get KYC status
   * @param {AttestationApiGetKYCStatusRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  getKYCStatus(requestParameters, options) {
    return AttestationApiFp(this.configuration).getKYCStatus(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get lender\'s current trust settings for all providers
   * @summary Get lender trust settings
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  getLenderTrustSettings(options) {
    return AttestationApiFp(this.configuration).getLenderTrustSettings(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get SDX access token for proof retrieval (if lender trusts attestation)
   * @summary Get proof access token
   * @param {AttestationApiGetProofAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  getProofAccessToken(requestParameters, options) {
    return AttestationApiFp(this.configuration).getProofAccessToken(requestParameters.attestationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Initiate KYC verification for an application (neobank only)
   * @summary Initiate KYC verification
   * @param {AttestationApiInitiateKYCRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  initiateKYC(requestParameters, options) {
    return AttestationApiFp(this.configuration).initiateKYC(requestParameters.applicationId, requestParameters.initiateKYCRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Webhook endpoint for KYC providers to post results
   * @summary KYC provider webhook
   * @param {AttestationApiKycProviderWebhookRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  kycProviderWebhook(requestParameters, options) {
    return AttestationApiFp(this.configuration).kycProviderWebhook(requestParameters.provider, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Store KYC attestation for an application (KYC provider endpoint)
   * @summary Store attestation
   * @param {AttestationApiStoreAttestationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttestationApi
   */
  storeAttestation(requestParameters, options) {
    return AttestationApiFp(this.configuration).storeAttestation(requestParameters.applicationId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
  }
};
var EntityDiscoveryApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Batch retrieve public keys for multiple lenders (bootstrap)
     * @summary Batch get lender public keys
     * @param {BatchGetLenderPublicKeysRequest} batchGetLenderPublicKeysRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchGetLenderPublicKeys: async (batchGetLenderPublicKeysRequest, options = {}) => {
      assertParamExists("batchGetLenderPublicKeys", "batchGetLenderPublicKeysRequest", batchGetLenderPublicKeysRequest);
      const localVarPath = `/lenders/public-keys`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(batchGetLenderPublicKeysRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Batch retrieve public keys for multiple neobanks (lender-only bootstrap)
     * @summary Batch get neobank public keys
     * @param {BatchGetNeobankPublicKeysRequest} batchGetNeobankPublicKeysRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchGetNeobankPublicKeys: async (batchGetNeobankPublicKeysRequest, options = {}) => {
      assertParamExists("batchGetNeobankPublicKeys", "batchGetNeobankPublicKeysRequest", batchGetNeobankPublicKeysRequest);
      const localVarPath = `/neobanks/public-keys`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(batchGetNeobankPublicKeysRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get detailed information about a specific lender
     * @summary Get lender details
     * @param {string} lenderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderDetails: async (lenderId, options = {}) => {
      assertParamExists("getLenderDetails", "lenderId", lenderId);
      const localVarPath = `/lenders/{lenderId}`.replace(`{${"lenderId"}}`, encodeURIComponent(String(lenderId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get encryption public key for a specific lender
     * @summary Get lender public key
     * @param {string} lenderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderPublicKey: async (lenderId, options = {}) => {
      assertParamExists("getLenderPublicKey", "lenderId", lenderId);
      const localVarPath = `/lenders/{lenderId}/public-key`.replace(`{${"lenderId"}}`, encodeURIComponent(String(lenderId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get detailed information about a specific neobank (lender-only)
     * @summary Get neobank details
     * @param {string} neobankId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNeobankDetails: async (neobankId, options = {}) => {
      assertParamExists("getNeobankDetails", "neobankId", neobankId);
      const localVarPath = `/neobanks/{neobankId}`.replace(`{${"neobankId"}}`, encodeURIComponent(String(neobankId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get encryption public key for a specific neobank (lender-only)
     * @summary Get neobank public key
     * @param {string} neobankId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNeobankPublicKey: async (neobankId, options = {}) => {
      assertParamExists("getNeobankPublicKey", "neobankId", neobankId);
      const localVarPath = `/neobanks/{neobankId}/public-key`.replace(`{${"neobankId"}}`, encodeURIComponent(String(neobankId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List all active lenders (optionally filtered by product type)
     * @summary List lenders
     * @param {string} [productType] 
     * @param {string} [stateCode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLenders: async (productType, stateCode, options = {}) => {
      const localVarPath = `/lenders`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (productType !== void 0) {
        localVarQueryParameter["productType"] = productType;
      }
      if (stateCode !== void 0) {
        localVarQueryParameter["stateCode"] = stateCode;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List all active neobanks (lender-only endpoint)
     * @summary List neobanks
     * @param {string} [productType] 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNeobanksForLenders: async (productType, limit, offset, options = {}) => {
      const localVarPath = `/neobanks`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (productType !== void 0) {
        localVarQueryParameter["productType"] = productType;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (offset !== void 0) {
        localVarQueryParameter["offset"] = offset;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var EntityDiscoveryApiFp = function(configuration) {
  const localVarAxiosParamCreator = EntityDiscoveryApiAxiosParamCreator(configuration);
  return {
    /**
     * Batch retrieve public keys for multiple lenders (bootstrap)
     * @summary Batch get lender public keys
     * @param {BatchGetLenderPublicKeysRequest} batchGetLenderPublicKeysRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async batchGetLenderPublicKeys(batchGetLenderPublicKeysRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.batchGetLenderPublicKeys(batchGetLenderPublicKeysRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.batchGetLenderPublicKeys"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Batch retrieve public keys for multiple neobanks (lender-only bootstrap)
     * @summary Batch get neobank public keys
     * @param {BatchGetNeobankPublicKeysRequest} batchGetNeobankPublicKeysRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async batchGetNeobankPublicKeys(batchGetNeobankPublicKeysRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.batchGetNeobankPublicKeys(batchGetNeobankPublicKeysRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.batchGetNeobankPublicKeys"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get detailed information about a specific lender
     * @summary Get lender details
     * @param {string} lenderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLenderDetails(lenderId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLenderDetails(lenderId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.getLenderDetails"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get encryption public key for a specific lender
     * @summary Get lender public key
     * @param {string} lenderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLenderPublicKey(lenderId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLenderPublicKey(lenderId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.getLenderPublicKey"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get detailed information about a specific neobank (lender-only)
     * @summary Get neobank details
     * @param {string} neobankId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNeobankDetails(neobankId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getNeobankDetails(neobankId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.getNeobankDetails"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get encryption public key for a specific neobank (lender-only)
     * @summary Get neobank public key
     * @param {string} neobankId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNeobankPublicKey(neobankId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getNeobankPublicKey(neobankId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.getNeobankPublicKey"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all active lenders (optionally filtered by product type)
     * @summary List lenders
     * @param {string} [productType] 
     * @param {string} [stateCode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLenders(productType, stateCode, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listLenders(productType, stateCode, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.listLenders"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all active neobanks (lender-only endpoint)
     * @summary List neobanks
     * @param {string} [productType] 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNeobanksForLenders(productType, limit, offset, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listNeobanksForLenders(productType, limit, offset, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["EntityDiscoveryApi.listNeobanksForLenders"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var EntityDiscoveryApiFactory = function(configuration, basePath, axios) {
  const localVarFp = EntityDiscoveryApiFp(configuration);
  return {
    /**
     * Batch retrieve public keys for multiple lenders (bootstrap)
     * @summary Batch get lender public keys
     * @param {EntityDiscoveryApiBatchGetLenderPublicKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchGetLenderPublicKeys(requestParameters, options) {
      return localVarFp.batchGetLenderPublicKeys(requestParameters.batchGetLenderPublicKeysRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Batch retrieve public keys for multiple neobanks (lender-only bootstrap)
     * @summary Batch get neobank public keys
     * @param {EntityDiscoveryApiBatchGetNeobankPublicKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchGetNeobankPublicKeys(requestParameters, options) {
      return localVarFp.batchGetNeobankPublicKeys(requestParameters.batchGetNeobankPublicKeysRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get detailed information about a specific lender
     * @summary Get lender details
     * @param {EntityDiscoveryApiGetLenderDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderDetails(requestParameters, options) {
      return localVarFp.getLenderDetails(requestParameters.lenderId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get encryption public key for a specific lender
     * @summary Get lender public key
     * @param {EntityDiscoveryApiGetLenderPublicKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderPublicKey(requestParameters, options) {
      return localVarFp.getLenderPublicKey(requestParameters.lenderId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get detailed information about a specific neobank (lender-only)
     * @summary Get neobank details
     * @param {EntityDiscoveryApiGetNeobankDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNeobankDetails(requestParameters, options) {
      return localVarFp.getNeobankDetails(requestParameters.neobankId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get encryption public key for a specific neobank (lender-only)
     * @summary Get neobank public key
     * @param {EntityDiscoveryApiGetNeobankPublicKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNeobankPublicKey(requestParameters, options) {
      return localVarFp.getNeobankPublicKey(requestParameters.neobankId, options).then((request) => request(axios, basePath));
    },
    /**
     * List all active lenders (optionally filtered by product type)
     * @summary List lenders
     * @param {EntityDiscoveryApiListLendersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLenders(requestParameters = {}, options) {
      return localVarFp.listLenders(requestParameters.productType, requestParameters.stateCode, options).then((request) => request(axios, basePath));
    },
    /**
     * List all active neobanks (lender-only endpoint)
     * @summary List neobanks
     * @param {EntityDiscoveryApiListNeobanksForLendersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNeobanksForLenders(requestParameters = {}, options) {
      return localVarFp.listNeobanksForLenders(requestParameters.productType, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
    }
  };
};
var EntityDiscoveryApi = class extends BaseAPI {
  /**
   * Batch retrieve public keys for multiple lenders (bootstrap)
   * @summary Batch get lender public keys
   * @param {EntityDiscoveryApiBatchGetLenderPublicKeysRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  batchGetLenderPublicKeys(requestParameters, options) {
    return EntityDiscoveryApiFp(this.configuration).batchGetLenderPublicKeys(requestParameters.batchGetLenderPublicKeysRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Batch retrieve public keys for multiple neobanks (lender-only bootstrap)
   * @summary Batch get neobank public keys
   * @param {EntityDiscoveryApiBatchGetNeobankPublicKeysRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  batchGetNeobankPublicKeys(requestParameters, options) {
    return EntityDiscoveryApiFp(this.configuration).batchGetNeobankPublicKeys(requestParameters.batchGetNeobankPublicKeysRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get detailed information about a specific lender
   * @summary Get lender details
   * @param {EntityDiscoveryApiGetLenderDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  getLenderDetails(requestParameters, options) {
    return EntityDiscoveryApiFp(this.configuration).getLenderDetails(requestParameters.lenderId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get encryption public key for a specific lender
   * @summary Get lender public key
   * @param {EntityDiscoveryApiGetLenderPublicKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  getLenderPublicKey(requestParameters, options) {
    return EntityDiscoveryApiFp(this.configuration).getLenderPublicKey(requestParameters.lenderId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get detailed information about a specific neobank (lender-only)
   * @summary Get neobank details
   * @param {EntityDiscoveryApiGetNeobankDetailsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  getNeobankDetails(requestParameters, options) {
    return EntityDiscoveryApiFp(this.configuration).getNeobankDetails(requestParameters.neobankId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get encryption public key for a specific neobank (lender-only)
   * @summary Get neobank public key
   * @param {EntityDiscoveryApiGetNeobankPublicKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  getNeobankPublicKey(requestParameters, options) {
    return EntityDiscoveryApiFp(this.configuration).getNeobankPublicKey(requestParameters.neobankId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List all active lenders (optionally filtered by product type)
   * @summary List lenders
   * @param {EntityDiscoveryApiListLendersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  listLenders(requestParameters = {}, options) {
    return EntityDiscoveryApiFp(this.configuration).listLenders(requestParameters.productType, requestParameters.stateCode, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List all active neobanks (lender-only endpoint)
   * @summary List neobanks
   * @param {EntityDiscoveryApiListNeobanksForLendersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntityDiscoveryApi
   */
  listNeobanksForLenders(requestParameters = {}, options) {
    return EntityDiscoveryApiFp(this.configuration).listNeobanksForLenders(requestParameters.productType, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
  }
};
var FundingApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Lender agrees to fund the loan. Triggers instant disbursement via Bridge if wallet balance is sufficient. Records lender consent with IP address and user agent for audit trail. Lender-only endpoint. 
     * @summary Consent to funding
     * @param {string} fundingId Unique identifier for the funding request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    consentToFunding: async (fundingId, options = {}) => {
      assertParamExists("consentToFunding", "fundingId", fundingId);
      const localVarPath = `/funding/{fundingId}/consent`.replace(`{${"fundingId"}}`, encodeURIComponent(String(fundingId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender declines to fund the loan. This cancels the funding request and notifies relevant parties. Lender-only endpoint. 
     * @summary Decline funding
     * @param {string} fundingId Unique identifier for the funding request
     * @param {DeclineFundingRequest} [declineFundingRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    declineFunding: async (fundingId, declineFundingRequest, options = {}) => {
      assertParamExists("declineFunding", "fundingId", fundingId);
      const localVarPath = `/funding/{fundingId}/decline`.replace(`{${"fundingId"}}`, encodeURIComponent(String(fundingId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(declineFundingRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get detailed information about a specific funding request. Both lenders and neobanks can access their own fundings. 
     * @summary Get funding details
     * @param {string} fundingId Unique identifier for the funding request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFundingById: async (fundingId, options = {}) => {
      assertParamExists("getFundingById", "fundingId", fundingId);
      const localVarPath = `/funding/{fundingId}`.replace(`{${"fundingId"}}`, encodeURIComponent(String(fundingId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get all funding requests awaiting lender consent. Returns fundings that are ready for lender review and approval. Lender-only endpoint. 
     * @summary Get pending funding requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPendingFundings: async (options = {}) => {
      const localVarPath = `/funding/pending`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var FundingApiFp = function(configuration) {
  const localVarAxiosParamCreator = FundingApiAxiosParamCreator(configuration);
  return {
    /**
     * Lender agrees to fund the loan. Triggers instant disbursement via Bridge if wallet balance is sufficient. Records lender consent with IP address and user agent for audit trail. Lender-only endpoint. 
     * @summary Consent to funding
     * @param {string} fundingId Unique identifier for the funding request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async consentToFunding(fundingId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.consentToFunding(fundingId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["FundingApi.consentToFunding"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender declines to fund the loan. This cancels the funding request and notifies relevant parties. Lender-only endpoint. 
     * @summary Decline funding
     * @param {string} fundingId Unique identifier for the funding request
     * @param {DeclineFundingRequest} [declineFundingRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async declineFunding(fundingId, declineFundingRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.declineFunding(fundingId, declineFundingRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["FundingApi.declineFunding"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get detailed information about a specific funding request. Both lenders and neobanks can access their own fundings. 
     * @summary Get funding details
     * @param {string} fundingId Unique identifier for the funding request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFundingById(fundingId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getFundingById(fundingId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["FundingApi.getFundingById"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get all funding requests awaiting lender consent. Returns fundings that are ready for lender review and approval. Lender-only endpoint. 
     * @summary Get pending funding requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPendingFundings(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPendingFundings(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["FundingApi.getPendingFundings"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var FundingApiFactory = function(configuration, basePath, axios) {
  const localVarFp = FundingApiFp(configuration);
  return {
    /**
     * Lender agrees to fund the loan. Triggers instant disbursement via Bridge if wallet balance is sufficient. Records lender consent with IP address and user agent for audit trail. Lender-only endpoint. 
     * @summary Consent to funding
     * @param {FundingApiConsentToFundingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    consentToFunding(requestParameters, options) {
      return localVarFp.consentToFunding(requestParameters.fundingId, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender declines to fund the loan. This cancels the funding request and notifies relevant parties. Lender-only endpoint. 
     * @summary Decline funding
     * @param {FundingApiDeclineFundingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    declineFunding(requestParameters, options) {
      return localVarFp.declineFunding(requestParameters.fundingId, requestParameters.declineFundingRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get detailed information about a specific funding request. Both lenders and neobanks can access their own fundings. 
     * @summary Get funding details
     * @param {FundingApiGetFundingByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFundingById(requestParameters, options) {
      return localVarFp.getFundingById(requestParameters.fundingId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get all funding requests awaiting lender consent. Returns fundings that are ready for lender review and approval. Lender-only endpoint. 
     * @summary Get pending funding requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPendingFundings(options) {
      return localVarFp.getPendingFundings(options).then((request) => request(axios, basePath));
    }
  };
};
var FundingApi = class extends BaseAPI {
  /**
   * Lender agrees to fund the loan. Triggers instant disbursement via Bridge if wallet balance is sufficient. Records lender consent with IP address and user agent for audit trail. Lender-only endpoint. 
   * @summary Consent to funding
   * @param {FundingApiConsentToFundingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FundingApi
   */
  consentToFunding(requestParameters, options) {
    return FundingApiFp(this.configuration).consentToFunding(requestParameters.fundingId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender declines to fund the loan. This cancels the funding request and notifies relevant parties. Lender-only endpoint. 
   * @summary Decline funding
   * @param {FundingApiDeclineFundingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FundingApi
   */
  declineFunding(requestParameters, options) {
    return FundingApiFp(this.configuration).declineFunding(requestParameters.fundingId, requestParameters.declineFundingRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get detailed information about a specific funding request. Both lenders and neobanks can access their own fundings. 
   * @summary Get funding details
   * @param {FundingApiGetFundingByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FundingApi
   */
  getFundingById(requestParameters, options) {
    return FundingApiFp(this.configuration).getFundingById(requestParameters.fundingId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get all funding requests awaiting lender consent. Returns fundings that are ready for lender review and approval. Lender-only endpoint. 
   * @summary Get pending funding requests
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FundingApi
   */
  getPendingFundings(options) {
    return FundingApiFp(this.configuration).getPendingFundings(options).then((request) => request(this.axios, this.basePath));
  }
};
var KeyManagementApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Emergency revocation of compromised key
     * @summary Revoke compromised key
     * @param {string} keyId 
     * @param {EmergencyRevokeKeyRequest} emergencyRevokeKeyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    emergencyRevokeKey: async (keyId, emergencyRevokeKeyRequest, options = {}) => {
      assertParamExists("emergencyRevokeKey", "keyId", keyId);
      assertParamExists("emergencyRevokeKey", "emergencyRevokeKeyRequest", emergencyRevokeKeyRequest);
      const localVarPath = `/keys/{keyId}/revoke`.replace(`{${"keyId"}}`, encodeURIComponent(String(keyId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(emergencyRevokeKeyRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * View key rotation history for audit purposes
     * @summary Get key rotation history
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeyRotationHistory: async (options = {}) => {
      const localVarPath = `/keys/history`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Rotate entity\'s public key with overlap period
     * @summary Rotate encryption key
     * @param {RotateEntityKeyRequest} rotateEntityKeyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rotateEntityKey: async (rotateEntityKeyRequest, options = {}) => {
      assertParamExists("rotateEntityKey", "rotateEntityKeyRequest", rotateEntityKeyRequest);
      const localVarPath = `/keys/rotate`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(rotateEntityKeyRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var KeyManagementApiFp = function(configuration) {
  const localVarAxiosParamCreator = KeyManagementApiAxiosParamCreator(configuration);
  return {
    /**
     * Emergency revocation of compromised key
     * @summary Revoke compromised key
     * @param {string} keyId 
     * @param {EmergencyRevokeKeyRequest} emergencyRevokeKeyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async emergencyRevokeKey(keyId, emergencyRevokeKeyRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.emergencyRevokeKey(keyId, emergencyRevokeKeyRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["KeyManagementApi.emergencyRevokeKey"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * View key rotation history for audit purposes
     * @summary Get key rotation history
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getKeyRotationHistory(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getKeyRotationHistory(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["KeyManagementApi.getKeyRotationHistory"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Rotate entity\'s public key with overlap period
     * @summary Rotate encryption key
     * @param {RotateEntityKeyRequest} rotateEntityKeyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async rotateEntityKey(rotateEntityKeyRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.rotateEntityKey(rotateEntityKeyRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["KeyManagementApi.rotateEntityKey"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var KeyManagementApiFactory = function(configuration, basePath, axios) {
  const localVarFp = KeyManagementApiFp(configuration);
  return {
    /**
     * Emergency revocation of compromised key
     * @summary Revoke compromised key
     * @param {KeyManagementApiEmergencyRevokeKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    emergencyRevokeKey(requestParameters, options) {
      return localVarFp.emergencyRevokeKey(requestParameters.keyId, requestParameters.emergencyRevokeKeyRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * View key rotation history for audit purposes
     * @summary Get key rotation history
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeyRotationHistory(options) {
      return localVarFp.getKeyRotationHistory(options).then((request) => request(axios, basePath));
    },
    /**
     * Rotate entity\'s public key with overlap period
     * @summary Rotate encryption key
     * @param {KeyManagementApiRotateEntityKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rotateEntityKey(requestParameters, options) {
      return localVarFp.rotateEntityKey(requestParameters.rotateEntityKeyRequest, options).then((request) => request(axios, basePath));
    }
  };
};
var KeyManagementApi = class extends BaseAPI {
  /**
   * Emergency revocation of compromised key
   * @summary Revoke compromised key
   * @param {KeyManagementApiEmergencyRevokeKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof KeyManagementApi
   */
  emergencyRevokeKey(requestParameters, options) {
    return KeyManagementApiFp(this.configuration).emergencyRevokeKey(requestParameters.keyId, requestParameters.emergencyRevokeKeyRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * View key rotation history for audit purposes
   * @summary Get key rotation history
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof KeyManagementApi
   */
  getKeyRotationHistory(options) {
    return KeyManagementApiFp(this.configuration).getKeyRotationHistory(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Rotate entity\'s public key with overlap period
   * @summary Rotate encryption key
   * @param {KeyManagementApiRotateEntityKeyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof KeyManagementApi
   */
  rotateEntityKey(requestParameters, options) {
    return KeyManagementApiFp(this.configuration).rotateEntityKey(requestParameters.rotateEntityKeyRequest, options).then((request) => request(this.axios, this.basePath));
  }
};
var LoansApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Apply lender override to loan state (e.g., mark as defaulted). Lender-only endpoint. 
     * @summary Apply lender override
     * @param {string} loanId Unique identifier for the loan
     * @param {LoanStateOverrideRequest} loanStateOverrideRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applyLenderOverride: async (loanId, loanStateOverrideRequest, options = {}) => {
      assertParamExists("applyLenderOverride", "loanId", loanId);
      assertParamExists("applyLenderOverride", "loanStateOverrideRequest", loanStateOverrideRequest);
      const localVarPath = `/loans/{loanId}/state`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "PUT", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(loanStateOverrideRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get detailed loan information. Both lenders and neobanks can access their own loans. 
     * @summary Get loan details
     * @param {string} loanId Unique identifier for the loan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoan: async (loanId, options = {}) => {
      assertParamExists("getLoan", "loanId", loanId);
      const localVarPath = `/loans/{loanId}`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get loan details by application ID. Convenience endpoint for neobanks to retrieve loan information including the repayment address (Bridge liquidation address). Neobank-only endpoint. 
     * @summary Get loan by application
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanByApplication: async (applicationId, options = {}) => {
      assertParamExists("getLoanByApplication", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/loan`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get Bridge wallet and liquidation address details for a loan. Returns real-time wallet balance and liquidation address status. Lender-only endpoint. 
     * @summary Get loan wallet details
     * @param {string} loanId Unique identifier for the loan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanWallet: async (loanId, options = {}) => {
      assertParamExists("getLoanWallet", "loanId", loanId);
      const localVarPath = `/loans/{loanId}/wallet`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get projected payment schedule based on current loan state. Both lenders and neobanks can access their own loans. 
     * @summary Get payment schedule
     * @param {string} loanId Unique identifier for the loan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentSchedule: async (loanId, options = {}) => {
      assertParamExists("getPaymentSchedule", "loanId", loanId);
      const localVarPath = `/loans/{loanId}/schedule`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List repayments for a loan with pagination and filtering. Both lenders and neobanks can access their own loans.  Use `source=bridge` (lender-only) to fetch live data directly from Bridge API instead of the local database. This shows raw liquidation address drains with summary information. 
     * @summary List loan repayments
     * @param {string} loanId Unique identifier for the loan
     * @param {RepaymentStatus} [status] Filter by repayment status
     * @param {number} [limit] Maximum number of results (default 50, max 100)
     * @param {number} [offset] Pagination offset
     * @param {ListLoanRepaymentsSourceEnum} [source] Data source for repayments. - &#x60;database&#x60; (default): Fetch from local database (includes principal/interest allocation) - &#x60;bridge&#x60;: Fetch live from Bridge API (lender-only, shows raw drain data) 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLoanRepayments: async (loanId, status, limit, offset, source, options = {}) => {
      assertParamExists("listLoanRepayments", "loanId", loanId);
      const localVarPath = `/loans/{loanId}/repayments`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (status !== void 0) {
        localVarQueryParameter["status"] = status;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (offset !== void 0) {
        localVarQueryParameter["offset"] = offset;
      }
      if (source !== void 0) {
        localVarQueryParameter["source"] = source;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List loans for the authenticated entity with pagination and filtering.  **For Lenders:** Returns loans they funded. **For Neobanks:** Returns loans from applications they originated.  Neobanks can filter by `externalId` (their user reference) or `borrowerAddress` (wallet address) to efficiently retrieve loans for a specific borrower. 
     * @summary List loans
     * @param {LoanStatus} [status] Filter by loan status
     * @param {string} [externalId] Filter by application\&#39;s external reference ID (neobank-only). Exact match. Use this when you have your own user ID system. 
     * @param {string} [borrowerAddress] Filter by borrower\&#39;s wallet address (case-insensitive, neobank-only). Use this for wallet-first applications. 
     * @param {number} [limit] Maximum number of results (default 50, max 100)
     * @param {number} [offset] Pagination offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLoans: async (status, externalId, borrowerAddress, limit, offset, options = {}) => {
      const localVarPath = `/loans`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (status !== void 0) {
        localVarQueryParameter["status"] = status;
      }
      if (externalId !== void 0) {
        localVarQueryParameter["externalId"] = externalId;
      }
      if (borrowerAddress !== void 0) {
        localVarQueryParameter["borrowerAddress"] = borrowerAddress;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (offset !== void 0) {
        localVarQueryParameter["offset"] = offset;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Sweep balance from a loan\'s wallet to the master treasury wallet. Supports sweeping a specific amount or the full balance. Uses idempotency keys to prevent duplicate transfers. Lender-only endpoint. 
     * @summary Sweep loan wallet
     * @param {string} loanId Unique identifier for the loan
     * @param {LoanSweepRequest} [loanSweepRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sweepLoanWallet: async (loanId, loanSweepRequest, options = {}) => {
      assertParamExists("sweepLoanWallet", "loanId", loanId);
      const localVarPath = `/loans/{loanId}/sweep`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(loanSweepRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Update loan terms for corrections after origination. Lender-only endpoint. 
     * @summary Update loan terms
     * @param {string} loanId Unique identifier for the loan
     * @param {LoanTermsUpdateRequest} loanTermsUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLoanTerms: async (loanId, loanTermsUpdateRequest, options = {}) => {
      assertParamExists("updateLoanTerms", "loanId", loanId);
      assertParamExists("updateLoanTerms", "loanTermsUpdateRequest", loanTermsUpdateRequest);
      const localVarPath = `/loans/{loanId}/terms`.replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "PUT", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(loanTermsUpdateRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var LoansApiFp = function(configuration) {
  const localVarAxiosParamCreator = LoansApiAxiosParamCreator(configuration);
  return {
    /**
     * Apply lender override to loan state (e.g., mark as defaulted). Lender-only endpoint. 
     * @summary Apply lender override
     * @param {string} loanId Unique identifier for the loan
     * @param {LoanStateOverrideRequest} loanStateOverrideRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async applyLenderOverride(loanId, loanStateOverrideRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.applyLenderOverride(loanId, loanStateOverrideRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.applyLenderOverride"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get detailed loan information. Both lenders and neobanks can access their own loans. 
     * @summary Get loan details
     * @param {string} loanId Unique identifier for the loan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLoan(loanId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLoan(loanId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.getLoan"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get loan details by application ID. Convenience endpoint for neobanks to retrieve loan information including the repayment address (Bridge liquidation address). Neobank-only endpoint. 
     * @summary Get loan by application
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLoanByApplication(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLoanByApplication(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.getLoanByApplication"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get Bridge wallet and liquidation address details for a loan. Returns real-time wallet balance and liquidation address status. Lender-only endpoint. 
     * @summary Get loan wallet details
     * @param {string} loanId Unique identifier for the loan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLoanWallet(loanId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLoanWallet(loanId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.getLoanWallet"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get projected payment schedule based on current loan state. Both lenders and neobanks can access their own loans. 
     * @summary Get payment schedule
     * @param {string} loanId Unique identifier for the loan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPaymentSchedule(loanId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentSchedule(loanId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.getPaymentSchedule"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List repayments for a loan with pagination and filtering. Both lenders and neobanks can access their own loans.  Use `source=bridge` (lender-only) to fetch live data directly from Bridge API instead of the local database. This shows raw liquidation address drains with summary information. 
     * @summary List loan repayments
     * @param {string} loanId Unique identifier for the loan
     * @param {RepaymentStatus} [status] Filter by repayment status
     * @param {number} [limit] Maximum number of results (default 50, max 100)
     * @param {number} [offset] Pagination offset
     * @param {ListLoanRepaymentsSourceEnum} [source] Data source for repayments. - &#x60;database&#x60; (default): Fetch from local database (includes principal/interest allocation) - &#x60;bridge&#x60;: Fetch live from Bridge API (lender-only, shows raw drain data) 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLoanRepayments(loanId, status, limit, offset, source, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listLoanRepayments(loanId, status, limit, offset, source, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.listLoanRepayments"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List loans for the authenticated entity with pagination and filtering.  **For Lenders:** Returns loans they funded. **For Neobanks:** Returns loans from applications they originated.  Neobanks can filter by `externalId` (their user reference) or `borrowerAddress` (wallet address) to efficiently retrieve loans for a specific borrower. 
     * @summary List loans
     * @param {LoanStatus} [status] Filter by loan status
     * @param {string} [externalId] Filter by application\&#39;s external reference ID (neobank-only). Exact match. Use this when you have your own user ID system. 
     * @param {string} [borrowerAddress] Filter by borrower\&#39;s wallet address (case-insensitive, neobank-only). Use this for wallet-first applications. 
     * @param {number} [limit] Maximum number of results (default 50, max 100)
     * @param {number} [offset] Pagination offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLoans(status, externalId, borrowerAddress, limit, offset, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listLoans(status, externalId, borrowerAddress, limit, offset, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.listLoans"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Sweep balance from a loan\'s wallet to the master treasury wallet. Supports sweeping a specific amount or the full balance. Uses idempotency keys to prevent duplicate transfers. Lender-only endpoint. 
     * @summary Sweep loan wallet
     * @param {string} loanId Unique identifier for the loan
     * @param {LoanSweepRequest} [loanSweepRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async sweepLoanWallet(loanId, loanSweepRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.sweepLoanWallet(loanId, loanSweepRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.sweepLoanWallet"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update loan terms for corrections after origination. Lender-only endpoint. 
     * @summary Update loan terms
     * @param {string} loanId Unique identifier for the loan
     * @param {LoanTermsUpdateRequest} loanTermsUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLoanTerms(loanId, loanTermsUpdateRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateLoanTerms(loanId, loanTermsUpdateRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["LoansApi.updateLoanTerms"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var LoansApiFactory = function(configuration, basePath, axios) {
  const localVarFp = LoansApiFp(configuration);
  return {
    /**
     * Apply lender override to loan state (e.g., mark as defaulted). Lender-only endpoint. 
     * @summary Apply lender override
     * @param {LoansApiApplyLenderOverrideRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applyLenderOverride(requestParameters, options) {
      return localVarFp.applyLenderOverride(requestParameters.loanId, requestParameters.loanStateOverrideRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get detailed loan information. Both lenders and neobanks can access their own loans. 
     * @summary Get loan details
     * @param {LoansApiGetLoanRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoan(requestParameters, options) {
      return localVarFp.getLoan(requestParameters.loanId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get loan details by application ID. Convenience endpoint for neobanks to retrieve loan information including the repayment address (Bridge liquidation address). Neobank-only endpoint. 
     * @summary Get loan by application
     * @param {LoansApiGetLoanByApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanByApplication(requestParameters, options) {
      return localVarFp.getLoanByApplication(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get Bridge wallet and liquidation address details for a loan. Returns real-time wallet balance and liquidation address status. Lender-only endpoint. 
     * @summary Get loan wallet details
     * @param {LoansApiGetLoanWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanWallet(requestParameters, options) {
      return localVarFp.getLoanWallet(requestParameters.loanId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get projected payment schedule based on current loan state. Both lenders and neobanks can access their own loans. 
     * @summary Get payment schedule
     * @param {LoansApiGetPaymentScheduleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentSchedule(requestParameters, options) {
      return localVarFp.getPaymentSchedule(requestParameters.loanId, options).then((request) => request(axios, basePath));
    },
    /**
     * List repayments for a loan with pagination and filtering. Both lenders and neobanks can access their own loans.  Use `source=bridge` (lender-only) to fetch live data directly from Bridge API instead of the local database. This shows raw liquidation address drains with summary information. 
     * @summary List loan repayments
     * @param {LoansApiListLoanRepaymentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLoanRepayments(requestParameters, options) {
      return localVarFp.listLoanRepayments(requestParameters.loanId, requestParameters.status, requestParameters.limit, requestParameters.offset, requestParameters.source, options).then((request) => request(axios, basePath));
    },
    /**
     * List loans for the authenticated entity with pagination and filtering.  **For Lenders:** Returns loans they funded. **For Neobanks:** Returns loans from applications they originated.  Neobanks can filter by `externalId` (their user reference) or `borrowerAddress` (wallet address) to efficiently retrieve loans for a specific borrower. 
     * @summary List loans
     * @param {LoansApiListLoansRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLoans(requestParameters = {}, options) {
      return localVarFp.listLoans(requestParameters.status, requestParameters.externalId, requestParameters.borrowerAddress, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
    },
    /**
     * Sweep balance from a loan\'s wallet to the master treasury wallet. Supports sweeping a specific amount or the full balance. Uses idempotency keys to prevent duplicate transfers. Lender-only endpoint. 
     * @summary Sweep loan wallet
     * @param {LoansApiSweepLoanWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sweepLoanWallet(requestParameters, options) {
      return localVarFp.sweepLoanWallet(requestParameters.loanId, requestParameters.loanSweepRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Update loan terms for corrections after origination. Lender-only endpoint. 
     * @summary Update loan terms
     * @param {LoansApiUpdateLoanTermsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLoanTerms(requestParameters, options) {
      return localVarFp.updateLoanTerms(requestParameters.loanId, requestParameters.loanTermsUpdateRequest, options).then((request) => request(axios, basePath));
    }
  };
};
var LoansApi = class extends BaseAPI {
  /**
   * Apply lender override to loan state (e.g., mark as defaulted). Lender-only endpoint. 
   * @summary Apply lender override
   * @param {LoansApiApplyLenderOverrideRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  applyLenderOverride(requestParameters, options) {
    return LoansApiFp(this.configuration).applyLenderOverride(requestParameters.loanId, requestParameters.loanStateOverrideRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get detailed loan information. Both lenders and neobanks can access their own loans. 
   * @summary Get loan details
   * @param {LoansApiGetLoanRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  getLoan(requestParameters, options) {
    return LoansApiFp(this.configuration).getLoan(requestParameters.loanId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get loan details by application ID. Convenience endpoint for neobanks to retrieve loan information including the repayment address (Bridge liquidation address). Neobank-only endpoint. 
   * @summary Get loan by application
   * @param {LoansApiGetLoanByApplicationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  getLoanByApplication(requestParameters, options) {
    return LoansApiFp(this.configuration).getLoanByApplication(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get Bridge wallet and liquidation address details for a loan. Returns real-time wallet balance and liquidation address status. Lender-only endpoint. 
   * @summary Get loan wallet details
   * @param {LoansApiGetLoanWalletRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  getLoanWallet(requestParameters, options) {
    return LoansApiFp(this.configuration).getLoanWallet(requestParameters.loanId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get projected payment schedule based on current loan state. Both lenders and neobanks can access their own loans. 
   * @summary Get payment schedule
   * @param {LoansApiGetPaymentScheduleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  getPaymentSchedule(requestParameters, options) {
    return LoansApiFp(this.configuration).getPaymentSchedule(requestParameters.loanId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List repayments for a loan with pagination and filtering. Both lenders and neobanks can access their own loans.  Use `source=bridge` (lender-only) to fetch live data directly from Bridge API instead of the local database. This shows raw liquidation address drains with summary information. 
   * @summary List loan repayments
   * @param {LoansApiListLoanRepaymentsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  listLoanRepayments(requestParameters, options) {
    return LoansApiFp(this.configuration).listLoanRepayments(requestParameters.loanId, requestParameters.status, requestParameters.limit, requestParameters.offset, requestParameters.source, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List loans for the authenticated entity with pagination and filtering.  **For Lenders:** Returns loans they funded. **For Neobanks:** Returns loans from applications they originated.  Neobanks can filter by `externalId` (their user reference) or `borrowerAddress` (wallet address) to efficiently retrieve loans for a specific borrower. 
   * @summary List loans
   * @param {LoansApiListLoansRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  listLoans(requestParameters = {}, options) {
    return LoansApiFp(this.configuration).listLoans(requestParameters.status, requestParameters.externalId, requestParameters.borrowerAddress, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Sweep balance from a loan\'s wallet to the master treasury wallet. Supports sweeping a specific amount or the full balance. Uses idempotency keys to prevent duplicate transfers. Lender-only endpoint. 
   * @summary Sweep loan wallet
   * @param {LoansApiSweepLoanWalletRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  sweepLoanWallet(requestParameters, options) {
    return LoansApiFp(this.configuration).sweepLoanWallet(requestParameters.loanId, requestParameters.loanSweepRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Update loan terms for corrections after origination. Lender-only endpoint. 
   * @summary Update loan terms
   * @param {LoansApiUpdateLoanTermsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoansApi
   */
  updateLoanTerms(requestParameters, options) {
    return LoansApiFp(this.configuration).updateLoanTerms(requestParameters.loanId, requestParameters.loanTermsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
  }
};
var ListLoanRepaymentsSourceEnum = {
  Database: "database",
  Bridge: "bridge"
};
var NeobankSelfServiceApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Get current neobank account information including configuration and status. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Get account information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountInfo: async (options = {}) => {
      const localVarPath = `/me`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get aggregated statistics for the authenticated entity. Works for both lenders and neobanks - returns relevant metrics based on entity type.  **For Neobanks:** Returns application counts by status, loan statistics, and borrower counts. **For Lenders:** Returns loan portfolio statistics including funded amounts and repayment totals.  Response includes Cache-Control header (60 second TTL) for performance. 
     * @summary Get account statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountStats: async (options = {}) => {
      const localVarPath = `/me/stats`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get current webhook configuration including URL and whether a secret is set. The webhook secret is never returned in full - only a masked preview. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Get webhook configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWebhookConfig: async (options = {}) => {
      const localVarPath = `/me/webhook`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Generate a new webhook secret. The new secret is returned ONLY ONCE in this response - save it immediately. The old secret is immediately invalidated. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Rotate webhook secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rotateWebhookSecret: async (options = {}) => {
      const localVarPath = `/me/webhook/rotate-secret`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Send a test webhook to verify your endpoint is working correctly. The test webhook will include a signature for verification. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Send test webhook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testWebhook: async (options = {}) => {
      const localVarPath = `/me/webhook/test`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Update the webhook URL for receiving notifications. Set to null to disable webhooks. URL must use HTTPS protocol. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Update webhook URL
     * @param {WebhookUrlUpdateRequest} webhookUrlUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWebhookUrl: async (webhookUrlUpdateRequest, options = {}) => {
      assertParamExists("updateWebhookUrl", "webhookUrlUpdateRequest", webhookUrlUpdateRequest);
      const localVarPath = `/me/webhook`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "PUT", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(webhookUrlUpdateRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var NeobankSelfServiceApiFp = function(configuration) {
  const localVarAxiosParamCreator = NeobankSelfServiceApiAxiosParamCreator(configuration);
  return {
    /**
     * Get current neobank account information including configuration and status. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Get account information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountInfo(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountInfo(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["NeobankSelfServiceApi.getAccountInfo"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get aggregated statistics for the authenticated entity. Works for both lenders and neobanks - returns relevant metrics based on entity type.  **For Neobanks:** Returns application counts by status, loan statistics, and borrower counts. **For Lenders:** Returns loan portfolio statistics including funded amounts and repayment totals.  Response includes Cache-Control header (60 second TTL) for performance. 
     * @summary Get account statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAccountStats(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountStats(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["NeobankSelfServiceApi.getAccountStats"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get current webhook configuration including URL and whether a secret is set. The webhook secret is never returned in full - only a masked preview. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Get webhook configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWebhookConfig(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhookConfig(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["NeobankSelfServiceApi.getWebhookConfig"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Generate a new webhook secret. The new secret is returned ONLY ONCE in this response - save it immediately. The old secret is immediately invalidated. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Rotate webhook secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async rotateWebhookSecret(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.rotateWebhookSecret(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["NeobankSelfServiceApi.rotateWebhookSecret"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Send a test webhook to verify your endpoint is working correctly. The test webhook will include a signature for verification. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Send test webhook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async testWebhook(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.testWebhook(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["NeobankSelfServiceApi.testWebhook"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update the webhook URL for receiving notifications. Set to null to disable webhooks. URL must use HTTPS protocol. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Update webhook URL
     * @param {WebhookUrlUpdateRequest} webhookUrlUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWebhookUrl(webhookUrlUpdateRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhookUrl(webhookUrlUpdateRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["NeobankSelfServiceApi.updateWebhookUrl"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var NeobankSelfServiceApiFactory = function(configuration, basePath, axios) {
  const localVarFp = NeobankSelfServiceApiFp(configuration);
  return {
    /**
     * Get current neobank account information including configuration and status. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Get account information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountInfo(options) {
      return localVarFp.getAccountInfo(options).then((request) => request(axios, basePath));
    },
    /**
     * Get aggregated statistics for the authenticated entity. Works for both lenders and neobanks - returns relevant metrics based on entity type.  **For Neobanks:** Returns application counts by status, loan statistics, and borrower counts. **For Lenders:** Returns loan portfolio statistics including funded amounts and repayment totals.  Response includes Cache-Control header (60 second TTL) for performance. 
     * @summary Get account statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountStats(options) {
      return localVarFp.getAccountStats(options).then((request) => request(axios, basePath));
    },
    /**
     * Get current webhook configuration including URL and whether a secret is set. The webhook secret is never returned in full - only a masked preview. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Get webhook configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWebhookConfig(options) {
      return localVarFp.getWebhookConfig(options).then((request) => request(axios, basePath));
    },
    /**
     * Generate a new webhook secret. The new secret is returned ONLY ONCE in this response - save it immediately. The old secret is immediately invalidated. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Rotate webhook secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rotateWebhookSecret(options) {
      return localVarFp.rotateWebhookSecret(options).then((request) => request(axios, basePath));
    },
    /**
     * Send a test webhook to verify your endpoint is working correctly. The test webhook will include a signature for verification. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Send test webhook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testWebhook(options) {
      return localVarFp.testWebhook(options).then((request) => request(axios, basePath));
    },
    /**
     * Update the webhook URL for receiving notifications. Set to null to disable webhooks. URL must use HTTPS protocol. NEOBANK ONLY - Requires neobank API key authentication. 
     * @summary Update webhook URL
     * @param {NeobankSelfServiceApiUpdateWebhookUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWebhookUrl(requestParameters, options) {
      return localVarFp.updateWebhookUrl(requestParameters.webhookUrlUpdateRequest, options).then((request) => request(axios, basePath));
    }
  };
};
var NeobankSelfServiceApi = class extends BaseAPI {
  /**
   * Get current neobank account information including configuration and status. NEOBANK ONLY - Requires neobank API key authentication. 
   * @summary Get account information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeobankSelfServiceApi
   */
  getAccountInfo(options) {
    return NeobankSelfServiceApiFp(this.configuration).getAccountInfo(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get aggregated statistics for the authenticated entity. Works for both lenders and neobanks - returns relevant metrics based on entity type.  **For Neobanks:** Returns application counts by status, loan statistics, and borrower counts. **For Lenders:** Returns loan portfolio statistics including funded amounts and repayment totals.  Response includes Cache-Control header (60 second TTL) for performance. 
   * @summary Get account statistics
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeobankSelfServiceApi
   */
  getAccountStats(options) {
    return NeobankSelfServiceApiFp(this.configuration).getAccountStats(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get current webhook configuration including URL and whether a secret is set. The webhook secret is never returned in full - only a masked preview. NEOBANK ONLY - Requires neobank API key authentication. 
   * @summary Get webhook configuration
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeobankSelfServiceApi
   */
  getWebhookConfig(options) {
    return NeobankSelfServiceApiFp(this.configuration).getWebhookConfig(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Generate a new webhook secret. The new secret is returned ONLY ONCE in this response - save it immediately. The old secret is immediately invalidated. NEOBANK ONLY - Requires neobank API key authentication. 
   * @summary Rotate webhook secret
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeobankSelfServiceApi
   */
  rotateWebhookSecret(options) {
    return NeobankSelfServiceApiFp(this.configuration).rotateWebhookSecret(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Send a test webhook to verify your endpoint is working correctly. The test webhook will include a signature for verification. NEOBANK ONLY - Requires neobank API key authentication. 
   * @summary Send test webhook
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeobankSelfServiceApi
   */
  testWebhook(options) {
    return NeobankSelfServiceApiFp(this.configuration).testWebhook(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Update the webhook URL for receiving notifications. Set to null to disable webhooks. URL must use HTTPS protocol. NEOBANK ONLY - Requires neobank API key authentication. 
   * @summary Update webhook URL
   * @param {NeobankSelfServiceApiUpdateWebhookUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeobankSelfServiceApi
   */
  updateWebhookUrl(requestParameters, options) {
    return NeobankSelfServiceApiFp(this.configuration).updateWebhookUrl(requestParameters.webhookUrlUpdateRequest, options).then((request) => request(this.axios, this.basePath));
  }
};
var OffersApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Neobank accepts a final offer (triggers document signing). This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending final offers - Webhook notification to winning lender - Document signing workflow initiation 
     * @summary Accept final offer
     * @param {string} offerId Unique identifier for the offer
     * @param {OfferAcceptanceRequest} offerAcceptanceRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    acceptFinalOffer: async (offerId, offerAcceptanceRequest, options = {}) => {
      assertParamExists("acceptFinalOffer", "offerId", offerId);
      assertParamExists("acceptFinalOffer", "offerAcceptanceRequest", offerAcceptanceRequest);
      const localVarPath = `/final-offers/{offerId}/accept`.replace(`{${"offerId"}}`, encodeURIComponent(String(offerId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(offerAcceptanceRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Neobank accepts a prequalified offer with hard pull consent. This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending prequalified offers - Webhook notification to winning lender (with consent details) - Lender proceeds with hard pull and submits final offer 
     * @summary Accept prequalified offer
     * @param {string} offerId Unique identifier for the offer
     * @param {OfferAcceptanceRequest} offerAcceptanceRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    acceptPrequalOffer: async (offerId, offerAcceptanceRequest, options = {}) => {
      assertParamExists("acceptPrequalOffer", "offerId", offerId);
      assertParamExists("acceptPrequalOffer", "offerAcceptanceRequest", offerAcceptanceRequest);
      const localVarPath = `/prequal-offers/{offerId}/accept`.replace(`{${"offerId"}}`, encodeURIComponent(String(offerId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(offerAcceptanceRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Confirm that e-signature has been completed (neobank only)
     * @summary Confirm e-signature completion
     * @param {string} applicationId Unique identifier for the application
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmESignComplete: async (applicationId, body, options = {}) => {
      assertParamExists("confirmESignComplete", "applicationId", applicationId);
      assertParamExists("confirmESignComplete", "body", body);
      const localVarPath = `/applications/{applicationId}/esign-complete`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get e-signature URL for approved application (neobank only)
     * @summary Get e-signature URL
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getESignUrl: async (applicationId, options = {}) => {
      assertParamExists("getESignUrl", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/esign-url`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Neobank retrieves all final offers for their application. Returns encrypted offers grouped by lender. 
     * @summary Get final offers
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFinalOffers: async (applicationId, options = {}) => {
      assertParamExists("getFinalOffers", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/final-offers`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender retrieves details of a specific offer by ID. Must specify offerType query parameter (prequalified or final). 
     * @summary Get specific offer
     * @param {string} offerId Unique identifier for the offer
     * @param {GetLenderOfferByIdOfferTypeEnum} offerType Type of offer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderOfferById: async (offerId, offerType, options = {}) => {
      assertParamExists("getLenderOfferById", "offerId", offerId);
      assertParamExists("getLenderOfferById", "offerType", offerType);
      const localVarPath = `/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(offerId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (offerType !== void 0) {
        localVarQueryParameter["offerType"] = offerType;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Neobank retrieves all prequalified offers for their application. Returns encrypted offers grouped by lender. 
     * @summary Get prequalified offers
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPrequalOffers: async (applicationId, options = {}) => {
      assertParamExists("getPrequalOffers", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/prequal-offers`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender retrieves all their offers (prequalified and/or final) with pagination. Supports filtering by offer type, status, and application ID. 
     * @summary List lender\'s offers
     * @param {ListLenderOffersOfferTypeEnum} [offerType] Filter by offer type
     * @param {OfferStatus} [status] Filter by offer status
     * @param {string} [applicationId] Filter by application ID
     * @param {number} [page] Page number (1-indexed)
     * @param {number} [limit] Number of results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLenderOffers: async (offerType, status, applicationId, page, limit, options = {}) => {
      const localVarPath = `/offers`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (offerType !== void 0) {
        localVarQueryParameter["offerType"] = offerType;
      }
      if (status !== void 0) {
        localVarQueryParameter["status"] = status;
      }
      if (applicationId !== void 0) {
        localVarQueryParameter["applicationId"] = applicationId;
      }
      if (page !== void 0) {
        localVarQueryParameter["page"] = page;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender submits 1-10 final offers after hard pull credit check. All sensitive offer details are encrypted with the neobank\'s public key. Each final offer must reference a previously accepted prequalified offer.  **Workflow:** 1. Lender receives acceptance webhook for prequalified offer 2. Lender performs hard pull credit check 3. Lender creates final offer(s) based on hard pull results 4. Lender encrypts offer details with neobank\'s RSA public key 5. Lender submits encrypted final offers via this endpoint 6. Neobank retrieves and decrypts offers with their private key 
     * @summary Submit final offers
     * @param {string} applicationId Unique identifier for the application
     * @param {FinalOfferSubmission} finalOfferSubmission 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitFinalOffers: async (applicationId, finalOfferSubmission, options = {}) => {
      assertParamExists("submitFinalOffers", "applicationId", applicationId);
      assertParamExists("submitFinalOffers", "finalOfferSubmission", finalOfferSubmission);
      const localVarPath = `/applications/{applicationId}/final-offers`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(finalOfferSubmission, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender submits 1-10 prequalified offers for an application (soft pull only). All sensitive offer details are encrypted with the neobank\'s public key.  **Workflow:** 1. Lender performs soft pull credit check 2. Lender encrypts offer details with neobank\'s RSA public key 3. Lender submits encrypted offers via this endpoint 4. Neobank receives webhook notification 5. Neobank retrieves and decrypts offers with their private key 
     * @summary Submit prequalified offers
     * @param {string} applicationId Unique identifier for the application
     * @param {PrequalOfferSubmission} prequalOfferSubmission 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitPrequalOffers: async (applicationId, prequalOfferSubmission, options = {}) => {
      assertParamExists("submitPrequalOffers", "applicationId", applicationId);
      assertParamExists("submitPrequalOffers", "prequalOfferSubmission", prequalOfferSubmission);
      const localVarPath = `/applications/{applicationId}/prequal-offers`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(prequalOfferSubmission, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var OffersApiFp = function(configuration) {
  const localVarAxiosParamCreator = OffersApiAxiosParamCreator(configuration);
  return {
    /**
     * Neobank accepts a final offer (triggers document signing). This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending final offers - Webhook notification to winning lender - Document signing workflow initiation 
     * @summary Accept final offer
     * @param {string} offerId Unique identifier for the offer
     * @param {OfferAcceptanceRequest} offerAcceptanceRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async acceptFinalOffer(offerId, offerAcceptanceRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.acceptFinalOffer(offerId, offerAcceptanceRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.acceptFinalOffer"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Neobank accepts a prequalified offer with hard pull consent. This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending prequalified offers - Webhook notification to winning lender (with consent details) - Lender proceeds with hard pull and submits final offer 
     * @summary Accept prequalified offer
     * @param {string} offerId Unique identifier for the offer
     * @param {OfferAcceptanceRequest} offerAcceptanceRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async acceptPrequalOffer(offerId, offerAcceptanceRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.acceptPrequalOffer(offerId, offerAcceptanceRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.acceptPrequalOffer"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Confirm that e-signature has been completed (neobank only)
     * @summary Confirm e-signature completion
     * @param {string} applicationId Unique identifier for the application
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async confirmESignComplete(applicationId, body, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.confirmESignComplete(applicationId, body, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.confirmESignComplete"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get e-signature URL for approved application (neobank only)
     * @summary Get e-signature URL
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getESignUrl(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getESignUrl(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.getESignUrl"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Neobank retrieves all final offers for their application. Returns encrypted offers grouped by lender. 
     * @summary Get final offers
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFinalOffers(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getFinalOffers(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.getFinalOffers"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender retrieves details of a specific offer by ID. Must specify offerType query parameter (prequalified or final). 
     * @summary Get specific offer
     * @param {string} offerId Unique identifier for the offer
     * @param {GetLenderOfferByIdOfferTypeEnum} offerType Type of offer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLenderOfferById(offerId, offerType, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLenderOfferById(offerId, offerType, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.getLenderOfferById"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Neobank retrieves all prequalified offers for their application. Returns encrypted offers grouped by lender. 
     * @summary Get prequalified offers
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPrequalOffers(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPrequalOffers(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.getPrequalOffers"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender retrieves all their offers (prequalified and/or final) with pagination. Supports filtering by offer type, status, and application ID. 
     * @summary List lender\'s offers
     * @param {ListLenderOffersOfferTypeEnum} [offerType] Filter by offer type
     * @param {OfferStatus} [status] Filter by offer status
     * @param {string} [applicationId] Filter by application ID
     * @param {number} [page] Page number (1-indexed)
     * @param {number} [limit] Number of results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLenderOffers(offerType, status, applicationId, page, limit, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listLenderOffers(offerType, status, applicationId, page, limit, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.listLenderOffers"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender submits 1-10 final offers after hard pull credit check. All sensitive offer details are encrypted with the neobank\'s public key. Each final offer must reference a previously accepted prequalified offer.  **Workflow:** 1. Lender receives acceptance webhook for prequalified offer 2. Lender performs hard pull credit check 3. Lender creates final offer(s) based on hard pull results 4. Lender encrypts offer details with neobank\'s RSA public key 5. Lender submits encrypted final offers via this endpoint 6. Neobank retrieves and decrypts offers with their private key 
     * @summary Submit final offers
     * @param {string} applicationId Unique identifier for the application
     * @param {FinalOfferSubmission} finalOfferSubmission 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submitFinalOffers(applicationId, finalOfferSubmission, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.submitFinalOffers(applicationId, finalOfferSubmission, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.submitFinalOffers"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender submits 1-10 prequalified offers for an application (soft pull only). All sensitive offer details are encrypted with the neobank\'s public key.  **Workflow:** 1. Lender performs soft pull credit check 2. Lender encrypts offer details with neobank\'s RSA public key 3. Lender submits encrypted offers via this endpoint 4. Neobank receives webhook notification 5. Neobank retrieves and decrypts offers with their private key 
     * @summary Submit prequalified offers
     * @param {string} applicationId Unique identifier for the application
     * @param {PrequalOfferSubmission} prequalOfferSubmission 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submitPrequalOffers(applicationId, prequalOfferSubmission, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.submitPrequalOffers(applicationId, prequalOfferSubmission, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["OffersApi.submitPrequalOffers"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var OffersApiFactory = function(configuration, basePath, axios) {
  const localVarFp = OffersApiFp(configuration);
  return {
    /**
     * Neobank accepts a final offer (triggers document signing). This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending final offers - Webhook notification to winning lender - Document signing workflow initiation 
     * @summary Accept final offer
     * @param {OffersApiAcceptFinalOfferRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    acceptFinalOffer(requestParameters, options) {
      return localVarFp.acceptFinalOffer(requestParameters.offerId, requestParameters.offerAcceptanceRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Neobank accepts a prequalified offer with hard pull consent. This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending prequalified offers - Webhook notification to winning lender (with consent details) - Lender proceeds with hard pull and submits final offer 
     * @summary Accept prequalified offer
     * @param {OffersApiAcceptPrequalOfferRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    acceptPrequalOffer(requestParameters, options) {
      return localVarFp.acceptPrequalOffer(requestParameters.offerId, requestParameters.offerAcceptanceRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Confirm that e-signature has been completed (neobank only)
     * @summary Confirm e-signature completion
     * @param {OffersApiConfirmESignCompleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmESignComplete(requestParameters, options) {
      return localVarFp.confirmESignComplete(requestParameters.applicationId, requestParameters.body, options).then((request) => request(axios, basePath));
    },
    /**
     * Get e-signature URL for approved application (neobank only)
     * @summary Get e-signature URL
     * @param {OffersApiGetESignUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getESignUrl(requestParameters, options) {
      return localVarFp.getESignUrl(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Neobank retrieves all final offers for their application. Returns encrypted offers grouped by lender. 
     * @summary Get final offers
     * @param {OffersApiGetFinalOffersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFinalOffers(requestParameters, options) {
      return localVarFp.getFinalOffers(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender retrieves details of a specific offer by ID. Must specify offerType query parameter (prequalified or final). 
     * @summary Get specific offer
     * @param {OffersApiGetLenderOfferByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLenderOfferById(requestParameters, options) {
      return localVarFp.getLenderOfferById(requestParameters.offerId, requestParameters.offerType, options).then((request) => request(axios, basePath));
    },
    /**
     * Neobank retrieves all prequalified offers for their application. Returns encrypted offers grouped by lender. 
     * @summary Get prequalified offers
     * @param {OffersApiGetPrequalOffersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPrequalOffers(requestParameters, options) {
      return localVarFp.getPrequalOffers(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender retrieves all their offers (prequalified and/or final) with pagination. Supports filtering by offer type, status, and application ID. 
     * @summary List lender\'s offers
     * @param {OffersApiListLenderOffersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLenderOffers(requestParameters = {}, options) {
      return localVarFp.listLenderOffers(requestParameters.offerType, requestParameters.status, requestParameters.applicationId, requestParameters.page, requestParameters.limit, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender submits 1-10 final offers after hard pull credit check. All sensitive offer details are encrypted with the neobank\'s public key. Each final offer must reference a previously accepted prequalified offer.  **Workflow:** 1. Lender receives acceptance webhook for prequalified offer 2. Lender performs hard pull credit check 3. Lender creates final offer(s) based on hard pull results 4. Lender encrypts offer details with neobank\'s RSA public key 5. Lender submits encrypted final offers via this endpoint 6. Neobank retrieves and decrypts offers with their private key 
     * @summary Submit final offers
     * @param {OffersApiSubmitFinalOffersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitFinalOffers(requestParameters, options) {
      return localVarFp.submitFinalOffers(requestParameters.applicationId, requestParameters.finalOfferSubmission, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender submits 1-10 prequalified offers for an application (soft pull only). All sensitive offer details are encrypted with the neobank\'s public key.  **Workflow:** 1. Lender performs soft pull credit check 2. Lender encrypts offer details with neobank\'s RSA public key 3. Lender submits encrypted offers via this endpoint 4. Neobank receives webhook notification 5. Neobank retrieves and decrypts offers with their private key 
     * @summary Submit prequalified offers
     * @param {OffersApiSubmitPrequalOffersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitPrequalOffers(requestParameters, options) {
      return localVarFp.submitPrequalOffers(requestParameters.applicationId, requestParameters.prequalOfferSubmission, options).then((request) => request(axios, basePath));
    }
  };
};
var OffersApi = class extends BaseAPI {
  /**
   * Neobank accepts a final offer (triggers document signing). This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending final offers - Webhook notification to winning lender - Document signing workflow initiation 
   * @summary Accept final offer
   * @param {OffersApiAcceptFinalOfferRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  acceptFinalOffer(requestParameters, options) {
    return OffersApiFp(this.configuration).acceptFinalOffer(requestParameters.offerId, requestParameters.offerAcceptanceRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Neobank accepts a prequalified offer with hard pull consent. This triggers: - Status update to ACCEPTED for selected offer - Rejection of all other pending prequalified offers - Webhook notification to winning lender (with consent details) - Lender proceeds with hard pull and submits final offer 
   * @summary Accept prequalified offer
   * @param {OffersApiAcceptPrequalOfferRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  acceptPrequalOffer(requestParameters, options) {
    return OffersApiFp(this.configuration).acceptPrequalOffer(requestParameters.offerId, requestParameters.offerAcceptanceRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Confirm that e-signature has been completed (neobank only)
   * @summary Confirm e-signature completion
   * @param {OffersApiConfirmESignCompleteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  confirmESignComplete(requestParameters, options) {
    return OffersApiFp(this.configuration).confirmESignComplete(requestParameters.applicationId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get e-signature URL for approved application (neobank only)
   * @summary Get e-signature URL
   * @param {OffersApiGetESignUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  getESignUrl(requestParameters, options) {
    return OffersApiFp(this.configuration).getESignUrl(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Neobank retrieves all final offers for their application. Returns encrypted offers grouped by lender. 
   * @summary Get final offers
   * @param {OffersApiGetFinalOffersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  getFinalOffers(requestParameters, options) {
    return OffersApiFp(this.configuration).getFinalOffers(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender retrieves details of a specific offer by ID. Must specify offerType query parameter (prequalified or final). 
   * @summary Get specific offer
   * @param {OffersApiGetLenderOfferByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  getLenderOfferById(requestParameters, options) {
    return OffersApiFp(this.configuration).getLenderOfferById(requestParameters.offerId, requestParameters.offerType, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Neobank retrieves all prequalified offers for their application. Returns encrypted offers grouped by lender. 
   * @summary Get prequalified offers
   * @param {OffersApiGetPrequalOffersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  getPrequalOffers(requestParameters, options) {
    return OffersApiFp(this.configuration).getPrequalOffers(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender retrieves all their offers (prequalified and/or final) with pagination. Supports filtering by offer type, status, and application ID. 
   * @summary List lender\'s offers
   * @param {OffersApiListLenderOffersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  listLenderOffers(requestParameters = {}, options) {
    return OffersApiFp(this.configuration).listLenderOffers(requestParameters.offerType, requestParameters.status, requestParameters.applicationId, requestParameters.page, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender submits 1-10 final offers after hard pull credit check. All sensitive offer details are encrypted with the neobank\'s public key. Each final offer must reference a previously accepted prequalified offer.  **Workflow:** 1. Lender receives acceptance webhook for prequalified offer 2. Lender performs hard pull credit check 3. Lender creates final offer(s) based on hard pull results 4. Lender encrypts offer details with neobank\'s RSA public key 5. Lender submits encrypted final offers via this endpoint 6. Neobank retrieves and decrypts offers with their private key 
   * @summary Submit final offers
   * @param {OffersApiSubmitFinalOffersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  submitFinalOffers(requestParameters, options) {
    return OffersApiFp(this.configuration).submitFinalOffers(requestParameters.applicationId, requestParameters.finalOfferSubmission, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender submits 1-10 prequalified offers for an application (soft pull only). All sensitive offer details are encrypted with the neobank\'s public key.  **Workflow:** 1. Lender performs soft pull credit check 2. Lender encrypts offer details with neobank\'s RSA public key 3. Lender submits encrypted offers via this endpoint 4. Neobank receives webhook notification 5. Neobank retrieves and decrypts offers with their private key 
   * @summary Submit prequalified offers
   * @param {OffersApiSubmitPrequalOffersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OffersApi
   */
  submitPrequalOffers(requestParameters, options) {
    return OffersApiFp(this.configuration).submitPrequalOffers(requestParameters.applicationId, requestParameters.prequalOfferSubmission, options).then((request) => request(this.axios, this.basePath));
  }
};
var GetLenderOfferByIdOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final"
};
var ListLenderOffersOfferTypeEnum = {
  Prequalified: "prequalified",
  Final: "final",
  All: "all"
};
var PlatformApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Get current active platform public key for document encryption. PUBLIC ENDPOINT - No authentication required. Used by lenders to encrypt unsigned documents before SDX upload. 
     * @summary Get platform public key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlatformPublicKey: async (options = {}) => {
      const localVarPath = `/platform/public-key`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var PlatformApiFp = function(configuration) {
  const localVarAxiosParamCreator = PlatformApiAxiosParamCreator(configuration);
  return {
    /**
     * Get current active platform public key for document encryption. PUBLIC ENDPOINT - No authentication required. Used by lenders to encrypt unsigned documents before SDX upload. 
     * @summary Get platform public key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPlatformPublicKey(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPlatformPublicKey(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["PlatformApi.getPlatformPublicKey"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var PlatformApiFactory = function(configuration, basePath, axios) {
  const localVarFp = PlatformApiFp(configuration);
  return {
    /**
     * Get current active platform public key for document encryption. PUBLIC ENDPOINT - No authentication required. Used by lenders to encrypt unsigned documents before SDX upload. 
     * @summary Get platform public key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlatformPublicKey(options) {
      return localVarFp.getPlatformPublicKey(options).then((request) => request(axios, basePath));
    }
  };
};
var PlatformApi = class extends BaseAPI {
  /**
   * Get current active platform public key for document encryption. PUBLIC ENDPOINT - No authentication required. Used by lenders to encrypt unsigned documents before SDX upload. 
   * @summary Get platform public key
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PlatformApi
   */
  getPlatformPublicKey(options) {
    return PlatformApiFp(this.configuration).getPlatformPublicKey(options).then((request) => request(this.axios, this.basePath));
  }
};
var QueueApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Lender retrieves applications they have declined after hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  Returns applications with: - declinedAt timestamp (for 30-day deadline calculation) - adverseActionDeadline (30 days from decline) - adverseActionOverdue flag (true if > 30 days since decline) - daysSinceDecline count  Lenders should use this endpoint to track which borrowers need adverse action notices sent. 
     * @summary Get declined applications
     * @param {number} [limit] Maximum number of results (1-100)
     * @param {number} [offset] Number of results to skip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeclinedApplications: async (limit, offset, options = {}) => {
      const localVarPath = `/queue/declined`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (offset !== void 0) {
        localVarQueryParameter["offset"] = offset;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender retrieves applications within the 60-second active window. Applications older than 60 seconds are automatically expired. 
     * @summary Get active application queue
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQueue: async (options = {}) => {
      const localVarPath = `/queue`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender retrieves statistics about their queue performance, including acceptance rates and average response times. 
     * @summary Get queue statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQueueStats: async (options = {}) => {
      const localVarPath = `/queue/stats`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var QueueApiFp = function(configuration) {
  const localVarAxiosParamCreator = QueueApiAxiosParamCreator(configuration);
  return {
    /**
     * Lender retrieves applications they have declined after hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  Returns applications with: - declinedAt timestamp (for 30-day deadline calculation) - adverseActionDeadline (30 days from decline) - adverseActionOverdue flag (true if > 30 days since decline) - daysSinceDecline count  Lenders should use this endpoint to track which borrowers need adverse action notices sent. 
     * @summary Get declined applications
     * @param {number} [limit] Maximum number of results (1-100)
     * @param {number} [offset] Number of results to skip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDeclinedApplications(limit, offset, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDeclinedApplications(limit, offset, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["QueueApi.getDeclinedApplications"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender retrieves applications within the 60-second active window. Applications older than 60 seconds are automatically expired. 
     * @summary Get active application queue
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getQueue(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getQueue(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["QueueApi.getQueue"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender retrieves statistics about their queue performance, including acceptance rates and average response times. 
     * @summary Get queue statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getQueueStats(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getQueueStats(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["QueueApi.getQueueStats"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var QueueApiFactory = function(configuration, basePath, axios) {
  const localVarFp = QueueApiFp(configuration);
  return {
    /**
     * Lender retrieves applications they have declined after hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  Returns applications with: - declinedAt timestamp (for 30-day deadline calculation) - adverseActionDeadline (30 days from decline) - adverseActionOverdue flag (true if > 30 days since decline) - daysSinceDecline count  Lenders should use this endpoint to track which borrowers need adverse action notices sent. 
     * @summary Get declined applications
     * @param {QueueApiGetDeclinedApplicationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDeclinedApplications(requestParameters = {}, options) {
      return localVarFp.getDeclinedApplications(requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender retrieves applications within the 60-second active window. Applications older than 60 seconds are automatically expired. 
     * @summary Get active application queue
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQueue(options) {
      return localVarFp.getQueue(options).then((request) => request(axios, basePath));
    },
    /**
     * Lender retrieves statistics about their queue performance, including acceptance rates and average response times. 
     * @summary Get queue statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQueueStats(options) {
      return localVarFp.getQueueStats(options).then((request) => request(axios, basePath));
    }
  };
};
var QueueApi = class extends BaseAPI {
  /**
   * Lender retrieves applications they have declined after hard credit pull. Used for ECOA/Reg B adverse action notice tracking.  Returns applications with: - declinedAt timestamp (for 30-day deadline calculation) - adverseActionDeadline (30 days from decline) - adverseActionOverdue flag (true if > 30 days since decline) - daysSinceDecline count  Lenders should use this endpoint to track which borrowers need adverse action notices sent. 
   * @summary Get declined applications
   * @param {QueueApiGetDeclinedApplicationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueApi
   */
  getDeclinedApplications(requestParameters = {}, options) {
    return QueueApiFp(this.configuration).getDeclinedApplications(requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender retrieves applications within the 60-second active window. Applications older than 60 seconds are automatically expired. 
   * @summary Get active application queue
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueApi
   */
  getQueue(options) {
    return QueueApiFp(this.configuration).getQueue(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender retrieves statistics about their queue performance, including acceptance rates and average response times. 
   * @summary Get queue statistics
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QueueApi
   */
  getQueueStats(options) {
    return QueueApiFp(this.configuration).getQueueStats(options).then((request) => request(this.axios, this.basePath));
  }
};
var SDXApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Generates a JWT token for SDX document operations. Token is valid for 10 minutes. Access is role-based (neobank vs lender permissions). 
     * @summary Generate SDX access token
     * @param {SDXTokenRequest} sDXTokenRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateSDXToken: async (sDXTokenRequest, options = {}) => {
      assertParamExists("generateSDXToken", "sDXTokenRequest", sDXTokenRequest);
      const localVarPath = `/sdx-tokens`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(sDXTokenRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Lender stores handle for unsigned contracts uploaded to SDX. Documents must already be uploaded to SDX S3. 
     * @summary Store unsigned document handle
     * @param {UnsignedDocumentHandleRequest} unsignedDocumentHandleRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    storeDocumentHandle: async (unsignedDocumentHandleRequest, options = {}) => {
      assertParamExists("storeDocumentHandle", "unsignedDocumentHandleRequest", unsignedDocumentHandleRequest);
      const localVarPath = `/sdx-tokens/document-handle`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(unsignedDocumentHandleRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Neobank stores handle for KYC documents uploaded to SDX. Documents must already be uploaded to SDX S3. 
     * @summary Store KYC document handle
     * @param {KYCHandleRequest} kYCHandleRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    storeKYCHandle: async (kYCHandleRequest, options = {}) => {
      assertParamExists("storeKYCHandle", "kYCHandleRequest", kYCHandleRequest);
      const localVarPath = `/sdx-tokens/kyc-handle`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(kYCHandleRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var SDXApiFp = function(configuration) {
  const localVarAxiosParamCreator = SDXApiAxiosParamCreator(configuration);
  return {
    /**
     * Generates a JWT token for SDX document operations. Token is valid for 10 minutes. Access is role-based (neobank vs lender permissions). 
     * @summary Generate SDX access token
     * @param {SDXTokenRequest} sDXTokenRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async generateSDXToken(sDXTokenRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.generateSDXToken(sDXTokenRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SDXApi.generateSDXToken"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Lender stores handle for unsigned contracts uploaded to SDX. Documents must already be uploaded to SDX S3. 
     * @summary Store unsigned document handle
     * @param {UnsignedDocumentHandleRequest} unsignedDocumentHandleRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async storeDocumentHandle(unsignedDocumentHandleRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.storeDocumentHandle(unsignedDocumentHandleRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SDXApi.storeDocumentHandle"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Neobank stores handle for KYC documents uploaded to SDX. Documents must already be uploaded to SDX S3. 
     * @summary Store KYC document handle
     * @param {KYCHandleRequest} kYCHandleRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async storeKYCHandle(kYCHandleRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.storeKYCHandle(kYCHandleRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SDXApi.storeKYCHandle"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var SDXApiFactory = function(configuration, basePath, axios) {
  const localVarFp = SDXApiFp(configuration);
  return {
    /**
     * Generates a JWT token for SDX document operations. Token is valid for 10 minutes. Access is role-based (neobank vs lender permissions). 
     * @summary Generate SDX access token
     * @param {SDXApiGenerateSDXTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateSDXToken(requestParameters, options) {
      return localVarFp.generateSDXToken(requestParameters.sDXTokenRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Lender stores handle for unsigned contracts uploaded to SDX. Documents must already be uploaded to SDX S3. 
     * @summary Store unsigned document handle
     * @param {SDXApiStoreDocumentHandleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    storeDocumentHandle(requestParameters, options) {
      return localVarFp.storeDocumentHandle(requestParameters.unsignedDocumentHandleRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Neobank stores handle for KYC documents uploaded to SDX. Documents must already be uploaded to SDX S3. 
     * @summary Store KYC document handle
     * @param {SDXApiStoreKYCHandleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    storeKYCHandle(requestParameters, options) {
      return localVarFp.storeKYCHandle(requestParameters.kYCHandleRequest, options).then((request) => request(axios, basePath));
    }
  };
};
var SDXApi = class extends BaseAPI {
  /**
   * Generates a JWT token for SDX document operations. Token is valid for 10 minutes. Access is role-based (neobank vs lender permissions). 
   * @summary Generate SDX access token
   * @param {SDXApiGenerateSDXTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SDXApi
   */
  generateSDXToken(requestParameters, options) {
    return SDXApiFp(this.configuration).generateSDXToken(requestParameters.sDXTokenRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Lender stores handle for unsigned contracts uploaded to SDX. Documents must already be uploaded to SDX S3. 
   * @summary Store unsigned document handle
   * @param {SDXApiStoreDocumentHandleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SDXApi
   */
  storeDocumentHandle(requestParameters, options) {
    return SDXApiFp(this.configuration).storeDocumentHandle(requestParameters.unsignedDocumentHandleRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Neobank stores handle for KYC documents uploaded to SDX. Documents must already be uploaded to SDX S3. 
   * @summary Store KYC document handle
   * @param {SDXApiStoreKYCHandleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SDXApi
   */
  storeKYCHandle(requestParameters, options) {
    return SDXApiFp(this.configuration).storeKYCHandle(requestParameters.kYCHandleRequest, options).then((request) => request(this.axios, this.basePath));
  }
};
var SigningApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Complete a signing session with dual document handles. Admin only - typically called by the signing service. 
     * @summary Complete signing session
     * @param {string} sessionId 
     * @param {CompleteSigningSessionRequest} completeSigningSessionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeSigningSession: async (sessionId, completeSigningSessionRequest, options = {}) => {
      assertParamExists("completeSigningSession", "sessionId", sessionId);
      assertParamExists("completeSigningSession", "completeSigningSessionRequest", completeSigningSessionRequest);
      const localVarPath = `/signing-sessions/{sessionId}/complete`.replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(completeSigningSessionRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Create a new document signing session (neobank only)
     * @summary Create signing session
     * @param {string} applicationId Unique identifier for the application
     * @param {CreateSigningSessionRequest} createSigningSessionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSigningSession: async (applicationId, createSigningSessionRequest, options = {}) => {
      assertParamExists("createSigningSession", "applicationId", applicationId);
      assertParamExists("createSigningSession", "createSigningSessionRequest", createSigningSessionRequest);
      const localVarPath = `/applications/{applicationId}/signing-sessions`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(createSigningSessionRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get signing session status (returns entity-specific document handle)
     * @summary Get signing session status
     * @param {string} sessionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSigningSessionStatus: async (sessionId, options = {}) => {
      assertParamExists("getSigningSessionStatus", "sessionId", sessionId);
      const localVarPath = `/signing-sessions/{sessionId}`.replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get all signing sessions for an application. Returns entity-specific document handles based on caller identity. 
     * @summary Get signing sessions for application
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSigningSessionsByApplication: async (applicationId, options = {}) => {
      assertParamExists("getSigningSessionsByApplication", "applicationId", applicationId);
      const localVarPath = `/applications/{applicationId}/signing-sessions`.replace(`{${"applicationId"}}`, encodeURIComponent(String(applicationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var SigningApiFp = function(configuration) {
  const localVarAxiosParamCreator = SigningApiAxiosParamCreator(configuration);
  return {
    /**
     * Complete a signing session with dual document handles. Admin only - typically called by the signing service. 
     * @summary Complete signing session
     * @param {string} sessionId 
     * @param {CompleteSigningSessionRequest} completeSigningSessionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async completeSigningSession(sessionId, completeSigningSessionRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.completeSigningSession(sessionId, completeSigningSessionRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SigningApi.completeSigningSession"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a new document signing session (neobank only)
     * @summary Create signing session
     * @param {string} applicationId Unique identifier for the application
     * @param {CreateSigningSessionRequest} createSigningSessionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSigningSession(applicationId, createSigningSessionRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSigningSession(applicationId, createSigningSessionRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SigningApi.createSigningSession"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get signing session status (returns entity-specific document handle)
     * @summary Get signing session status
     * @param {string} sessionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSigningSessionStatus(sessionId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSigningSessionStatus(sessionId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SigningApi.getSigningSessionStatus"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get all signing sessions for an application. Returns entity-specific document handles based on caller identity. 
     * @summary Get signing sessions for application
     * @param {string} applicationId Unique identifier for the application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSigningSessionsByApplication(applicationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSigningSessionsByApplication(applicationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["SigningApi.getSigningSessionsByApplication"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var SigningApiFactory = function(configuration, basePath, axios) {
  const localVarFp = SigningApiFp(configuration);
  return {
    /**
     * Complete a signing session with dual document handles. Admin only - typically called by the signing service. 
     * @summary Complete signing session
     * @param {SigningApiCompleteSigningSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeSigningSession(requestParameters, options) {
      return localVarFp.completeSigningSession(requestParameters.sessionId, requestParameters.completeSigningSessionRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Create a new document signing session (neobank only)
     * @summary Create signing session
     * @param {SigningApiCreateSigningSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSigningSession(requestParameters, options) {
      return localVarFp.createSigningSession(requestParameters.applicationId, requestParameters.createSigningSessionRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get signing session status (returns entity-specific document handle)
     * @summary Get signing session status
     * @param {SigningApiGetSigningSessionStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSigningSessionStatus(requestParameters, options) {
      return localVarFp.getSigningSessionStatus(requestParameters.sessionId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get all signing sessions for an application. Returns entity-specific document handles based on caller identity. 
     * @summary Get signing sessions for application
     * @param {SigningApiGetSigningSessionsByApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSigningSessionsByApplication(requestParameters, options) {
      return localVarFp.getSigningSessionsByApplication(requestParameters.applicationId, options).then((request) => request(axios, basePath));
    }
  };
};
var SigningApi = class extends BaseAPI {
  /**
   * Complete a signing session with dual document handles. Admin only - typically called by the signing service. 
   * @summary Complete signing session
   * @param {SigningApiCompleteSigningSessionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SigningApi
   */
  completeSigningSession(requestParameters, options) {
    return SigningApiFp(this.configuration).completeSigningSession(requestParameters.sessionId, requestParameters.completeSigningSessionRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Create a new document signing session (neobank only)
   * @summary Create signing session
   * @param {SigningApiCreateSigningSessionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SigningApi
   */
  createSigningSession(requestParameters, options) {
    return SigningApiFp(this.configuration).createSigningSession(requestParameters.applicationId, requestParameters.createSigningSessionRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get signing session status (returns entity-specific document handle)
   * @summary Get signing session status
   * @param {SigningApiGetSigningSessionStatusRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SigningApi
   */
  getSigningSessionStatus(requestParameters, options) {
    return SigningApiFp(this.configuration).getSigningSessionStatus(requestParameters.sessionId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get all signing sessions for an application. Returns entity-specific document handles based on caller identity. 
   * @summary Get signing sessions for application
   * @param {SigningApiGetSigningSessionsByApplicationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SigningApi
   */
  getSigningSessionsByApplication(requestParameters, options) {
    return SigningApiFp(this.configuration).getSigningSessionsByApplication(requestParameters.applicationId, options).then((request) => request(this.axios, this.basePath));
  }
};
var TransfersApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Get detailed information about a specific transfer including current state, amounts, fees, and transaction hashes. Lender-only endpoint. 
     * @summary Get transfer details
     * @param {string} transferId Bridge transfer identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransfer: async (transferId, options = {}) => {
      assertParamExists("getTransfer", "transferId", transferId);
      const localVarPath = `/transfers/{transferId}`.replace(`{${"transferId"}}`, encodeURIComponent(String(transferId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List transfers for the authenticated lender with optional filtering. Returns sweeps, disbursements, and other wallet-to-wallet transfers. Lender-only endpoint. 
     * @summary List transfers
     * @param {ListTransfersStateEnum} [state] Filter by transfer state
     * @param {number} [limit] Maximum number of results to return
     * @param {string} [cursor] Pagination cursor for fetching next page
     * @param {string} [updatedAfter] Filter transfers updated after this ISO 8601 timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTransfers: async (state, limit, cursor, updatedAfter, options = {}) => {
      const localVarPath = `/transfers`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (state !== void 0) {
        localVarQueryParameter["state"] = state;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (cursor !== void 0) {
        localVarQueryParameter["cursor"] = cursor;
      }
      if (updatedAfter !== void 0) {
        localVarQueryParameter["updatedAfter"] = updatedAfter instanceof Date ? updatedAfter.toISOString() : updatedAfter;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var TransfersApiFp = function(configuration) {
  const localVarAxiosParamCreator = TransfersApiAxiosParamCreator(configuration);
  return {
    /**
     * Get detailed information about a specific transfer including current state, amounts, fees, and transaction hashes. Lender-only endpoint. 
     * @summary Get transfer details
     * @param {string} transferId Bridge transfer identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTransfer(transferId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTransfer(transferId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TransfersApi.getTransfer"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List transfers for the authenticated lender with optional filtering. Returns sweeps, disbursements, and other wallet-to-wallet transfers. Lender-only endpoint. 
     * @summary List transfers
     * @param {ListTransfersStateEnum} [state] Filter by transfer state
     * @param {number} [limit] Maximum number of results to return
     * @param {string} [cursor] Pagination cursor for fetching next page
     * @param {string} [updatedAfter] Filter transfers updated after this ISO 8601 timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTransfers(state, limit, cursor, updatedAfter, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listTransfers(state, limit, cursor, updatedAfter, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TransfersApi.listTransfers"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var TransfersApiFactory = function(configuration, basePath, axios) {
  const localVarFp = TransfersApiFp(configuration);
  return {
    /**
     * Get detailed information about a specific transfer including current state, amounts, fees, and transaction hashes. Lender-only endpoint. 
     * @summary Get transfer details
     * @param {TransfersApiGetTransferRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransfer(requestParameters, options) {
      return localVarFp.getTransfer(requestParameters.transferId, options).then((request) => request(axios, basePath));
    },
    /**
     * List transfers for the authenticated lender with optional filtering. Returns sweeps, disbursements, and other wallet-to-wallet transfers. Lender-only endpoint. 
     * @summary List transfers
     * @param {TransfersApiListTransfersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTransfers(requestParameters = {}, options) {
      return localVarFp.listTransfers(requestParameters.state, requestParameters.limit, requestParameters.cursor, requestParameters.updatedAfter, options).then((request) => request(axios, basePath));
    }
  };
};
var TransfersApi = class extends BaseAPI {
  /**
   * Get detailed information about a specific transfer including current state, amounts, fees, and transaction hashes. Lender-only endpoint. 
   * @summary Get transfer details
   * @param {TransfersApiGetTransferRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransfersApi
   */
  getTransfer(requestParameters, options) {
    return TransfersApiFp(this.configuration).getTransfer(requestParameters.transferId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List transfers for the authenticated lender with optional filtering. Returns sweeps, disbursements, and other wallet-to-wallet transfers. Lender-only endpoint. 
   * @summary List transfers
   * @param {TransfersApiListTransfersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransfersApi
   */
  listTransfers(requestParameters = {}, options) {
    return TransfersApiFp(this.configuration).listTransfers(requestParameters.state, requestParameters.limit, requestParameters.cursor, requestParameters.updatedAfter, options).then((request) => request(this.axios, this.basePath));
  }
};
var ListTransfersStateEnum = {
  AwaitingFunds: "awaiting_funds",
  FundsReceived: "funds_received",
  PaymentSubmitted: "payment_submitted",
  PaymentProcessed: "payment_processed",
  Canceled: "canceled",
  Undeliverable: "undeliverable",
  Returned: "returned",
  Refunded: "refunded"
};
var TreasuryApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Sweep balances from loan wallets to master treasury wallet. Supports dry-run mode to preview without executing. Lender-only endpoint. 
     * @summary Execute sweep
     * @param {SweepRequest} [sweepRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    executeSweep: async (sweepRequest, options = {}) => {
      const localVarPath = `/treasury/sweep`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(sweepRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get all wallets for the authenticated lender: main treasury wallet + per-loan wallets with balances. Includes aggregate totals and infrastructure status. Lender-only endpoint. 
     * @summary Get all wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllWallets: async (options = {}) => {
      const localVarPath = `/treasury/wallets`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Preview sweepable wallets without executing. Returns list of loan wallets with balances and sweepable status. Lender-only endpoint. 
     * @summary Preview sweep
     * @param {string} [minBalance] Minimum balance threshold to be sweepable (default \&quot;0.01\&quot;)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSweepPreview: async (minBalance, options = {}) => {
      const localVarPath = `/treasury/sweep`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (minBalance !== void 0) {
        localVarQueryParameter["minBalance"] = minBalance;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get treasury overview for the authenticated lender. Returns main wallet, virtual accounts, and KYB status. Lender-only endpoint. 
     * @summary Get treasury overview
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTreasuryOverview: async (options = {}) => {
      const localVarPath = `/treasury`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get transaction history for the lender\'s main treasury wallet. Returns deposits and other treasury movements from Bridge. Lender-only endpoint. 
     * @summary Get treasury transaction history
     * @param {number} [limit] Maximum number of results to return
     * @param {string} [cursor] Pagination cursor for fetching next page
     * @param {string} [updatedAfter] Filter transactions updated after this ISO 8601 timestamp
     * @param {string} [updatedBefore] Filter transactions updated before this ISO 8601 timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTreasuryTransactions: async (limit, cursor, updatedAfter, updatedBefore, options = {}) => {
      const localVarPath = `/treasury/transactions`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (cursor !== void 0) {
        localVarQueryParameter["cursor"] = cursor;
      }
      if (updatedAfter !== void 0) {
        localVarQueryParameter["updatedAfter"] = updatedAfter instanceof Date ? updatedAfter.toISOString() : updatedAfter;
      }
      if (updatedBefore !== void 0) {
        localVarQueryParameter["updatedBefore"] = updatedBefore instanceof Date ? updatedBefore.toISOString() : updatedBefore;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var TreasuryApiFp = function(configuration) {
  const localVarAxiosParamCreator = TreasuryApiAxiosParamCreator(configuration);
  return {
    /**
     * Sweep balances from loan wallets to master treasury wallet. Supports dry-run mode to preview without executing. Lender-only endpoint. 
     * @summary Execute sweep
     * @param {SweepRequest} [sweepRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async executeSweep(sweepRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.executeSweep(sweepRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TreasuryApi.executeSweep"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get all wallets for the authenticated lender: main treasury wallet + per-loan wallets with balances. Includes aggregate totals and infrastructure status. Lender-only endpoint. 
     * @summary Get all wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllWallets(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAllWallets(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TreasuryApi.getAllWallets"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Preview sweepable wallets without executing. Returns list of loan wallets with balances and sweepable status. Lender-only endpoint. 
     * @summary Preview sweep
     * @param {string} [minBalance] Minimum balance threshold to be sweepable (default \&quot;0.01\&quot;)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSweepPreview(minBalance, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSweepPreview(minBalance, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TreasuryApi.getSweepPreview"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get treasury overview for the authenticated lender. Returns main wallet, virtual accounts, and KYB status. Lender-only endpoint. 
     * @summary Get treasury overview
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTreasuryOverview(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTreasuryOverview(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TreasuryApi.getTreasuryOverview"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get transaction history for the lender\'s main treasury wallet. Returns deposits and other treasury movements from Bridge. Lender-only endpoint. 
     * @summary Get treasury transaction history
     * @param {number} [limit] Maximum number of results to return
     * @param {string} [cursor] Pagination cursor for fetching next page
     * @param {string} [updatedAfter] Filter transactions updated after this ISO 8601 timestamp
     * @param {string} [updatedBefore] Filter transactions updated before this ISO 8601 timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTreasuryTransactions(limit, cursor, updatedAfter, updatedBefore, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTreasuryTransactions(limit, cursor, updatedAfter, updatedBefore, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["TreasuryApi.getTreasuryTransactions"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var TreasuryApiFactory = function(configuration, basePath, axios) {
  const localVarFp = TreasuryApiFp(configuration);
  return {
    /**
     * Sweep balances from loan wallets to master treasury wallet. Supports dry-run mode to preview without executing. Lender-only endpoint. 
     * @summary Execute sweep
     * @param {TreasuryApiExecuteSweepRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    executeSweep(requestParameters = {}, options) {
      return localVarFp.executeSweep(requestParameters.sweepRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get all wallets for the authenticated lender: main treasury wallet + per-loan wallets with balances. Includes aggregate totals and infrastructure status. Lender-only endpoint. 
     * @summary Get all wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllWallets(options) {
      return localVarFp.getAllWallets(options).then((request) => request(axios, basePath));
    },
    /**
     * Preview sweepable wallets without executing. Returns list of loan wallets with balances and sweepable status. Lender-only endpoint. 
     * @summary Preview sweep
     * @param {TreasuryApiGetSweepPreviewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSweepPreview(requestParameters = {}, options) {
      return localVarFp.getSweepPreview(requestParameters.minBalance, options).then((request) => request(axios, basePath));
    },
    /**
     * Get treasury overview for the authenticated lender. Returns main wallet, virtual accounts, and KYB status. Lender-only endpoint. 
     * @summary Get treasury overview
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTreasuryOverview(options) {
      return localVarFp.getTreasuryOverview(options).then((request) => request(axios, basePath));
    },
    /**
     * Get transaction history for the lender\'s main treasury wallet. Returns deposits and other treasury movements from Bridge. Lender-only endpoint. 
     * @summary Get treasury transaction history
     * @param {TreasuryApiGetTreasuryTransactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTreasuryTransactions(requestParameters = {}, options) {
      return localVarFp.getTreasuryTransactions(requestParameters.limit, requestParameters.cursor, requestParameters.updatedAfter, requestParameters.updatedBefore, options).then((request) => request(axios, basePath));
    }
  };
};
var TreasuryApi = class extends BaseAPI {
  /**
   * Sweep balances from loan wallets to master treasury wallet. Supports dry-run mode to preview without executing. Lender-only endpoint. 
   * @summary Execute sweep
   * @param {TreasuryApiExecuteSweepRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TreasuryApi
   */
  executeSweep(requestParameters = {}, options) {
    return TreasuryApiFp(this.configuration).executeSweep(requestParameters.sweepRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get all wallets for the authenticated lender: main treasury wallet + per-loan wallets with balances. Includes aggregate totals and infrastructure status. Lender-only endpoint. 
   * @summary Get all wallets
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TreasuryApi
   */
  getAllWallets(options) {
    return TreasuryApiFp(this.configuration).getAllWallets(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Preview sweepable wallets without executing. Returns list of loan wallets with balances and sweepable status. Lender-only endpoint. 
   * @summary Preview sweep
   * @param {TreasuryApiGetSweepPreviewRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TreasuryApi
   */
  getSweepPreview(requestParameters = {}, options) {
    return TreasuryApiFp(this.configuration).getSweepPreview(requestParameters.minBalance, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get treasury overview for the authenticated lender. Returns main wallet, virtual accounts, and KYB status. Lender-only endpoint. 
   * @summary Get treasury overview
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TreasuryApi
   */
  getTreasuryOverview(options) {
    return TreasuryApiFp(this.configuration).getTreasuryOverview(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get transaction history for the lender\'s main treasury wallet. Returns deposits and other treasury movements from Bridge. Lender-only endpoint. 
   * @summary Get treasury transaction history
   * @param {TreasuryApiGetTreasuryTransactionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TreasuryApi
   */
  getTreasuryTransactions(requestParameters = {}, options) {
    return TreasuryApiFp(this.configuration).getTreasuryTransactions(requestParameters.limit, requestParameters.cursor, requestParameters.updatedAfter, requestParameters.updatedBefore, options).then((request) => request(this.axios, this.basePath));
  }
};
var WalletsApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Register a wallet address for ownership verification. Idempotent - returns existing wallet if address+chain already exists, creates a neobank-specific link if needed. 
     * @summary Create or link a wallet
     * @param {CreateWalletRequest} createWalletRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWallet: async (createWalletRequest, options = {}) => {
      assertParamExists("createWallet", "createWalletRequest", createWalletRequest);
      const localVarPath = `/wallets`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(createWalletRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get the status of a verification attempt
     * @summary Get verification status
     * @param {string} verificationId Unique identifier for the verification attempt
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVerification: async (verificationId, options = {}) => {
      assertParamExists("getVerification", "verificationId", verificationId);
      const localVarPath = `/verifications/{verificationId}`.replace(`{${"verificationId"}}`, encodeURIComponent(String(verificationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Get a wallet by its ID (neobank must have link)
     * @summary Get wallet by ID
     * @param {string} id Unique identifier for the wallet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWallet: async (id, options = {}) => {
      assertParamExists("getWallet", "id", id);
      const localVarPath = `/wallets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Start wallet ownership verification process. Generates a challenge based on the verification method. For MESSAGE_SIGN: returns a message for the user to sign. 
     * @summary Initiate wallet verification
     * @param {string} walletId 
     * @param {InitiateVerificationRequest} initiateVerificationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    initiateWalletVerification: async (walletId, initiateVerificationRequest, options = {}) => {
      assertParamExists("initiateWalletVerification", "walletId", walletId);
      assertParamExists("initiateWalletVerification", "initiateVerificationRequest", initiateVerificationRequest);
      const localVarPath = `/wallets/{walletId}/verifications`.replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(initiateVerificationRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List all verification attempts for a wallet (this neobank\'s verifications only)
     * @summary List verifications for wallet
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listWalletVerifications: async (walletId, options = {}) => {
      assertParamExists("listWalletVerifications", "walletId", walletId);
      const localVarPath = `/wallets/{walletId}/verifications`.replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * List wallets linked to this neobank with optional filters
     * @summary List wallets
     * @param {boolean} [verified] Filter by global verification status
     * @param {Chain} [chain] Filter by blockchain
     * @param {string} [externalId] Filter by neobank\&#39;s external reference ID
     * @param {string} [address] Partial address match (case-insensitive)
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listWallets: async (verified, chain, externalId, address, limit, offset, options = {}) => {
      const localVarPath = `/wallets`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      if (verified !== void 0) {
        localVarQueryParameter["verified"] = verified;
      }
      if (chain !== void 0) {
        localVarQueryParameter["chain"] = chain;
      }
      if (externalId !== void 0) {
        localVarQueryParameter["externalId"] = externalId;
      }
      if (address !== void 0) {
        localVarQueryParameter["address"] = address;
      }
      if (limit !== void 0) {
        localVarQueryParameter["limit"] = limit;
      }
      if (offset !== void 0) {
        localVarQueryParameter["offset"] = offset;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Submit proof to complete wallet verification. For MESSAGE_SIGN: submit the wallet signature. 
     * @summary Submit verification proof
     * @param {string} verificationId Unique identifier for the verification attempt
     * @param {SubmitProofRequest} submitProofRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitVerificationProof: async (verificationId, submitProofRequest, options = {}) => {
      assertParamExists("submitVerificationProof", "verificationId", verificationId);
      assertParamExists("submitVerificationProof", "submitProofRequest", submitProofRequest);
      const localVarPath = `/verifications/{verificationId}/proof`.replace(`{${"verificationId"}}`, encodeURIComponent(String(verificationId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(submitProofRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Update neobank-specific metadata (externalId, label, metadata)
     * @summary Update wallet metadata
     * @param {string} id Unique identifier for the wallet
     * @param {UpdateWalletRequest} updateWalletRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWallet: async (id, updateWalletRequest, options = {}) => {
      assertParamExists("updateWallet", "id", id);
      assertParamExists("updateWallet", "updateWalletRequest", updateWalletRequest);
      const localVarPath = `/wallets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "PATCH", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration);
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(updateWalletRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var WalletsApiFp = function(configuration) {
  const localVarAxiosParamCreator = WalletsApiAxiosParamCreator(configuration);
  return {
    /**
     * Register a wallet address for ownership verification. Idempotent - returns existing wallet if address+chain already exists, creates a neobank-specific link if needed. 
     * @summary Create or link a wallet
     * @param {CreateWalletRequest} createWalletRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createWallet(createWalletRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createWallet(createWalletRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.createWallet"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get the status of a verification attempt
     * @summary Get verification status
     * @param {string} verificationId Unique identifier for the verification attempt
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getVerification(verificationId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getVerification(verificationId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.getVerification"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Get a wallet by its ID (neobank must have link)
     * @summary Get wallet by ID
     * @param {string} id Unique identifier for the wallet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWallet(id, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWallet(id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.getWallet"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Start wallet ownership verification process. Generates a challenge based on the verification method. For MESSAGE_SIGN: returns a message for the user to sign. 
     * @summary Initiate wallet verification
     * @param {string} walletId 
     * @param {InitiateVerificationRequest} initiateVerificationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async initiateWalletVerification(walletId, initiateVerificationRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.initiateWalletVerification(walletId, initiateVerificationRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.initiateWalletVerification"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all verification attempts for a wallet (this neobank\'s verifications only)
     * @summary List verifications for wallet
     * @param {string} walletId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listWalletVerifications(walletId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listWalletVerifications(walletId, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.listWalletVerifications"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List wallets linked to this neobank with optional filters
     * @summary List wallets
     * @param {boolean} [verified] Filter by global verification status
     * @param {Chain} [chain] Filter by blockchain
     * @param {string} [externalId] Filter by neobank\&#39;s external reference ID
     * @param {string} [address] Partial address match (case-insensitive)
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listWallets(verified, chain, externalId, address, limit, offset, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listWallets(verified, chain, externalId, address, limit, offset, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.listWallets"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Submit proof to complete wallet verification. For MESSAGE_SIGN: submit the wallet signature. 
     * @summary Submit verification proof
     * @param {string} verificationId Unique identifier for the verification attempt
     * @param {SubmitProofRequest} submitProofRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submitVerificationProof(verificationId, submitProofRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.submitVerificationProof(verificationId, submitProofRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.submitVerificationProof"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update neobank-specific metadata (externalId, label, metadata)
     * @summary Update wallet metadata
     * @param {string} id Unique identifier for the wallet
     * @param {UpdateWalletRequest} updateWalletRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWallet(id, updateWalletRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateWallet(id, updateWalletRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["WalletsApi.updateWallet"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var WalletsApiFactory = function(configuration, basePath, axios) {
  const localVarFp = WalletsApiFp(configuration);
  return {
    /**
     * Register a wallet address for ownership verification. Idempotent - returns existing wallet if address+chain already exists, creates a neobank-specific link if needed. 
     * @summary Create or link a wallet
     * @param {WalletsApiCreateWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWallet(requestParameters, options) {
      return localVarFp.createWallet(requestParameters.createWalletRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Get the status of a verification attempt
     * @summary Get verification status
     * @param {WalletsApiGetVerificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getVerification(requestParameters, options) {
      return localVarFp.getVerification(requestParameters.verificationId, options).then((request) => request(axios, basePath));
    },
    /**
     * Get a wallet by its ID (neobank must have link)
     * @summary Get wallet by ID
     * @param {WalletsApiGetWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWallet(requestParameters, options) {
      return localVarFp.getWallet(requestParameters.id, options).then((request) => request(axios, basePath));
    },
    /**
     * Start wallet ownership verification process. Generates a challenge based on the verification method. For MESSAGE_SIGN: returns a message for the user to sign. 
     * @summary Initiate wallet verification
     * @param {WalletsApiInitiateWalletVerificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    initiateWalletVerification(requestParameters, options) {
      return localVarFp.initiateWalletVerification(requestParameters.walletId, requestParameters.initiateVerificationRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * List all verification attempts for a wallet (this neobank\'s verifications only)
     * @summary List verifications for wallet
     * @param {WalletsApiListWalletVerificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listWalletVerifications(requestParameters, options) {
      return localVarFp.listWalletVerifications(requestParameters.walletId, options).then((request) => request(axios, basePath));
    },
    /**
     * List wallets linked to this neobank with optional filters
     * @summary List wallets
     * @param {WalletsApiListWalletsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listWallets(requestParameters = {}, options) {
      return localVarFp.listWallets(requestParameters.verified, requestParameters.chain, requestParameters.externalId, requestParameters.address, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
    },
    /**
     * Submit proof to complete wallet verification. For MESSAGE_SIGN: submit the wallet signature. 
     * @summary Submit verification proof
     * @param {WalletsApiSubmitVerificationProofRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitVerificationProof(requestParameters, options) {
      return localVarFp.submitVerificationProof(requestParameters.verificationId, requestParameters.submitProofRequest, options).then((request) => request(axios, basePath));
    },
    /**
     * Update neobank-specific metadata (externalId, label, metadata)
     * @summary Update wallet metadata
     * @param {WalletsApiUpdateWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWallet(requestParameters, options) {
      return localVarFp.updateWallet(requestParameters.id, requestParameters.updateWalletRequest, options).then((request) => request(axios, basePath));
    }
  };
};
var WalletsApi = class extends BaseAPI {
  /**
   * Register a wallet address for ownership verification. Idempotent - returns existing wallet if address+chain already exists, creates a neobank-specific link if needed. 
   * @summary Create or link a wallet
   * @param {WalletsApiCreateWalletRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  createWallet(requestParameters, options) {
    return WalletsApiFp(this.configuration).createWallet(requestParameters.createWalletRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get the status of a verification attempt
   * @summary Get verification status
   * @param {WalletsApiGetVerificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  getVerification(requestParameters, options) {
    return WalletsApiFp(this.configuration).getVerification(requestParameters.verificationId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Get a wallet by its ID (neobank must have link)
   * @summary Get wallet by ID
   * @param {WalletsApiGetWalletRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  getWallet(requestParameters, options) {
    return WalletsApiFp(this.configuration).getWallet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Start wallet ownership verification process. Generates a challenge based on the verification method. For MESSAGE_SIGN: returns a message for the user to sign. 
   * @summary Initiate wallet verification
   * @param {WalletsApiInitiateWalletVerificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  initiateWalletVerification(requestParameters, options) {
    return WalletsApiFp(this.configuration).initiateWalletVerification(requestParameters.walletId, requestParameters.initiateVerificationRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List all verification attempts for a wallet (this neobank\'s verifications only)
   * @summary List verifications for wallet
   * @param {WalletsApiListWalletVerificationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  listWalletVerifications(requestParameters, options) {
    return WalletsApiFp(this.configuration).listWalletVerifications(requestParameters.walletId, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * List wallets linked to this neobank with optional filters
   * @summary List wallets
   * @param {WalletsApiListWalletsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  listWallets(requestParameters = {}, options) {
    return WalletsApiFp(this.configuration).listWallets(requestParameters.verified, requestParameters.chain, requestParameters.externalId, requestParameters.address, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Submit proof to complete wallet verification. For MESSAGE_SIGN: submit the wallet signature. 
   * @summary Submit verification proof
   * @param {WalletsApiSubmitVerificationProofRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  submitVerificationProof(requestParameters, options) {
    return WalletsApiFp(this.configuration).submitVerificationProof(requestParameters.verificationId, requestParameters.submitProofRequest, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Update neobank-specific metadata (externalId, label, metadata)
   * @summary Update wallet metadata
   * @param {WalletsApiUpdateWalletRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  updateWallet(requestParameters, options) {
    return WalletsApiFp(this.configuration).updateWallet(requestParameters.id, requestParameters.updateWalletRequest, options).then((request) => request(this.axios, this.basePath));
  }
};

// src/generated/api/configuration.ts
var Configuration = class {
  constructor(param = {}) {
    this.apiKey = param.apiKey;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.serverIndex = param.serverIndex;
    this.baseOptions = param.baseOptions;
    this.formDataCtor = param.formDataCtor;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
  }
};

// src/generated/sdx/index.ts
var sdx_exports = {};
__export(sdx_exports, {
  BlobsApi: () => BlobsApi,
  BlobsApiAxiosParamCreator: () => BlobsApiAxiosParamCreator,
  BlobsApiFactory: () => BlobsApiFactory,
  BlobsApiFp: () => BlobsApiFp,
  Configuration: () => Configuration2,
  HealthApi: () => HealthApi,
  HealthApiAxiosParamCreator: () => HealthApiAxiosParamCreator,
  HealthApiFactory: () => HealthApiFactory,
  HealthApiFp: () => HealthApiFp,
  HealthCheckResponseStatusEnum: () => HealthCheckResponseStatusEnum
});
var BASE_PATH2 = "https://sdx.tryportola.com".replace(/\/+$/, "");
var BaseAPI2 = class {
  constructor(configuration, basePath = BASE_PATH2, axios = globalAxios2__default.default) {
    this.basePath = basePath;
    this.axios = axios;
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath ?? basePath;
    }
  }
};
var RequiredError3 = class extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
    this.name = "RequiredError";
  }
};
var operationServerMap2 = {};

// src/generated/sdx/common.ts
var DUMMY_BASE_URL2 = "https://example.com";
var assertParamExists2 = function(functionName, paramName, paramValue) {
  if (paramValue === null || paramValue === void 0) {
    throw new RequiredError3(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
  }
};
var setBearerAuthToObject2 = async function(object, configuration) {
  if (configuration && configuration.accessToken) {
    const accessToken = typeof configuration.accessToken === "function" ? await configuration.accessToken() : await configuration.accessToken;
    object["Authorization"] = "Bearer " + accessToken;
  }
};
function setFlattenedQueryParams2(urlSearchParams, parameter, key = "") {
  if (parameter == null) return;
  if (typeof parameter === "object") {
    if (Array.isArray(parameter)) {
      parameter.forEach((item) => setFlattenedQueryParams2(urlSearchParams, item, key));
    } else {
      Object.keys(parameter).forEach(
        (currentKey) => setFlattenedQueryParams2(urlSearchParams, parameter[currentKey], `${key}${key !== "" ? "." : ""}${currentKey}`)
      );
    }
  } else {
    if (urlSearchParams.has(key)) {
      urlSearchParams.append(key, parameter);
    } else {
      urlSearchParams.set(key, parameter);
    }
  }
}
var setSearchParams2 = function(url, ...objects) {
  const searchParams = new URLSearchParams(url.search);
  setFlattenedQueryParams2(searchParams, objects);
  url.search = searchParams.toString();
};
var serializeDataIfNeeded2 = function(value, requestOptions, configuration) {
  const nonString = typeof value !== "string";
  const needsSerialization = nonString && configuration && configuration.isJsonMime ? configuration.isJsonMime(requestOptions.headers["Content-Type"]) : nonString;
  return needsSerialization ? JSON.stringify(value !== void 0 ? value : {}) : value || "";
};
var toPathString2 = function(url) {
  return url.pathname + url.search + url.hash;
};
var createRequestFunction2 = function(axiosArgs, globalAxios5, BASE_PATH3, configuration) {
  return (axios = globalAxios5, basePath = BASE_PATH3) => {
    const axiosRequestArgs = { ...axiosArgs.options, url: (axios.defaults.baseURL ? "" : configuration?.basePath ?? basePath) + axiosArgs.url };
    return axios.request(axiosRequestArgs);
  };
};

// src/generated/sdx/api.ts
var HealthCheckResponseStatusEnum = {
  Healthy: "healthy",
  Unhealthy: "unhealthy"
};
var BlobsApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Download a previously uploaded encrypted blob using its document handle.  **Authentication**: Requires JWT token with `action: \"download\"`  **Security**: The JWT token must contain the exact document handle being requested. This prevents unauthorized access to other documents.  **Expiration**: Document handles expire after a configurable TTL (default: 72 hours). Expired handles return HTTP 410 Gone.  **One-Time Retrieval**: After successful download, the document status changes to \"RETRIEVED\". However, the document remains accessible until expiration. 
     * @summary Download encrypted blob
     * @param {string} documentHandle Document handle returned from upload endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadBlob: async (documentHandle, options = {}) => {
      assertParamExists2("downloadBlob", "documentHandle", documentHandle);
      const localVarPath = `/sdx/blobs/{documentHandle}`.replace(`{${"documentHandle"}}`, encodeURIComponent(String(documentHandle)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL2);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setBearerAuthToObject2(localVarHeaderParameter, configuration);
      setSearchParams2(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString2(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Upload an encrypted binary blob to SDX storage.  **Authentication**: Requires JWT token with `action: \"upload\"`  **Deduplication**: If an identical blob (same content hash) was previously uploaded for the same application, the existing document handle is returned without creating a duplicate.  **Idempotency**: Include an `Idempotency-Key` header to prevent duplicate uploads due to network retries. If a request with the same idempotency key is repeated, the original response is returned.  **Limitations**: - Maximum blob size: 100MB (configurable) - Content-Type must be `application/octet-stream` - Content-Length header is required 
     * @summary Upload encrypted blob
     * @param {number} contentLength Size of the blob in bytes (required)
     * @param {File} body Binary blob data (encrypted document)
     * @param {string} [xDocumentType] Optional document type hint for audit logging. Examples: \&quot;kyc_document\&quot;, \&quot;unsigned_contract\&quot;, \&quot;signed_contract\&quot; 
     * @param {string} [idempotencyKey] Optional idempotency key (16-128 characters) to prevent duplicate uploads. If provided, identical requests will return the same document handle. 
     * @param {string} [userAgent] Optional client identifier for audit logging. Will be sanitized to remove potentially malicious content. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadBlob: async (contentLength, body, xDocumentType, idempotencyKey, userAgent, options = {}) => {
      assertParamExists2("uploadBlob", "contentLength", contentLength);
      assertParamExists2("uploadBlob", "body", body);
      const localVarPath = `/sdx/blobs`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL2);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      await setBearerAuthToObject2(localVarHeaderParameter, configuration);
      localVarHeaderParameter["Content-Type"] = "application/octet-stream";
      if (xDocumentType != null) {
        localVarHeaderParameter["X-Document-Type"] = String(xDocumentType);
      }
      if (idempotencyKey != null) {
        localVarHeaderParameter["Idempotency-Key"] = String(idempotencyKey);
      }
      if (contentLength != null) {
        localVarHeaderParameter["Content-Length"] = typeof contentLength === "string" ? contentLength : JSON.stringify(contentLength);
      }
      if (userAgent != null) {
        localVarHeaderParameter["User-Agent"] = String(userAgent);
      }
      setSearchParams2(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded2(body, localVarRequestOptions, configuration);
      return {
        url: toPathString2(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var BlobsApiFp = function(configuration) {
  const localVarAxiosParamCreator = BlobsApiAxiosParamCreator(configuration);
  return {
    /**
     * Download a previously uploaded encrypted blob using its document handle.  **Authentication**: Requires JWT token with `action: \"download\"`  **Security**: The JWT token must contain the exact document handle being requested. This prevents unauthorized access to other documents.  **Expiration**: Document handles expire after a configurable TTL (default: 72 hours). Expired handles return HTTP 410 Gone.  **One-Time Retrieval**: After successful download, the document status changes to \"RETRIEVED\". However, the document remains accessible until expiration. 
     * @summary Download encrypted blob
     * @param {string} documentHandle Document handle returned from upload endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async downloadBlob(documentHandle, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.downloadBlob(documentHandle, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap2["BlobsApi.downloadBlob"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction2(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH2, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Upload an encrypted binary blob to SDX storage.  **Authentication**: Requires JWT token with `action: \"upload\"`  **Deduplication**: If an identical blob (same content hash) was previously uploaded for the same application, the existing document handle is returned without creating a duplicate.  **Idempotency**: Include an `Idempotency-Key` header to prevent duplicate uploads due to network retries. If a request with the same idempotency key is repeated, the original response is returned.  **Limitations**: - Maximum blob size: 100MB (configurable) - Content-Type must be `application/octet-stream` - Content-Length header is required 
     * @summary Upload encrypted blob
     * @param {number} contentLength Size of the blob in bytes (required)
     * @param {File} body Binary blob data (encrypted document)
     * @param {string} [xDocumentType] Optional document type hint for audit logging. Examples: \&quot;kyc_document\&quot;, \&quot;unsigned_contract\&quot;, \&quot;signed_contract\&quot; 
     * @param {string} [idempotencyKey] Optional idempotency key (16-128 characters) to prevent duplicate uploads. If provided, identical requests will return the same document handle. 
     * @param {string} [userAgent] Optional client identifier for audit logging. Will be sanitized to remove potentially malicious content. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadBlob(contentLength, body, xDocumentType, idempotencyKey, userAgent, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.uploadBlob(contentLength, body, xDocumentType, idempotencyKey, userAgent, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap2["BlobsApi.uploadBlob"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction2(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH2, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var BlobsApiFactory = function(configuration, basePath, axios) {
  const localVarFp = BlobsApiFp(configuration);
  return {
    /**
     * Download a previously uploaded encrypted blob using its document handle.  **Authentication**: Requires JWT token with `action: \"download\"`  **Security**: The JWT token must contain the exact document handle being requested. This prevents unauthorized access to other documents.  **Expiration**: Document handles expire after a configurable TTL (default: 72 hours). Expired handles return HTTP 410 Gone.  **One-Time Retrieval**: After successful download, the document status changes to \"RETRIEVED\". However, the document remains accessible until expiration. 
     * @summary Download encrypted blob
     * @param {BlobsApiDownloadBlobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadBlob(requestParameters, options) {
      return localVarFp.downloadBlob(requestParameters.documentHandle, options).then((request) => request(axios, basePath));
    },
    /**
     * Upload an encrypted binary blob to SDX storage.  **Authentication**: Requires JWT token with `action: \"upload\"`  **Deduplication**: If an identical blob (same content hash) was previously uploaded for the same application, the existing document handle is returned without creating a duplicate.  **Idempotency**: Include an `Idempotency-Key` header to prevent duplicate uploads due to network retries. If a request with the same idempotency key is repeated, the original response is returned.  **Limitations**: - Maximum blob size: 100MB (configurable) - Content-Type must be `application/octet-stream` - Content-Length header is required 
     * @summary Upload encrypted blob
     * @param {BlobsApiUploadBlobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadBlob(requestParameters, options) {
      return localVarFp.uploadBlob(requestParameters.contentLength, requestParameters.body, requestParameters.xDocumentType, requestParameters.idempotencyKey, requestParameters.userAgent, options).then((request) => request(axios, basePath));
    }
  };
};
var BlobsApi = class extends BaseAPI2 {
  /**
   * Download a previously uploaded encrypted blob using its document handle.  **Authentication**: Requires JWT token with `action: \"download\"`  **Security**: The JWT token must contain the exact document handle being requested. This prevents unauthorized access to other documents.  **Expiration**: Document handles expire after a configurable TTL (default: 72 hours). Expired handles return HTTP 410 Gone.  **One-Time Retrieval**: After successful download, the document status changes to \"RETRIEVED\". However, the document remains accessible until expiration. 
   * @summary Download encrypted blob
   * @param {BlobsApiDownloadBlobRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BlobsApi
   */
  downloadBlob(requestParameters, options) {
    return BlobsApiFp(this.configuration).downloadBlob(requestParameters.documentHandle, options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Upload an encrypted binary blob to SDX storage.  **Authentication**: Requires JWT token with `action: \"upload\"`  **Deduplication**: If an identical blob (same content hash) was previously uploaded for the same application, the existing document handle is returned without creating a duplicate.  **Idempotency**: Include an `Idempotency-Key` header to prevent duplicate uploads due to network retries. If a request with the same idempotency key is repeated, the original response is returned.  **Limitations**: - Maximum blob size: 100MB (configurable) - Content-Type must be `application/octet-stream` - Content-Length header is required 
   * @summary Upload encrypted blob
   * @param {BlobsApiUploadBlobRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BlobsApi
   */
  uploadBlob(requestParameters, options) {
    return BlobsApiFp(this.configuration).uploadBlob(requestParameters.contentLength, requestParameters.body, requestParameters.xDocumentType, requestParameters.idempotencyKey, requestParameters.userAgent, options).then((request) => request(this.axios, this.basePath));
  }
};
var HealthApiAxiosParamCreator = function(configuration) {
  return {
    /**
     * Basic health check endpoint that returns service status.  **Authentication**: Not required (public endpoint)  This endpoint checks: - Service availability - Database connectivity - Storage backend connectivity 
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthCheck: async (options = {}) => {
      const localVarPath = `/health`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL2);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams2(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString2(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Kubernetes liveness probe endpoint. Returns 200 if process is alive.  **Authentication**: Not required (public endpoint) 
     * @summary Liveness probe
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    livenessCheck: async (options = {}) => {
      const localVarPath = `/liveness`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL2);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams2(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString2(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Kubernetes readiness probe endpoint. Returns 200 if service is ready to accept traffic.  **Authentication**: Not required (public endpoint) 
     * @summary Readiness probe
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readinessCheck: async (options = {}) => {
      const localVarPath = `/readiness`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL2);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams2(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      return {
        url: toPathString2(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
var HealthApiFp = function(configuration) {
  const localVarAxiosParamCreator = HealthApiAxiosParamCreator(configuration);
  return {
    /**
     * Basic health check endpoint that returns service status.  **Authentication**: Not required (public endpoint)  This endpoint checks: - Service availability - Database connectivity - Storage backend connectivity 
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async healthCheck(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.healthCheck(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap2["HealthApi.healthCheck"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction2(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH2, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Kubernetes liveness probe endpoint. Returns 200 if process is alive.  **Authentication**: Not required (public endpoint) 
     * @summary Liveness probe
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async livenessCheck(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.livenessCheck(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap2["HealthApi.livenessCheck"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction2(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH2, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Kubernetes readiness probe endpoint. Returns 200 if service is ready to accept traffic.  **Authentication**: Not required (public endpoint) 
     * @summary Readiness probe
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readinessCheck(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.readinessCheck(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap2["HealthApi.readinessCheck"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) => createRequestFunction2(localVarAxiosArgs, globalAxios2__default.default, BASE_PATH2, configuration)(axios, localVarOperationServerBasePath || basePath);
    }
  };
};
var HealthApiFactory = function(configuration, basePath, axios) {
  const localVarFp = HealthApiFp(configuration);
  return {
    /**
     * Basic health check endpoint that returns service status.  **Authentication**: Not required (public endpoint)  This endpoint checks: - Service availability - Database connectivity - Storage backend connectivity 
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthCheck(options) {
      return localVarFp.healthCheck(options).then((request) => request(axios, basePath));
    },
    /**
     * Kubernetes liveness probe endpoint. Returns 200 if process is alive.  **Authentication**: Not required (public endpoint) 
     * @summary Liveness probe
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    livenessCheck(options) {
      return localVarFp.livenessCheck(options).then((request) => request(axios, basePath));
    },
    /**
     * Kubernetes readiness probe endpoint. Returns 200 if service is ready to accept traffic.  **Authentication**: Not required (public endpoint) 
     * @summary Readiness probe
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readinessCheck(options) {
      return localVarFp.readinessCheck(options).then((request) => request(axios, basePath));
    }
  };
};
var HealthApi = class extends BaseAPI2 {
  /**
   * Basic health check endpoint that returns service status.  **Authentication**: Not required (public endpoint)  This endpoint checks: - Service availability - Database connectivity - Storage backend connectivity 
   * @summary Health check
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HealthApi
   */
  healthCheck(options) {
    return HealthApiFp(this.configuration).healthCheck(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Kubernetes liveness probe endpoint. Returns 200 if process is alive.  **Authentication**: Not required (public endpoint) 
   * @summary Liveness probe
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HealthApi
   */
  livenessCheck(options) {
    return HealthApiFp(this.configuration).livenessCheck(options).then((request) => request(this.axios, this.basePath));
  }
  /**
   * Kubernetes readiness probe endpoint. Returns 200 if service is ready to accept traffic.  **Authentication**: Not required (public endpoint) 
   * @summary Readiness probe
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HealthApi
   */
  readinessCheck(options) {
    return HealthApiFp(this.configuration).readinessCheck(options).then((request) => request(this.axios, this.basePath));
  }
};

// src/generated/sdx/configuration.ts
var Configuration2 = class {
  constructor(param = {}) {
    this.apiKey = param.apiKey;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.serverIndex = param.serverIndex;
    this.baseOptions = param.baseOptions;
    this.formDataCtor = param.formDataCtor;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
  }
};

exports.ApplicationsApi = ApplicationsApi;
exports.AttestationApi = AttestationApi;
exports.BlobsApi = BlobsApi;
exports.Chain = Chain;
exports.Configuration = Configuration;
exports.EntityDiscoveryApi = EntityDiscoveryApi;
exports.FundingApi = FundingApi;
exports.HealthApi = HealthApi;
exports.KeyManagementApi = KeyManagementApi;
exports.LoansApi = LoansApi;
exports.NeobankSelfServiceApi = NeobankSelfServiceApi;
exports.OffersApi = OffersApi;
exports.PassageAPI = api_exports;
exports.PassageConfiguration = Configuration;
exports.PassageSDX = sdx_exports;
exports.PlatformApi = PlatformApi;
exports.QueueApi = QueueApi;
exports.SDXApi = SDXApi;
exports.SigningApi = SigningApi;
exports.TransfersApi = TransfersApi;
exports.TreasuryApi = TreasuryApi;
exports.WalletType = WalletType;
exports.WalletVerificationMethod = WalletVerificationMethod;
exports.WalletVerificationStatus = WalletVerificationStatus;
exports.WalletsApi = WalletsApi;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map