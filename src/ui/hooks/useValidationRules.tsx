export const useValidationRules = () => {
  return {
    required: () => ({ required: true, message: "To pole jest wymagane" }),
  };
};
