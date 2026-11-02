// src/v3_15/client.gen.ts
import { createClient, createConfig } from "@hey-api/client-fetch";
var client = createClient(createConfig({
  baseUrl: "https://kion.example.com/api"
}));

// src/v3_15/sdk.gen.ts
var postDashboard = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/dashboard",
    ...options
  });
};
var deleteDashboard = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/dashboard/{id}",
    ...options
  });
};
var patchDashboard = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/dashboard/{id}",
    ...options
  });
};
var duplicateDashboard = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/dashboard/{id}/duplicate",
    ...options
  });
};
var diagnosticBillingReportList = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/diagnostic/billing-report",
    ...options
  });
};
var listScope = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope",
    ...options
  });
};
var postScope = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var scope = (options) => {
  return (options?.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/processing",
    ...options
  });
};
var putScopeReprioritize = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/reprioritize",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteScope = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/{id}",
    ...options
  });
};
var getScopeById = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/{id}",
    ...options
  });
};
var patchScope = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postScopeCriteria = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/{id}/criteria",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var patchScopeCriteria = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/{id}/criteria/{criteria_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteScopeCriteria = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/beta/scope/{scope_id}/criteria/{criteria_id}",
    ...options
  });
};
var getAccountIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account",
    ...options
  });
};
var getAccountCacheIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache",
    ...options
  });
};
var postAwsAccountCacheCreate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/__qs__/account-type/aws",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAzureAccountCacheCreate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/__qs__/account-type/azure",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postCustomAccountCacheCreate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/__qs__/account-type/custom",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postGcpAccountCacheCreate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/__qs__/account-type/google-cloud",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postOciAccountCacheCreate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/__qs__/account-type/oci",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAccountCacheCreateNewAwsDeprecated = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/aws",
    ...options
  });
};
var deleteByAccountNumberAccountCache = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/by-number/{account_number}",
    ...options
  });
};
var postAccountCacheCreateNewAws = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/create/__qs__/account-type/aws",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAccountCacheCreateNewAzureSubscription = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/create/__qs__/account-type/azure",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAccountCacheCreateNewGcp = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/create/__qs__/account-type/google-cloud",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAccountCacheAugmented = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/search",
    ...options
  });
};
var getAccountCacheCustomVariablesByAccountCacheId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{account_cache_id}/custom-variable",
    ...options
  });
};
var deleteAccountCacheCustomVariable = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{account_cache_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var getAccountCacheCustomVariable = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{account_cache_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var createOrUpdateAccountCacheCustomVariable = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{account_cache_id}/custom-variable/{custom_variable_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAccountCache = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{id}",
    ...options
  });
};
var getAccountCache = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{id}",
    ...options
  });
};
var patchAccountCache = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAccountCacheConvert = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{id}/convert/{project_id}",
    ...options
  });
};
var postAccountCacheConvert = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{id}/convert/{project_id}",
    ...options
  });
};
var getAccountCacheStatus = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-cache/{id}/status",
    ...options
  });
};
var getAllAccountLinkages = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages",
    ...options
  });
};
var postAccountLinkage = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAllGoogleAccountLinkages = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages/google",
    ...options
  });
};
var postGoogleAccountLinkage = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages/google",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var removeGoogleAccountLinkage = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages/google/{id}",
    ...options
  });
};
var getSpecificGoogleAccountLinkage = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages/google/{id}",
    ...options
  });
};
var removeAccountLinkage = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages/{id}",
    ...options
  });
};
var getSpecificAccountLinkage = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account-linkages/{id}",
    ...options
  });
};
var postAwsAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/__qs__/account-type/aws",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAzureSubscription = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/__qs__/account-type/azure",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postCustomAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/__qs__/account-type/custom",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postGoogleCloudAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/__qs__/account-type/google-cloud",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postOciAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/__qs__/account-type/oci",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAccountByAccountNumber = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/by-account-number/{account_number}",
    ...options
  });
};
var getAccountByAccountNumber = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/by-account-number/{account_number}",
    ...options
  });
};
var revertAccountByAccountNumber = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/revert/by-account-number/{account_number}",
    ...options
  });
};
var revertAccount = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/revert/{id}",
    ...options
  });
};
var getAccountTypeIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/type",
    ...options
  });
};
var getAccountType = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/type/{id}",
    ...options
  });
};
var getAccountCustomVariablesByAccountId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/custom-variable",
    ...options
  });
};
var deleteAccountCustomVariable = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var getAccountCustomVariable = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var createOrUpdateAccountCustomVariable = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/custom-variable/{custom_variable_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAccountLabelKeyValue = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/labels",
    ...options
  });
};
var getAccountLabels = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/labels",
    ...options
  });
};
var postAccountLabel = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var putAccountLabels = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAccountLabel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{account_id}/labels/{label_id}",
    ...options
  });
};
var deleteAccount = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}",
    ...options
  });
};
var getAccount = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}",
    ...options
  });
};
var patchAccount = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postEndCft = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/end-cft",
    ...options
  });
};
var postEndPost = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/end-post-webhook",
    ...options
  });
};
var postEndPre = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/end-pre-webhook",
    ...options
  });
};
var postFailedCft = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/failed-cft",
    ...options
  });
};
var postReattemptPost = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/reattempt-post",
    ...options
  });
};
var postReattemptPre = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/reattempt-pre",
    ...options
  });
};
var resetAccountCloudRuleState = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/reset",
    ...options
  });
};
var resetCft = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/reset-cft",
    ...options
  });
};
var resetPost = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/reset-post",
    ...options
  });
};
var resetPre = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/reset-pre",
    ...options
  });
};
var postStartCft = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/start-cft",
    ...options
  });
};
var postStartPost = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/start-post-webhook",
    ...options
  });
};
var postStartPre = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/start-pre-webhook",
    ...options
  });
};
var getAccountCloudRuleState = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloud-rule/{cloud_rule_id}/state",
    ...options
  });
};
var getCftStatusByAccountId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/cloudformation/status",
    ...options
  });
};
var deleteArchiveAllAccountCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/compliance/archive",
    ...options
  });
};
var deleteArchiveAccountCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/compliance/check/{checkID}/archive",
    ...options
  });
};
var deleteArchiveAccountCheckFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/compliance/check/{checkID}/finding/{findingID}/archive",
    ...options
  });
};
var deleteArchiveAccountStandardFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/compliance/standard/{standardID}/archive",
    ...options
  });
};
var deleteArchiveAccountStandardCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/compliance/standard/{standardID}/check/{checkID}/archive",
    ...options
  });
};
var deleteArchiveAccountFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/compliance/standard/{standardID}/check/{checkID}/finding/{findingID}/archive",
    ...options
  });
};
var azureLinkStart = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/link-azure",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var googleLinkStart = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/link-google",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAccountMove = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/move",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getReattempts = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/reattempt",
    ...options
  });
};
var getAccountWebhookDeleteStates = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/account/{id}/webhook-delete-state",
    ...options
  });
};
var getAmiIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami",
    ...options
  });
};
var postAmi = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAmi = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami/{id}",
    ...options
  });
};
var getAmi = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami/{id}",
    ...options
  });
};
var patchAmi = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var amiRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var amiAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ami/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAppApiKeyIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key",
    ...options
  });
};
var postAppApiKey = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postRotateAppApiKey = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key/rotate",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUserAppApiKeys = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key/user/{id}",
    ...options
  });
};
var deleteAppApiKey = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key/{id}",
    ...options
  });
};
var getAppApiKey = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key/{id}",
    ...options
  });
};
var patchAppApiKey = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-api-key/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAppConfigKeyIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config",
    ...options
  });
};
var patchAppConfig = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAccountConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/account",
    ...options
  });
};
var putAccountConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/account",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAdminContactEmail = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/admin-contact-email",
    ...options
  });
};
var putAdminContactEmail = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/admin-contact-email",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAuthTimeoutConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/auth-timeout",
    ...options
  });
};
var putAuthTimeoutConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/auth-timeout",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAwsAccessConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/aws-access",
    ...options
  });
};
var putAwsAccessConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/aws-access",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAwsAccountCreationConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/aws-account-creation",
    ...options
  });
};
var putAwsAccountCreationConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/aws-account-creation",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getBrowserConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/browser",
    ...options
  });
};
var putBrowserConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/browser",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/compliance-config",
    ...options
  });
};
var putComplianceConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/compliance-config",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCostSavingsConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/cost-savings",
    ...options
  });
};
var putCostSavingsConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/cost-savings",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCostSavingsOpportunityConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/cost-savings-opportunity",
    ...options
  });
};
var putCostSavingsOpportunityConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/cost-savings-opportunity",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCustomBrandingConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/custom-branding",
    ...options
  });
};
var putCustomBrandingConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/custom-branding",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCustomMessagingConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/custom-messaging",
    ...options
  });
};
var putCustomMessagingConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/custom-messaging",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCustomWhiteLabelConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/custom-white-labeling",
    ...options
  });
};
var putCustomWhiteLabelConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/custom-white-labeling",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getFederatedLoginConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/federated-login",
    ...options
  });
};
var putFederatedLoginConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/federated-login",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getForgotPasswordConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/forgot-password",
    ...options
  });
};
var putForgotPasswordConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/forgot-password",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getHideIntegrationsStatus = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/hide-integrations",
    ...options
  });
};
var putHideIntegrationsStatus = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/hide-integrations",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getSamlDebugStatus = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/saml-debugging",
    ...options
  });
};
var putSamlDebugStatus = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/saml-debugging",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getSupportUrl = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/support-url",
    ...options
  });
};
var putSupportUrl = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/support-url",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getSystemDiagnosticsConfig = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/system-diagnostics",
    ...options
  });
};
var putSystemDiagnosticsConfig = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-config/system-diagnostics",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAppPermissionIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-permission",
    ...options
  });
};
var getAppPermissionInheritance = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-permission/inheritance",
    ...options
  });
};
var getAppPermission = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-permission/{id}",
    ...options
  });
};
var getAppRoleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-role",
    ...options
  });
};
var postAppRole = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-role",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var patchAppRole = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/app-role/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAwsResourceTagIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/aws-resource-tag",
    ...options
  });
};
var postAwsResourceTag = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/aws-resource-tag",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAwsResourceTag = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/aws-resource-tag/{id}",
    ...options
  });
};
var getAzureArmTemplateIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template",
    ...options
  });
};
var postArmTemplate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteArmTemplate = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template/{id}",
    ...options
  });
};
var getAzureArmTemplateWithOwners = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template/{id}",
    ...options
  });
};
var patchArmTemplate = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAzureArmTemplate = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template/{id}/cloud-rules",
    ...options
  });
};
var armTemplateRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var armTemplateAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-arm-template/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var buildPartnerConsentOAuthUrl = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-csp/initiate-service-account-registration",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getConsentLink = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-csp/{id}/consent/link",
    ...options
  });
};
var getCspConsentStatus = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-csp/{id}/consent/status",
    ...options
  });
};
var getAzurePolicyAll = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy",
    ...options
  });
};
var postAzurePolicy = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getSyncManagedAzurePolicy = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy/update",
    ...options
  });
};
var deleteAzurePolicy = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy/{id}",
    ...options
  });
};
var getAzurePolicyById = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy/{id}",
    ...options
  });
};
var patchAzurePolicy = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAzurePolicyOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAzurePolicyOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-policy/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var listAzureRegions = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-region",
    ...options
  });
};
var refreshAzureRegions = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-region/refresh",
    ...options
  });
};
var getAzureRegionById = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-region/{id}",
    ...options
  });
};
var getAzureRoleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role",
    ...options
  });
};
var postAzureRole = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteAzureRole = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}",
    ...options
  });
};
var getAzureRole = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}",
    ...options
  });
};
var patchAzureRole = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var azureRoleRemoveCarRestrictedEntities = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}/car-restricted-entities",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var azureRoleAddCarRestrictedEntities = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}/car-restricted-entities",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCloudAccessRolesForAzureRole = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}/cloud-access-role",
    ...options
  });
};
var getCloudRulesForAzureRole = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}/cloud-rule",
    ...options
  });
};
var azureRoleRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var azureRoleAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure-role/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var createNewSubscription = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/azure/subscription",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getBillingRuleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-rule",
    ...options
  });
};
var postBillingRule = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-rule",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteBillingRule = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-rule/{id}",
    ...options
  });
};
var getBillingRule = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-rule/{id}",
    ...options
  });
};
var patchBillingRule = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-rule/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAwsBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/aws",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getBillingSourceByChildAccountName = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/by-child-account-name/{account_name}",
    ...options
  });
};
var getBillingSourceByChildAccountNumber = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/by-child-account-number/{account_number}",
    ...options
  });
};
var postCustomBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/custom",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var patchCustomBillingSource = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/custom/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postGcpBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/gcp",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getLastBillsLoadedAt = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/last-bill-loaded-at",
    ...options
  });
};
var postOciBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/oci",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var patchOciBillingSource = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/oci/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postTestBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/test",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postTestCustomBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/test-custom",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postTestGcpBillingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/test-gcp",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteBillingSource = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/{id}",
    ...options
  });
};
var getBillingSourceGetGcpProjects = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/{id}/gcp-projects",
    ...options
  });
};
var deleteBillingSourceDeleteGovcloudInfo = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/{id}/govcloud",
    ...options
  });
};
var getBillingSourceGetGovcloudInfo = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/{id}/govcloud",
    ...options
  });
};
var patchBillingSourceUpdateGovcloudInfo = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/{id}/govcloud",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postBillingSourceCreateGovcloudInfo = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/billing-source/{id}/govcloud",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postBudget = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/budget",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteBudget = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/budget/{id}",
    ...options
  });
};
var getBudget = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/budget/{id}",
    ...options
  });
};
var putBudget = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/budget/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCategories = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/category",
    ...options
  });
};
var postCategory = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/category",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteCategoryById = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/category/{id}",
    ...options
  });
};
var getCategoryById = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/category/{id}",
    ...options
  });
};
var updateCategoryById = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/category/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCftIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft",
    ...options
  });
};
var postCft = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postGetParseParams = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/parse-params",
    ...options
  });
};
var deleteCft = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/{id}",
    ...options
  });
};
var getCft = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/{id}",
    ...options
  });
};
var patchCft = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCftEstimateCost = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/{id}/estimate-cost",
    ...options
  });
};
var cftRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var cftAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cft/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getGetCloudProviders = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-provider",
    ...options
  });
};
var getCloudProvderServiceIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-provider/service",
    ...options
  });
};
var patchSetEnabledCloudProvider = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-provider/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCloudPulseAccountData = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-pulse/account-data",
    ...options
  });
};
var getCloudPulseMetrics = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-pulse/metrics",
    ...options
  });
};
var getCloudPulseOverview = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-pulse/overview",
    ...options
  });
};
var reattemptCloudformationTemplate = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-pulse/{cloudformation_template_id}/reattempt",
    ...options
  });
};
var getCloudRuleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule",
    ...options
  });
};
var postCloudRule = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCloudRuleExemptionRequest = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/exemption-request",
    ...options
  });
};
var postExemptionRequestApprove = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/exemption-request/{id}/approve",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postExemptionRequestDeny = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/exemption-request/{id}/deny",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteCloudRuleLabelKeyValue = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{cloud_rule_id}/labels",
    ...options
  });
};
var getCloudRuleLabels = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{cloud_rule_id}/labels",
    ...options
  });
};
var postCloudRuleLabel = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{cloud_rule_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var putCloudRuleLabels = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{cloud_rule_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteCloudRuleLabel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{cloud_rule_id}/labels/{label_id}",
    ...options
  });
};
var deleteCloudRule = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}",
    ...options
  });
};
var getCloudRuleShow = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}",
    ...options
  });
};
var patchCloudRule = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteCloudRuleAssociations = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postCloudRuleAssociations = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getCloudRuleCfts = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/cft",
    ...options
  });
};
var postComplianceCloudRuleStandardScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/compliance/standard/{standardID}/schedule-scan",
    ...options
  });
};
var deleteCloudRuleOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postCloudRuleOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteCloudRulePostwebhook = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/post-webhook",
    ...options
  });
};
var deleteCloudRulePrewebhook = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/cloud-rule/{id}/pre-webhook",
    ...options
  });
};
var getComplianceCheckIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check",
    ...options
  });
};
var postComplianceCheck = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceCheckBulk = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/bulk-create",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceCheckScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/scan/array",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceCheckScanArrayObject = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/scan/bulk-create",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceCheckScanObject = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/scan/object",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var resetAllComplianceChecks = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/state/reset",
    ...options
  });
};
var deleteComplianceCheck = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}",
    ...options
  });
};
var getComplianceCheck = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}",
    ...options
  });
};
var patchComplianceCheck = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteComplianceCheckArchiveAllCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/archive",
    ...options
  });
};
var getComplianceCheckScanFinding = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/finding/{findingID}",
    ...options
  });
};
var complianceCheckRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var complianceCheckAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceCheckScanGroupIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/scan/group",
    ...options
  });
};
var postComplianceCheckScanGroup = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/scan/group",
    ...options
  });
};
var getComplianceCheckScanGroupShow = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/scan/group/{groupID}",
    ...options
  });
};
var getComplianceCheckScan = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/scan/{scanID}",
    ...options
  });
};
var postComplianceCheckScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/schedule-scan",
    ...options
  });
};
var getComplianceCheckState = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/state",
    ...options
  });
};
var resetComplianceCheck = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/check/{id}/state/reset",
    ...options
  });
};
var getSuppressedComplianceFindingReason = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/finding/suppressed/{id}/reason",
    ...options
  });
};
var getComplianceOus = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/ou",
    ...options
  });
};
var getComplianceStandardIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard",
    ...options
  });
};
var postComplianceStandard = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceStandardProject = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/project",
    ...options
  });
};
var deleteComplianceStandard = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}",
    ...options
  });
};
var getComplianceStandard = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}",
    ...options
  });
};
var patchComplianceStandard = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteComplianceCheckArchiveAllStandardFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/archive",
    ...options
  });
};
var deleteComplianceStandardAssociations = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceStandardAssociations = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteComplianceCheckArchiveAllStandardCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/check/{checkID}/archive",
    ...options
  });
};
var postComplianceStandardCheckScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/check/{checkID}/schedule-scan",
    ...options
  });
};
var deleteComplianceStandardOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceStandardOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceStandardScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/compliance/standard/{id}/schedule-scan",
    ...options
  });
};
var getAllGlobalCustomVariables = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/custom-variable",
    ...options
  });
};
var createGlobalCustomVariable = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/custom-variable",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteGlobalCustomVariable = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/custom-variable/{custom_variable_id}",
    ...options
  });
};
var getGlobalCustomVariable = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/custom-variable/{custom_variable_id}",
    ...options
  });
};
var updateGlobalCustomVariable = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/custom-variable/{custom_variable_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var generateExternalIds = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/external-id/{account_number}",
    ...options
  });
};
var getAllFeatureFlags = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/feature-flag",
    ...options
  });
};
var getFeatureFlag = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/feature-flag/{flag}",
    ...options
  });
};
var putFeatureFlag = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/feature-flag/{flag}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getFrequencyAll = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/frequency",
    ...options
  });
};
var fundingSourceIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source",
    ...options
  });
};
var postFundingSource = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteFundingSourceLabelKeyValue = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{funding_source_id}/labels",
    ...options
  });
};
var getFundingSourceLabels = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{funding_source_id}/labels",
    ...options
  });
};
var postFundingSourceLabel = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{funding_source_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var putFundingSourceLabels = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{funding_source_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteFundingSourceLabel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{funding_source_id}/labels/{label_id}",
    ...options
  });
};
var deleteFundingSource = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}",
    ...options
  });
};
var getFundingSource = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}",
    ...options
  });
};
var patchFundingSource = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postFundingSourceClone = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/clone",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getFundingSourceEnforcements = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/enforcement",
    ...options
  });
};
var postFundingSourceEnforcement = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/enforcement",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteFundingSourceEnforcements = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/enforcement/{enforcement_id}",
    ...options
  });
};
var patchFundingSourceEnforcements = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/enforcement/{enforcement_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteFundingSourceEnforcementUsers = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/enforcement/{enforcement_id}/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postFundingSourceEnforcementUsers = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/enforcement/{enforcement_id}/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var fundingSourceFinancials = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/financials",
    ...options
  });
};
var getFundingSourceUserMappingIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/permission-mapping",
    ...options
  });
};
var patchFundingSourceUserMapping = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/funding-source/{id}/permission-mapping",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getGcpRoleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role",
    ...options
  });
};
var postGcpRole = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var startGcProleImport = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/trigger-import",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var gcpIamRoleValidatePermissionsAndDenials = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/validate",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteGcpRole = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}",
    ...options
  });
};
var getGcpRole = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}",
    ...options
  });
};
var patchGcpRole = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var gcpIamRoleRemoveCarRestrictedEntities = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}/car-restricted-entities",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var gcpIamRoleAddCarRestrictedEntities = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}/car-restricted-entities",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var gcpIamRoleRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var gcpIamRoleAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-iam-role/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getGcpFoldersList = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/list-folders",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getGcpOrganizationsList = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/list-organizations",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getGcpProjectsList = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/list-projects",
    ...options
  });
};
var getGcpVisibleOrganizationsList = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/list-visible-organizations",
    ...options
  });
};
var createGcpProject = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/project",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var createGcpProjectBulk = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/project-bulk",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postGcpRoleTestOnProject = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp-resources/test-project",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var serviceAccountIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account",
    ...options
  });
};
var postServiceAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postServiceAccountJson = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/json",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteServiceAccount = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}",
    ...options
  });
};
var getServiceAccount = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}",
    ...options
  });
};
var patchServiceAccount = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getServiceAccountBillingAccounts = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/billing-accounts",
    ...options
  });
};
var getBillingAccountProjects = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/billing-accounts/{ba_id}/projects",
    ...options
  });
};
var getProjectDatasetsDeprecated = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/billing-accounts/{ba_id}/projects/{project_id}/datasets",
    ...options
  });
};
var deleteServiceAccountKey = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/key",
    ...options
  });
};
var getServiceAccountKey = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/key",
    ...options
  });
};
var patchServiceAccountKey = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/key",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postServiceAccountKey = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/key",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var setServiceAccountNotificationSent = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/notification-sent",
    ...options
  });
};
var getServiceAccountProjects = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/projects",
    ...options
  });
};
var getProjectDatasets = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/gcp/service-account/{id}/projects/{project_id}/datasets",
    ...options
  });
};
var deleteDeleteGlobalUserMapping = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/global/permission-mapping",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getGlobalUserMappingIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/global/permission-mapping",
    ...options
  });
};
var patchUpdateGlobalUserMapping = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/global/permission-mapping",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postCreateGlobalUserMapping = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/global/permission-mapping",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getIamPolicyIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy",
    ...options
  });
};
var postIamPolicy = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteIamPolicy = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}",
    ...options
  });
};
var getIamPolicy = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}",
    ...options
  });
};
var patchIamPolicy = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var iamPolicyRemoveCarRestrictedEntities = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}/car-restricted-entities",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var iamPolicyAddCarRestrictedEntities = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}/car-restricted-entities",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var iamPolicyRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var iamPolicyAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/iam-policy/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getIdmsIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms",
    ...options
  });
};
var postIdms = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteDestinationUrl = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/destination-url/{id}",
    ...options
  });
};
var postIdmsGroupAssociations = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/group-association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteIdmsGroupAssociation = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/group-association/{id}",
    ...options
  });
};
var getIdmsGroupAssociation = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/group-association/{id}",
    ...options
  });
};
var patchIdmsGroupAssociation = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/group-association/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var syncAdidms = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/sync-ad",
    ...options
  });
};
var deleteIdms = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}",
    ...options
  });
};
var getIdms = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}",
    ...options
  });
};
var patchIdms = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getDestinationUrls = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}/destination-url",
    ...options
  });
};
var postDestinationUrl = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}/destination-url",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var disableIdms = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}/disable",
    ...options
  });
};
var enableIdms = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}/enable",
    ...options
  });
};
var getIdmsGroupAssociations = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/idms/{id}/group-association",
    ...options
  });
};
var deleteLabelKeyValue = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/label",
    ...options
  });
};
var getLabelIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/label",
    ...options
  });
};
var postLabel = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/label",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteLabel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/label/{id}",
    ...options
  });
};
var getLabel = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/label/{id}",
    ...options
  });
};
var patchLabel = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/label/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var refreshLicenseConfig = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/license",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var initialConfig = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/license",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var addUuConfig = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/license/usage-unit",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var exportLog = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/log/export",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getMasterKeySettings = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/master-key/settings",
    ...options
  });
};
var postMasterKeySettings = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/master-key/settings",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var testMasterKeySettings = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/master-key/settings/test",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getMyCars = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/me/cloud-access-role",
    ...options
  });
};
var putNotificationCategorySetting = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/notification/setting/category/{category-id}/{notification-type}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOuIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou",
    ...options
  });
};
var postOu = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postOuCloudAccessRole = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postOuCloudAccessRoleExemption = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role-exemption",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOuCloudAccessRoleExemption = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role-exemption/{id}",
    ...options
  });
};
var deleteOuCloudAccessRole = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role/{id}",
    ...options
  });
};
var getOuCloudAccessRole = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role/{id}",
    ...options
  });
};
var patchOuCloudAccessRole = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOuCloudAccessRoleAssociations = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postOuCloudAccessRoleAssociations = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou-cloud-access-role/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOu = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}",
    ...options
  });
};
var patchOu = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getBudgetByOuid = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/budget",
    ...options
  });
};
var getCloudRuleByOuid = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/cloud-rule",
    ...options
  });
};
var getOuExemptions = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/cloud-rule/exemption",
    ...options
  });
};
var postOuExemptionRequest = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/cloud-rule/exemption-request",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOuExemption = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/cloud-rule/exemption/{exemptionID}",
    ...options
  });
};
var deleteComplianceCheckArchiveAllOuFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveAllOuCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/check/{checkID}/archive",
    ...options
  });
};
var deleteOuComplianceCheckArchiveCheckFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/check/{checkID}/finding/{findingID}/archive",
    ...options
  });
};
var postComplianceCheckSuppressOuCheckFinding = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/check/{checkID}/finding/{findingID}/suppress",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceOuCheckScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/check/{checkID}/schedule-scan",
    ...options
  });
};
var deleteComplianceCheckOuSuppressedFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/check/{checkID}/suppressed-finding/{suppressedFindingID}/un-suppress",
    ...options
  });
};
var deleteComplianceCheckArchiveAllOuStandardFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/standard/{standardID}/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveAllOuStandardCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/standard/{standardID}/check/{checkID}/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveOuFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/standard/{standardID}/check/{checkID}/finding/{findingID}/archive",
    ...options
  });
};
var postComplianceCheckSuppressOuFinding = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/standard/{standardID}/check/{checkID}/finding/{findingID}/suppress",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceOuStandardScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/compliance/standard/{standardID}/schedule-scan",
    ...options
  });
};
var getOuEnforcements = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/enforcement",
    ...options
  });
};
var createOuEnforcement = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/enforcement",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOuEnforcement = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/enforcement/{enforcementID}",
    ...options
  });
};
var updateOuEnforcement = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/enforcement/{enforcementID}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOuFundingSources = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/funding-source",
    ...options
  });
};
var getOuCloudAccessRolesByOuidAssociations = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/ou-cloud-access-role",
    ...options
  });
};
var deleteOuRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postOuAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOuUserMappingIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/permission-mapping",
    ...options
  });
};
var patchOuUserMapping = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{id}/permission-mapping",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOuCustomVariablesByOuid = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/custom-variable",
    ...options
  });
};
var deleteOuCustomVariable = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var getOuCustomVariable = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var createOrUpdateOuCustomVariable = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/custom-variable/{custom_variable_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOuLabelKeyValue = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/labels",
    ...options
  });
};
var getOuLabels = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/labels",
    ...options
  });
};
var postOuLabel = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var putOuLabels = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOuLabel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/ou/{ou_id}/labels/{label_id}",
    ...options
  });
};
var postLinkAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/payer/{id}/link-account",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postLinkAllPayerAccounts = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/payer/{id}/link-all-accounts",
    ...options
  });
};
var postLinkProjectAccount = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/payer/{id}/link-project-account",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getPayerUnlinkedAccounts = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/payer/{id}/unlinked-accounts",
    ...options
  });
};
var getPermissionSchemeIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/permission-scheme",
    ...options
  });
};
var postPermissionScheme = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/permission-scheme",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getPermissionSchemeByType = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/permission-scheme/type/{type}",
    ...options
  });
};
var deletePermissionScheme = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/permission-scheme/{id}",
    ...options
  });
};
var getPermissionSchemebyid = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/permission-scheme/{id}",
    ...options
  });
};
var updatePermissionScheme = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/permission-scheme/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project",
    ...options
  });
};
var postProject = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postProjectCloudAccessRole = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postProjectCloudAccessRoleExemption = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role-exemption",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectCloudAccessRoleExemption = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role-exemption/{id}",
    ...options
  });
};
var deleteProjectCloudAccessRole = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role/{id}",
    ...options
  });
};
var getProjectCloudAccessRole = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role/{id}",
    ...options
  });
};
var patchProjectCloudAccessRole = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectCloudAccessRoleAssociations = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postProjectCloudAccessRoleAssociations = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-cloud-access-role/{id}/association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectLineItemAll = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item",
    ...options
  });
};
var bulkeditProjectLineItem = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postProjectLineItem = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var bulkdeleteProjectLineItem = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/bulk-delete",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var bulkuploadCheckProjectLineItem = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/bulk-upload-check/{payer_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var bulkuploadProjectLineItem = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/bulk-upload/{payer_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectLineItemByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/by-project-id/{project_id}",
    ...options
  });
};
var searchProjectLineItemByProjectId = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/search",
    ...options
  });
};
var deleteProjectLineItem = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/{id}",
    ...options
  });
};
var getProjectLineItem = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/{id}",
    ...options
  });
};
var patchProjectLineItem = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-line-item/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectNoteIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-note",
    ...options
  });
};
var postProjectNote = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-note",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectNote = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project-note/{id}",
    ...options
  });
};
var postProjectWithBudgets = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/with-budget",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postProjectWithSpendPlan = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/with-spend-plan",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProject = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}",
    ...options
  });
};
var getProject = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}",
    ...options
  });
};
var patchProject = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectAccounts = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/accounts",
    ...options
  });
};
var getBudgetByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/budget",
    ...options
  });
};
var getCarsByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/cloud-access-role",
    ...options
  });
};
var getCloudRuleByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/cloud-rule",
    ...options
  });
};
var getProjectExemptions = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/cloud-rule/exemption",
    ...options
  });
};
var postProjectExemptionRequest = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/cloud-rule/exemption-request",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectExemption = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/cloud-rule/exemption/{exemptionID}",
    ...options
  });
};
var deleteArchiveAllProjectCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveAllProjectCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/check/{checkID}/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveCheckFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/check/{checkID}/finding/{findingID}/archive",
    ...options
  });
};
var postComplianceCheckSuppressAllStandardsFinding = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/check/{checkID}/finding/{findingID}/suppress",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceProjectCheckScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/check/{checkID}/schedule-scan",
    ...options
  });
};
var deleteComplianceCheckSuppressedFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/check/{checkID}/suppressed-finding/{suppressedFindingID}/un-suppress",
    ...options
  });
};
var deleteComplianceCheckArchiveAllProjectStandardFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/standard/{standardID}/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveAllProjectStandardCheckFindings = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/standard/{standardID}/check/{checkID}/archive",
    ...options
  });
};
var deleteComplianceCheckArchiveFinding = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/standard/{standardID}/check/{checkID}/finding/{findingID}/archive",
    ...options
  });
};
var postComplianceCheckSuppressedFinding = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/standard/{standardID}/check/{checkID}/finding/{findingID}/suppress",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceProjectStandardScheduleScan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/compliance/standard/{standardID}/schedule-scan",
    ...options
  });
};
var getProjectEnforcements = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/enforcement",
    ...options
  });
};
var postProjectEnforcement = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/enforcement",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectEnforcements = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/enforcement/{enforcement_id}",
    ...options
  });
};
var patchProjectEnforcements = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/enforcement/{enforcement_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectEnforcementUsers = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/enforcement/{enforcement_id}/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postProjectEnforcementUsers = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/enforcement/{enforcement_id}/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getExistingRoles = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/existing-roles",
    ...options
  });
};
var updateProjectOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectUserMappingIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/permission-mapping",
    ...options
  });
};
var patchProjectUserMapping = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/permission-mapping",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getProjectCarsByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/project-cloud-access-role",
    ...options
  });
};
var getFundingByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend-plan",
    ...options
  });
};
var patchProjectFunding = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend-plan",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getFundingTotalsByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend-plan-with-totals",
    ...options
  });
};
var getProjectRangeSpend = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend/account/range",
    ...options
  });
};
var getProjectFundingSourceSpend = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend/current-funding-source",
    ...options
  });
};
var getSpendSummary = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend/current-funding-source/summary",
    ...options
  });
};
var getProjectLifetimeSpend = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend/lifetime",
    ...options
  });
};
var getProjectMonthlySpend = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend/monthly",
    ...options
  });
};
var getProjectServiceRangeSpend = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{id}/spend/service/range",
    ...options
  });
};
var getProjectCustomVariablesByProjectId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/custom-variable",
    ...options
  });
};
var deleteProjectCustomVariable = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var getProjectCustomVariable = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/custom-variable/{custom_variable_id}",
    ...options
  });
};
var createOrUpdateProjectCustomVariable = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/custom-variable/{custom_variable_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectLabelKeyValue = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/labels",
    ...options
  });
};
var getProjectLabels = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/labels",
    ...options
  });
};
var postProjectLabel = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var putProjectLabels = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/labels",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteProjectLabel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/labels/{label_id}",
    ...options
  });
};
var getProjectLineItemByProjectIdCurrentFundingSource = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/line-item/current-funding-source",
    ...options
  });
};
var getProjectLineItemByProjectIdAugmented = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/project/{project_id}/project-line-item/augmented",
    ...options
  });
};
var exportResourceListItems = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/resource-inventory/export",
    ...options
  });
};
var searchSavedReports = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/saved-report/search",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getSavedReportById = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/saved-report/{id}",
    ...options
  });
};
var scheduleSavedReport = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/saved-report/{id}/schedule",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var manageSavedReportUsers = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/saved-report/{id}/users",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getServiceCatalogIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-catalog",
    ...options
  });
};
var postServiceCatalogPortfolio = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-catalog",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getServiceCatalog = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-catalog/{id}",
    ...options
  });
};
var patchServiceCatalogPortfolio = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-catalog/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var portfolioRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-catalog/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var portfolioAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-catalog/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getServiceControlPolicyIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy",
    ...options
  });
};
var postServiceControlPolicy = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteServiceControlPolicy = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy/{id}",
    ...options
  });
};
var getServiceControlPolicy = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy/{id}",
    ...options
  });
};
var patchServiceControlPolicy = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var serviceControlPolicyRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var serviceControlPolicyAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/service-control-policy/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var revokeAllSessions = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/session/revoke-all",
    ...options
  });
};
var postSpendReportQuery = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/spend-report",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postFundingSourceReport = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/spend-report/funding-source",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getSyncOrgAccountNames = (options) => {
  return (options?.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/sync-org-account-names",
    ...options
  });
};
var getTagValues = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/tag/key/{id}/values",
    ...options
  });
};
var getTagKeys = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/tag/keys",
    ...options
  });
};
var postTemporaryCredentials = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/temporary-credentials",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postTemporaryCredentialsRoleName = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/temporary-credentials/cloud-access-role",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postToken = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/token",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postAllocationPublicV1 = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/transaction/allocate",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postRecallPublicV1 = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/transaction/recall",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUserIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user",
    ...options
  });
};
var postUser = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAllUserAwsKeys = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-aws-key",
    ...options
  });
};
var deleteUserCloudAccessRoleAlias = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-cloud-access-role-alias",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUserCloudAccessRoleFavoritesIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-cloud-access-role-alias",
    ...options
  });
};
var upsertUserCloudAccessRoleAlias = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-cloud-access-role-alias",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUGroupIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group",
    ...options
  });
};
var postUGroup = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteUGroup = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}",
    ...options
  });
};
var getUGroup = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}",
    ...options
  });
};
var patchUGroup = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUGroupOuAppRolePaginated = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/ou-app-role",
    ...options
  });
};
var deleteUGroupOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var updateUGroupOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUGroupProjectAppRolePaginated = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/project-app-role",
    ...options
  });
};
var removeUGroupUsers = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var updateUGroupUsers = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/user",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteUGroupViewers = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/viewer",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var updateUGroupViewers = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user-group/{id}/viewer",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUser = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}",
    ...options
  });
};
var patchUser = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getUsersLinkages = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}/azure-account-linkages",
    ...options
  });
};
var getCarsByUserId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}/cloud-access-role",
    ...options
  });
};
var getUserOuAppRolePaginated = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}/ou-app-role",
    ...options
  });
};
var getUserProjectAppRolePaginated = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}/project-app-role",
    ...options
  });
};
var userRemoveUGroups = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}/user-group",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var userAddUGroups = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/user/{id}/user-group",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getWebhookIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook",
    ...options
  });
};
var postWebhook = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAccountWebhookDeleteState = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook-delete-state/{id}",
    ...options
  });
};
var endWebhookDelete = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook-delete-state/{id}/end",
    ...options
  });
};
var reattemptWebhookDelete = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook-delete-state/{id}/reattempt",
    ...options
  });
};
var resetWebhookDelete = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook-delete-state/{id}/reset",
    ...options
  });
};
var startWebhookDelete = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook-delete-state/{id}/start",
    ...options
  });
};
var webhookMigrateIfNeeded = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook/migrate",
    ...options
  });
};
var webhookpostManualRunProjectCloudRule = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook/run",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getWebhook = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook/{id}",
    ...options
  });
};
var patchWebhook = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var webhookRemoveOwners = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var webhookAddOwners = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v3/webhook/{id}/owner",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getAzureArmTemplateAllPaginated = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/azure-arm-template",
    ...options
  });
};
var getAzurePolicyPaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/azure-policy",
    ...options
  });
};
var getAzureRoleIndex2 = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/azure-role",
    ...options
  });
};
var getBillingSources = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/billing-source",
    ...options
  });
};
var getComplianceCheckPaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/check",
    ...options
  });
};
var createComplianceControl = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/control",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceControl = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/control/{id}",
    ...options
  });
};
var updateComplianceControl = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/control/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var removeComplianceControlLinks = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/control/{id}/links",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var addComplianceControlLinks = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/control/{id}/links",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postComplianceFamily = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/family",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteComplianceFamily = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/family/{id}",
    ...options
  });
};
var getComplianceFamily = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/family/{id}",
    ...options
  });
};
var updateComplianceFamily = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/family/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceFindings = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/finding",
    ...options
  });
};
var getSuppressedComplianceFindings = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/finding/suppressed",
    ...options
  });
};
var postComplianceLevel = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/level",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteComplianceLevel = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/level/{id}",
    ...options
  });
};
var getComplianceLevel = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/level/{id}",
    ...options
  });
};
var updateComplianceLevel = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/level/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceOusPaginated = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/ou",
    ...options
  });
};
var getComplianceProgramPaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program",
    ...options
  });
};
var postComplianceProgram = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteComplianceProgram = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}",
    ...options
  });
};
var getComplianceProgram = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}",
    ...options
  });
};
var updateComplianceProgram = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getComplianceControlPaginatedIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}/control",
    ...options
  });
};
var deleteComplianceControl = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}/control/{controlID}",
    ...options
  });
};
var getComplianceFamilyPaginatedIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}/family",
    ...options
  });
};
var getComplianceLevelPaginatedIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/program/{id}/level",
    ...options
  });
};
var getComplianceStandardPaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/standard",
    ...options
  });
};
var getComplianceStandardProjectPaginated = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/compliance/standard/project",
    ...options
  });
};
var getGcpRolePaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/gcp-iam-role",
    ...options
  });
};
var getIamPolicyPaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/iam-policy",
    ...options
  });
};
var postOpenId = (options) => {
  return (options?.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOpenIdAccessRule = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/access-rule/{id}",
    ...options
  });
};
var getOpenIdAccessRule = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/access-rule/{id}",
    ...options
  });
};
var patchOpenIdAccessRule = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/access-rule/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteOpenIdGroupAssociation = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/group-association/{id}",
    ...options
  });
};
var getOpenIdGroupAssociation = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/group-association/{id}",
    ...options
  });
};
var patchOpenIdGroupAssociation = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/group-association/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOpenId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/{id}",
    ...options
  });
};
var patchOpenId = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOpenIdAccessRuleIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/{id}/access-rule",
    ...options
  });
};
var postOpenIdAccessRule = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/{id}/access-rule",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOpenIdGroupAssociationIndex = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/{id}/group-association",
    ...options
  });
};
var postOpenIdGroupAssociations = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/idms/open-id/{id}/group-association",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getOuCloudAccessRoleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/ou-cloud-access-role",
    ...options
  });
};
var getProjectCloudAccessRoleIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/project-cloud-access-role",
    ...options
  });
};
var patchSpendPlanEntry = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/project/{id}/spend-plan",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var postSpendPlan = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/project/{id}/spend-plan",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var putSpendPlan = (options) => {
  return (options.client ?? client).put({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/project/{id}/spend-plan",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var deleteSpendPlanEntry = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/project/{id}/spend-plan/funding-source/{fsID}",
    ...options
  });
};
var reprioritizeSpendPlanEntry = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/project/{id}/spend-plan/reprioritize",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
var getServiceControlPolicyPaginatedIndex = (options) => {
  return (options?.client ?? client).get({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/service-control-policy",
    ...options
  });
};
var getUsersLinkagesPaginated = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "Authorization",
        type: "apiKey"
      }
    ],
    url: "/v4/user/azure-account-linkages",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  });
};
export {
  addComplianceControlLinks,
  addUuConfig,
  amiAddOwners,
  amiRemoveOwners,
  armTemplateAddOwners,
  armTemplateRemoveOwners,
  azureLinkStart,
  azureRoleAddCarRestrictedEntities,
  azureRoleAddOwners,
  azureRoleRemoveCarRestrictedEntities,
  azureRoleRemoveOwners,
  buildPartnerConsentOAuthUrl,
  bulkdeleteProjectLineItem,
  bulkeditProjectLineItem,
  bulkuploadCheckProjectLineItem,
  bulkuploadProjectLineItem,
  cftAddOwners,
  cftRemoveOwners,
  complianceCheckAddOwners,
  complianceCheckRemoveOwners,
  createComplianceControl,
  createGcpProject,
  createGcpProjectBulk,
  createGlobalCustomVariable,
  createNewSubscription,
  createOrUpdateAccountCacheCustomVariable,
  createOrUpdateAccountCustomVariable,
  createOrUpdateOuCustomVariable,
  createOrUpdateProjectCustomVariable,
  createOuEnforcement,
  deleteAccount,
  deleteAccountByAccountNumber,
  deleteAccountCache,
  deleteAccountCacheCustomVariable,
  deleteAccountCustomVariable,
  deleteAccountLabel,
  deleteAccountLabelKeyValue,
  deleteAmi,
  deleteAppApiKey,
  deleteArchiveAccountCheckFinding,
  deleteArchiveAccountCheckFindings,
  deleteArchiveAccountFinding,
  deleteArchiveAccountStandardCheckFindings,
  deleteArchiveAccountStandardFindings,
  deleteArchiveAllAccountCheckFindings,
  deleteArchiveAllProjectCheckFindings,
  deleteArmTemplate,
  deleteAwsResourceTag,
  deleteAzurePolicy,
  deleteAzurePolicyOwners,
  deleteAzureRole,
  deleteBillingRule,
  deleteBillingSource,
  deleteBillingSourceDeleteGovcloudInfo,
  deleteBudget,
  deleteByAccountNumberAccountCache,
  deleteCategoryById,
  deleteCft,
  deleteCloudRule,
  deleteCloudRuleAssociations,
  deleteCloudRuleLabel,
  deleteCloudRuleLabelKeyValue,
  deleteCloudRuleOwners,
  deleteCloudRulePostwebhook,
  deleteCloudRulePrewebhook,
  deleteComplianceCheck,
  deleteComplianceCheckArchiveAllCheckFindings,
  deleteComplianceCheckArchiveAllOuCheckFindings,
  deleteComplianceCheckArchiveAllOuFindings,
  deleteComplianceCheckArchiveAllOuStandardCheckFindings,
  deleteComplianceCheckArchiveAllOuStandardFindings,
  deleteComplianceCheckArchiveAllProjectCheckFindings,
  deleteComplianceCheckArchiveAllProjectStandardCheckFindings,
  deleteComplianceCheckArchiveAllProjectStandardFindings,
  deleteComplianceCheckArchiveAllStandardCheckFindings,
  deleteComplianceCheckArchiveAllStandardFindings,
  deleteComplianceCheckArchiveCheckFinding,
  deleteComplianceCheckArchiveFinding,
  deleteComplianceCheckArchiveOuFinding,
  deleteComplianceCheckOuSuppressedFinding,
  deleteComplianceCheckSuppressedFinding,
  deleteComplianceControl,
  deleteComplianceFamily,
  deleteComplianceLevel,
  deleteComplianceProgram,
  deleteComplianceStandard,
  deleteComplianceStandardAssociations,
  deleteComplianceStandardOwners,
  deleteDashboard,
  deleteDeleteGlobalUserMapping,
  deleteDestinationUrl,
  deleteFundingSource,
  deleteFundingSourceEnforcementUsers,
  deleteFundingSourceEnforcements,
  deleteFundingSourceLabel,
  deleteFundingSourceLabelKeyValue,
  deleteGcpRole,
  deleteGlobalCustomVariable,
  deleteIamPolicy,
  deleteIdms,
  deleteIdmsGroupAssociation,
  deleteLabel,
  deleteLabelKeyValue,
  deleteOpenIdAccessRule,
  deleteOpenIdGroupAssociation,
  deleteOuCloudAccessRole,
  deleteOuCloudAccessRoleAssociations,
  deleteOuCloudAccessRoleExemption,
  deleteOuComplianceCheckArchiveCheckFinding,
  deleteOuCustomVariable,
  deleteOuEnforcement,
  deleteOuExemption,
  deleteOuLabel,
  deleteOuLabelKeyValue,
  deleteOuRemoveOwners,
  deletePermissionScheme,
  deleteProject,
  deleteProjectCloudAccessRole,
  deleteProjectCloudAccessRoleAssociations,
  deleteProjectCloudAccessRoleExemption,
  deleteProjectCustomVariable,
  deleteProjectEnforcementUsers,
  deleteProjectEnforcements,
  deleteProjectExemption,
  deleteProjectLabel,
  deleteProjectLabelKeyValue,
  deleteProjectLineItem,
  deleteProjectNote,
  deleteScope,
  deleteScopeCriteria,
  deleteServiceAccount,
  deleteServiceAccountKey,
  deleteServiceControlPolicy,
  deleteSpendPlanEntry,
  deleteUGroup,
  deleteUGroupOwners,
  deleteUGroupViewers,
  deleteUserCloudAccessRoleAlias,
  diagnosticBillingReportList,
  disableIdms,
  duplicateDashboard,
  enableIdms,
  endWebhookDelete,
  exportLog,
  exportResourceListItems,
  fundingSourceFinancials,
  fundingSourceIndex,
  gcpIamRoleAddCarRestrictedEntities,
  gcpIamRoleAddOwners,
  gcpIamRoleRemoveCarRestrictedEntities,
  gcpIamRoleRemoveOwners,
  gcpIamRoleValidatePermissionsAndDenials,
  generateExternalIds,
  getAccount,
  getAccountByAccountNumber,
  getAccountCache,
  getAccountCacheAugmented,
  getAccountCacheConvert,
  getAccountCacheCustomVariable,
  getAccountCacheCustomVariablesByAccountCacheId,
  getAccountCacheIndex,
  getAccountCacheStatus,
  getAccountCloudRuleState,
  getAccountConfig,
  getAccountCustomVariable,
  getAccountCustomVariablesByAccountId,
  getAccountIndex,
  getAccountLabels,
  getAccountType,
  getAccountTypeIndex,
  getAccountWebhookDeleteState,
  getAccountWebhookDeleteStates,
  getAdminContactEmail,
  getAllAccountLinkages,
  getAllFeatureFlags,
  getAllGlobalCustomVariables,
  getAllGoogleAccountLinkages,
  getAllUserAwsKeys,
  getAmi,
  getAmiIndex,
  getAppApiKey,
  getAppApiKeyIndex,
  getAppConfigKeyIndex,
  getAppPermission,
  getAppPermissionIndex,
  getAppPermissionInheritance,
  getAppRoleIndex,
  getAuthTimeoutConfig,
  getAwsAccessConfig,
  getAwsAccountCreationConfig,
  getAwsResourceTagIndex,
  getAzureArmTemplate,
  getAzureArmTemplateAllPaginated,
  getAzureArmTemplateIndex,
  getAzureArmTemplateWithOwners,
  getAzurePolicyAll,
  getAzurePolicyById,
  getAzurePolicyPaginatedIndex,
  getAzureRegionById,
  getAzureRole,
  getAzureRoleIndex,
  getAzureRoleIndex2,
  getBillingAccountProjects,
  getBillingRule,
  getBillingRuleIndex,
  getBillingSourceByChildAccountName,
  getBillingSourceByChildAccountNumber,
  getBillingSourceGetGcpProjects,
  getBillingSourceGetGovcloudInfo,
  getBillingSources,
  getBrowserConfig,
  getBudget,
  getBudgetByOuid,
  getBudgetByProjectId,
  getCarsByProjectId,
  getCarsByUserId,
  getCategories,
  getCategoryById,
  getCft,
  getCftEstimateCost,
  getCftIndex,
  getCftStatusByAccountId,
  getCloudAccessRolesForAzureRole,
  getCloudProvderServiceIndex,
  getCloudPulseAccountData,
  getCloudPulseMetrics,
  getCloudPulseOverview,
  getCloudRuleByOuid,
  getCloudRuleByProjectId,
  getCloudRuleCfts,
  getCloudRuleExemptionRequest,
  getCloudRuleIndex,
  getCloudRuleLabels,
  getCloudRuleShow,
  getCloudRulesForAzureRole,
  getComplianceCheck,
  getComplianceCheckIndex,
  getComplianceCheckPaginatedIndex,
  getComplianceCheckScan,
  getComplianceCheckScanFinding,
  getComplianceCheckScanGroupIndex,
  getComplianceCheckScanGroupShow,
  getComplianceCheckState,
  getComplianceConfig,
  getComplianceControl,
  getComplianceControlPaginatedIndex,
  getComplianceFamily,
  getComplianceFamilyPaginatedIndex,
  getComplianceFindings,
  getComplianceLevel,
  getComplianceLevelPaginatedIndex,
  getComplianceOus,
  getComplianceOusPaginated,
  getComplianceProgram,
  getComplianceProgramPaginatedIndex,
  getComplianceStandard,
  getComplianceStandardIndex,
  getComplianceStandardPaginatedIndex,
  getComplianceStandardProject,
  getComplianceStandardProjectPaginated,
  getConsentLink,
  getCostSavingsConfig,
  getCostSavingsOpportunityConfig,
  getCspConsentStatus,
  getCustomBrandingConfig,
  getCustomMessagingConfig,
  getCustomWhiteLabelConfig,
  getDestinationUrls,
  getExistingRoles,
  getFeatureFlag,
  getFederatedLoginConfig,
  getForgotPasswordConfig,
  getFrequencyAll,
  getFundingByProjectId,
  getFundingSource,
  getFundingSourceEnforcements,
  getFundingSourceLabels,
  getFundingSourceUserMappingIndex,
  getFundingTotalsByProjectId,
  getGcpFoldersList,
  getGcpOrganizationsList,
  getGcpProjectsList,
  getGcpRole,
  getGcpRoleIndex,
  getGcpRolePaginatedIndex,
  getGcpVisibleOrganizationsList,
  getGetCloudProviders,
  getGlobalCustomVariable,
  getGlobalUserMappingIndex,
  getHideIntegrationsStatus,
  getIamPolicy,
  getIamPolicyIndex,
  getIamPolicyPaginatedIndex,
  getIdms,
  getIdmsGroupAssociation,
  getIdmsGroupAssociations,
  getIdmsIndex,
  getLabel,
  getLabelIndex,
  getLastBillsLoadedAt,
  getMasterKeySettings,
  getMyCars,
  getOpenId,
  getOpenIdAccessRule,
  getOpenIdAccessRuleIndex,
  getOpenIdGroupAssociation,
  getOpenIdGroupAssociationIndex,
  getOu,
  getOuCloudAccessRole,
  getOuCloudAccessRoleIndex,
  getOuCloudAccessRolesByOuidAssociations,
  getOuCustomVariable,
  getOuCustomVariablesByOuid,
  getOuEnforcements,
  getOuExemptions,
  getOuFundingSources,
  getOuIndex,
  getOuLabels,
  getOuUserMappingIndex,
  getPayerUnlinkedAccounts,
  getPermissionSchemeByType,
  getPermissionSchemeIndex,
  getPermissionSchemebyid,
  getProject,
  getProjectAccounts,
  getProjectCarsByProjectId,
  getProjectCloudAccessRole,
  getProjectCloudAccessRoleIndex,
  getProjectCustomVariable,
  getProjectCustomVariablesByProjectId,
  getProjectDatasets,
  getProjectDatasetsDeprecated,
  getProjectEnforcements,
  getProjectExemptions,
  getProjectFundingSourceSpend,
  getProjectIndex,
  getProjectLabels,
  getProjectLifetimeSpend,
  getProjectLineItem,
  getProjectLineItemAll,
  getProjectLineItemByProjectId,
  getProjectLineItemByProjectIdAugmented,
  getProjectLineItemByProjectIdCurrentFundingSource,
  getProjectMonthlySpend,
  getProjectNoteIndex,
  getProjectRangeSpend,
  getProjectServiceRangeSpend,
  getProjectUserMappingIndex,
  getReattempts,
  getSamlDebugStatus,
  getSavedReportById,
  getScopeById,
  getServiceAccount,
  getServiceAccountBillingAccounts,
  getServiceAccountKey,
  getServiceAccountProjects,
  getServiceCatalog,
  getServiceCatalogIndex,
  getServiceControlPolicy,
  getServiceControlPolicyIndex,
  getServiceControlPolicyPaginatedIndex,
  getSpecificAccountLinkage,
  getSpecificGoogleAccountLinkage,
  getSpendSummary,
  getSupportUrl,
  getSuppressedComplianceFindingReason,
  getSuppressedComplianceFindings,
  getSyncManagedAzurePolicy,
  getSyncOrgAccountNames,
  getSystemDiagnosticsConfig,
  getTagKeys,
  getTagValues,
  getUGroup,
  getUGroupIndex,
  getUGroupOuAppRolePaginated,
  getUGroupProjectAppRolePaginated,
  getUser,
  getUserAppApiKeys,
  getUserCloudAccessRoleFavoritesIndex,
  getUserIndex,
  getUserOuAppRolePaginated,
  getUserProjectAppRolePaginated,
  getUsersLinkages,
  getUsersLinkagesPaginated,
  getWebhook,
  getWebhookIndex,
  googleLinkStart,
  iamPolicyAddCarRestrictedEntities,
  iamPolicyAddOwners,
  iamPolicyRemoveCarRestrictedEntities,
  iamPolicyRemoveOwners,
  initialConfig,
  listAzureRegions,
  listScope,
  manageSavedReportUsers,
  patchAccount,
  patchAccountCache,
  patchAmi,
  patchAppApiKey,
  patchAppConfig,
  patchAppRole,
  patchArmTemplate,
  patchAzurePolicy,
  patchAzureRole,
  patchBillingRule,
  patchBillingSourceUpdateGovcloudInfo,
  patchCft,
  patchCloudRule,
  patchComplianceCheck,
  patchComplianceStandard,
  patchCustomBillingSource,
  patchDashboard,
  patchFundingSource,
  patchFundingSourceEnforcements,
  patchFundingSourceUserMapping,
  patchGcpRole,
  patchIamPolicy,
  patchIdms,
  patchIdmsGroupAssociation,
  patchLabel,
  patchOciBillingSource,
  patchOpenId,
  patchOpenIdAccessRule,
  patchOpenIdGroupAssociation,
  patchOu,
  patchOuCloudAccessRole,
  patchOuUserMapping,
  patchProject,
  patchProjectCloudAccessRole,
  patchProjectEnforcements,
  patchProjectFunding,
  patchProjectLineItem,
  patchProjectUserMapping,
  patchScope,
  patchScopeCriteria,
  patchServiceAccount,
  patchServiceAccountKey,
  patchServiceCatalogPortfolio,
  patchServiceControlPolicy,
  patchSetEnabledCloudProvider,
  patchSpendPlanEntry,
  patchUGroup,
  patchUpdateGlobalUserMapping,
  patchUser,
  patchWebhook,
  portfolioAddOwners,
  portfolioRemoveOwners,
  postAccountCacheConvert,
  postAccountCacheCreateNewAws,
  postAccountCacheCreateNewAwsDeprecated,
  postAccountCacheCreateNewAzureSubscription,
  postAccountCacheCreateNewGcp,
  postAccountLabel,
  postAccountLinkage,
  postAccountMove,
  postAllocationPublicV1,
  postAmi,
  postAppApiKey,
  postAppRole,
  postArmTemplate,
  postAwsAccount,
  postAwsAccountCacheCreate,
  postAwsBillingSource,
  postAwsResourceTag,
  postAzureAccountCacheCreate,
  postAzurePolicy,
  postAzurePolicyOwners,
  postAzureRole,
  postAzureSubscription,
  postBillingRule,
  postBillingSourceCreateGovcloudInfo,
  postBudget,
  postCategory,
  postCft,
  postCloudRule,
  postCloudRuleAssociations,
  postCloudRuleLabel,
  postCloudRuleOwners,
  postComplianceCheck,
  postComplianceCheckBulk,
  postComplianceCheckScan,
  postComplianceCheckScanArrayObject,
  postComplianceCheckScanGroup,
  postComplianceCheckScanObject,
  postComplianceCheckScheduleScan,
  postComplianceCheckSuppressAllStandardsFinding,
  postComplianceCheckSuppressOuCheckFinding,
  postComplianceCheckSuppressOuFinding,
  postComplianceCheckSuppressedFinding,
  postComplianceCloudRuleStandardScheduleScan,
  postComplianceFamily,
  postComplianceLevel,
  postComplianceOuCheckScheduleScan,
  postComplianceOuStandardScheduleScan,
  postComplianceProgram,
  postComplianceProjectCheckScheduleScan,
  postComplianceProjectStandardScheduleScan,
  postComplianceStandard,
  postComplianceStandardAssociations,
  postComplianceStandardCheckScheduleScan,
  postComplianceStandardOwners,
  postComplianceStandardScheduleScan,
  postCreateGlobalUserMapping,
  postCustomAccount,
  postCustomAccountCacheCreate,
  postCustomBillingSource,
  postDashboard,
  postDestinationUrl,
  postEndCft,
  postEndPost,
  postEndPre,
  postExemptionRequestApprove,
  postExemptionRequestDeny,
  postFailedCft,
  postFundingSource,
  postFundingSourceClone,
  postFundingSourceEnforcement,
  postFundingSourceEnforcementUsers,
  postFundingSourceLabel,
  postFundingSourceReport,
  postGcpAccountCacheCreate,
  postGcpBillingSource,
  postGcpRole,
  postGcpRoleTestOnProject,
  postGetParseParams,
  postGoogleAccountLinkage,
  postGoogleCloudAccount,
  postIamPolicy,
  postIdms,
  postIdmsGroupAssociations,
  postLabel,
  postLinkAccount,
  postLinkAllPayerAccounts,
  postLinkProjectAccount,
  postMasterKeySettings,
  postOciAccount,
  postOciAccountCacheCreate,
  postOciBillingSource,
  postOpenId,
  postOpenIdAccessRule,
  postOpenIdGroupAssociations,
  postOu,
  postOuAddOwners,
  postOuCloudAccessRole,
  postOuCloudAccessRoleAssociations,
  postOuCloudAccessRoleExemption,
  postOuExemptionRequest,
  postOuLabel,
  postPermissionScheme,
  postProject,
  postProjectCloudAccessRole,
  postProjectCloudAccessRoleAssociations,
  postProjectCloudAccessRoleExemption,
  postProjectEnforcement,
  postProjectEnforcementUsers,
  postProjectExemptionRequest,
  postProjectLabel,
  postProjectLineItem,
  postProjectNote,
  postProjectWithBudgets,
  postProjectWithSpendPlan,
  postReattemptPost,
  postReattemptPre,
  postRecallPublicV1,
  postRotateAppApiKey,
  postScope,
  postScopeCriteria,
  postServiceAccount,
  postServiceAccountJson,
  postServiceAccountKey,
  postServiceCatalogPortfolio,
  postServiceControlPolicy,
  postSpendPlan,
  postSpendReportQuery,
  postStartCft,
  postStartPost,
  postStartPre,
  postTemporaryCredentials,
  postTemporaryCredentialsRoleName,
  postTestBillingSource,
  postTestCustomBillingSource,
  postTestGcpBillingSource,
  postToken,
  postUGroup,
  postUser,
  postWebhook,
  putAccountConfig,
  putAccountLabels,
  putAdminContactEmail,
  putAuthTimeoutConfig,
  putAwsAccessConfig,
  putAwsAccountCreationConfig,
  putBrowserConfig,
  putBudget,
  putCloudRuleLabels,
  putComplianceConfig,
  putCostSavingsConfig,
  putCostSavingsOpportunityConfig,
  putCustomBrandingConfig,
  putCustomMessagingConfig,
  putCustomWhiteLabelConfig,
  putFeatureFlag,
  putFederatedLoginConfig,
  putForgotPasswordConfig,
  putFundingSourceLabels,
  putHideIntegrationsStatus,
  putNotificationCategorySetting,
  putOuLabels,
  putProjectLabels,
  putSamlDebugStatus,
  putScopeReprioritize,
  putSpendPlan,
  putSupportUrl,
  putSystemDiagnosticsConfig,
  reattemptCloudformationTemplate,
  reattemptWebhookDelete,
  refreshAzureRegions,
  refreshLicenseConfig,
  removeAccountLinkage,
  removeComplianceControlLinks,
  removeGoogleAccountLinkage,
  removeUGroupUsers,
  reprioritizeSpendPlanEntry,
  resetAccountCloudRuleState,
  resetAllComplianceChecks,
  resetCft,
  resetComplianceCheck,
  resetPost,
  resetPre,
  resetWebhookDelete,
  revertAccount,
  revertAccountByAccountNumber,
  revokeAllSessions,
  scheduleSavedReport,
  scope,
  searchProjectLineItemByProjectId,
  searchSavedReports,
  serviceAccountIndex,
  serviceControlPolicyAddOwners,
  serviceControlPolicyRemoveOwners,
  setServiceAccountNotificationSent,
  startGcProleImport,
  startWebhookDelete,
  syncAdidms,
  testMasterKeySettings,
  updateCategoryById,
  updateComplianceControl,
  updateComplianceFamily,
  updateComplianceLevel,
  updateComplianceProgram,
  updateGlobalCustomVariable,
  updateOuEnforcement,
  updatePermissionScheme,
  updateProjectOwners,
  updateUGroupOwners,
  updateUGroupUsers,
  updateUGroupViewers,
  upsertUserCloudAccessRoleAlias,
  userAddUGroups,
  userRemoveUGroups,
  webhookAddOwners,
  webhookMigrateIfNeeded,
  webhookRemoveOwners,
  webhookpostManualRunProjectCloudRule
};
