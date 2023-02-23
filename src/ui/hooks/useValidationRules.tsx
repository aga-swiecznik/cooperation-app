import { useTranslation } from "next-i18next";

export const useValidationRules = () => {
  const { t } = useTranslation();

  return {
    required: () => ({ required: true, message: t("validation.required") }),
  };
};
