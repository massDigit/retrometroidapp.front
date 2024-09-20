"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      //Requête API
      setTimeout(() => {
        // Redirection si la connexion réussie
        router.push("/");
      }, 1000);
    } catch (error) {
      setErrorMessage("Échec de la connexion. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Votre email"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Votre mot de passe"
          required
        />
      </div>

      <div className="flex justify-between items-center">
        <Link href="/forgot-password">
          <span className="text-sm text-indigo-600 hover:underline cursor-pointer">
            Mot de passe oublié ?
          </span>
        </Link>
        <Link href="/register">
          <span className="text-sm text-indigo-600 hover:underline cursor-pointer">
            Créer un compte
          </span>
        </Link>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg ${
          submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {submitting ? "Connexion en cours..." : "Se connecter"}
      </button>
    </form>
  );
};

export default LoginForm;
