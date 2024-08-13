// import { useNavigate } from 'react-router-dom';

// console.log(submitAPI)

export const submitForm = async (formData) => {
  try {

    console.log('submit form')
    // const success = await submitAPI(formData);
    // if (success) {
    //   navigate('/confirmed');
    // } else {
    //   // Handle failure
    //   console.error('Form submission failed');
    // }
  } catch (err) {
    console.error('Error submitting form:', err);
  }
};