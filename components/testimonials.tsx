"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO at TechStart",
    content:
      "John's expertise in full-stack development significantly accelerated our project timeline. His ability to solve complex problems efficiently is truly remarkable.",
  },
  {
    name: "Bob Smith",
    role: "Lead Developer at InnovateCorp",
    content:
      "Working with John was a game-changer for our team. His deep understanding of modern web technologies and best practices elevated the quality of our entire codebase.",
  },
  {
    name: "Carol Williams",
    role: "Project Manager at DataDrive",
    content:
      "John's communication skills are as impressive as his technical abilities. He consistently delivered high-quality work and kept all stakeholders well-informed throughout the project.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-primary">
        What People Say
      </h2>
      <Card className="shadow-lg">
        <CardContent className="pt-8">
          <div className="relative h-[250px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full"
              >
                <p className="text-xl mb-6 text-center italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <p className="text-lg font-semibold text-center">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}