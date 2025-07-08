"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const plans = [
  { name: "Basic", price: 20 },
  { name: "Standard", price: 35 },
  { name: "Premium", price: 50 },
];

const addons = [
  { label: "Personal Trainer", value: "trainer", price: 15 },
  { label: "Nutrition Plan", value: "nutrition", price: 10 },
  { label: "Group Classes", value: "classes", price: 8 },
];

export default function MembershipPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    plan: "Standard",
    duration: "1",
    addons: [] as string[],
  });

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [purchased, setPurchased] = useState(false);

  // Redirect only if user is confirmed null
  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  // Wait for user to be ready before doing anything
  useEffect(() => {
    if (!user?.email) return;

    const membershipKey = `fitzone_membership_${user.email}`;
    const saved = localStorage.getItem(membershipKey);
    if (saved) {
      const data = JSON.parse(saved);
      setForm({
        plan: data.plan,
        duration: data.duration,
        addons: data.addons,
      });
      setTotal(data.total);
      setPurchased(true);
    }
  }, [user?.email]);

  useEffect(() => {
    const selectedPlan = plans.find((p) => p.name === form.plan);
    const addonCost = addons
      .filter((a) => form.addons.includes(a.value))
      .reduce((sum, a) => sum + a.price, 0);
    const months = parseInt(form.duration);
    const monthlyTotal = (selectedPlan?.price ?? 0) + addonCost;
    setTotal(monthlyTotal * months);
  }, [form]);

  const handleAddonToggle = (value: string) => {
    setForm((prev) => ({
      ...prev,
      addons: prev.addons.includes(value)
        ? prev.addons.filter((a) => a !== value)
        : [...prev.addons, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);

    if (!user) {
      toast.error("User not found. Please log in again.");
      return;
    }

    const membershipData = {
      ...form,
      total,
      purchasedAt: Date.now(),
    };

    const membershipKey = `fitzone_membership_${user.email}`;
    localStorage.setItem(membershipKey, JSON.stringify(membershipData));
    toast.success(`Membership purchased for $${total}`);
    setPurchased(true);
  };

  // ✅ Don't render anything until user is loaded
  if (user === undefined) return null;

  if (purchased) {
    const selectedPlan = plans.find((p) => p.name === form.plan);
    const selectedAddons = addons.filter((a) => form.addons.includes(a.value));

    return (
      <div className="min-h-screen bg-black text-white py-12 px-4 flex justify-center">
        <div className="w-full max-w-xl bg-neutral-900 rounded-2xl p-8 flex flex-col gap-6 text-center">
          <h1 className="text-4xl font-bold text-green-400">
            🎉 Purchase Complete!
          </h1>
          <p className="text-xl">
            You&apos;ve successfully purchased the following membership:
          </p>
          <div className="mt-4 text-left space-y-2">
            <p className="text-lg">
              <strong>Plan:</strong> {selectedPlan?.name} ($
              {selectedPlan?.price}/mo)
            </p>
            <p className="text-lg">
              <strong>Duration:</strong> {form.duration} month(s)
            </p>
            <p className="text-lg">
              <strong>Add-ons:</strong>{" "}
              {selectedAddons.length > 0
                ? selectedAddons.map((a) => a.label).join(", ")
                : "None"}
            </p>
            <p className="text-2xl font-bold mt-4 underline">Total: ${total}</p>
            <p className="font-bold text-xl mt-4">
              We have sent a purchase confirmation to your email!
            </p>
            <p className="font-bold text-xl mt-4 text-red-500">
              Important: Your gym access card is ready for you to collect at
              any gym location.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-neutral-900 rounded-2xl p-8 flex flex-col gap-8"
      >
        <h1 className="text-4xl font-bold text-center">
          Choose Your Membership
        </h1>

        {/* Plan */}
        <div>
          <label className="text-xl font-semibold mb-2 block">Plan</label>
          <div className="flex flex-col gap-2">
            {plans.map((p) => (
              <label key={p.name} className="inline-flex items-center gap-3">
                <input
                  type="radio"
                  name="plan"
                  value={p.name}
                  checked={form.plan === p.name}
                  onChange={() => setForm({ ...form, plan: p.name })}
                  className="accent-red-500"
                />
                {p.name} (${p.price}/mo)
              </label>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="text-xl font-semibold mb-2 block">
            Duration (months)
          </label>
          <select
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            className="w-full p-3 rounded bg-black border border-white text-white focus:outline-none"
          >
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
        </div>

        {/* Add-ons */}
        <div>
          <label className="text-xl font-semibold mb-2 block">Add-ons</label>
          <div className="flex flex-col gap-2">
            {addons.map((addon) => (
              <label
                key={addon.value}
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  value={addon.value}
                  checked={form.addons.includes(addon.value)}
                  onChange={() => handleAddonToggle(addon.value)}
                  className="accent-red-500"
                />
                {addon.label} (${addon.price}/mo)
              </label>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="text-2xl font-bold text-center">Total: ${total}</div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-red-600 text-white text-lg font-bold py-3 rounded hover:bg-red-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Processing..." : "Buy Membership"}
        </button>
      </form>
    </div>
  );
}
