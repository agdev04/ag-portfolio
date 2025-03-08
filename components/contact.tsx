"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captcha: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: "", answer: "" })

  useEffect(() => {
    setCaptchaQuestion(generateCaptcha())
  }, [])

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    return { question: `${num1} + ${num2} = ?`, answer: (num1 + num2).toString() }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (formData.captcha !== captchaQuestion.answer) {
        throw new Error('Incorrect captcha answer')
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "", captcha: "" })
      setCaptchaQuestion(generateCaptcha())
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus("error")
      setCaptchaQuestion(generateCaptcha())
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              I'm always open to discussing new projects, opportunities, or partnerships. Whether you have a question or
              just want to say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:dev@agnieve.com" className="hover:text-primary transition-colors">
                  dev@agnieve.com
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5 text-primary" />
                <Link
                  href="https://linkedin.com/in/agnieve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/agnieve
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Github className="h-5 w-5 text-primary" />
                <Link
                  href="https://github.com/agdev04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/agdev04
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="captcha" className="block text-sm font-medium mb-1">
                  Verify you're human: {captchaQuestion.question}
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter the answer"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-sm">Your message has been sent successfully!</p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600 text-sm">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

