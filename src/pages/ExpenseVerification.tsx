import { ExpenseVerificationContent } from "../components/ExpenseVerificationContent";

interface ExpenseVerificationProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
}

export function ExpenseVerification({ darkMode, viewMode }: ExpenseVerificationProps) {
  return <ExpenseVerificationContent darkMode={darkMode} viewMode={viewMode} />;
}
