import { useState, useCallback } from 'react';
import { validateText, VALIDATION_MESSAGE } from '../utils/textValidation';

export function useTextValidation() {
  const [validationError, setValidationError] = useState<string>('');

  const validateInput = useCallback((value: string) => {
    if (!validateText(value)) {
      setValidationError(VALIDATION_MESSAGE);
      return false;
    }
    setValidationError('');
    return true;
  }, []);

  const clearError = useCallback(() => {
    setValidationError('');
  }, []);

  return {
    validationError,
    validateInput,
    clearError
  };
}
