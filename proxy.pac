function FindProxyForURL(url, host) {
  
  const AWS_PROXY_STRING = "PROXY proxy.aws.hbf.com.au:8080"
  // BEGIN: Memberportal proxy
  if (shExpMatch(host, "apicsit1.hbf.com.au")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.execute-api.ap-southeast-2.amazonaws.com")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.digi-x-dev.api.hbf.com.au")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.digi-x-nonprod.api.hbf.com.au")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.digi-x-staging.api.hbf.com.au")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.digi-x-prod.api.hbf.com.au")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.sitecore.nonprod.aws.hbf.com.au")) return AWS_PROXY_STRING;
  if (shExpMatch(host, "*.prod.sitecore.prod.aws.hbf.com.au")) return AWS_PROXY_STRING;
  // END: Memberportal proxy

  if (
    shExpMatch(host, "*.sitecore.*.hbf.com.au") ||
    shExpMatch(host, "*.api.hbf.com.au") ||
    shExpMatch(host, "*.dev.hbf.com.au") ||
    shExpMatch(host, "*.dev.aws.hbf.com.au") ||
    shExpMatch(host, "staging.*.hbf.com.au") ||
    shExpMatch(host, "*.staging.*.hbf.com.au") ||
    shExpMatch(host, "my.hbf.com.au") ||
    shExpMatch(host, "web.hbf.com.au") ||
    shExpMatch(host, "*.sitecore-staging.aws.hbf.com.au/") ||
    shExpMatch(host, "*.sitecore-prod.aws.hbf.com.au/")
  ) {
    return "PROXY proxy.aws.hbf.com.au:8080";
  }

  return "DIRECT";
}