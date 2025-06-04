import { createSlice } from '@reduxjs/toolkit'
import businessData from '../../assets/business.json'

const initialState = {
  businessInfo: businessData,
  contactForm: {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    isSubmitting: false,
    isSubmitted: false,
    error: null
  },
  ui: {
    mobileMenuOpen: false,
    activeSection: 'home'
  }
}

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    updateContactForm: (state, action) => {
      state.contactForm = { ...state.contactForm, ...action.payload }
    },
    resetContactForm: (state) => {
      state.contactForm = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        isSubmitting: false,
        isSubmitted: false,
        error: null
      }
    },
    setContactFormSubmitting: (state, action) => {
      state.contactForm.isSubmitting = action.payload
    },
    setContactFormSubmitted: (state, action) => {
      state.contactForm.isSubmitted = action.payload
    },
    setContactFormError: (state, action) => {
      state.contactForm.error = action.payload
    },
    toggleMobileMenu: (state) => {
      state.ui.mobileMenuOpen = !state.ui.mobileMenuOpen
    },
    setMobileMenuOpen: (state, action) => {
      state.ui.mobileMenuOpen = action.payload
    },
    setActiveSection: (state, action) => {
      state.ui.activeSection = action.payload
    }
  }
})

export const {
  updateContactForm,
  resetContactForm,
  setContactFormSubmitting,
  setContactFormSubmitted,
  setContactFormError,
  toggleMobileMenu,
  setMobileMenuOpen,
  setActiveSection
} = businessSlice.actions

export default businessSlice.reducer
