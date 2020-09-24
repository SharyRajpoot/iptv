
let helper = {}

const country = {
    'AF' : {
        name: 'Afghanistan',
    },
    'AX' : {
        name: 'Aland Islands',
    },
    'AL' : {
        name: 'Albania',
    },
    'DZ' : {
        name: 'Algeria',
    },
    'AS' : {
        name: 'American Samoa',
    },
    'AD' : {
        name: 'Andorra',
    },
    'AO' : {
        name: 'Angola',
    },
    'AI' : {
        name: 'Anguilla',
    },
    'AQ' : {
        name: 'Antarctica',
    },
    'AG' : {
        name: 'Antigua And Barbuda',
    },
    'AR' : {
        name: 'Argentina',
    },
    'AM' : {
        name: 'Armenia',
    },
    'AW' : {
        name: 'Aruba',
    },
    'AU' : {
        name: 'Australia',
    },
    'AT' : {
        name: 'Austria',
    },
    'AZ' : {
        name: 'Azerbaijan',
    },
    'BS' : {
        name: 'Bahamas',
    },
    'BH' : {
        name: 'Bahrain',
    },
    'BD' : {
        name: 'Bangladesh',
    },
    'BB' : {
        name: 'Barbados',
    },
    'BY' : {
        name: 'Belarus',
    },
    'BE' : {
        name: 'Belgium',
    },
    'BZ' : {
        name: 'Belize',
    },
    'BJ' : {
        name: 'Benin',
    },
    'BM' : {
        name: 'Bermuda',
    },
    'BT' : {
        name: 'Bhutan',
    },
    'BO' : {
        name: 'Bolivia',
    },
    'BA' : {
        name: 'Bosnia And Herzegovina',
    },
    'BW' : {
        name: 'Botswana',
    },
    'BV' : {
        name: 'Bouvet Island',
    },
    'BR' : {
        name: 'Brazil',
    },
    'IO' : {
        name: 'British Indian Ocean Territory',
    },
    'BN' : {
        name: 'Brunei Darussalam',
    },
    'BG' : {
        name: 'Bulgaria',
    },
    'BF' : {
        name: 'Burkina Faso',
    },
    'BI' : {
        name: 'Burundi',
    },
    'KH' : {
        name: 'Cambodia',
    },
    'CM' : {
        name: 'Cameroon',
    },
    'CA' : {
        name: 'Canada',
    },
    'CV' : {
        name: 'Cape Verde',
    },
    'KY' : {
        name: 'Cayman Islands',
    },
    'CF' : {
        name: 'Central African Republic',
    },
    'TD' : {
        name: 'Chad',
    },
    'CL' : {
        name: 'Chile',
    },
    'CN' : {
        name: 'China',
    },
    'CX' : {
        name: 'Christmas Island',
    },
    'CC' : {
        name: 'Cocos (Keeling) Islands',
    },
    'CO' : {
        name: 'Colombia',
    },
    'KM' : {
        name: 'Comoros',
    },
    'CG' : {
        name: 'Congo',
    },
    'CD' : {
        name: 'Congo, Democratic Republic',
    },
    'CK' : {
        name: 'Cook Islands',
    },
    'CR' : {
        name: 'Costa Rica',
    },
    'CI' : {
        name: 'Cote D\'Ivoire',
    },
    'HR' : {
        name: 'Croatia',
    },
    'CU' : {
        name: 'Cuba',
    },
    'CY' : {
        name: 'Cyprus',
    },
    'CZ' : {
        name: 'Czech Republic',
    },
    'DK' : {
        name: 'Denmark',
    },
    'DJ' : {
        name: 'Djibouti',
    },
    'DM' : {
        name: 'Dominica',
    },
    'DO' : {
        name: 'Dominican Republic',
    },
    'EC' : {
        name: 'Ecuador',
    },
    'EG' : {
        name: 'Egypt',
    },
    'SV' : {
        name: 'El Salvador',
    },
    'GQ' : {
        name: 'Equatorial Guinea',
    },
    'ER' : {
        name: 'Eritrea',
    },
    'EE' : {
        name: 'Estonia',
    },
    'ET' : {
        name: 'Ethiopia',
    },
    'FK' : {
        name: 'Falkland Islands (Malvinas)',
    },
    'FO' : {
        name: 'Faroe Islands',
    },
    'FJ' : {
        name: 'Fiji',
    },
    'FI' : {
        name: 'Finland',
    },
    'FR' : {
        name: 'France',
    },
    'GF' : {
        name: 'French Guiana',
    },
    'PF' : {
        name: 'French Polynesia',
    },
    'TF' : {
        name: 'French Southern Territories',
    },
    'GA' : {
        name: 'Gabon',
    },
    'GM' : {
        name: 'Gambia',
    },
    'GE' : {
        name: 'Georgia',
    },
    'DE' : {
        name: 'Germany',
    },
    'GH' : {
        name: 'Ghana',
    },
    'GI' : {
        name: 'Gibraltar',
    },
    'GR' : {
        name: 'Greece',
    },
    'GL' : {
        name: 'Greenland',
    },
    'GD' : {
        name: 'Grenada',
    },
    'GP' : {
        name: 'Guadeloupe',
    },
    'GU' : {
        name: 'Guam',
    },
    'GT' : {
        name: 'Guatemala',
    },
    'GG' : {
        name: 'Guernsey',
    },
    'GN' : {
        name: 'Guinea',
    },
    'GW' : {
        name: 'Guinea-Bissau',
    },
    'GY' : {
        name: 'Guyana',
    },
    'HT' : {
        name: 'Haiti',
    },
    'HM' : {
        name: 'Heard Island & Mcdonald Islands',
    },
    'VA' : {
        name: 'Holy See (Vatican City State)',
    },
    'HN' : {
        name: 'Honduras',
    },
    'HK' : {
        name: 'Hong Kong',
    },
    'HU' : {
        name: 'Hungary',
    },
    'IS' : {
        name: 'Iceland',
    },
    'IN' : {
        name: 'India',
    },
    'ID' : {
        name: 'Indonesia',
    },
    'IR' : {
        name: 'Iran, Islamic Republic Of',
    },
    'IQ' : {
        name: 'Iraq',
    },
    'IE' : {
        name: 'Ireland',
    },
    'IM' : {
        name: 'Isle Of Man',
    },
    'IL' : {
        name: 'Israel',
    },
    'IT' : {
        name: 'Italy',
    },
    'JM' : {
        name: 'Jamaica',
    },
    'JP' : {
        name: 'Japan',
    },
    'JE' : {
        name: 'Jersey',
    },
    'JO' : {
        name: 'Jordan',
    },
    'KZ' : {
        name: 'Kazakhstan',
    },
    'KE' : {
        name: 'Kenya',
    },
    'KI' : {
        name: 'Kiribati',
    },
    'KR' : {
        name: 'Korea',
    },
    'KW' : {
        name: 'Kuwait',
    },
    'KG' : {
        name: 'Kyrgyzstan',
    },
    'LA' : {
        name: 'Lao People\'s Democratic Republic',
    },
    'LV' : {
        name: 'Latvia',
    },
    'LB' : {
        name: 'Lebanon',
    },
    'LS' : {
        name: 'Lesotho',
    },
    'LR' : {
        name: 'Liberia',
    },
    'LY' : {
        name: 'Libyan Arab Jamahiriya',
    },
    'LI' : {
        name: 'Liechtenstein',
    },
    'LT' : {
        name: 'Lithuania',
    },
    'LU' : {
        name: 'Luxembourg',
    },
    'MO' : {
        name: 'Macao',
    },
    'MK' : {
        name: 'Macedonia',
    },
    'MG' : {
        name: 'Madagascar',
    },
    'MW' : {
        name: 'Malawi',
    },
    'MY' : {
        name: 'Malaysia',
    },
    'MV' : {
        name: 'Maldives',
    },
    'ML' : {
        name: 'Mali',
    },
    'MT' : {
        name: 'Malta',
    },
    'MH' : {
        name: 'Marshall Islands',
    },
    'MQ' : {
        name: 'Martinique',
    },
    'MR' : {
        name: 'Mauritania',
    },
    'MU' : {
        name: 'Mauritius',
    },
    'YT' : {
        name: 'Mayotte',
    },
    'MX' : {
        name: 'Mexico',
    },
    'FM' : {
        name: 'Micronesia, Federated States Of',
    },
    'MD' : {
        name: 'Moldova',
    },
    'MC' : {
        name: 'Monaco',
    },
    'MN' : {
        name: 'Mongolia',
    },
    'ME' : {
        name: 'Montenegro',
    },
    'MS' : {
        name: 'Montserrat',
    },
    'MA' : {
        name: 'Morocco',
    },
    'MZ' : {
        name: 'Mozambique',
    },
    'MM' : {
        name: 'Myanmar',
    },
    'NA' : {
        name: 'Namibia',
    },
    'NR' : {
        name: 'Nauru',
    },
    'NP' : {
        name: 'Nepal',
    },
    'NL' : {
        name: 'Netherlands',
    },
    'AN' : {
        name: 'Netherlands Antilles',
    },
    'NC' : {
        name: 'New Caledonia',
    },
    'NZ' : {
        name: 'New Zealand',
    },
    'NI' : {
        name: 'Nicaragua',
    },
    'NE' : {
        name: 'Niger',
    },
    'NG' : {
        name: 'Nigeria',
    },
    'NU' : {
        name: 'Niue',
    },
    'NF' : {
        name: 'Norfolk Island',
    },
    'MP' : {
        name: 'Northern Mariana Islands',
    },
    'NO' : {
        name: 'Norway',
    },
    'OM' : {
        name: 'Oman',
    },
    'PK' : {
        name: 'Pakistan',
    },
    'PW' : {
        name: 'Palau',
    },
    'PS' : {
        name: 'Palestinian Territory, Occupied',
    },
    'PA' : {
        name: 'Panama',
    },
    'PG' : {
        name: 'Papua New Guinea',
    },
    'PY' : {
        name: 'Paraguay',
    },
    'PE' : {
        name: 'Peru',
    },
    'PH' : {
        name: 'Philippines',
    },
    'PN' : {
        name: 'Pitcairn',
    },
    'PL' : {
        name: 'Poland',
    },
    'PT' : {
        name: 'Portugal',
    },
    'PR' : {
        name: 'Puerto Rico',
    },
    'QA' : {
        name: 'Qatar',
    },
    'RE' : {
        name: 'Reunion',
    },
    'RO' : {
        name: 'Romania',
    },
    'RU' : {
        name: 'Russian Federation',
    },
    'RW' : {
        name: 'Rwanda',
    },
    'BL' : {
        name: 'Saint Barthelemy',
    },
    'SH' : {
        name: 'Saint Helena',
    },
    'KN' : {
        name: 'Saint Kitts And Nevis',
    },
    'LC' : {
        name: 'Saint Lucia',
    },
    'MF' : {
        name: 'Saint Martin',
    },
    'PM' : {
        name: 'Saint Pierre And Miquelon',
    },
    'VC' : {
        name: 'Saint Vincent And Grenadines',
    },
    'WS' : {
        name: 'Samoa',
    },
    'SM' : {
        name: 'San Marino',
    },
    'ST' : {
        name: 'Sao Tome And Principe',
    },
    'SA' : {
        name: 'Saudi Arabia',
    },
    'SN' : {
        name: 'Senegal',
    },
    'RS' : {
        name: 'Serbia',
    },
    'SC' : {
        name: 'Seychelles',
    },
    'SL' : {
        name: 'Sierra Leone',
    },
    'SG' : {
        name: 'Singapore',
    },
    'SK' : {
        name: 'Slovakia',
    },
    'SI' : {
        name: 'Slovenia',
    },
    'SB' : {
        name: 'Solomon Islands',
    },
    'SO' : {
        name: 'Somalia',
    },
    'ZA' : {
        name: 'South Africa',
    },
    'GS' : {
        name: 'South Georgia And Sandwich Isl.',
    },
    'ES' : {
        name: 'Spain',
    },
    'LK' : {
        name: 'Sri Lanka',
    },
    'SD' : {
        name: 'Sudan',
    },
    'SR' : {
        name: 'Suriname',
    },
    'SJ' : {
        name: 'Svalbard And Jan Mayen',
    },
    'SZ' : {
        name: 'Swaziland',
    },
    'SE' : {
        name: 'Sweden',
    },
    'CH' : {
        name: 'Switzerland',
    },
    'SY' : {
        name: 'Syrian Arab Republic',
    },
    'TW' : {
        name: 'Taiwan',
    },
    'TJ' : {
        name: 'Tajikistan',
    },
    'TZ' : {
        name: 'Tanzania',
    },
    'TH' : {
        name: 'Thailand',
    },
    'TL' : {
        name: 'Timor-Leste',
    },
    'TG' : {
        name: 'Togo',
    },
    'TK' : {
        name: 'Tokelau',
    },
    'TO' : {
        name: 'Tonga',
    },
    'TT' : {
        name: 'Trinidad And Tobago',
    },
    'TN' : {
        name: 'Tunisia',
    },
    'TR' : {
        name: 'Turkey',
    },
    'TM' : {
        name: 'Turkmenistan',
    },
    'TC' : {
        name: 'Turks And Caicos Islands',
    },
    'TV' : {
        name: 'Tuvalu',
    },
    'UG' : {
        name: 'Uganda',
    },
    'UA' : {
        name: 'Ukraine',
    },
    'AE' : {
        name: 'United Arab Emirates',
    },
    'GB' : {
        name: 'United Kingdom',
    },
    'US' : {
        name: 'United States',
    },
    'UM' : {
        name: 'United States Outlying Islands',
    },
    'UY' : {
        name: 'Uruguay',
    },
    'UZ' : {
        name: 'Uzbekistan',
    },
    'VU' : {
        name: 'Vanuatu',
    },
    'VE' : {
        name: 'Venezuela',
    },
    'VN' : {
        name: 'Viet Nam',
    },
    'VG' : {
        name: 'Virgin Islands, British',
    },
    'VI' : {
        name: 'Virgin Islands, U.S.',
    },
    'WF' : {
        name: 'Wallis And Futuna',
    },
    'EH' : {
        name: 'Western Sahara',
    },
    'YE' : {
        name: 'Yemen',
    },
    'ZM' : {
        name: 'Zambia',
    },
    'ZW' : {
        name: 'Zimbabwe'
    },
}

const countryLanguageAlpha2 = {
    'aa': {
        name: 'Afar'
    },
    'ab': {
        name: 'Abkhazian'
    },
    'af': {
        name: 'Afrikaans'
    },
    'ak': {
        name: 'Akan'
    },
    'sq': {
        name: 'Albanian'
    },
    'am': {
        name: 'Amharic'
    },
    'ar': {
        name: 'Arabic'
    },
    'an': {
        name: 'Aragonese'
    },
    'hy': {
        name: 'Armenian'
    },
    'as': {
        name: 'Assamese'
    },
    'av': {
        name: 'Avaric'
    },
    'ae': {
        name: 'Avestan'
    },
    'ay': {
        name: 'Aymara'
    },
    'az': {
        name: 'Azerbaijani'
    },
    'ba': {
        name: 'Bashkir'
    },
    'bm': {
        name: 'Bambara'
    },
    'eu': {
        name: 'Basque'
    },
    'be': {
        name: 'Belarusian'
    },
    'bn': {
        name: 'Bengali'
    },
    'bh': {
        name: 'Bihari languages'
    },
    'bi': {
        name: 'Bislama'
    },
    'bs': {
        name: 'Bosnian'
    },
    'br': {
        name: 'Breton'
    },
    'bg': {
        name: 'Bulgarian'
    },
    'my': {
        name: 'Burmese'
    },
    'ca': {
        name: 'Catalan; Valencian'
    },
    'ch': {
        name: 'Chamorro'
    },
    'ce': {
        name: 'Chechen'
    },
    'zh': {
        name: 'Chinese'
    },
    'cu': {
        name: 'Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic'
    },
    'cv': {
        name: 'Chuvash'
    },
    'kw': {
        name: 'Cornish'
    },
    'co': {
        name: 'Corsican'
    },
    'cr': {
        name: 'Cree'
    },
    'cs': {
        name: 'Czech'
    },
    'da': {
        name: 'Danish'
    },
    'dv': {
        name: 'Divehi; Dhivehi; Maldivian'
    },
    'nl': {
        name: 'Dutch; Flemish'
    },
    'dz': {
        name: 'Dzongkha'
    },
    'en': {
        name: 'English'
    },
    'eo': {
        name: 'Esperanto'
    },
    'et': {
        name: 'Estonian'
    },
    'ee': {
        name: 'Ewe'
    },
    'fo': {
        name: 'Faroese'
    },
    'fj': {
        name: 'Fijian'
    },
    'fi': {
        name: 'Finnish'
    },
    'fr': {
        name: 'French'
    },
    'fy': {
        name: 'Western Frisian'
    },
    'ff': {
        name: 'Fulah'
    },
    'ka': {
        name: 'Georgian'
    },
    'de': {
        name: 'German'
    },
    'gd': {
        name: 'Gaelic; Scottish Gaelic'
    },
    'ga': {
        name: 'Irish'
    },
    'gl': {
        name: 'Galician'
    },
    'gv': {
        name: 'Manx'
    },
    'el': {
        name: 'Greek, Modern (1453-)'
    },
    'gn': {
        name: 'Guarani'
    },
    'gu': {
        name: 'Gujarati'
    },
    'ht': {
        name: 'Haitian; Haitian Creole'
    },
    'ha': {
        name: 'Hausa'
    },
    'he': {
        name: 'Hebrew'
    },
    'hz': {
        name: 'Herero'
    },
    'hi': {
        name: 'Hindi'
    },
    'ho': {
        name: 'Hiri Motu'
    },
    'hr': {
        name: 'Croatian'
    },
    'hu': {
        name: 'Hungarian'
    },
    'ig': {
        name: 'Igbo'
    },
    'is': {
        name: 'Icelandic'
    },
    'io': {
        name: 'Ido'
    },
    'ii': {
        name: 'Sichuan Yi; Nuosu'
    },
    'iu': {
        name: 'Inuktitut'
    },
    'ie': {
        name: 'Interlingue; Occidental'
    },
    'ia': {
        name: 'Interlingua (International Auxiliary Language Association)'
    },
    'id': {
        name: 'Indonesian'
    },
    'ik': {
        name: 'Inupiaq'
    },
    'it': {
        name: 'Italian'
    },
    'jv': {
        name: 'Javanese'
    },
    'ja': {
        name: 'Japanese'
    },
    'kl': {
        name: 'Kalaallisut; Greenlandic'
    },
    'kn': {
        name: 'Kannada'
    },
    'ks': {
        name: 'Kashmiri'
    },
    'kr': {
        name: 'Kanuri'
    },
    'kk': {
        name: 'Kazakh'
    },
    'km': {
        name: 'Central Khmer'
    },
    'ki': {
        name: 'Kikuyu; Gikuyu'
    },
    'rw': {
        name: 'Kinyarwanda'
    },
    'ky': {
        name: 'Kirghiz; Kyrgyz'
    },
    'kv': {
        name: 'Komi'
    },
    'kg': {
        name: 'Kongo'
    },
    'ko': {
        name: 'Korean'
    },
    'kj': {
        name: 'Kuanyama; Kwanyama'
    },
    'ku': {
        name: 'Kurdish'
    },
    'lo': {
        name: 'Lao'
    },
    'la': {
        name: 'Latin'
    },
    'lv': {
        name: 'Latvian'
    },
    'li': {
        name: 'Limburgan; Limburger; Limburgish'
    },
    'ln': {
        name: 'Lingala'
    },
    'lt': {
        name: 'Lithuanian'
    },
    'lb': {
        name: 'Luxembourgish; Letzeburgesch'
    },
    'lu': {
        name: 'Luba-Katanga'
    },
    'lg': {
        name: 'Ganda'
    },
    'mk': {
        name: 'Macedonian'
    },
    'mh': {
        name: 'Marshallese'
    },
    'ml': {
        name: 'Malayalam'
    },
    'mi': {
        name: 'Maori'
    },
    'mr': {
        name: 'Marathi'
    },
    'ms': {
        name: 'Malay'
    },
    'mg': {
        name: 'Malagasy'
    },
    'mt': {
        name: 'Maltese'
    },
    'mn': {
        name: 'Mongolian'
    },
    'na': {
        name: 'Nauru'
    },
    'nv': {
        name: 'Navajo; Navaho'
    },
    'nr': {
        name: 'Ndebele, South; South Ndebele'
    },
    'nd': {
        name: 'Ndebele, North; North Ndebele'
    },
    'ng': {
        name: 'Ndonga'
    },
    'ne': {
        name: 'Nepali'
    },
    'nn': {
        name: 'Norwegian Nynorsk; Nynorsk, Norwegian'
    },
    'nb': {
        name: 'Bokmål, Norwegian; Norwegian Bokmål'
    },
    'no': {
        name: 'Norwegian'
    },
    'ny': {
        name: 'Chichewa; Chewa; Nyanja'
    },
    'oc': {
        name: 'Occitan (post 1500); Provençal'
    },
    'oj': {
        name: 'Ojibwa'
    },
    'or': {
        name: 'Oriya'
    },
    'om': {
        name: 'Oromo'
    },
    'os': {
        name: 'Ossetian; Ossetic'
    },
    'pa': {
        name: 'Panjabi; Punjabi'
    },
    'fa': {
        name: 'Persian'
    },
    'pi': {
        name: 'Pali'
    },
    'pl': {
        name: 'Polish'
    },
    'pt': {
        name: 'Portuguese'
    },
    'ps': {
        name: 'Pushto; Pashto'
    },
    'qu': {
        name: 'Quechua'
    },
    'rm': {
        name: 'Romansh'
    },
    'ro': {
        name: 'Romanian; Moldavian; Moldovan'
    },
    'rn': {
        name: 'Rundi'
    },
    'ru': {
        name: 'Russian'
    },
    'sg': {
        name: 'Sango'
    },
    'sa': {
        name: 'Sanskrit'
    },
    'si': {
        name: 'Sinhala; Sinhalese'
    },
    'sk': {
        name: 'Slovak'
    },
    'sl': {
        name: 'Slovenian'
    },
    'se': {
        name: 'Northern Sami'
    },
    'sm': {
        name: 'Samoan'
    },
    'sn': {
        name: 'Shona'
    },
    'sd': {
        name: 'Sindhi'
    },
    'so': {
        name: 'Somali'
    },
    'st': {
        name: 'Sotho, Southern'
    },
    'es': {
        name: 'Spanish; Castilian'
    },
    'sc': {
        name: 'Sardinian'
    },
    'sr': {
        name: 'Serbian'
    },
    'ss': {
        name: 'Swati'
    },
    'su': {
        name: 'Sundanese'
    },
    'sw': {
        name: 'Swahili'
    },
    'sv': {
        name: 'Swedish'
    },
    'ty': {
        name: 'Tahitian'
    },
    'ta': {
        name: 'Tamil'
    },
    'tt': {
        name: 'Tatar'
    },
    'te': {
        name: 'Telugu'
    },
    'tg': {
        name: 'Tajik'
    },
    'tl': {
        name: 'Tagalog'
    },
    'th': {
        name: 'Thai'
    },
    'bo': {
        name: 'Tibetan'
    },
    'ti': {
        name: 'Tigrinya'
    },
    'to': {
        name: 'Tonga (Tonga Islands)'
    },
    'tn': {
        name: 'Tswana'
    },
    'ts': {
        name: 'Tsonga'
    },
    'tk': {
        name: 'Turkmen'
    },
    'tr': {
        name: 'Turkish'
    },
    'tw': {
        name: 'Twi'
    },
    'ug': {
        name: 'Uighur; Uyghur'
    },
    'uk': {
        name: 'Ukrainian'
    },
    'ur': {
        name: 'Urdu'
    },
    'uz': {
        name: 'Uzbek'
    },
    've': {
        name: 'Venda'
    },
    'vi': {
        name: 'Vietnamese'
    },
    'vo': {
        name: 'Volapük'
    },
    'cy': {
        name: 'Welsh'
    },
    'wa': {
        name: 'Walloon'
    },
    'wo': {
        name: 'Wolof'
    },
    'xh': {
        name: 'Xhosa'
    },
    'yi': {
        name: 'Yiddish'
    },
    'yo': {
        name: 'Yoruba'
    },
    'za': {
        name: 'Zhuang; Chuang'
    },
    'zu': {
        name: 'Zulu'
    }
}

const countryLanguageAlpha3 = {
    'aar': {
        name: 'Afar'
    },
    'abk': {
        name: 'Abkhazian'
    },
    'afr': {
        name: 'Afrikaans'
    },
    'aka': {
        name: 'Akan'
    },
    'alb': {
        name: 'Albanian'
    },
    'sqi': {
        name: 'Albanian'
    },
    'amh': {
        name: 'Amharic'
    },
    'ara': {
        name: 'Arabic'
    },
    'arg': {
        name: 'Aragonese'
    },
    'arm': {
        name: 'Armenian'
    },
    'hye': {
        name: 'Armenian'
    },
    'asm': {
        name: 'Assamese'
    },
    'ava': {
        name: 'Avaric'
    },
    'ave': {
        name: 'Avestan'
    },
    'aym': {
        name: 'Aymara'
    },
    'aze': {
        name: 'Azerbaijani'
    },
    'bak': {
        name: 'Bashkir'
    },
    'bam': {
        name: 'Bambara'
    },
    'baq': {
        name: 'Basque'
    },
    'bel': {
        name: 'Belarusian'
    },
    'ben': {
        name: 'Bengali'
    },
    'bih': {
        name: 'Bihari languages'
    },
    'bis': {
        name: 'Bislama'
    },
    'bos': {
        name: 'Bosnian'
    },
    'bre': {
        name: 'Breton'
    },
    'bul': {
        name: 'Bulgarian'
    },
    'bur': {
        name: 'Burmese'
    },
    'mya': {
        name: 'Burmese'
    },
    'cat': {
        name: 'Catalan; Valencian'
    },
    'cha': {
        name: 'Chamorro'
    },
    'che': {
        name: 'Chechen'
    },
    'chi': {
        name: 'Chinese'
    },
    'zho': {
        name: 'Chinois'
    },
    'chu': {
        name: 'Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic'
    },
    'chv': {
        name: 'Chuvash'
    },
    'yue': {
        name: 'Yue Chinese'
    },
    'cor': {
        name: 'Cornish'
    },
    'cos': {
        name: 'Corsican'
    },
    'cre': {
        name: 'Cree'
    },
    'cze': {
        name: 'Czech'
    },
    'ces': {
        name: 'Czech'
    },
    'dan': {
        name: 'Danish'
    },
    'div': {
        name: 'Divehi; Dhivehi; Maldivian'
    },
    'dut': {
        name: 'Dutch; Flemish'
    },
    'nld': {
        name: 'Dutch; Flemish'
    },
    'dzo': {
        name: 'Dzongkha'
    },
    'eng': {
        name: 'English'
    },
    'epo': {
        name: 'Esperanto'
    },
    'est': {
        name: 'Estonian'
    },
    'ewe': {
        name: 'Ewe'
    },
    'fao': {
        name: 'Faroese'
    },
    'fij': {
        name: 'Fijian'
    },
    'fin': {
        name: 'Finnish'
    },
    'fre': {
        name: 'French'
    },
    'fra': {
        name: 'French'
    },
    'fry': {
        name: 'Western Frisian'
    },
    'ful': {
        name: 'Fulah'
    },
    'geo': {
        name: 'Georgian'
    },
    'kat': {
        name: 'Georgian'
    },
    'ger': {
        name: 'German'
    },
    'deu': {
        name: 'German'
    },
    'gla': {
        name: 'Gaelic; Scottish Gaelic'
    },
    'ell': {
        name: 'Greek Modern'
    },
    'gle': {
        name: 'Irish'
    },
    'glg': {
        name: 'Galician'
    },
    'glv': {
        name: 'Manx'
    },
    'gre': {
        name: 'Greek, Modern (1453-)'
    },
    'grn': {
        name: 'Guarani'
    },
    'guj': {
        name: 'Gujarati'
    },
    'hat': {
        name: 'Haitian; Haitian Creole'
    },
    'hau': {
        name: 'Hausa'
    },
    'heb': {
        name: 'Hebrew'
    },
    'her': {
        name: 'Herero'
    },
    'hin': {
        name: 'Hindi'
    },
    'hmo': {
        name: 'Hiri Motu'
    },
    'hrv': {
        name: 'Croatian'
    },
    'hun': {
        name: 'Hungarian'
    },
    'ibo': {
        name: 'Igbo'
    },
    'ice': {
        name: 'Icelandic'
    },
    'isl': {
        name: 'Icelandic'
    },
    'ido': {
        name: 'Ido'
    },
    'iii': {
        name: 'Sichuan Yi; Nuosu'
    },
    'iku': {
        name: 'Inuktitut'
    },
    'ile': {
        name: 'Interlingue; Occidental'
    },
    'ina': {
        name: 'Interlingua (International Auxiliary Language Association)'
    },
    'ind': {
        name: 'Indonesian'
    },
    'ipk': {
        name: 'Inupiaq'
    },
    'ita': {
        name: 'Italian'
    },
    'jav': {
        name: 'Javanese'
    },
    'jpn': {
        name: 'Japanese'
    },
    'kal': {
        name: 'Kalaallisut; Greenlandic'
    },
    'kan': {
        name: 'Kannada'
    },
    'kas': {
        name: 'Kashmiri'
    },
    'kau': {
        name: 'Kanuri'
    },
    'kaz': {
        name: 'Kazakh'
    },
    'khm': {
        name: 'Central Khmer'
    },
    'kik': {
        name: 'Kikuyu; Gikuyu'
    },
    'kin': {
        name: 'Kinyarwanda'
    },
    'kir': {
        name: 'Kirghiz; Kyrgyz'
    },
    'kom': {
        name: 'Komi'
    },
    'kon': {
        name: 'Kongo'
    },
    'kor': {
        name: 'Korean'
    },
    'kua': {
        name: 'Kuanyama; Kwanyama'
    },
    'kur': {
        name: 'Kurdish'
    },
    'lao': {
        name: 'Lao'
    },
    'lat': {
        name: 'Latin'
    },
    'lav': {
        name: 'Latvian'
    },
    'lim': {
        name: 'Limburgan; Limburger; Limburgish'
    },
    'lin': {
        name: 'Lingala'
    },
    'lit': {
        name: 'Lithuanian'
    },
    'ltz': {
        name: 'Luxembourgish; Letzeburgesch'
    },
    'lub': {
        name: 'Luba-Katanga'
    },
    'lug': {
        name: 'Ganda'
    },
    'mac': {
        name: 'Macedonian'
    },
    'mkd': {
        name: 'Macedonian'
    },
    'nan': {
        name: 'Min Nan Chinese'
    },
    'mah': {
        name: 'Marshallese'
    },
    'mal': {
        name: 'Malayalam'
    },
    'msa': {
        name: 'Malay'
    },
    'cmn': {
        name: 'Mandarin'
    },
    'mao': {
        name: 'Maori'
    },
    'mar': {
        name: 'Marathi'
    },
    'may': {
        name: 'Malay'
    },
    'mlg': {
        name: 'Malagasy'
    },
    'mlt': {
        name: 'Maltese'
    },
    'mon': {
        name: 'Mongolian'
    },
    'nau': {
        name: 'Nauru'
    },
    'nav': {
        name: 'Navajo; Navaho'
    },
    'nbl': {
        name: 'Ndebele, South; South Ndebele'
    },
    'nde': {
        name: 'Ndebele, North; North Ndebele'
    },
    'ndo': {
        name: 'Ndonga'
    },
    'nep': {
        name: 'Nepali'
    },
    'nno': {
        name: 'Norwegian Nynorsk; Nynorsk, Norwegian'
    },
    'nob': {
        name: 'Bokmål, Norwegian; Norwegian Bokmål'
    },
    'nor': {
        name: 'Norwegian'
    },
    'nya': {
        name: 'Chichewa; Chewa; Nyanja'
    },
    'oci': {
        name: 'Occitan (post 1500); Provençal'
    },
    'oji': {
        name: 'Ojibwa'
    },
    'ori': {
        name: 'Oriya'
    },
    'orm': {
        name: 'Oromo'
    },
    'oss': {
        name: 'Ossetian; Ossetic'
    },
    'pan': {
        name: 'Panjabi; Punjabi'
    },
    'per': {
        name: 'Persian'
    },
    'fas': {
        name: 'Persian'
    },
    'pli': {
        name: 'Pali'
    },
    'pol': {
        name: 'Polish'
    },
    'por': {
        name: 'Portuguese'
    },
    'pus': {
        name: 'Pushto; Pashto'
    },
    'que': {
        name: 'Quechua'
    },
    'roh': {
        name: 'Romansh'
    },
    'ron': {
        name: 'Romanian'
    },
    'rum': {
        name: 'Romanian; Moldavian; Moldovan'
    },
    'run': {
        name: 'Rundi'
    },
    'rus': {
        name: 'Russian'
    },
    'sag': {
        name: 'Sango'
    },
    'san': {
        name: 'Sanskrit'
    },
    'sin': {
        name: 'Sinhala; Sinhalese'
    },
    'slo': {
        name: 'Slovak'
    },
    'slv': {
        name: 'Slovenian'
    },
    'sme': {
        name: 'Northern Sami'
    },
    'smo': {
        name: 'Samoan'
    },
    'sna': {
        name: 'Shona'
    },
    'snd': {
        name: 'Sindhi'
    },
    'slk': {
        name: 'Slovaque'
    },
    'som': {
        name: 'Somali'
    },
    'sot': {
        name: 'Sotho, Southern'
    },
    'spa': {
        name: 'Spanish; Castilian'
    },
    'srd': {
        name: 'Sardinian'
    },
    'srp': {
        name: 'Serbian'
    },
    'ssw': {
        name: 'Swati'
    },
    'sun': {
        name: 'Sundanese'
    },
    'swa': {
        name: 'Swahili'
    },
    'swe': {
        name: 'Swedish'
    },
    'tah': {
        name: 'Tahitian'
    },
    'tam': {
        name: 'Tamil'
    },
    'tat': {
        name: 'Tatar'
    },
    'tel': {
        name: 'Telugu'
    },
    'tgk': {
        name: 'Tajik'
    },
    'tgl': {
        name: 'Tagalog'
    },
    'tha': {
        name: 'Thai'
    },
    'tib': {
        name: 'Tibetan'
    },
    'tir': {
        name: 'Tigrinya'
    },
    'ton': {
        name: 'Tonga (Tonga Islands)'
    },
    'tsn': {
        name: 'Tswana'
    },
    'tso': {
        name: 'Tsonga'
    },
    'tuk': {
        name: 'Turkmen'
    },
    'tur': {
        name: 'Turkish'
    },
    'twi': {
        name: 'Twi'
    },
    'uig': {
        name: 'Uighur; Uyghur'
    },
    'ukr': {
        name: 'Ukrainian'
    },
    'urd': {
        name: 'Urdu'
    },
    'uzb': {
        name: 'Uzbek'
    },
    'ven': {
        name: 'Venda'
    },
    'vie': {
        name: 'Vietnamese'
    },
    'vol': {
        name: 'Volapük'
    },
    'wel': {
        name: 'Welsh'
    },
    'wln': {
        name: 'Walloon'
    },
    'wol': {
        name: 'Wolof'
    },
    'xho': {
        name: 'Xhosa'
    },
    'yid': {
        name: 'Yiddish'
    },
    'yor': {
        name: 'Yoruba'
    },
    'zha': {
        name: 'Zhuang; Chuang'
    },
    'zul': {
        name: 'Zulu'
    }
}

helper.getCountryInfo = function(countryCode) {
    countryCode = countryCode.toUpperCase()

    if(country.hasOwnProperty(countryCode)) {
        return country[countryCode]
    }
    else {
        return false
    }
}

helper.getCountryLangAlpha2 = function(langCode) {
    langCode = langCode.toLowerCase()

    if(countryLanguageAlpha2.hasOwnProperty(langCode)) {
        return countryLanguageAlpha2[langCode]
    }
    else {
        return langCode
    }
}

helper.getCountryLangAlpha3 = function(langCode) {
    langCode = langCode.toLowerCase()

    if(countryLanguageAlpha3.hasOwnProperty(langCode)) {
        return countryLanguageAlpha3[langCode].name
    }
    else {
        console.log(langCode)
        return langCode
    }
}

/*
const helper = require('./helper')
var fs = require('fs')

fs.readFile('list.txt', 'utf-8', function (err, data) {

    const lines = data.split('\n')

    const filename = 'data.txt'
    helper.createFile(filename, '{\n')


    lines.forEach( line => {
        const data = line.split(' - ')
        // 2 digits code lang
        helper.appendToFile(filename, "\n    '"+ data[1] +"' : {\n        name: '" + data[2].replace(/\r?\n|\r/g, "") + "'\n    }," )
        // 3 digits code lang
        helper.appendToFile(filename, "\n    '"+ data[0] +"' : {\n        name: '" + data[2].replace(/\r?\n|\r/g, "") + "'\n    }," )
    })

    helper.appendToFile(filename, '}')
})
*/

module.exports = helper

/*var obj = {
    "LY": 43,
    "US": 19,
    "IN": 395,
    "IR": 32,
    "EG": 12,
    "SA": 17,
};
console.log(obj)
var array = [];
for (var key in obj) {
    array.push({
        name: key,
        value: obj[key]
    });
}

//console.log(array)

var sorted = array.sort(function(a, b) {
    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
});

console.log(sorted)*/


