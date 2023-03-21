import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import { BUTTON_TYPE } from "constants/buttonType";
import { ELEMENT_TYPE } from "constants/elementType";
import { Field, Form as ReactFinalForm } from "react-final-form";
import { validateValue } from "utils/validateValue";
import "./Form.scss";

export function Form({ fields = [], initialValues, onCancel, onSubmit }: any) {
  return (
    <ReactFinalForm
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formRenderProps) => {
        return (
          <form
            className="form__form"
            onSubmit={(event) => {
              event.preventDefault();
              formRenderProps.handleSubmit();
            }}
          >
            <div className="form__fieldsContainer">
              {fields.map((field: any) => {
                const fieldKey = `field-${field.name}`;
                const fieldId = `field-id-${field.name}`;
                switch (field.elementType) {
                  case ELEMENT_TYPE.CHECKBOX: {
                    return (
                      <Field
                        key={fieldKey}
                        name={field.name}
                        type={field.elementType}
                        validate={(value) =>
                          validateValue({
                            required: field.required,
                            validatorName: field.validatorName,
                            value,
                          })
                        }
                      >
                        {(fieldRenderProps) => (
                          <Checkbox
                            {...fieldRenderProps.input}
                            checked={!!+formRenderProps.values[field.name]}
                            id={fieldId}
                            label={field.label}
                            meta={fieldRenderProps.meta}
                            required={field.required}
                          />
                        )}
                      </Field>
                    );
                  }
                  case ELEMENT_TYPE.DROPDOWN: {
                    return (
                      <Field
                        key={fieldKey}
                        name={field.name}
                        type={field.elementType}
                        validate={(value) =>
                          validateValue({
                            required: field.required,
                            validatorName: field.validatorName,
                            value,
                          })
                        }
                      >
                        {(fieldRenderProps) => (
                          <Dropdown
                            {...fieldRenderProps.input}
                            id={fieldId}
                            label={field.label}
                            meta={fieldRenderProps.meta}
                            options={field.options}
                            required={field.required}
                            value={initialValues?.[field.name]}
                          />
                        )}
                      </Field>
                    );
                  }
                  case ELEMENT_TYPE.INPUT: {
                    return (
                      <Field
                        format={field.format}
                        formatOnBlur={field.formatOnBlur}
                        key={fieldKey}
                        name={field.name}
                        type={field.elementType}
                        validate={(value) =>
                          validateValue({
                            required: field.required,
                            validatorName: field.validatorName,
                            value,
                          })
                        }
                      >
                        {(fieldRenderProps) => (
                          <Input
                            {...fieldRenderProps.input}
                            id={fieldId}
                            label={field.label}
                            meta={fieldRenderProps.meta}
                            required={field.required}
                          />
                        )}
                      </Field>
                    );
                  }
                  default: {
                    return null;
                  }
                }
              })}
              <div className="form__buttonsContainer">
                <Button
                  className="button__button"
                  disabled={formRenderProps.hasValidationErrors}
                  text="Submit"
                  type={BUTTON_TYPE.SUBMIT}
                />
                <Button
                  className="button__button button__button--cancelable"
                  onClick={onCancel}
                  text="Cancel"
                  type={BUTTON_TYPE.BUTTON}
                />
              </div>
            </div>
          </form>
        );
      }}
    </ReactFinalForm>
  );
}
