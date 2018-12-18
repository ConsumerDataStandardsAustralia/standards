import { sampleString } from '../../src/samplers/string';

const IPV4_REGEXP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_REGEXP = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const HOSTNAME_REGEXP = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
const URI_REGEXP = new RegExp('([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&\'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?');

describe('sampleString', () => {
  let res;
  it('should return "string" by default', () => {
    res = sampleString({});
    expect(res).to.equal('string');
  });

  it('should return string of appropriate length if minLength specified', () => {
    res = sampleString({minLength: 20});
    expect(res.length).to.equal(20);
  });

  it('should return string of appropriate length if maxLength specified', () => {
    res = sampleString({maxLength: 2});
    expect(res.length).to.equal(2);
  });

  it('should return email for format email', () => {
    res = sampleString({format: 'email'});
    expect(res).to.equal('user@example.com');
  });

  it('should return email for format email', () => {
    res = sampleString({format: 'email'});
    expect(res).to.equal('user@example.com');
  });

  it('should return password for format password', () => {
    res = sampleString({format: 'password'});
    expect(res).to.equal('pa$$word');
  });

  it('should return password of appropriate length if minLength specified', () => {
    res = sampleString({format: 'password', minLength: 20});
    expect(res.substring(0, 9)).to.equal('pa$$word_');
    expect(res.length).to.equal(20);
  });

  it('should return date string for format date', () => {
    res = sampleString({format: 'date'});
    expect(Date.parse(res)).not.to.be.NaN;
  });

  it('should return date string for format date', () => {
    res = sampleString({format: 'date-time'});
    expect(Date.parse(res)).not.to.be.NaN;
  });

  it('should throw if incorrect maxLength applied to date-time', () => {
    res = () => sampleString({format: 'date-time', maxLength: 5});
    expect(res).to.throw();
  });

  it('should throw if incorrect minLength applied to date-time', () => {
    res = () => sampleString({format: 'date-time', minLength: 100});
    expect(res).to.throw();
  });

  it('should return ip for ipv4 format', () => {
    res = sampleString({format: 'ipv4'});
    expect(res).to.match(IPV4_REGEXP);
  });

  it('should return ipv6 for ipv6 format', () => {
    res = sampleString({format: 'ipv6'});
    expect(res).to.match(IPV6_REGEXP);
  });

  it('should return vaild hostname for hostname format', () => {
    res = sampleString({format: 'hostname'});
    expect(res).to.match(HOSTNAME_REGEXP);
  });

  it('should return vaild URI for uri format', () => {
    res = sampleString({format: 'uri'});
    expect(res).to.match(URI_REGEXP);
  });
});
