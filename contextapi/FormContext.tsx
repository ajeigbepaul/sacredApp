// context/FormContext.tsx
import { createContext, useState, ReactNode, useCallback } from "react";
import { apiService } from "@/services/apiServices";

// Define the shape of the form data
interface FormData {
  fullName: string;
  email: string;
  phonenos: string;
  password: string;
  confirmPassword: string;
  country: string;
  state: string;
  userRole: string;
}

// Define the shape of the context
interface FormContextType {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
  step: number;
  setStep: (step: number) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => Promise<void>;
  states: any[]; // Replace `any` with the actual type of your states
  setStates: (states: any[]) => void; // Replace `any` with the actual type of your states
  selC: string;
  setSelC: (country: string) => void;
}

// Create the context
export const FormContext = createContext<FormContextType | undefined>(undefined);

// Define the provider component
export const FormProvider = ({ children, d }: { children: ReactNode; d: any }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phonenos: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    userRole: "",
  });

  const [step, setStep] = useState(1);
  const [states, setStates] = useState<any[]>([]); // Replace `any` with the actual type of your states
  const [selC, setSelC] = useState("");

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const selectedCountryId = value;

      // Check if the changed field is the country
      if (name === "country") {
        const selectedCountry = d?.data?.find(
          (country: any) => country._id === selectedCountryId
        );
        setSelC(selectedCountry?.name);
      }

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Fetch states if the country is selected
      if (name === "country" && value) {
        try {
          const response = await apiService.getStates(value, {
            headers: {
              "x-crypto-key":
                "7087128fd6540d3b4a56481c81084256b31a92dc2cee418ea6c41b9009496cd346460c94db406ac884336fd5f829c407a084f8ac4acd1b273290c1d4e7aeb9a9",
              "x-sacredeyes": "Startup",
            },
          });
          setStates(response?.data?.states); // Assuming response.data contains the states array
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    },
    [d] // Dependency array
  );

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        step,
        setStep,
        handleInputChange,
        states,
        setStates,
        selC,
        setSelC,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};