/**
 * Single source of truth for the contact address.
 *
 * It is rendered in the contact section, embedded in the JSON-LD, and used by
 * the clipboard and mailto logic - it used to be hardcoded in six places across
 * three files, which is how it drifts.
 */
export const EMAIL = 'hola@moham.es';
