"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Instagram,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

// Define EmailJS keys directly with string literals for testing
// In production, replace these with your actual keys
const EMAILJS_SERVICE_ID = "service_0rlnye8"; // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = "template_6jg3q8s"; // Replace with your actual template ID
const EMAILJS_PUBLIC_KEY = "mDY0HMvuI3o3nxVIP"; // Replace with your actual public key

// Uncomment these lines after testing
// const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
// const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
// const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  // Component state and refs remain unchanged
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Log environment variables for debugging
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", EMAILJS_PUBLIC_KEY ? "Available" : "Missing");
    
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("EmailJS initialization failed:", error);
    }
  }, []);

  // handleChange remains unchanged
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Create template parameters with the form data
    const templateParams = {
      to_name: "HIMASIA UTDI",
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    }
    
    // Alternative approach using sendForm instead of send
    if (formRef.current) {
      emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormStatus('success');
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
          setFormStatus('idle');
        }, 2000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus('error');
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      });
    }
  };

  // Rest of the component remains unchanged
}
