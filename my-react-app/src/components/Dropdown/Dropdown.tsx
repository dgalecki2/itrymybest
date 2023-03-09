export function Dropdown({
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  options = [],
  required,
  value,
}: any) {
  return (
    <>
      <label htmlFor={id}>
        {label} {required && "*"}
      </label>
      <select
        defaultValue=""
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      >
        <option
          disabled
          value=""
        >
          Select option
        </option>
        {options.map((option: any) => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.text}
            </option>
          );
        })}
      </select>
    </>
  );
}
