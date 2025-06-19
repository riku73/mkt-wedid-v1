'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface BaseFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {}
interface TextareaFieldProps extends BaseFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {}
interface SelectFieldProps extends BaseFieldProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'> {
  options: { value: string; label: string; }[];
  placeholder?: string;
}

interface CheckboxOption {
  value: string;
  label: string;
  description?: string;
}

interface CheckboxGroupProps extends BaseFieldProps {
  options: CheckboxOption[];
  value: string[];
  onChange: (values: string[]) => void;
  maxCols?: number;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  error, 
  required, 
  className = "",
  ...props 
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const TextareaField: React.FC<TextareaFieldProps> = ({ 
  label, 
  name, 
  error, 
  required, 
  className = "",
  rows = 4,
  ...props 
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        {...props}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const SelectField: React.FC<SelectFieldProps> = ({ 
  label, 
  name, 
  error, 
  required, 
  options,
  className = "",
  placeholder,
  ...props 
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        {...props}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  label, 
  name, 
  error, 
  required, 
  options,
  value,
  onChange,
  maxCols = 2,
  className = ""
}) => {
  const handleChange = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div className={className}>
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </div>
      <div className={`grid gap-3 ${maxCols === 2 ? 'md:grid-cols-2' : maxCols === 3 ? 'md:grid-cols-3' : ''}`}>
        {options.map((option) => (
          <label 
            key={option.value} 
            className="flex items-start p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="mr-3 h-4 w-4 text-brand focus:ring-brand mt-1"
            />
            <div>
              <span className="font-medium text-gray-900">{option.label}</span>
              {option.description && (
                <p className="text-sm text-gray-600 mt-1">{option.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

interface FileUploadProps extends BaseFieldProps {
  accept?: string;
  multiple?: boolean;
  value?: FileList | null;
  onChange: (files: FileList | null) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  error,
  required,
  accept = ".pdf,.doc,.docx,.png,.jpg,.jpeg",
  multiple = true,
  value,
  onChange,
  className = ""
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files);
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand transition-colors">
        <input
          type="file"
          id={name}
          name={name}
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor={name} className="cursor-pointer">
          <div className="text-gray-600 mb-2">
            📎 Cliquez pour joindre des fichiers
          </div>
          <div className="text-sm text-gray-500">
            {accept === ".pdf,.doc,.docx,.png,.jpg,.jpeg" 
              ? "PDF, Word, Images acceptés" 
              : accept}
          </div>
        </label>
        {value && value.length > 0 && (
          <div className="mt-4 text-left">
            <p className="font-medium text-gray-700 mb-2">Fichiers sélectionnés :</p>
            {Array.from(value).map((file, index) => (
              <div key={index} className="text-sm text-gray-600">
                📄 {file.name} ({Math.round(file.size / 1024)} KB)
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default {
  InputField,
  TextareaField,
  SelectField,
  CheckboxGroup,
  FileUpload
};