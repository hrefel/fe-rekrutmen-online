const _BASELOCAL =
    window.location.hostname === 'daftar.rsabhk.co.id'
      ? `https://${window.location.hostname}`
      : `http://localhost`,
  _BASE = _BASELOCAL,
  _IPAKTIVASI = 'http://192.168.12.3';

const isProdMode = window.location.hostname === 'daftar.rsabhk.co.id';

const _PORTPHP = '2222',
  _PORTLOCAL = isProdMode ? '' : ':3000',
  _PORTTRANSAKSI = isProdMode ? '' : ':5665',
  _PORTAKTIVASI = isProdMode ? '' : ':5775',
  // _PORTAKTIVASI = ':5775',
  _PORT = isProdMode ? '' : _PORTLOCAL;

export const BASE_URL = {
  _BASED: `${_BASE}${_PORT}/api/`,
  _BASE_ELEARNING:`${_BASE}${_PORT}/api/elearning/`,
  _BASE_TRANSAKSI: `${_BASE}${_PORTTRANSAKSI}/`,
  _PENDAFTARAN_SERVICE: `${_BASE}${_PORTTRANSAKSI}/pendaftaran-online-service/`,
  // http://192.168.12.3:5665
  _BPJS_SERVICE: `${_BASE}${_PORTTRANSAKSI}/bpjs-service/`,
  _BASE_AKTIVASI: `${_BASE}${_PORTAKTIVASI}/kehadiranpasien-service/`,
  _BASE_AUTHSERVICE: `${_BASE}${_PORTLOCAL}/auth-registrasi-service/`,
};
