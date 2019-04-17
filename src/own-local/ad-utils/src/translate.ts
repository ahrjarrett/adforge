const english = {
  contact_info: 'Contact Info',
  more_info: 'More Info',
  sent_message: 'Sent Message',
  print_version: 'Print Version',
  name: 'Name',
  email: 'Email',
  your_message: 'Your message',
  send: 'Send',
  open_facebook: 'Open Facebook in a new tab',
  open_twitter: 'Open Twitter in a new tab',
  open_instagram: 'Open Instagram in a new tab',
  open_yelp: 'Open Yelp in a new tab',
  open_website: 'Open website in a new tab',
  new_email: 'Compose new email',
  call_phone: 'Call phone number',
  get_directions: 'Get directions',
  about: 'About',
  contact_by_email: 'Send an email to this business',
  error: 'Error',
  email_sent: 'Email sent',
  email_subject: 'New email from your ad on {partnerDomain}',
};

const englishUS = {};
const englishGB = {};
const englishCA = {};
const englishAU = {};
const englishNZ = {};

const german = {
  contact_info: 'Kontakt',
  more_info: 'Weitere Informationen',
  sent_message: 'Verschickte Nachricht',
  print_version: 'Druckversion',
  name: 'Name',
  email: 'Email',
  your_message: 'Deine Nachricht',
  send: 'Abschicken',
  open_facebook: 'Facebook in einem neuen Tab öffnen',
  open_twitter: 'Twitter in einem neuen Tab öffnen',
  open_instagram: 'Instagram in einem neuen Tab öffnen',
  open_yelp: 'Yelp in einem neuen Tab öffnen',
  open_website: 'Seite in einem neuen Tab öffnen',
  new_email: 'Neue Email vervasse ',
  call_phone: 'Telefonnummer anrufen',
  get_directions: 'Wegbeschreibung',
  about: 'Impressum',
  contact_by_email: 'Kontaktieren Sie uns per Email',
  error: 'Fehler',
  email_sent: 'Die E-Mail wurde gesendet',
  email_subject: 'Neue E-Mail bezüglich ihrer Anzeige bei {partnerDomain}',
};

const germanDE = {};

const dutch = {
  contact_info: 'Contactinformatie',
  more_info: 'Meer Informatie',
  sent_message: 'Verstuurd Bericht',
  print_version: 'Printversie',
  name: 'Naam',
  email: 'E-mail',
  your_message: 'Uw bericht',
  send: 'Versturen',
  open_facebook: 'Open Facebook in een nieuw tabblad',
  open_twitter: 'Open Twitter in in een nieuw tabblad',
  open_instagram: 'Open Instagram in een nieuw tabblad',
  open_yelp: 'Open Yelp in een nieuw tabblad',
  open_website: 'Open website in een nieuw tabblad',
  new_email: 'Stel nieuwe e-mail op',
  call_phone: 'Bel telefoonnummer',
  get_directions: 'Ontvang routebeschrijving',
  about: 'Over ons',
  contact_by_email: 'Stuur een e-mail naar dit bedrijf',
  error: 'Foutmelding',
  email_sent: 'E-mail verzonden!',
  email_subject: 'Nieuwe e-mail vanuit uw advertentie op {partnerDomain}',
};

const dutchNL = {};
const dutchBE = {};

const spanish = {
  contact_info: 'Información de contacto',
  more_info: 'Más información',
  sent_message: 'Mensaje enviado',
  print_version: 'Versión impresa',
  name: 'Nombre',
  email: 'Correo electrónico',
  your_message: 'Mensaje',
  send: 'Mandar',
  open_facebook: 'Abrir Facebook en una nueva pestaña',
  open_twitter: 'Abrir Twitter en una nueva pestaña',
  open_instagram: 'Abrir Instagram en una nueva pestaña',
  open_yelp: 'Abrir Yelp en una nueva pestaña',
  open_website: 'Abrir sitio web en una nueva pestaña',
  new_email: 'Escribir correo',
  call_phone: 'Llamar a teléfono',
  get_directions: 'Obtener direcciones',
  about: 'Acerca de',
  contact_by_email: 'Mandar un email a este negocio',
  error: 'Error',
  email_sent: 'Mensaje enviado!',
  email_subject: 'Nuevo correo en relación a tu anuncio en {partnerDomain}',
};

const spanishPA = {};

const translations = {
  en: english,
  'en-US': { ...english, ...englishUS },
  'en-GB': { ...english, ...englishGB },
  'en-CA': { ...english, ...englishCA },
  'en-AU': { ...english, ...englishAU },
  'en-NZ': { ...english, ...englishNZ },

  de: german,
  'de-DE': { ...german, ...germanDE },

  nl: dutch,
  'nl-NL': { ...dutch, ...dutchNL },
  'nl-BE': { ...dutch, ...dutchBE },

  es: spanish,
  'es-PA': { ...spanish, ...spanishPA },
};

export const translateString = (
  id: string,
  locale: string,
  defaultValue: string,
  options: { [variable: string]: string } = {}
) => {
  let translated: string;

  if (!translations.hasOwnProperty(locale)) {
    translated = defaultValue;
  } else if (!translations[locale].hasOwnProperty(id) || translations[locale][id] === '') {
    translated = defaultValue;
  } else {
    translated = translations[locale][id];
  }

  Object.keys(options).forEach((key: string) => {
    translated = translated.replace(`{${key}}`, options[key]);
  });

  return translated;
};
