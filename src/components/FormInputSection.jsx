
export const FormInputs = ({ inputs, onBlur }) => {
    return inputs.map(({ type, name, placeholder, options, value, disabled, onBlur: onBlurOverride }) => (
      type === 'select' ||   (options && options.length > 0) ? (
        <select
          name={name}
          value={value}
          disabled={disabled}
          key={name}
          onChange={onBlurOverride?? onBlur}
        >
          {options.map(({ value, label }) => (
            <option value={value} key={value}>{label}</option>
          ))}
        </select>
      ) : <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        key={name}
        onChange={onBlurOverride ?? onBlur}
      />
    ));
  }