import Link from 'next/link';
import { addContact } from './actions/contact';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p>Hello World!</p>

      {/* 
      This <Link> will naviagte to the contact page which has a 
      <form> with an action prop for the addContact server action 

      via this link the <form> renders as:
      <form action="javascript:throw new Error('A React form was unexpectedly submitted. 
      If you called form.submit() manually, consider using form.requestSubmit() instead. 
      If you\'re trying to use event.stopPropagation() in a submit event handler, consider 
      also calling event.preventDefault().')"
      */}
      <Link href='/contact'>Contact Us</Link>

      {/* via this standard <a> the contact page renders as expected: */}
      <a href='/contact'>contact Us via a anchor</a>

      {/* 
      The form tag below loads correctly as this is page is opened via the browser.
      ie. via url: http://localhost:3000
      */}

      <form action={addContact}>
        <input type='text' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}
