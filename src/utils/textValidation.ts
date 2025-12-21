// Text validation utility for plain text inputs
// Allowed characters: A-Z, a-z, 0-9, (, ), comma, space, !, ?, &, -

export const ALLOWED_TEXT_PATTERN = /^[A-Za-z0-9(),\s!?&-]*$/;

export const VALIDATION_MESSAGE = "Only the following characters are allowed: A-Z, a-z, 0-9, ( ) , ! ? & -";

export const NUMBER_VALIDATION_MESSAGE = "Value must be greater than 0";

export function validateText(text: string): boolean {
  return ALLOWED_TEXT_PATTERN.test(text);
}

export function sanitizeText(text: string): string {
  // Remove any characters that are not in the allowed list
  return text.replace(/[^A-Za-z0-9(),\s!?&-]/g, '');
}

export function validateNumber(value: number): boolean {
  return value > 0;
}

export function sanitizeNumber(value: number): number {
  // Ensure the number is positive and greater than 0
  return value <= 0 ? 0 : value;
}