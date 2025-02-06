"use client";

import * as yup from "yup";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Format d'email invalide")
    .required("Email est requis"),
  password: yup.string().required("Mot de passe est requis"),
});

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setSubmitting(true);

    try {
      //Requête API
      setTimeout(() => {
        // Redirection si la connexion réussie
        router.push("/");
      }, 1000);
    } catch (error) {
      console.log("Échec de la connexion. Veuillez réessayer.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          {...register("password")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        )}
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

      <div className="flex justify-between items-center">
        <Link href="/register">
          <span className="text-sm text-indigo-600 hover:underline cursor-pointer">
            Pas de compte ? Inscrivez-vous
          </span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
