"use client"

import { CheckIcon } from "lucide-react"

interface StepperProps {
  steps: string[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted">
        <div
          className="absolute h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
      <ol className="relative flex w-full justify-between">
        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep
          const isCurrent = index + 1 === currentStep

          return (
            <li key={step} className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                  isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : isCurrent
                      ? "border-primary text-primary"
                      : "border-muted bg-background"
                }`}
              >
                {isCompleted ? <CheckIcon className="h-4 w-4" /> : <span className="text-sm">{index + 1}</span>}
              </div>
              <span className="mt-2 text-center text-xs font-medium">{step}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

