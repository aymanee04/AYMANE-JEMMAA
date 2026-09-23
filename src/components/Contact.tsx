"use client";

import {useState} from "react";
import {Mail, MapPin, Phone} from "lucide-react";

export default function Contact(){
    const [copied, setCopied] = useState(false);

    const phoneNumber = "+212688046248";

    const copyPhoneNumber = async () => {
        try {
            await navigator.clipboard.writeText(phoneNumber);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            // ...existing code...
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-primary font-mono mb-4 text-lg">06. What&#39;s Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Get In Touch</h2>
                <div className="grid sm:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center p-6 bg-dark-800 rounded-lg border border-dark-700">
                        <div
                            className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl mb-4">
                            <Mail/>
                        </div>
                        <h4 className="text-white font-medium mb-2">Email</h4>
                        <a href="mailto:aymanejemmaa07@gmail.com"
                           className="text-gray-400 hover:text-primary transition-colors text-sm">aymanejemmaa07@gmail.com</a>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-dark-800 rounded-lg border border-dark-700">
                        <div
                            className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl mb-4">
                            <Phone/>
                        </div>
                        <h4 className="text-white font-medium mb-2">Phone</h4>
                        <button
                            type="button"
                            onClick={copyPhoneNumber}
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                            aria-label="Copy phone number"
                        >
                            {copied ? "Copied!" : "+212 688 046 248"}
                        </button>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-dark-800 rounded-lg border border-dark-700">
                        <div
                            className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl mb-4">
                            <MapPin/>
                        </div>
                        <h4 className="text-white font-medium mb-2">Location</h4>
                        <span className="text-gray-400 text-sm">Casablanca, Morocco</span>
                    </div>
                </div>
            </div>
        </section>
    )
}