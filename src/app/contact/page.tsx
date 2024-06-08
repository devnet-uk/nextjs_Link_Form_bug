'use client';

import { addContact } from '../actions/contact';

type Props = {};

function page({}: Props) {
  // const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      <p>contact us Page</p>
      <div className='flex flex-col items-center justify-center'>
        <form action={addContact}>
          <input type='text' name='comment' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default page;
