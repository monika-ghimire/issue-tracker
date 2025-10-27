'use client';
import { TextField , TextArea ,Button} from '@radix-ui/themes';
import React from 'react';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Root placeholder="Search the docs…" size="1"></TextField.Root>
      </TextField.Root>

      	<TextArea size="1" placeholder="dec" />

        <Button>
            Submit New issue
        </Button>

    </div>
  );
};


export default NewIssuePage;
