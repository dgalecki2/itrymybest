import { Button } from "components/Button/Button";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Dropdown } from "components/Dropdown/Dropdown";
import { Input } from "components/Input/Input";
import { BUTTON_TYPE } from "constants/buttonType";
import { ELEMENT_TYPE } from "constants/elementType";
import { FORM_MODE } from "constants/formMode";
import { Field, Form as ReactFinalForm } from "react-final-form";
import { validateValue } from "utils/validateValue";
import "./Form.scss";

export function Form({ fields, initialValues, mode, onCancel, onSubmit }: any) {
  return (
    <ReactFinalForm
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formRenderProps) => {
        return (
          <form
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
              <Button
                disabled={formRenderProps.hasValidationErrors}
                text="Submit"
                type={BUTTON_TYPE.SUBMIT}
              />
              {mode === FORM_MODE.EDIT && (
                <Button
                  onClick={onCancel}
                  text="Cancel"
                  type={BUTTON_TYPE.RESET}
                />
              )}
            </div>
          </form>
        );
      }}
    </ReactFinalForm>
  );
}
