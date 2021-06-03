const REQUIRED_ERROR = (value) => `${value} Alanı Zorunludur`
const EMAIL_UNIQUE_ERROR = (email) => `Girilen ${email} Email Adresi Sistemimizde Zaten Kayıtlı`;
const PLEASE_PROVIDE_EMAIL = "Geçersiz Email Adresi";

module.exports = {
    REQUIRED_ERROR,
    EMAIL_UNIQUE_ERROR,
    PLEASE_PROVIDE_EMAIL
}
