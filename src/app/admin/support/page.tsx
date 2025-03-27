"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

// Message type definition
interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function SupportPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "¡Hola! Soy el asistente virtual de Proafccion. ¿En qué puedo ayudarte hoy?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Simulate sending a message to the AI
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Entiendo tu consulta. Voy a revisar la información y te responderé lo antes posible.",
        "Gracias por tu mensaje. Según nuestros registros, tu solicitud está siendo procesada.",
        "He consultado la base de datos y puedo confirmar que tu incidencia ha sido registrada correctamente.",
        "Para resolver este problema, te recomendaría revisar la sección de 'Recibos pendientes' donde encontrarás más detalles.",
        "¿Necesitas más información sobre algún otro tema? Estoy aquí para ayudarte.",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contacto Soporte</h1>
        <p className="text-muted-foreground">Chatea con nuestro asistente virtual para resolver tus dudas.</p>
      </div>

      <Card className="w-full">
        <CardHeader className="border-b p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Asistente Virtual</CardTitle>
              <CardDescription>Disponible 24/7</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(70vh-8rem)] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex gap-3 max-w-[80%]">
                    {message.sender === "ai" && (
                      <Avatar className="h-8 w-8 mt-1">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div
                        className={`rounded-lg px-4 py-2 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 ml-1">{formatTime(message.timestamp)}</p>
                    </div>
                    {message.sender === "user" && (
                      <Avatar className="h-8 w-8 mt-1">
                        <AvatarFallback className="bg-secondary">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="rounded-lg px-4 py-2 bg-muted">
                        <div className="flex gap-1 items-center">
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex w-full gap-2">
            <Input
              ref={inputRef}
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              className="flex-1 h-12 md:h-10"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isTyping}
              className="h-12 w-12 md:h-10 md:w-10"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar mensaje</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

