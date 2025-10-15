import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from './alert'

describe('Alert', () => {
  it('renders default alert', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    )
    
    expect(screen.getByText('Alert Title')).toBeInTheDocument()
    expect(screen.getByText('Alert Description')).toBeInTheDocument()
  })

  it('renders info variant with icon', () => {
    render(
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is an info alert</AlertDescription>
      </Alert>
    )
    
    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders success variant', () => {
    render(
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully</AlertDescription>
      </Alert>
    )
    
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument()
  })

  it('renders warning variant', () => {
    render(
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please be careful</AlertDescription>
      </Alert>
    )
    
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('Please be careful')).toBeInTheDocument()
  })

  it('renders destructive variant', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert>
    )
    
    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('renders without description', () => {
    render(
      <Alert>
        <AlertTitle>Title Only</AlertTitle>
      </Alert>
    )
    
    expect(screen.getByText('Title Only')).toBeInTheDocument()
  })
})
