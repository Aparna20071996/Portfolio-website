interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitToGoogleSheets = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Submitting form data:', formData);
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbxXQLlmJgKMUjUxSt5jJaV8JDuwWc6tAxqWPAm4ow4ib_QQfVawX08i0stlolSjPEMK5g/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });
    
    console.log('Form submitted successfully');
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};