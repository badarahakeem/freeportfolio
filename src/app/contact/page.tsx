"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Show success message
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: <Phone className="w-10 h-10 text-red-500" />,
      title: "Appelez-nous",
      details: "+221 77 123 45 67", // Remplace par ton vrai numéro si besoin
    },
    {
      icon: <MapPin className="w-10 h-10 text-red-500" />,
      title: "Bureau",
      details: "Plateau, Dakar, Sénégal",
    },
    {
      icon: <Mail className="w-10 h-10 text-red-500" />,
      title: "Email",
      details: "contact@tonsite.com", // Mets ton vrai email ici
    },
    {
      icon: <Globe className="w-10 h-10 text-red-500" />,
      title: "Site Web",
      details: "www.tonsite.com", // Mets ton vrai site ici
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-[#f8f9ff] dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Contactez-moi
          </h1>
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        {/* Have Questions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mb-2">
            Avez-Vous Des Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 uppercase font-medium">
            N'hésitez pas à me contacter
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Send Email Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-500 mb-2">
            Envoyez-moi un message
          </h2>
          <p className="text-gray-600 dark:text-gray-400 uppercase font-medium">
            Je vous répondrai dès que possible
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-100 dark:bg-gray-800 border-0 h-14 rounded-md"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-100 dark:bg-gray-800 border-0 h-14 rounded-md"
              />
            </div>
          </div>

          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Object"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-gray-100 dark:bg-gray-800 border-0 h-14 rounded-md"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-100 dark:bg-gray-800 border-0 min-h-[200px] rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white rounded-full px-10 py-6 text-lg"
            >
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
