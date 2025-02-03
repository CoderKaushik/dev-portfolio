'use client'

import { FAQs } from "@/components/faqs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from 'framer-motion'
import { IconSend, IconMessage, IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {[
            {
              icon: IconBrandGithub,
              href: "https://github.com",
              label: "GitHub"
            },
            {
              icon: IconBrandLinkedin,
              href: "https://linkedin.com",
              label: "LinkedIn"
            },
            {
              icon: IconMail,
              href: "mailto:john.doe@example.com",
              label: "Email"
            },
            {
              icon: IconBrandTwitter,
              href: "https://twitter.com",
              label: "Twitter"
            }
          ].map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="group p-4 hover:bg-gray-800/50 transition-colors"
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <social.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">{social.label}</span>
              </a>
            </Button>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-400 focus:ring-blue-400 min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold py-3 text-lg rounded-xl transition-all transform hover:scale-[1.02]"
              >
                <IconSend className="mr-2 h-5 w-5" />
                Launch Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FAQs />
        </motion.div>
      </div>
    </div>
  )
}