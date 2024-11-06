import { useField } from "formik";


export default function FormInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4 grid grid-cols-1">
      <label
        htmlFor={props.id || props.name}
        className="block py-1.5 pl-1  text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="w-full rounded-md shadow-sm border-0 text-sm py-1.5 pl-1 ring-1 ring-inset ring-gray-300 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-700 focus:outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
}
