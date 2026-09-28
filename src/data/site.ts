/**
 * Single source of truth for the contact address.
 *
 * It is rendered in the contact section, embedded in the JSON-LD, and used by
 * the clipboard and mailto logic - it used to be hardcoded in six places across
 * three files, which is how it drifts.
 */
export const EMAIL = 'hola@moham.es';

/**
 * Filename the browser saves when someone downloads the CV. Every CV link
 * uses it in its `download` attribute, so the file never lands on disk as
 * the internal server name (cv-es.pdf / cv-en.pdf). Keep in sync with
 * the current PDF in public/cv/.
 */
export const CV_DOWNLOAD_NAME = 'Mohamed_Mortahil_Elaaouad_Septiembre_2026.pdf';
