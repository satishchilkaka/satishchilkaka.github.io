// '',     // Replace with your EmailJS service ID
// '',    // Replace with your EmailJS template ID
// {
//   name: values.name,
//   email: values.email,
//   message: values.message,
// },
// ''  

import { Button, FormControl, FormLabel, Input, Textarea, VStack, Container, FormErrorMessage } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

export default function ContactMe() {
  const sendEmail = (values: any) => {
    emailjs.send(
      '',     // Replace with your EmailJS service ID
      '',    // Replace with your EmailJS template ID
      {
        name: values.name,
        email: values.email,
        message: values.message,
      },
      'E--7i1RLPU'         // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message.');
        console.error('Error sending email:', error);
      }
    );
  };

  return (
    <Layout>
      <Container maxW="container.md" py={8}>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            sendEmail(values);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <Form>
              <VStack spacing={4} align="stretch">
                <Field name="name">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" placeholder="Your name" />
                      <FormErrorMessage>{form.errors.name?.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} id="email" type="email" placeholder="Your email" />
                      <FormErrorMessage>{form.errors.email?.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="message">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.message && form.touched.message}>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <Textarea {...field} id="message" placeholder="Your message" />
                      <FormErrorMessage>{form.errors.message?.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  type="submit"
                  bg="black"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                  size="md"
                  isLoading={props.isSubmitting}
                >
                  Send
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
}
