
import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  publicKey: 'oZzaow6MSidlDQW5R',
  serviceId: 'service_531dj15',
  templateId: 'template_vpkrxsf'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Bala P'
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
