import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () =>
    Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          cardNumber: "",
          expirationDate: "",
          cvv: "",
          billingAddress: "",
        });
      } else {
        setError("Unexpected server response. Please try again.");
      }
    } catch {
      setError("Failed to submit booking. Please check your network or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {(
          [
            ["firstName", "First Name"],
            ["lastName", "Last Name"],
            ["email", "Email"],
            ["phoneNumber", "Phone Number"],
            ["cardNumber", "Card Number"],
            ["expirationDate", "Expiration Date (MM/YY)"],
            ["cvv", "CVV"],
            ["billingAddress", "Billing Address"],
          ] as [keyof BookingFormData, string][]
        ).map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">Booking confirmed successfully!</p>}
      </form>
    </div>
  );
}
