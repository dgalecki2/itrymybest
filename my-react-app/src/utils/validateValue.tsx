import { VALIDATOR_NAME } from "constants/validatorName";

export function validateValue({ required, validatorName, value = "" }: any) {
  if (required && !value) {
    return "This field is required";
  }
  switch (validatorName) {
    case VALIDATOR_NAME.IMAGE_URL: {
      const regExpPassed = /^http[s]?\:\/\//.test(value.toLowerCase());
      if (value && !regExpPassed) {
        return "Must be valid URL";
      }
      return undefined;
    }
    case VALIDATOR_NAME.IS_BOUGHT: {
      if (required && !value) {
        return "Must be checked";
      }
      return undefined;
    }
    case VALIDATOR_NAME.PRODUCT_NAME: {
      const regExpPassed = /^[a-z]+$/.test(value.toLowerCase());
      if (required && !regExpPassed) {
        return "Must be valid product name - please use only letters";
      }
      return undefined;
    }
    case VALIDATOR_NAME.PRODUCT_QUANTITY: {
      const regExpPassed = /^[0-9,]+$/.test(value);
      if (required && !regExpPassed) {
        return "Must be valid product quantity - please use only digits and comma";
      }
      return undefined;
    }
    default: {
      return undefined;
    }
  }
}
