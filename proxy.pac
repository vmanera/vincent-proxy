function FindProxyForURL(url, host) {
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